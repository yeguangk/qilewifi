package com.wifi.res.vo;

import com.wifi.res.bo.ResType;

import java.util.List;

public class ResTypeVo
{
  private ResType curInfo;
  public ResType getCurInfo() {
	return curInfo;
}
public void setCurInfo(ResType curInfo) {
	this.curInfo = curInfo;
}
public List<ResType> getSubInfo() {
	return subInfo;
}
public void setSubInfo(List<ResType> subInfo) {
	this.subInfo = subInfo;
}
private List<ResType> subInfo;
  
}