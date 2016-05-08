package com.wifi.res.vo;

import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResOwnerTag;
import com.wifi.res.bo.ResSubInfo;

import java.util.List;

public class ResVo
{
	private ResInfo resInfo;
	private List<ResFile> resList;
	private List<ResAttr> attrList;
	private List<ResOwnerTag> tagList;	
	private List<ResSubInfo> subResList;
	
	public List<ResSubInfo> getSubResList() {
		return subResList;
	}
	public void setSubResList(List<ResSubInfo> subResList) {
		this.subResList = subResList;
	}
	public List<ResOwnerTag> getTagList() {
		return tagList;
	}
	public void setTagList(List<ResOwnerTag> tagList) {
		this.tagList = tagList;
	}
	public ResInfo getResInfo() {
		return resInfo;
	}
	public void setResInfo(ResInfo resInfo) {
		this.resInfo = resInfo;
	}
	public List<ResFile> getResList() {
		return resList;
	}
	public void setResList(List<ResFile> resList) {
		this.resList = resList;
	}
	public List<ResAttr> getAttrList() {
		return attrList;
	}
	public void setAttrList(List<ResAttr> attrList) {
		this.attrList = attrList;
	}
    
}