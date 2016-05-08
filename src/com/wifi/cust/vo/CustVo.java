package com.wifi.cust.vo;

import java.util.List;

import com.wifi.cust.bo.CustGroup;
import com.wifi.cust.bo.CustInfo;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

public class CustVo
{
	private CustInfo custInfo;
	private List<CustGroup> groupList;
	public CustInfo getCustInfo() {
		return custInfo;
	}
	public void setCustInfo(CustInfo custInfo) {
		this.custInfo = custInfo;
	}
	public List<CustGroup> getGroupList() {
		return groupList;
	}
	public void setGroupList(List<CustGroup> groupList) {
		this.groupList = groupList;
	}
	
}