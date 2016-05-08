package com.wifi.res.web;

import java.io.File;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.oreilly.servlet.MultipartRequest;
import com.wifi.res.svr.ResTypeSvr;

public class UploadWeb {
	public void up(MoziRequest request, HttpServletResponse response)
		    throws Exception {
		try
	    {
	      int maxPostSize = 0;
	      String UPLOAD_SIZE = "8";
	      if ((UPLOAD_SIZE != null) && (!"".equals(UPLOAD_SIZE))) {
	        maxPostSize = Integer.parseInt(UPLOAD_SIZE) * 1024 * 1024;
	      }
	      String path = request.getRootPath() +File.separator+"files";
	      RenamePolicy rename=new RenamePolicy();
	      MultipartRequest mulRequest = new MultipartRequest(request, path, maxPostSize, "UTF-8",rename);
	      String imgFileName = mulRequest.getFilesystemName("imgfile");
	      HttpUtil.outJson("{\"success\":true,\"fileURL\":\"files/"+imgFileName+"\"}",response);
	    } catch (Exception ex) {
	      ex.printStackTrace();
	      HttpUtil.failured(ex, response);
	    }
		
	}
}
