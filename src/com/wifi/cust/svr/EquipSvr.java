package com.wifi.cust.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.bo.BaseBo;
import org.frame.db.page.PageUtil;

import com.wifi.cust.bo.CustEquipment;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

public interface EquipSvr
{
	public List qryEquipPg(Map condMap,PageUtil pageInfo)throws Exception;

	public void save(CustEquipment equip)throws Exception;

	public void delete(CustEquipment equip)throws Exception;
	
	
}