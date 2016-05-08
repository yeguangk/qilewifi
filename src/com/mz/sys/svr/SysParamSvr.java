package com.mz.sys.svr;

import com.mz.sys.bo.SystemParameters;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;
import org.frame.db.page.PageUtil;

public abstract interface SysParamSvr
{
  public abstract String getParamValue(String paramString1, String paramString2)
    throws Exception, RemoteException;

  public abstract List<SystemParameters> qryList(PageUtil paramPageUtil, Map<String, Object> paramMap)
    throws Exception;

  public abstract void saveData(List paramList1, List paramList2, String[] paramArrayOfString)
    throws Exception;

  public abstract List qryParm(String paramString)
    throws Exception;
}