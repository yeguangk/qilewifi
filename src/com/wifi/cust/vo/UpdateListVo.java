package com.wifi.cust.vo;

import java.util.List;

import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.UpdateRange;

public class UpdateListVo {
	private  List<ClientUpdateInfo> infoList;

	public List<ClientUpdateInfo> getInfoList() {
		return infoList;
	}

	public void setInfoList(List<ClientUpdateInfo> infoList) {
		this.infoList = infoList;
	}
	
}
