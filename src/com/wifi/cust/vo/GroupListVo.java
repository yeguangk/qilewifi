package com.wifi.cust.vo;

import java.util.List;

import com.wifi.cust.bo.CustPoint;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

public class GroupListVo
{
	private List<PanelGroup> infoList;

	public List<PanelGroup> getInfoList() {
		return infoList;
	}

	public void setInfoList(List<PanelGroup> infoList) {
		this.infoList = infoList;
	}
	
	
}