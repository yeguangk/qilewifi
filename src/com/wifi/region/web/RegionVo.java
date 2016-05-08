package com.wifi.region.web;

import com.wifi.region.bo.RegionInfo;
import com.wifi.res.bo.ResType;

import java.util.List;

public class RegionVo {
	private RegionInfo regionInfo;
	private List<RegionInfo> subInfo;
	public RegionInfo getRegionInfo() {
		return regionInfo;
	}
	public void setRegionInfo(RegionInfo regionInfo) {
		this.regionInfo = regionInfo;
	}
	public List<RegionInfo> getSubInfo() {
		return subInfo;
	}
	public void setSubInfo(List<RegionInfo> subInfo) {
		this.subInfo = subInfo;
	}
    
}