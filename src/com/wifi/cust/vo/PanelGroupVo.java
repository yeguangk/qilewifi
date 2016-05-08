package com.wifi.cust.vo;

import java.util.List;

import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

public class PanelGroupVo
{
	private PanelGroup grpInfo;
	private List<PanelGroupDtl> dtlList;
	
	public PanelGroup getGrpInfo() {
		return grpInfo;
	}
	public void setGrpInfo(PanelGroup grpInfo) {
		this.grpInfo = grpInfo;
	}
	public List<PanelGroupDtl> getDtlList() {
		return dtlList;
	}
	public void setDtlList(List<PanelGroupDtl> dtlList) {
		this.dtlList = dtlList;
	}
	
}