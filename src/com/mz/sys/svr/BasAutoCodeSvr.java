package com.mz.sys.svr;

import com.mz.sys.bo.BasAutoCode;
import java.util.List;

public abstract interface BasAutoCodeSvr
{
  public abstract List qryList()
    throws Exception;

  public abstract BasAutoCode getBasAutoCode(String paramString)
    throws Exception;

  public abstract void saveData(String paramString1, String paramString2, BasAutoCode paramBasAutoCode)
    throws Exception;
}