package com.mz.sys.svr;

import com.mz.sys.bo.SysUser;
import com.mz.sys.bo.SysUserInfo;
import com.mz.sys.bo.SysUserRole;
import com.mz.sys.utils.PkUtil;
import com.mz.sys.web.UserUtil;
import com.wifi.cust.bo.CustInfo;

import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;

public class SysUserSvrImpl
  implements SysUserSvr
{
  public void saveOpt(SysUser user, List<SysUserRole> roleList)
    throws Exception, RemoteException
  {
    SqlDdlDao dao = DbFactory.getSqlDdlDao();
    if (!checkLoginCode(user.getUserId(), user.getLoginCode())) {
      throw new Exception("员工编码已经被存在，请重新输入");
    }
    StringBuilder roleNames = new StringBuilder();
    Map filterMap = new HashMap();
    for (SysUserRole role : roleList) {
      role.setUserId(user.getUserId());
      if (!filterMap.containsKey(role.getRoleName())) {
        roleNames.append(role.getRoleName()).append(",");
      }
    }
    user.setRoleNames(roleNames.toString());

    Map param = new HashMap();
    if (user.getUserId() == null) {
      user.setUserId(getMax());//new BigDecimal(PkUtil.updatePkValue("SYS_USER.USER_ID")));
      user.setDepartId(UserUtil.getCurUser().getDepartId());//帐号归属客户
      user.setDepartName(UserUtil.getCurUser().getDepartName());
      dao.insert(user);
    } else {
      dao.update(user);
      param.put("1", user.getUserId());
      dao.delete(SysUserRole.class, "USER_ID=?", new Object[] { user.getUserId() });
    }

    dao.insert(roleList);
  }
  private BigDecimal getMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.USER_ID) maxval from sys_user a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  public List querySysUser(Map map, PageUtil pageInfo) throws Exception, RemoteException {
    StringBuffer strSql = new StringBuffer("select a.* from sys_user a where 1=1 ");
    Map param = new HashMap();
    int i = 1;

    String loginCode = (String)map.get("loginCode");
    if (!StringUtil.isEmpty(loginCode)) {
      param.put(String.valueOf(i++), "%" + map.get("loginCode") + "%");
      strSql.append(" and  a.LOGIN_CODE like ? ");
    }

    String name = (String)map.get("name");
    if (!StringUtil.isEmpty(name)) {
      param.put(String.valueOf(i++), "%" + name + "%");
      strSql.append(" and  a.NAME like ? ");
    }

    String state = (String)map.get("state");
    if (!StringUtil.isEmpty(state)) {
      param.put(String.valueOf(i++), state);
      strSql.append(" and  a.STATE= ? ");
    }
    String keyWord = (String)map.get("keyWord");
    if (!StringUtil.isEmpty(keyWord)) {
      param.put(String.valueOf(i++), "%" + keyWord + "%");
      strSql.append(" and ( a.NAME like ? ");
      param.put(String.valueOf(i++), "%" + keyWord + "%");
      strSql.append(" or  a.LOGIN_CODE like ? ) ");
    }
    strSql.append(UserUtil.custFilter3("a"));
    strSql.append(" order by  a.LOGIN_CODE asc ");
    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(strSql.toString(), param));
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUser.class, pageInfo);
    return beanList;
  }

  public List queryUserRole(Map map) throws Exception, RemoteException {
    StringBuffer strSql = new StringBuffer("select b.*,a.USER_ID,a.ORG_CD,a.ORG_NAME from sys_user_role a,sys_role b where a.USER_ID=? and a.ROLE_ID=b.ROLE_ID ");
    Map param = new HashMap();
    String userId = (String)map.get("userId");
    param.put(String.valueOf(1), userId);
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUserRole.class);
    return beanList;
  }

  private boolean checkLoginCode(BigDecimal userId, String loginCode) throws Exception, RemoteException {
    StringBuffer strSql = new StringBuffer("select * from sys_user ");
    Map param = new HashMap();

    int i = 1;
    param.put(String.valueOf(i), loginCode);
    strSql.append(" where LOGIN_CODE=? ");
    List rtn = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUser.class);
    if (userId == null) {
      return rtn.size() < 1;
    }
    if (rtn.size() == 0)
      return true;
    if (rtn.size() > 1) {
      return false;
    }
    SysUser bo = (SysUser)rtn.get(0);
    if (userId.equals(bo.getUserId())) {
      return true;
    }
    return false;
  }

  public void updateResetPwd(String userId)
    throws Exception, RemoteException
  {
    Map param = new HashMap();
    param.put("1", userId);
    DbFactory.getSqlDdlDao().update(SysUser.class, "PASSWORD='698D51A19D8A121CE581499D7B701668'", "USER_ID=?", new Object[] { userId });
  }

  public void updatePassWord(BigDecimal userId, String oldPwd, String newPwd)
    throws Exception, RemoteException
  {

	  SysUser bo = qryCustById(userId);
	  if (bo == null) {
	    	bo = qryUserByUserId(userId);
	    	if(bo==null){
	    		throw new Exception("没找到用户信息");
	    	}else{//普通用户账号
	    		checkPwd(bo,oldPwd);
	    		//普通用户
	    		DbFactory.getSqlDdlDao().update(SysUser.class, " PASSWORD=?", "USER_ID=?", new Object[] { newPwd, bo.getUserId() });
	    	}
	  }else{//客户账号
		  checkPwd(bo,oldPwd);//
		  DbFactory.getSqlDdlDao().update(CustInfo.class, "PWD=?", "CUST_ID=?", new Object[] { newPwd, bo.getUserId() });
	  }
  }
  private void checkPwd(SysUser bo,String oldPwd) throws Exception{
    if (("".equals(oldPwd)) && (bo.getPassword() != null) && (!"".equals(bo.getPassword())))
      throw new Exception("输入旧密码错误");
    if ((!"".equals(oldPwd)) && (!oldPwd.equals(bo.getPassword()))) {
      throw new Exception("输入旧密码错误");
    }	   
  }
  private SysUser qryUserByUserId(BigDecimal userId) throws Exception {
    StringBuffer strSql = new StringBuffer("select * from sys_user");
    Map param = new HashMap();

    int i = 1;
    param.put(String.valueOf(i), userId);
    strSql.append(" where USER_ID=? ");
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUser.class);
    if (beanList.size() == 1) {
      return (SysUser)beanList.get(0);
    }
    return null;
  }
  private SysUser qryCustById(BigDecimal id) throws Exception {
	  StringBuffer strSql=new StringBuffer("SELECT A.PWD PASSWORD,A.CUST_ID USER_ID FROM cust_info A WHERE A.CUST_ID=? ");
      Map param = new HashMap();     
      param.put("1", id);
      List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysUser.class);
      if (beanList.size() == 1) {
        return (SysUser)beanList.get(0);
      }
      return null;
  }
  private void updatePwd(SysUser bo)
    throws Exception
  {
    DbFactory.getSqlDdlDao().update(SysUser.class, " PASSWORD=?", "USER_ID=?", new Object[] { bo.getPassword(), bo.getUserId() });
  }
}