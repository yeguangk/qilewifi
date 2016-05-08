package com.wifi.res.vo;

import java.util.List;

import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

public class PanelVo
{
	private PanelDef panelInfo;
	private PanelBoxDef boxInfo;
	private List<PanelBoxItem> boxItems;
	public PanelDef getPanelInfo() {
		return panelInfo;
	}
	public void setPanelInfo(PanelDef panelInfo) {
		this.panelInfo = panelInfo;
	}
	public PanelBoxDef getBoxInfo() {
		return boxInfo;
	}
	public void setBoxInfo(PanelBoxDef boxInfo) {
		this.boxInfo = boxInfo;
	}
	public List<PanelBoxItem> getBoxItems() {
		return boxItems;
	}
	public void setBoxItems(List<PanelBoxItem> boxItems) {
		this.boxItems = boxItems;
	}
		
}