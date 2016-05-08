package com.mz.sys.svr;

import com.mz.sys.bo.SysRole;
import com.mz.sys.bo.SysRoleRes;
import com.mz.sys.bo.TreeNode;
import com.mz.sys.utils.PkUtil;
import com.mz.sys.web.UserUtil;

import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;

public class SysRoleSvrImpl
  implements SysRoleSvr
{
  public void saveOpt(SysRole roleInfo, List<SysRoleRes> resList)
    throws Exception, RemoteException
  {
    SqlDdlDao dao = DbFactory.getSqlDdlDao();
    Map param = new HashMap();
    if (roleInfo.getRoleId() == null) {
      roleInfo.setRoleId(getMax());//new BigDecimal(PkUtil.updatePkValue("SYS_ROLE.ROLE_ID")));
      roleInfo.setDepartId(UserUtil.getCurUser().getDepartId());//帐号归属客户
      roleInfo.setDepartName(UserUtil.getCurUser().getDepartName());
      dao.insert(roleInfo);
    } else {
      dao.update(roleInfo);
      dao.delete(SysRoleRes.class, "ROLE_ID=?", new Object[] { roleInfo.getRoleId() });
    }
    for (SysRoleRes res : resList) {
      res.setRoleId(roleInfo.getRoleId());
    }
    dao.insert(resList);
  }
  private BigDecimal getMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.ROLE_ID) maxval from sys_role a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  public List querySysRole(Map map, PageUtil pageInfo) throws Exception, RemoteException {
    StringBuffer strSql = new StringBuffer("select * from sys_role a where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String roleId = (String)map.get("roleId");
    if (!StringUtil.isEmpty(roleId)) {
      param.put(String.valueOf(index++), roleId);
      strSql.append(" and a.ROLE_ID=? ");
    }
    String roleName = (String)map.get("roleName");
    if (!StringUtil.isEmpty(roleName)) {
      param.put(String.valueOf(index++), "%" + roleName + "%");
      strSql.append(" and a.ROLE_NAME like ? ");
    }
    String keyWord = (String)map.get("keyWord");
    if (!StringUtil.isEmpty(keyWord)) {
      param.put(String.valueOf(index++), "%" + keyWord + "%");
      strSql.append(" and (a.ROLE_NAME like ? ");
      param.put(String.valueOf(index++), "%" + keyWord + "%");
      strSql.append(" or a.ROLE_ID like ? )");
    }
    String state = (String)map.get("state");
    if (!StringUtil.isEmpty(state)) {
      param.put(String.valueOf(index++), state);
      strSql.append(" and a.STATE=? ");
    }
    strSql.append(UserUtil.custFilter3("a"));
    strSql.append(" order by a.ROLE_ID asc ");

    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(strSql.toString(), param));
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysRole.class, pageInfo);
    return beanList;
  }

  public List<TreeNode> getResoureTree(String roleId) throws Exception, RemoteException {
    List list = new ArrayList();
    List<SysRoleRes> checkedList = getChecked(roleId);

    List pageList = pageInfo();
    int checkedSize = checkedList.size();
    for (int i = 0; i < pageList.size(); i++) {
      String checked = "false";
      TreeNode node = (TreeNode)pageList.get(i);
      if ((checkedList != null) && (checkedSize > 0))
        for (SysRoleRes sysRoleRes : checkedList) {
          checked = sysRoleRes.getResNo().equals(node.getNodeId()) ? "true" : "false";
          node.setChecked(checked);
          if ("true".equals(checked))
            break;
        }
      else node.setChecked("false");

      if (node.getParentId() == null) {
        node.setParentId("0");
      }
      list.add(node);
    }
    return list;
  }
  private List getChecked(String roleId) throws Exception {
    if ((roleId == null) || ("".equals(roleId))) return null;
    Map param = new HashMap();
    param.put("1", new BigDecimal(roleId));
    StringBuffer strSql = new StringBuffer("select * from sys_role_res where 1=1 and ROLE_ID = ? ");

    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysRoleRes.class);
    return beanList;
  }
  private List pageInfo() throws Exception {
    List rtn = new ArrayList();
    Map param = new HashMap();

    StringBuffer strSql = new StringBuffer("select a.RES_NO as node_id,a.PARENT_NO as parent_id,a.RES_NAME  as node_txt from sys_resource_info a where a.PARENT_NO = '0' ORDER BY a.SEQ_NUM ");
    List menuList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, TreeNode.class);
    StringBuilder filter = null;

    while (menuList.size() != 0)
    {
      filter = new StringBuilder(",");
      for (int i = 0; i < menuList.size(); i++) {
        TreeNode menu = (TreeNode)menuList.get(i);
        filter.append(menu.getNodeId()).append(",");
        rtn.add(menu);
      }
      param.put("1", filter.toString());
      menuList = DbFactory.getSqlDdlDao().query("select a.RES_NO as node_id,a.PARENT_NO as parent_id,a.RES_NAME  as node_txt from sys_resource_info a where ? like concat('%,',a.PARENT_NO,',%')  ORDER BY a.SEQ_NUM ", param, TreeNode.class);
    }
    return rtn;
  }
}