package com.wifi.cust.svr;

import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.UpdateRange;

public interface UptPkgSvr
{
	public List qryUptPkgPg(Map condMap,PageUtil pageInfo)throws Exception;
	public List qryUptLimit(Map condMap)throws Exception;
	
	public void save(ClientUpdateInfo uptPkg,List<UpdateRange> limitList) throws Exception;
	public void delete(List<ClientUpdateInfo> infoList) throws Exception;
}