package com.mz.sys.svr;

import java.util.List;

import com.mz.sys.bo.DdValue;
public interface DdSvr
{
	public List qryValue(String ddCode)throws Exception;
	  
	public List qryCode()throws Exception;
	  
	public void save(String code,List<DdValue> dtlList) throws Exception;
}