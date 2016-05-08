package com.mz.sys.svr;

import com.mz.sys.bo.SysUser;
import com.mz.sys.bo.SysUserRole;
import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;
import org.frame.db.page.PageUtil;

public abstract interface SysUserSvr
{
  public abstract void saveOpt(SysUser paramSysUser, List<SysUserRole> paramList)
    throws Exception, RemoteException;

  public abstract List querySysUser(Map paramMap, PageUtil paramPageUtil)
    throws Exception, RemoteException;

  public abstract List queryUserRole(Map paramMap)
    throws Exception, RemoteException;

  public abstract void updateResetPwd(String paramString)
    throws Exception, RemoteException;

  public abstract void updatePassWord(BigDecimal paramBigDecimal, String paramString1, String paramString2)
    throws Exception, RemoteException;
}