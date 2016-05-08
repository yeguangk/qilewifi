package com.mz.sys.web;

import com.mz.sys.svr.SysOptionSvr;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class ReloadWeb
{
  private static final Logger log = Logger.getLogger(ReloadWeb.class);

  public void reload(MoziRequest request, HttpServletResponse response) throws Exception { SysOptionSvr svr = (SysOptionSvr)ServiceFactory.getService(SysOptionSvr.class);
    svr.reLoadOptions();
    HttpUtil.success(response);
  }
}