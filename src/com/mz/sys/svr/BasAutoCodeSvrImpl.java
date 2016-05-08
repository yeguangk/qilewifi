package com.mz.sys.svr;

import com.mz.sys.bo.BasAutoCode;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class BasAutoCodeSvrImpl
  implements BasAutoCodeSvr
{
  public List qryList()
    throws Exception
  {
    Map param = new HashMap();
    StringBuffer sqlSb = new StringBuffer();
    sqlSb.append("select a.*  from bas_auto_code a where 1=1 ");

    List list = DbFactory.getSqlDdlDao().query(sqlSb.toString(), param, BasAutoCode.class);
    return list;
  }

  public BasAutoCode getBasAutoCode(String keyid) throws Exception {
    StringBuffer sqlSb = new StringBuffer();
    sqlSb.append("select a.*  from bas_auto_code a where 1=1 and trim(a.keyid)=? ");
    Map param = new HashMap();
    param.put("1", keyid);

    List list = DbFactory.getSqlDdlDao().query(sqlSb.toString(), param, BasAutoCode.class);
    if ((list != null) && (list.size() >= 1))
      return (BasAutoCode)list.get(0);
    return null;
  }

  public void saveData(String optFlg, String saveType, BasAutoCode main)
    throws Exception
  {
    if ((!"add".equals(optFlg)) && (!"copyAdd".equals(optFlg)) && 
      ("edit".equals(optFlg)))
      DbFactory.getSqlDdlDao().update(main);
  }
}