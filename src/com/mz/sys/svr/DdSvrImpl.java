package com.mz.sys.svr;

import com.mz.sys.bo.DdCode;
import com.mz.sys.bo.DdValue;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
public class DdSvrImpl
  implements DdSvr
{
 
	public List qryValue(String ddCode)throws Exception
  {   
    StringBuffer sql = new StringBuffer("select a.* from dd_value a where a.dd_code=?  order by a.dd_sort ");
    Map param = new HashMap();   
    param.put("1", ddCode);   
    return DbFactory.getSqlDdlDao().query(sql.toString(), param, DdValue.class);
  }
  
  public List qryCode()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select a.* from dd_code a order by a.code_sort ");
	  return DbFactory.getSqlDdlDao().query(sql.toString(), null, DdCode.class);
  }
  public void save(String code,List<DdValue> dtlList) throws Exception
  {	
	DbFactory.getSqlDdlDao().delete(DdValue.class,"dd_code=?",new Object[]{code});
    for (DdValue dtl : dtlList){
    	dtl.setDdCode(code);
    	DbFactory.getSqlDdlDao().insert(dtl);    	
    }
  }
  
}