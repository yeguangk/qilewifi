package com.mz.sys.svr;

import com.mz.sys.bo.SysUserInfo;

public class CacheCurUser
{
  private static final ThreadLocal cacheUser = new ThreadLocal();

  protected static void cacheCurUser(SysUserInfo userInfo) { cacheUser.set(userInfo); }

  protected static SysUserInfo getCurUser() throws Exception {
    Object userInfo = cacheUser.get();
    if (userInfo != null) {
      return (SysUserInfo)userInfo;
    }
    throw new Exception("由于系统重新启动或长时间没操作导致会话失效，请重新登录");
  }
}