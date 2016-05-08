package com.mz.sys.svr;

import com.mz.sys.bo.SysUserInfo;
import java.rmi.RemoteException;

public abstract interface CurUserSvr
{
  public abstract void cacheCurUser(SysUserInfo paramSysUserInfo)
    throws Exception, RemoteException;

  public abstract SysUserInfo getCurUser()
    throws Exception, RemoteException;
}