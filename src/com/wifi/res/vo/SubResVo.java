package com.wifi.res.vo;

import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResSubInfo;

import java.util.List;

public class SubResVo
{
	private ResSubInfo subInfo;
	private List<ResFile> fileList;
	public ResSubInfo getSubInfo() {
		return subInfo;
	}
	public void setSubInfo(ResSubInfo subInfo) {
		this.subInfo = subInfo;
	}
	public List<ResFile> getFileList() {
		return fileList;
	}
	public void setFileList(List<ResFile> fileList) {
		this.fileList = fileList;
	}
	
}