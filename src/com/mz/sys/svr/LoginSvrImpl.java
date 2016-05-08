package com.mz.sys.svr;

import com.mz.sys.bo.SelOption;
import com.mz.sys.bo.SysResQry;
import com.mz.sys.bo.SysResourceInfo;
import com.mz.sys.bo.SysRoleRes;
import com.mz.sys.bo.SysUserInfo;
import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;
import org.frame.utils.ConfigUtil;

public class LoginSvrImpl
  implements LoginSvr
{
  public boolean checkLogin(String loginCode, String password, SysUserInfo userInfo)
    throws Exception, RemoteException
  {
    if ((loginCode != null) && (!"".equals(loginCode))) {
	      StringBuffer strSql=new StringBuffer("SELECT A.PWD PASSWORD,A.CUST_ID USER_ID,A.ACC_NO LOGIN_CODE,'管理员' NAME,A.CUST_ID DEPART_ID,A.NAME DEPART_NAME,'admin' USER_TYPE_CD FROM cust_info A WHERE A.ACC_NO=? ");
	      Map param = new HashMap();     
	      param.put("1", loginCode);
	      List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUserInfo.class);//找管理员帐号
	      SysUserInfo dbUserInfo = null;
	      if (beanList.size() == 0) {//找普通帐号
	    	  beanList = DbFactory.getSqlDdlDao().query("select * from sys_user where STATE=0 and LOGIN_CODE=?", param, SysUserInfo.class);
	    	  if(beanList.size()>0){
	    		  dbUserInfo=(SysUserInfo)beanList.get(0);
	    		  dbUserInfo.setUserTypeCd("user");
	    	  }
	      }else{
	    	  dbUserInfo=(SysUserInfo)beanList.get(0);
	      }
	      if(dbUserInfo==null){
	    	  return false;
	      }
	      if ((dbUserInfo.getPassword() != null) && (dbUserInfo.getPassword().equals(password))) {
	          userInfo.setUserId(dbUserInfo.getUserId());
	          userInfo.setName(dbUserInfo.getName());
	          userInfo.setDepartId(dbUserInfo.getDepartId());
	          userInfo.setDepartName(dbUserInfo.getDepartName());
	          userInfo.setLoginCode(dbUserInfo.getLoginCode());
	          userInfo.setUserTypeCd(dbUserInfo.getUserTypeCd());
	          return true;
	      }
    }
    return false;
  }

  public Map getUserResMap(BigDecimal userId) throws Exception, RemoteException {
    Map rtn = new HashMap();
    StringBuffer strSql = null;
    Map param = null;
    if (userId == null) {
      return null;
    }
    strSql = new StringBuffer("select a.res_no from sys_user_res a where exists(select res_no from sys_resource_info b where a.res_no=b.res_no) ");
    param = new HashMap();
    strSql.append(" and a.user_id=? ");
    param.put("1", userId);
    List dbUserResList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysResQry.class);
    if (dbUserResList != null) {
      for (int i = 0; i < dbUserResList.size(); i++) {
        SysResQry res = (SysResQry)dbUserResList.get(i);
        if (!rtn.containsKey(res.getResNo())) {
          rtn.put(res.getResNo(), res.getResNo());
        }
      }
    }
    strSql = new StringBuffer("select A.RES_NO from sys_role_res A,sys_user_role B WHERE A.ROLE_ID=B.ROLE_ID and exists(select res_no from sys_resource_info b where A.res_no=b.res_no) ");
    param = new HashMap();
    strSql.append(" and B.user_id=? ");
    param.put("1", userId);
    List dbRoleResList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysResQry.class);
    if (dbRoleResList != null) {
      for (int i = 0; i < dbRoleResList.size(); i++) {
        SysResQry res = (SysResQry)dbRoleResList.get(i);
        if (!rtn.containsKey(res.getResNo())) {
          rtn.put(res.getResNo(), res.getResNo());
        }
      }
    }
    return rtn;
  }

  public List getUserMenuList(Map userResMap) throws Exception, RemoteException {
    if ((userResMap == null) || (userResMap.keySet().size() == 0)) {
      return new ArrayList();
    }

    List rtn = new ArrayList();
    Map param = new HashMap();

    StringBuffer strSql = new StringBuffer("select a.*,'' PARENT_NAME,0 subcount from sys_resource_info  a where a.res_type=0 and a.parent_no='0' ORDER BY a.seq_num ");
    List menuList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysResourceInfo.class);
    StringBuilder filter = null;

    while (menuList.size() != 0)
    {
      filter = new StringBuilder(",");
      for (int i = 0; i < menuList.size(); i++) {
        SysResourceInfo menu = (SysResourceInfo)menuList.get(i);
        if (userResMap.containsKey(menu.getResNo())) {
          rtn.add(menu);
          filter.append(menu.getResNo()).append(",");
        }
      }
      param.put("1", filter.toString());
      menuList = DbFactory.getSqlDdlDao().query("select a.*,'' PARENT_NAME,0 subcount from sys_resource_info  a where a.res_type=0 and ? like concat('%,',a.parent_no,',%')  ORDER BY a.seq_num ", param, SysResourceInfo.class);
    }
    return rtn;
  }
  
  public List getMenuList() throws Exception, RemoteException {
	    
	    List rtn = new ArrayList();
	    Map param = new HashMap();

	    StringBuffer strSql = new StringBuffer("select a.*,'' PARENT_NAME,0 subcount from sys_resource_info  a where a.res_type=0 and a.parent_no='0' ORDER BY a.seq_num ");
	    List menuList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysResourceInfo.class);
	    StringBuilder filter = null;

	    while (menuList.size() != 0)
	    {
	      filter = new StringBuilder(",");
	      for (int i = 0; i < menuList.size(); i++) {
	        SysResourceInfo menu = (SysResourceInfo)menuList.get(i);
	        filter.append(menu.getResNo()).append(",");
	        rtn.add(menu);
	      }
	      param.put("1", filter.toString());
	      menuList = DbFactory.getSqlDdlDao().query("select a.*,'' PARENT_NAME,0 subcount from sys_resource_info  a where a.res_type=0 and ? like concat('%,',a.parent_no,',%')  ORDER BY a.seq_num ", param, SysResourceInfo.class);
	    }
	    return rtn;
	  }

  public boolean loginForPdt(String loginCode, String password, SysUserInfo userInfo) throws Exception, RemoteException {
    if ((loginCode != null) && (!"".equals(loginCode))) {
      StringBuffer strSql = new StringBuffer("select * from sys_user where state=0 ");
      Map param = new HashMap();
      strSql.append(" and LOGIN_CODE=? ");
      param.put("1", loginCode);
      List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUserInfo.class);
      if (beanList.size() > 0) {
        SysUserInfo dbUserInfo = (SysUserInfo)beanList.get(0);
        if ((dbUserInfo.getPassword() != null) && (dbUserInfo.getPassword().equals(password)) && 
          (dbUserInfo.getUserTypeCd() != null) && (dbUserInfo.getUserTypeCd().contains("P"))) {
          userInfo.setUserId(dbUserInfo.getUserId());
          userInfo.setName(dbUserInfo.getName());
          userInfo.setLoginCode(dbUserInfo.getLoginCode());
          return true;
        }
        return false;
      }

      return false;
    }

    return false;
  }

  public List getDataPermission(BigDecimal userId, String orgId) throws Exception, RemoteException
  {
    String strSql = "select org_id as res_no,user_id as role_Id from SYS_ORG_USER_LIST where attach_org_id=? and attach_user_id=? ";
    Map param = new HashMap();
    param.put("1", orgId);
    param.put("2", userId);
    List orgOrUserList = DbFactory.getSqlDdlDao().query(strSql, param, SysRoleRes.class);

    List rtn = new ArrayList();
    List orgList = new ArrayList();
    StringBuffer userBuf = new StringBuffer("-1");
    for (int i = 0; i < orgOrUserList.size(); i++) {
      SysRoleRes res = (SysRoleRes)orgOrUserList.get(i);
      if ((res.getRoleId() != null) && (!"".equals(res.getRoleId())))
        userBuf.append(",").append(res.getRoleId());
      else {
        orgList.add(res.getResNo());
      }
    }
    rtn.add(orgList);
    rtn.add(userBuf.toString());

    return rtn;
  }

  public List getUserOrg(String loginCode)
    throws Exception, RemoteException
  {
//    StringBuffer strSql = new StringBuffer("select c.org_cd as value,c.org_name as text,'' otherValue  ");
//    strSql.append(" from (select org_cd,org_name from sys_org_info union select '0' org_cd,'").append(ConfigUtil.getConfig("ROOT_ORG_NAME")).append("' org_name from dual) c, ");
//    strSql.append("  sys_org_user a,sys_user b ");
//    strSql.append("  where a.org_id = c.org_cd and a.user_id=b.user_id and b.login_code=?  ");
//    Map param = new HashMap();
//    param.put("1", loginCode);
//    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SelOption.class);
    return new ArrayList();
   // return beanList;
  }

  public List getMenuByBtn(String btnResNo) throws Exception, RemoteException
  {
    String strSql = "select b.* from sys_resource_info a ,sys_resource_info b where b.res_type='0' and a.parent_no=b.res_no and a.res_no = ? ";
    Map param = new HashMap();
    param.put("1", btnResNo);
    return DbFactory.getSqlDdlDao().query(strSql, param, SysResourceInfo.class);
  }

  public List getMenuByPageId(String pageId) throws Exception, RemoteException {
    String strSql = "select b.* from sys_resource_info b where b.res_no=? and b.res_type='0' ";
    Map param = new HashMap();
    param.put("1", pageId);
    return DbFactory.getSqlDdlDao().query(strSql, param, SysResourceInfo.class);
  }
}