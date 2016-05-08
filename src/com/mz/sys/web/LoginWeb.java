package com.mz.sys.web;

import com.mz.sys.bo.SysUserInfo;
import com.mz.sys.svr.LoginSvr;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class LoginWeb
{
  private static final Logger log = Logger.getLogger(LoginWeb.class);

  public void login(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    HttpSession session = request.getSession();
    String username = request.getParameter("username");
    String md5Pwd = request.getParameter("md5Pwd");
    String yzhCode = request.getParameter("yzhCode");

    if (session.getAttribute("yanzhengCode") == null) {
      HttpUtil.failured("验证码已经失效，请点击获取新的验证码", response);
      return;
    }
    String yanzhengCode = (String)session.getAttribute("yanzhengCode");
    if (!yanzhengCode.equals(yzhCode)) {
      HttpUtil.failured("验证码输入错误，请重新输入验证码", response);
      return;
    }

    LoginSvr svr = (LoginSvr)ServiceFactory.getService(LoginSvr.class);
    SysUserInfo userInfo = new SysUserInfo();
    if (svr.checkLogin(username, md5Pwd, userInfo))
    {
      Map userResMap = svr.getUserResMap(userInfo.getUserId());
      List menuList = null;
      if("admin".equals(userInfo.getUserTypeCd())){//管理员
    	  menuList= svr.getMenuList();
      }else{
    	  menuList= svr.getUserMenuList(userResMap);
      }
      session.removeAttribute("USER_INFO");
      session.removeAttribute("RES_LIST");
      session.removeAttribute("USER_MENU_LIST");

      session.setAttribute("USER_INFO", userInfo);
      session.setAttribute("RES_LIST", userResMap);
      session.setAttribute("USER_MENU_LIST", menuList);

      HttpUtil.success(response);
    } else {
      HttpUtil.failured("用户或密码错误", response);
    }
  }

  private String getIp(MoziRequest req)
  {
    HttpServletRequest request = req;
    String host = request.getRemoteHost();
    if ("0:0:0:0:0:0:0:1".equals(host)) {
      return "127.0.0.1";
    }
    String ip = request.getHeader("x-forwarded-for");
    if ((ip == null) || (ip.length() == 0) || ("unknown".equalsIgnoreCase(ip)))
    {
      ip = request.getHeader("Proxy-Client-IP");
    }
    if ((ip == null) || (ip.length() == 0) || ("unknown".equalsIgnoreCase(ip)))
    {
      ip = request.getHeader("WL-Proxy-Client-IP");
    }
    if ((ip == null) || (ip.length() == 0) || ("unknown".equalsIgnoreCase(ip)))
    {
      ip = request.getRemoteAddr();
    }

    return ip;
  }

  public void hadLogin(MoziRequest request, HttpServletResponse response) {
    HttpSession session = request.getSession();
    if (session.getAttribute("USER_INFO") != null)
      HttpUtil.success(response);
    else
      HttpUtil.failured("用户没有登陆或者登录过期，请重新登录", response);
  }

  public void loginOut(MoziRequest request, HttpServletResponse response)
  {
    HttpSession session = request.getSession();
    session.removeAttribute("USER_INFO");
    HttpUtil.success(response);
  }

  public void loadAllMenu(MoziRequest request, HttpServletResponse response) throws IOException {
    HttpSession session = request.getSession();
    List menuList = (List)session.getAttribute("USER_MENU_LIST");
    if (menuList == null)
      HttpUtil.outJsonMsg("-1", "由于服务器重新启动或长时间没操作系统，请重新登录", response);
    else
      HttpUtil.success(menuList, response);
  }
  
  public void getUserOrg(MoziRequest request, HttpServletResponse response) throws Exception { LoginSvr svr = (LoginSvr)ServiceFactory.getService(LoginSvr.class);
	  String loginCode = request.getParameter("loginCode");
	  if ((loginCode == null) || ("".equals(loginCode))) {
	    Map map = request.getInputStreamParams();
	    loginCode = (String)map.get("loginCode");
	  }
	  if ((loginCode == null) || ("".equals(loginCode))) {
	    HttpUtil.outJson("{success:true,DATA:[]}", response);
	    return;
	  }
	
	  List orgList = svr.getUserOrg(loginCode);
	
	  if (orgList == null) {
	    HttpUtil.outJson("{success:true,DATA:[]}", response);
	    return;
	  }
	  HttpUtil.success(orgList, response);
  }

}