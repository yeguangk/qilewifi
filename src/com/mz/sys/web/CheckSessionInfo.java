package com.mz.sys.web;

import com.mz.sys.bo.SysUserInfo;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.frame.web.base.CheckSession;

public class CheckSessionInfo
  implements CheckSession
{
  private static final Logger log = Logger.getLogger(CheckSessionInfo.class);

  public boolean canAccessUrl(HttpSession session, String resourceId) {
    return true;
  }

  public boolean hadLogin(HttpSession session)
  {
    try
    {
      if (session.getAttribute("USER_INFO") != null) {
        Object obj = session.getAttribute("USER_INFO");
        UserUtil.cacheCurUser((SysUserInfo)obj);

        return true;
      }else if(session.getAttribute("jsid")!=null&&(session.getAttribute("jsid")).equals(session.getId())){
    	  return true;
      }
      return false;
    }
    catch (Exception e) {
      if (log.isDebugEnabled())
        log.debug(e.getMessage(), e); 
    }
    return false;
  }
}