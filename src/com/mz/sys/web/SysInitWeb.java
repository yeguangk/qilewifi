package com.mz.sys.web;

import com.mz.sys.svr.SysOptionSvr;
import com.wifi.cust.svr.PreSvr;

import java.io.IOException;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.frame.db.dao.ConnectionThread;
import org.frame.svr.ServiceFactory;

public final class SysInitWeb extends HttpServlet
  implements Servlet
{
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
  }

  public void init(ServletConfig config)
    throws ServletException
  {
    SysOptionSvr svr;
    try
    {
      svr = (SysOptionSvr)ServiceFactory.getService(SysOptionSvr.class);
      svr.loadOptions();     
    }
    catch (Exception e1) {
      e1.printStackTrace();
      throw new ServletException("数据选项初始化失败.");
    } finally {
      ConnectionThread.destory();
    }
  }
}