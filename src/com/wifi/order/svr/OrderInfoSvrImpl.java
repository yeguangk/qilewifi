package com.wifi.order.svr;

import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;

import com.mz.sys.bo.ClientUser;
import com.wifi.order.bo.OrderInfo;

public class OrderInfoSvrImpl implements OrderInfoSvr {

	@Override
	public String getOrder(String loginName) throws Exception, RemoteException {
		
		if (loginName != null && loginName.length() > 0){
			StringBuilder querySql = new StringBuilder();
			querySql.append("SELECT order_info.res_id, exp_date FROM order_info order_info ")
					.append("INNER join user_info user_info ON order_info.user_id = user_info.user_id ")
					.append("WHERE user_info.login_name = '").append(loginName).append("' ")
					.append("ORDER BY order_info.res_id   ");
			List<OrderInfo> orderInfos = DbFactory.getSqlDdlDao().query(querySql.toString(), OrderInfo.class);
			
			if(orderInfos != null && orderInfos.size() > 0){
				StringBuilder json = new StringBuilder();
				json.append("[");
				for (int i = 0; i < orderInfos.size() - 1; i++){
					json.append("{\"res_id\":\"").append(orderInfos.get(i).getResId()).append("\",")
						.append("\"exp_date\":\"").append(orderInfos.get(i).getResId()).append("\"},");
				}
				json.append("{\"res_id\":\"").append(orderInfos.get(orderInfos.size() - 1).getResId()).append("\",")
				.append("\"exp_date\":\"").append(orderInfos.get(orderInfos.size() - 1).getExpDate()).append("\"}");
				json.append("]");
				return "{\"success\":true, \"orderinfos\": "+ json.toString() + "}";
			}
			return "{\"success\":true, \"orderinfos\": []}";
		}
		
		return "{\"success\":true, \"mags\": \"输入信息有误，请检查!\"}";
	}

	@Override
	public List queryOrderInfos(Map mapInfo, PageUtil pageInfo) throws Exception,
			RemoteException {
		StringBuilder selectSql = new StringBuilder();
		selectSql.append("SELECT order_id, order_code, res_id, user_id, amount, order_date, exp_date FROM order_info WHERE 1=1 ");
		String expStartDate = (String)mapInfo.get("expStartDate");
		String expEndDate = (String)mapInfo.get("expEndDate");
		if (null != expStartDate && expStartDate.length() > 0 &&
				null != expStartDate && expStartDate.length() > 0){
			selectSql.append("AND date_format(exp_date, '%Y-%m-%d') >= ").append("'").append(getReplaceTimeFormat(expStartDate)).append("' ");
			selectSql.append("AND date_format(exp_date, '%Y-%m-%d') <= ").append("'").append(getReplaceTimeFormat(expEndDate)).append("' ");
		}
		String orderStartDate = (String)mapInfo.get("orderStartDate");
		String orderEndDate = (String)mapInfo.get("orderEndDate");
		if (null != orderStartDate && orderStartDate.length() > 0 &&
				null != orderEndDate && orderEndDate.length() > 0){
			selectSql.append("AND date_format(order_date, '%Y-%m-%d') >= ").append("'").append(getReplaceTimeFormat(orderStartDate)).append("' ");
			selectSql.append("AND date_format(order_date, '%Y-%m-%d') <= ").append("'").append(getReplaceTimeFormat(orderEndDate)).append("' ");
		}
		selectSql.append("ORDER BY order_id");
		pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(selectSql.toString()));
		List<OrderInfo> orderInfos = DbFactory.getSqlDdlDao().query(selectSql.toString(), OrderInfo.class, pageInfo);
		return orderInfos;
	}
	
	private String getReplaceTimeFormat(String time){
		String tmpTime = time;
		tmpTime = tmpTime.replace("年", "-");
		tmpTime = tmpTime.replace("月", "-");
		tmpTime = tmpTime.replace("日", "");
		tmpTime = "20" + tmpTime;
		return tmpTime;
	}

}

