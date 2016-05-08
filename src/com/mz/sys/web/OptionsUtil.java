package com.mz.sys.web;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.apache.log4j.Logger;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;

import com.mz.sys.bo.PreValue;
import com.mz.sys.svr.SysOptionSvr;
import com.wifi.column.svr.ColumnInfoSvr;
import com.wifi.cust.svr.PointSvr;
import com.wifi.cust.svr.PreSvr;
import com.wifi.res.svr.PanelSvr;

public class OptionsUtil
{
  private static final String emptyOption = "{success: false,data:[]}";
  private static final Logger log = Logger.getLogger(OptionsUtil.class);

  public static String getDataOption(String optionNo) throws ServletException, IOException {
    try { SysOptionSvr svr = (SysOptionSvr)ServiceFactory.getService(SysOptionSvr.class);
      List list = svr.getOptionList(optionNo);
      return HttpUtil.toSuccessJson(list);
    } catch (Exception ex){
      if (log.isDebugEnabled())
        log.debug(ex.getMessage(), ex); 
    }
    return emptyOption;
  }
  public static String getPre() throws ServletException, IOException {
	    try {
            PreSvr svr2=(PreSvr)ServiceFactory.getService(PreSvr.class);
		    Map data=svr2.getPre();
		    PreValue val=new PreValue();
		    val.setPre1((String)data.get("PRE1"));
		    val.setPre2((String)data.get("PRE2"));
	        return "{"+val.toJsonString()+"}";
	    } catch (Exception ex){
	      if (log.isDebugEnabled())
	        log.debug(ex.getMessage(), ex); 
	    }
	    PreValue val=new PreValue();
        return "{"+val.toJsonString()+"}";
	  }
 
  public static String getColumnIdsAndColumnNames() throws Exception {
	  ColumnInfoSvr svr =(ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
	  List result = svr.qryColumnIdAndNameByCustId(null);
	  return HttpUtil.toSuccessJson(result);
  }
  
  public static String getPanelsGroupInfo() throws Exception{
	  String cust_id = UserUtil.getCurUser().getDepartId();
	  PanelSvr svr =(PanelSvr)ServiceFactory.getService(PanelSvr.class);
	  List result = svr.qryPanelGroup(cust_id);
	  return HttpUtil.toSuccessJson(result);
  }
  
  /**
   * 查询营业点的名称
   * @return
   * @throws Exception
   */
  public static String getClientInfos() throws Exception{
	  String cust_id = UserUtil.getCurUser().getDepartId();
	  PointSvr svr =(PointSvr)ServiceFactory.getService(PointSvr.class);
	  List result = svr.qryPointName();
	  return HttpUtil.toSuccessJson(result);
  }
}