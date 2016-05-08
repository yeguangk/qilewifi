package com.mz.sys.svr;

import com.mz.sys.bo.SysOrgInfo;
import com.mz.sys.bo.SysOrgUserInfo;
import com.mz.sys.bo.SysOrgUserListInfo;
import java.util.List;

public abstract interface SysOrgInfoSvr
{
  public abstract List getSubNode(String paramString)
    throws Exception;

  public abstract void save(SysOrgInfo paramSysOrgInfo, String paramString)
    throws Exception;

  public abstract void save(List<SysOrgInfo> paramList, String paramString)
    throws Exception;

  public abstract List qrySysUser(String paramString)
    throws Exception;

  public abstract void saveOrgUser(List<SysOrgUserInfo> paramList, List<SysOrgUserListInfo> paramList1, String paramString)
    throws Exception;

  public abstract List qrySysUserList(String paramString1, String paramString2)
    throws Exception;
}