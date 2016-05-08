package com.mz.sys.svr;

import java.rmi.RemoteException;
import java.util.Date;
import java.util.List;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.wifi.MD5;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mz.sys.bo.ClientUser;
import com.wifi.order.bo.OrderInfo;

public class ClientUserSvrImpl implements ClientUserSvr {

	@Override
	public String registerClient(String loginName, String password, String uuid)
			throws Exception, RemoteException {
		if (loginName != null && loginName.length() > 0 &&
				password != null && password.length() > 0  &&
				uuid != null && uuid.length() > 0 ){
			StringBuilder selectSql = new StringBuilder();
			selectSql.append("SELECT user_info.user_id from user_info WHERE login_name = '").append(loginName).append("' ");
			List<ClientUser> clientUsers = DbFactory.getSqlDdlDao().query(selectSql.toString(), ClientUser.class);
			if (null == clientUsers || clientUsers.size() == 0){
				ClientUser clientUser = new ClientUser();
				clientUser.setLoginName(loginName);
				clientUser.setLastUuid(uuid);
				clientUser.setPassword(new MD5(password).asHex());
				DbFactory.getSqlDdlDao().insert(clientUser);
				List<ClientUser> insertclientUsers = DbFactory.getSqlDdlDao().query(selectSql.toString(), ClientUser.class);
				return "{\"success\":true,\"status\":\"1\",\"userId\":\"" +insertclientUsers.get(0).getUserId() + "\"}";
			}
			return "{\"success\":false,\"status\":\"2\",\"userId\":\"" +clientUsers.get(0).getUserId() + "\"}";
		}

		return "{\"success\":false,\"msg\":\"输入用户注册参数有误，请检查!\"}";
	}

	@Override
	public String clientUserOnline(String loginName, String password, String uuid)
			throws Exception, RemoteException {
		if (loginName != null && loginName.length() > 0 &&
				password != null && password.length() > 0  &&
				uuid != null && uuid.length() > 0 ){
			StringBuilder selectSql = new StringBuilder();
			selectSql.append("SELECT * from user_info WHERE login_name = '")
				.append(loginName).append("' ").append("AND ").append("password='").append(new MD5(password).asHex()).append("' ");
			List<ClientUser> clientUsers = DbFactory.getSqlDdlDao().query(selectSql.toString(), ClientUser.class);
			if (clientUsers != null && clientUsers.size() == 1){
				ClientUser clientUser = clientUsers.get(0);
				String lastUuid = clientUser.getLastUuid();
				StringBuilder result = new StringBuilder();
				if (!uuid.equalsIgnoreCase(lastUuid)){
					clientUser.setLastLoginTime(new Date(System.currentTimeMillis()));
					clientUser.setLastUuid(uuid);
					DbFactory.getSqlDdlDao().update(clientUser);
					result.append("{\"success\":true,\"status\":\"1\",\"lastLoginDevice\":\"1\",\"userId\":\"" +clientUser.getUserId() + "\",")
						.append(queryOrderInfoWithUserID(clientUser.getUserId().longValue())).append("}");
				}
				result.append("{\"success\":true,\"status\":\"1\",\"lastLoginDevice\":\"0\",\"userId\":\"" +clientUser.getUserId() + "\",")
					.append(queryOrderInfoWithUserID(clientUser.getUserId().longValue())).append("}");
				return result.toString();
			}
		}
		return "{\"success\":false,\"status\":\"2\"}";
	}
	
	private String queryOrderInfoWithUserID(Long userID)throws Exception, RemoteException{
		StringBuilder selectSql = new StringBuilder();
		selectSql.append("SELECT order_id, order_code,res_id,amount, order_date, exp_date from order_info WHERE user_id = ")
			.append(userID).append(" ");
		List<OrderInfo> orderInfos = DbFactory.getSqlDdlDao().query(selectSql.toString(), OrderInfo.class);
		StringBuilder json = new StringBuilder();
		json.append("\"orderList\":");
		JSONArray jsonArray = new JSONArray();
		if (orderInfos != null && orderInfos.size() > 0){
			for (OrderInfo orderInfo : orderInfos){
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("orderId", orderInfo.getOrderId());
				jsonObject.put("orderCode", orderInfo.getOrderCode());
				jsonObject.put("resId", orderInfo.getResId());
				jsonObject.put("amout", orderInfo.getAmount());
				jsonObject.put("orderDate", orderInfo.getOrderDate().toString());
				jsonObject.put("expDate", orderInfo.getExpDate().toString());
				jsonArray.add(jsonObject);
			}
		}
		json.append(jsonArray.toJSONString());
		
		return json.toString();
	}

	@Override
	public List queryAllClientUserInfos(PageUtil pageInfo) throws Exception, RemoteException {
		StringBuilder selectSql = new StringBuilder();
		selectSql.append("SELECT user_id, login_name, user_name, last_uuid, last_login_time from user_info");
		pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(selectSql.toString()));
		List<ClientUser> clientUsers = DbFactory.getSqlDdlDao().query(selectSql.toString(), ClientUser.class, pageInfo);
		return clientUsers;
	}
	
	public String changePasswd(String loginName, String password, String uuid)throws Exception, RemoteException{
		if (loginName != null && loginName.length() > 0 &&
				password != null && password.length() > 0  &&
				uuid != null && uuid.length() > 0 ){
			StringBuilder selectSql = new StringBuilder();
			selectSql.append("SELECT * from user_info WHERE login_name = '")
			.append(loginName).append("' ");
			List<ClientUser> clientUsers = DbFactory.getSqlDdlDao().query(selectSql.toString(), ClientUser.class);
			if (null == clientUsers || clientUsers.size() == 0){
				return "{\"success\":false,\"status\":\"2\"}";
			}else{
				clientUsers.get(0).setPassword(new MD5(password).asHex());
				clientUsers.get(0).setLastUuid(uuid);
				DbFactory.getSqlDdlDao().update(clientUsers.get(0));
				return "{\"success\":true,\"status\":\"1\"}";
			}
		}
		return "{\"success\":false,\"status\":\"2\"}";
	}

}
