package com.mz.sys.svr;

import com.mz.sys.bo.SysResourceInfo;
import java.util.List;

public abstract interface SysResourceSvr
{
  public abstract List getSubNode(String paramString)
    throws Exception;

  public abstract void save(SysResourceInfo paramSysResourceInfo, String paramString)
    throws Exception;

  public abstract void save(List<SysResourceInfo> paramList, String paramString)
    throws Exception;
}