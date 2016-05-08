package com.wifi.res.svr;

import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResOwnerTag;
import com.wifi.res.bo.ResSubInfo;
import com.wifi.res.vo.SubResVo;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.frame.db.bo.BaseBo;
import org.frame.db.page.PageUtil;

public interface ResSvr
{
	public List qryInfoPg(Map condMap,PageUtil pageInfo)throws Exception;
	  
	public List qryFile(BigDecimal resId,String flg)throws Exception;
	  
	public List qryAttr(BigDecimal resId)throws Exception;
    
	public List qryTag(BigDecimal resId)throws Exception;
	
	public void save(ResInfo resInfo,List<ResFile> fileList,
			List<ResAttr> attrList,List<ResOwnerTag> tagList,
			List<ResSubInfo> subResList
			) throws Exception;
	public void deleteRes(List<ResInfo> resList) throws Exception;
	
	public List qrySubInfo(BigDecimal resId)throws Exception;
	public List qrySubFile(BigDecimal subResId) throws Exception;
	public void saveSub(ResSubInfo subInfo,List<ResFile> fileList) throws Exception;
	public void deleteSub(List<ResSubInfo> subInfoList) throws Exception;

	public void updateState(String resId,String spInfo,String state)throws Exception;
	
	public List qrySpInfo(String resId) throws  Exception;
	
	public void save2(ResInfo resInfo,List<ResFile> fileList,
			  List<ResAttr> attrList,List<ResOwnerTag> tagList,
			  Collection<SubResVo> subResList
			  ) throws Exception;
	
}