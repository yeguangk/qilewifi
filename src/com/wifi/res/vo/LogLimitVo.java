package com.wifi.res.vo;

import java.util.List;

import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.UpdateRange;
import com.wifi.res.bo.PublishLog;
import com.wifi.res.bo.PublishRange;

public class LogLimitVo {
	private PublishLog mainInfo;
	private  List<PublishRange> limitList;
	public PublishLog getMainInfo() {
		return mainInfo;
	}
	public void setMainInfo(PublishLog mainInfo) {
		this.mainInfo = mainInfo;
	}
	public List<PublishRange> getLimitList() {
		return limitList;
	}
	public void setLimitList(List<PublishRange> limitList) {
		this.limitList = limitList;
	}
	
}
