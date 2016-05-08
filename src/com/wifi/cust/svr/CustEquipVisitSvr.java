package com.wifi.cust.svr;

import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

public interface CustEquipVisitSvr
{
	/**
	 * 根据时间段,查询客户访问量-表格
	 * @param condMap
	 * @param pageInfo
	 * @return
	 * @throws Exception
	 */
	public List qryCustEquipVisitByTime(Map condMap,PageUtil pageInfo)throws Exception;
	
	/**
	 * 根据时间段,查询客户访问量-图表
	 * @param condMap
	 * @param pageInfo
	 * @return
	 * @throws Exception
	 */
	public List qryCustEquipVisitByTimeChart(Map condMap,PageUtil pageInfo)throws Exception;
	
	  
	/**
	 * 根据店面ID和统计时间统计店面访问次数
	 * @param condMap
	 * @param pageInfo
	 * @return
	 * @throws Exception
	 */
	public List qrySingleClientVisitByClientIdAndTime(Map condMap,PageUtil pageInfo)throws Exception;
}