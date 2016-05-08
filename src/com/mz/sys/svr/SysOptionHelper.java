package com.mz.sys.svr;

import com.mz.sys.bo.DdValue;
import com.mz.sys.bo.SysOptionValue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class SysOptionHelper
{
  
  public List ddOptions() throws Exception {
    StringBuffer strSql = new StringBuffer(" select * from dd_value order by dd_code,dd_sort ");
    Map param = new HashMap();
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, DdValue.class);
    return beanList;
  }

  public List loadRoleOptions() throws Exception {
    StringBuffer strSql = new StringBuffer(" select role_id as value,role_name as text  from sys_role where state=0 ");
    Map param = new HashMap();
    return DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysOptionValue.class);
  }
}