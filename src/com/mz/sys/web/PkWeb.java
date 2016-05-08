package com.mz.sys.web;

import com.mz.sys.utils.PkUtil;
import javax.servlet.http.HttpServletResponse;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class PkWeb
{
  public void genPk(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    HttpUtil.outJson("{success:true,\"pkVal\":\"" + PkUtil.getKeyId() + "\"}", response);
  }
}