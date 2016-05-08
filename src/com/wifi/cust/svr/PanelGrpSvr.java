package com.wifi.cust.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

public interface PanelGrpSvr
{
	public List qryGrpPg(Map condMap,PageUtil pageInfo)throws Exception;
	  
	public List qryGrpDtl(BigDecimal grpId)throws Exception;
	  
	public void save(PanelGroup group,List<PanelGroupDtl> dtlList) throws Exception;
	
	public void updateVersion(BigDecimal panelsId) throws Exception;

	public void delete(List<PanelGroup> infoList)throws Exception;
}