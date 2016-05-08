package com.wifi.res.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

public interface PanelSvr
{
	public List qryPanelPg(Map condMap,PageUtil pageInfo)throws Exception;
	
	/**
	 * 通过客户的名称查询该客户所拥有的面板信息
	 * @param condMap
	 * @param pageInfo
	 * @return
	 * @throws Exception
	 */
	public List qryPanelPgByCustName(Map condMap,PageUtil pageInfo)throws Exception;
	
	public List qryBoxs(BigDecimal panelId)throws Exception;
	  
	public List qryBox(BigDecimal boxId)throws Exception;
	
	public List qryBoxItems(BigDecimal boxId)throws Exception;
	public void delete(BigDecimal boxId)throws Exception;
	
	public void save(PanelDef panelInfo,PanelBoxDef boxInfo,List<PanelBoxItem> itemList) throws Exception;
	public BigDecimal saveCopy(BigDecimal panelId) throws Exception;

	public void delete(List<PanelDef> infoList)throws Exception;
	
	/**
	 * 根据用户的id查询面板组信息
	 * 
	 * @param cust_id
	 * @return
	 * @throws Exception
	 */
	public List qryPanelGroup(String cust_id)throws Exception;
}