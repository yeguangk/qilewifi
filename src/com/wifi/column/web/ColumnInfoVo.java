package com.wifi.column.web;

import com.wifi.column.bo.ColumnInfo;

import java.util.List;

public class ColumnInfoVo {
	private ColumnInfo colInfo;
	private List<ColumnInfo> subInfo;
    
	public ColumnInfo getColInfo() {
		return colInfo;
	}

	public void setColInfo(ColumnInfo colInfo) {
		this.colInfo = colInfo;
	}

	public List<ColumnInfo> getSubInfo() {
		return subInfo;
	}

	public void setSubInfo(List<ColumnInfo> subInfo) {
		this.subInfo = subInfo;
	}

}