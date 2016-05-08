package com.wifi.cust.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

public interface CustQrySvr
{
	public List qryCustGrpPg(Map condMap,PageUtil pageInfo)throws Exception;
	  
	public List qryPointPg(Map condMap,PageUtil pageInfo)throws Exception;
	public List qryCustTree(String parentId)throws Exception;
}