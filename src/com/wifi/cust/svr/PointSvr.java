package com.wifi.cust.svr;

import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.CustPoint;

public interface PointSvr
{
	public List qryPointPg(Map condMap,PageUtil pageInfo)throws Exception;
	  
	public void save(CustPoint point) throws Exception;

	public void delete(List<CustPoint> infoList)throws Exception;
	
	public List qryPointName()throws Exception;
}