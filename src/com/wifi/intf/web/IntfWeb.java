package com.wifi.intf.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;

import com.wifi.intf.svr.IntfSvr;
import com.wifi.intf.svr.JsonSvr;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class IntfWeb
{
  /*
   * 登录认证
   * 入参：
   *     设备串号
   * 出参：
   *     模板id和版本号
   */
  public void lgn_old(MoziRequest request, HttpServletResponse response) throws Exception {
	    String sn= request.getParameter("sn");
		IntfSvr svr = (IntfSvr)ServiceFactory.getService(IntfSvr.class);
		HttpUtil.outJson(svr.lgn(sn), response);
  }
  
  public void lgn(MoziRequest request, HttpServletResponse response) throws Exception {
	    String sn= request.getParameter("sn");
	   // String custId= request.getParameter("custId");
	    JsonSvr svr = (JsonSvr)ServiceFactory.getService(JsonSvr.class);
		HttpUtil.outJson(svr.qrypanelPublishByEquipNo(request.getRootPath(), sn), response);
  }
  
  /*
   * 入参：
   *     模板id
   * 出参：
   *     模板数据
   */
  public void tplData(MoziRequest request, HttpServletResponse response) throws Exception {
	String tplId= request.getParameter("tplId");
	IntfSvr svr = (IntfSvr)ServiceFactory.getService(IntfSvr.class);
	HttpUtil.outJson(svr.tplData(tplId), response);
  }
  /*
   * 
   * 入参：
   *    custId 客户号
   * 出参：
   *    客户分组和营业点
   */
  public void custInfo(MoziRequest request, HttpServletResponse response) throws Exception {
	String cid= request.getParameter("cid");
	IntfSvr svr = (IntfSvr)ServiceFactory.getService(IntfSvr.class);
	HttpUtil.outJson(svr.custInfo(cid), response);
  }
  
  private static void downFile(HttpServletResponse response, String data,String fileName) {
		InputStream ins =null;
		BufferedInputStream bins =null;
		OutputStream outs =null;
		BufferedOutputStream bouts =null;
		try {
				ins = new ByteArrayInputStream(data.getBytes());;
				bins = new BufferedInputStream(ins);// 放到缓冲流里面
				outs = response.getOutputStream();// 获取文件输出IO流
				bouts = new BufferedOutputStream(outs);
				response.setContentType("application/x-download");// 设置response内容的类型
				response.setHeader("Content-disposition",
						"attachment;filename="
								+ URLEncoder.encode(fileName, "UTF-8"));// 设置头部信息
				int bytesRead = 0;
				byte[] buffer = new byte[8192];
				// 开始向网络传输文件流
				while ((bytesRead = bins.read(buffer, 0, 8192)) != -1) {
					bouts.write(buffer, 0, bytesRead);
				}				
				bouts.flush();// 这里一定要调用flush()方法
				ins.close();
				bins.close();
				outs.close();
				bouts.close();
			
		} catch (IOException e) {
			e.printStackTrace();
			if(ins!=null){				
				try {
					ins.close();
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
			if(bins!=null){				
				try {
					bins.close();
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
			if(outs!=null){				
				try {
					outs.close();
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
			if(bouts!=null){				
				try {
					bouts.close();
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
		}
	}
}