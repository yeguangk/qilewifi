package com.wifi.cust.vo;

import java.util.List;

import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.UpdateRange;

public class UpdateVo {
	private ClientUpdateInfo mainInfo;
	private  List<UpdateRange> limitList;
	public ClientUpdateInfo getMainInfo() {
		return mainInfo;
	}
	public void setMainInfo(ClientUpdateInfo mainInfo) {
		this.mainInfo = mainInfo;
	}
	public List<UpdateRange> getLimitList() {
		return limitList;
	}
	public void setLimitList(List<UpdateRange> limitList) {
		this.limitList = limitList;
	}
	
}
