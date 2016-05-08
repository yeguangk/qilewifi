package com.wifi.cust.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.CustInfo;
import com.wifi.cust.bo.CustGroup;

public interface CustSvr
{
	public List qryCustPg(Map condMap,PageUtil pageInfo)throws Exception;
	public List qryCustUpdateStatus(Map condMap,PageUtil pageInfo)throws Exception;
	  
	public List qryCustGroup(BigDecimal custId)throws Exception;
	
	/**
	 * 根据客户Id查询客户信息
	 * @param custId
	 * @return
	 * @throws Exception
	 */
	public CustInfo qryCustInfoById(BigDecimal custId)throws Exception;
	  
	public void save(CustInfo custInfo,List<CustGroup> groupList) throws Exception;

	public void delete(List<CustInfo> infoList)throws Exception;
	public void updatePwd(String custId)throws Exception;
}