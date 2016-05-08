package com.mz.sys.svr;

import com.mz.sys.bo.SysUserInfo;
import java.rmi.RemoteException;

public class CurUserSvrImpl
  implements CurUserSvr
{
  public void cacheCurUser(SysUserInfo userInfo)
    throws Exception, RemoteException
  {
    CacheCurUser.cacheCurUser(userInfo);
  }

  public SysUserInfo getCurUser() throws Exception, RemoteException
  {
    return CacheCurUser.getCurUser();
  }
}