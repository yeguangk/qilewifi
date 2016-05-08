package com.mz.sys.web;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.apache.log4j.Logger;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;

import com.wifi.cust.bo.CustInfo;
import com.wifi.cust.svr.CustSvr;

public class CustUtil {
	  private static final Logger log = Logger.getLogger(CustUtil.class);

	  public static String getCustInfo() throws ServletException, IOException {
		  List custInfos = new ArrayList<CustInfo>();
	    try { 	
	    	CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	    	CustInfo custInfo = svr.qryCustInfoById(new BigDecimal(UserUtil.getCurUser().getDepartId()));
	    	
	    	if (null != custInfo){
	    		custInfos.add(custInfo);
	    	}else{
	    		custInfos.add(new CustInfo());
	    	}
	
	    } catch (Exception ex){
	      if (log.isDebugEnabled())
	        log.debug(ex.getMessage(), ex); 
	    }
		return HttpUtil.toSuccessJson(custInfos);
	  }
}
