package com.mz.sys.svr;

import com.mz.sys.bo.SysParamValue;
import com.mz.sys.bo.SystemParameters;
import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;
import org.frame.db.page.PageUtil;

public class SysParamSvrImpl
  implements SysParamSvr
{
  public String getParamValue(String orgcd, String type)
    throws Exception, RemoteException
  {
    List beanList = qryParamValue(orgcd, type);
    if (beanList.size() == 1) {
      SysParamValue val = (SysParamValue)beanList.get(0);
      return val.getPara();
    }
    beanList = qryParamValue(type);
    if (beanList.size() == 1) {
      SysParamValue val = (SysParamValue)beanList.get(0);
      return val.getPara();
    }
    throw new Exception("没有找到符合条件的参数");
  }

  private List qryParamValue(String orgcd, String type)
    throws Exception
  {
    StringBuffer strSql = new StringBuffer("select PARA_VALUE para from SYSTEM_PARAMETERS WHERE ORG_CD=? AND PARA_CODE=?");
    Map param = new HashMap();
    param.put("1", orgcd);
    param.put("2", type);
    return DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysParamValue.class);
  }
  private List qryParamValue(String type) throws Exception {
    StringBuffer strSql = new StringBuffer("select PARA_VALUE para from SYSTEM_PARAMETERS WHERE PARA_CODE=?");
    Map param = new HashMap();
    param.put("1", type);
    return DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysParamValue.class);
  }

  public void saveData(List addList, List uptList, String[] delArr) throws Exception {
    DbFactory.getSqlDdlDao().delete(SystemParameters.class, null, new Object[0]);

    int len = 0;

    if (addList != null) {
      len = addList.size();
      DbFactory.getSqlDdlDao().insert(addList);
    }

    if (uptList != null)
      DbFactory.getSqlDdlDao().insert(uptList);
  }

  private Map getQryMap(Map qryMap, Map param, StringBuffer strSql)
  {
    int i = 1;
    String keyid = (String)qryMap.get("keyid");
    if ((keyid != null) && (!"".equals(keyid))) {
      param.put(String.valueOf(i++), keyid);
      strSql.append(" and keyid=?");
    }
    String orgCd = (String)qryMap.get("orgCd");
    if ((orgCd != null) && (!"".equals(orgCd))) {
      param.put(String.valueOf(i++), orgCd + "%");
      strSql.append(" and org_cd like ?");
    }

    String paraName = (String)qryMap.get("paraName");
    if ((paraName != null) && (!"".equals(paraName))) {
      param.put(String.valueOf(i++), "%" + paraName + "%");
      strSql.append(" and para_name like ?");
    }
    String paraCode = (String)qryMap.get("paraCode");
    if ((paraCode != null) && (!"".equals(paraCode))) {
      param.put(String.valueOf(i++), paraCode);
      strSql.append(" and para_code = ?");
    }

    String state = (String)qryMap.get("state");
    if ((state != null) && (!"".equals(state))) {
      param.put(String.valueOf(i++), state);
      strSql.append(" and state = ?");
    }

    String paraType = (String)qryMap.get("paraType");
    if ((paraType != null) && (!"".equals(paraType))) {
      param.put(String.valueOf(i++), paraType);
      strSql.append(" and para_type = ?");
    }
    return param;
  }
  public List<SystemParameters> qryList(PageUtil pageInfo, Map<String, Object> qryParams) throws Exception {
    StringBuffer strSql = new StringBuffer("select * from system_parameters where 1=1 ");
    Map param = new HashMap();
    getQryMap(qryParams, param, strSql);
    strSql.append("  order by  create_date desc");

    List beanList = null;
    if (pageInfo != null) {
      pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(strSql.toString(), param));
      beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SystemParameters.class, pageInfo);
      return beanList;
    }
    beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SystemParameters.class);
    return beanList;
  }

  public List qryParm(String para) throws Exception
  {
    StringBuffer strSql = new StringBuffer("select * from system_parameters where PARA_TYPE = '" + para + "' ");
    Map param = new HashMap();
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SystemParameters.class);
    return beanList;
  }
}