package com.wifi.res.svr;

import com.alibaba.fastjson.JSONObject;
import com.mz.sys.bo.SysRole;
import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.cust.svr.PreSvr;
import com.wifi.cust.svr.PreSvrImpl;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResOwnerTag;
import com.wifi.res.bo.ResSpInfo;
import com.wifi.res.bo.ResSubInfo;
import com.wifi.res.bo.ResType;
import com.wifi.res.vo.SubResVo;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
import org.frame.utils.SystemDateUtil;
public class ResSvrImpl
  implements ResSvr
{
 
  public List qryInfoPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,'' as TYPE_NAME from res_info a  where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String resId = (String)condMap.get("resId");
    if (!StringUtil.isEmpty(resId)) {
      param.put(String.valueOf(index++), resId);
      sql.append(" and a.RES_ID=? ");
    }
    String resType = (String)condMap.get("resType");
    if (!StringUtil.isEmpty(resType)) {
      param.put(String.valueOf(index++), resType);
      sql.append(" and a.RES_TYPE=? ");
    }
    String resTitle = (String)condMap.get("resTitle");
    if (!StringUtil.isEmpty(resTitle)) {
      param.put(String.valueOf(index++), "%"+resTitle+"%");
      sql.append(" and a.RES_TITLE like ? ");
    }
    String feeType = (String)condMap.get("feeType");
    if (!StringUtil.isEmpty(feeType)) {
      param.put(String.valueOf(index++), feeType);
      sql.append(" and a.fee_type = ? ");
    }
    
    String state = (String)condMap.get("state");
    if (!StringUtil.isEmpty(state)) {
      param.put(String.valueOf(index++), state);
      sql.append(" and a.CHECK_STATUS = ? ");
    }
    
    String keyWord = (String)condMap.get("keyWord");
    if (!StringUtil.isEmpty(keyWord)) {
      param.put(String.valueOf(index++), "%"+keyWord+"%");
      sql.append(" and ( a.RES_TITLE like ? ");
      param.put(String.valueOf(index++), keyWord);
      sql.append(" or a.RES_ID= ? )");
    }
    String column_id = (String)condMap.get("columnId");
    if (!StringUtil.isEmpty(column_id)){
    	param.put(String.valueOf(index++), column_id);
    	 sql.append(" and a.res_id in ( " +
    			 	"select res_id  from column_res_list where column_id  in ( " +
    			 	"select column_id from column_info  where FIND_IN_SET(column_id, qryChildColInfo(? ) ) ) )");
    }
//    
//    String typeId = (String)condMap.get("typeId");
//    if (!StringUtil.isEmpty(typeId)) {
//      param.put(String.valueOf(index++), typeId);
//      sql.append(" and a.TYPE_ID=? ");
//    }
    sql.append(UserUtil.custFilter2("a"));
    List infos = null;
    if(pageInfo!=null){
    	Long count = DbFactory.getSqlDdlDao().queryCount(sql.toString(), param);
	    pageInfo.setRowTotal(count != null ? count : 0);
	    //infos = DbFactory.getSqlDdlDao().query(sql.toString(), param, ResInfo.class, pageInfo);
    	//pageInfo.setRowTotal(100);
    	infos = DbFactory.getSqlDdlDao().query(sql.toString(), param, ResInfo.class, pageInfo);
	    return infos;
    }else{
    	infos = DbFactory.getSqlDdlDao().query(sql.toString(), param, ResInfo.class);
    	return infos;
    }
  }
  
  public List qryFile(BigDecimal resId,String flg)throws Exception
  {
	  if("all".equals(flg)){
		  StringBuffer sql = new StringBuffer("select a.* from res_file a where a.RES_ID=? ");
		  sql.append(" or EXISTS( ");
		  sql.append(" select 1 from sub_res b where a.sub_res_id=b.sub_res_id and b.res_id=?  ) ");
		  Map param = new HashMap();
		  param.put("1", resId);
		  param.put("2", resId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResFile.class);		 
	  }else{
		  StringBuffer sql = new StringBuffer("select a.* from res_file a where a.RES_ID=? ");
		  Map param = new HashMap();
		  param.put("1", resId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResFile.class); 
	  }
	  
  }
  
  public List qryAttr(BigDecimal resId)throws Exception
  {
	  StringBuffer sql = new StringBuffer("select a.* from res_attr a where a.RES_ID=? ");
	  Map param = new HashMap();
	  param.put("1", resId);
	  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResAttr.class);
  }
  public List qryTag(BigDecimal resId)throws Exception
  {
	  StringBuffer sql = new StringBuffer("select a.* from res_owner_tag a where a.RES_ID=? ");
	  Map param = new HashMap();
	  param.put("1", resId);
	  List result = DbFactory.getSqlDdlDao().query(sql.toString(), param, ResOwnerTag.class);
	  if (result != null && result.size() > 0){
		  List returnResult = new ArrayList<ResOwnerTag>();
		  for (int i = 0; i < result.size(); i++){
			  ResOwnerTag resOwnerTag = (ResOwnerTag)result.get(i);
			  String tagIds = resOwnerTag.getTagId();
			  if (tagIds != null && tagIds.length() > 0){
				  String[] tmpTagIds =  tagIds.split(",");
				  for (int j = 0; j < tmpTagIds.length; j++){
					  ResOwnerTag resOwnerTag_colne = (ResOwnerTag) resOwnerTag.cloneObject();
					  resOwnerTag_colne.setKeyId(new BigDecimal(resOwnerTag_colne.getKeyId().intValue() + j));
					  resOwnerTag_colne.setTagId(tmpTagIds[j]);
					  returnResult.add(resOwnerTag_colne);
				  }
			  }else{
				  returnResult.add(resOwnerTag);
			  }
		  }
		  return returnResult;
	  }
	  return null;
  }
  private BigDecimal getMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.RES_ID) maxval from res_info a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  public void save(ResInfo resInfo,List<ResFile> fileList,
		  List<ResAttr> attrList,List<ResOwnerTag> tagList,
		  List<ResSubInfo> subResList
		  ) throws Exception
  {
	if(resInfo.getResId()==null){
		resInfo.setResId(getMax());
		resInfo.setCreateDate(SystemDateUtil.getSystemDate());
		resInfo.setCreateMan(String.valueOf(UserUtil.getCurUser().getDepartId()));
		DbFactory.getSqlDdlDao().insert(resInfo);
	}else{
		DbFactory.getSqlDdlDao().update(resInfo);
		DbFactory.getSqlDdlDao().delete(ResFile.class,"RES_ID=?",new Object[]{resInfo.getResId()});
		DbFactory.getSqlDdlDao().delete(ResAttr.class,"RES_ID=?",new Object[]{resInfo.getResId()});
		DbFactory.getSqlDdlDao().delete(ResOwnerTag.class,"RES_ID=?",new Object[]{resInfo.getResId()});
	}
	//文件前缀缓存
	PreSvr pre =new PreSvrImpl();
	if(fileList.size()>0){
		ResFile file=fileList.get(fileList.size()-1);
		pre.save(file.getPre(), "1");
	}
	for (ResFile info : fileList){
    	info.setResId(resInfo.getResId());
    	DbFactory.getSqlDdlDao().insert(info);
    }
    for (ResAttr info : attrList){
    	info.setResId(resInfo.getResId());
    	DbFactory.getSqlDdlDao().insert(info);
    }
    if (tagList.size() > 0){
    	StringBuilder tagIds = new StringBuilder();
	    for (int k = 0; k < tagList.size() - 1; k++){
	    	String tagId = tagList.get(k).getTagId();
	    	if (tagId != null && tagId.length() > 0){
	    		tagIds.append(tagId).append(",");
	    	}
	    }
	    ResOwnerTag info = tagList.get(tagList.size() - 1);
	    tagIds.append(info.getTagId());
	    info.setTagId(tagIds.toString());
	    info.setKeyId(PkHelper.getPk("RES_OWNER_TAG"));
    	info.setResId(resInfo.getResId());
    	DbFactory.getSqlDdlDao().insert(info);
    }
    List<ResFile> subFiles=null;
    for (ResSubInfo info : subResList){
    	info.setResId(resInfo.getResId());
    	if(!StringUtils.isEmpty(info.getSubResFiles())){
        	subFiles=JSONObject.parseArray(info.getSubResFiles(), ResFile.class);
        	//新增或修改过的
        	saveSub(info, subFiles);
    	}else {
    		if(info.getSubResId()==null){//新增的，没有资源文件
    		  saveSub(info,new ArrayList());
    		}else{//旧的，没修改过
    		  //DbFactory.getSqlDdlDao().(info);
    		}
    	}    	
    }
    //文件前缀缓存
    if(subFiles!=null&&subFiles.size()>0){		
		ResFile file=subFiles.get(subFiles.size()-1);
		pre.save(file.getPre(), "2");
	}
  }

@Override
public List qrySubInfo(BigDecimal resId) throws Exception {
	 StringBuffer sql = new StringBuffer("select a.* from sub_res a where a.res_id=? and a.seq_id <> -1 order by a.seq_id ");
	  Map param = new HashMap();
	  param.put("1", resId);
	  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResSubInfo.class);
}
@Override
public List qrySubFile(BigDecimal subResId) throws Exception {
	 StringBuffer sql = new StringBuffer("select a.* from res_file a where a.sub_res_id=? ");
	  Map param = new HashMap();
	  param.put("1", subResId);
	  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResFile.class);
}
@Override
public void saveSub(ResSubInfo subInfo, List<ResFile> fileList)
		throws Exception {
	if(subInfo.getSubResId()==null){
		subInfo.setSubResId(PkHelper.getPk("SUB_RES"));
		DbFactory.getSqlDdlDao().insert(subInfo);
	}else{
		DbFactory.getSqlDdlDao().update(subInfo);
		DbFactory.getSqlDdlDao().delete(ResFile.class,"SUB_RES_ID=?",new Object[]{subInfo.getSubResId()});
	}
	
	for (ResFile info : fileList){
    	info.setSubResId(subInfo.getSubResId());
    	DbFactory.getSqlDdlDao().insert(info);
    }
}

	@Override
	public void deleteSub(List<ResSubInfo> subInfoList) throws Exception {
		// TODO Auto-generated method stub
		DbFactory.getSqlDdlDao().delete(subInfoList);
		Map param = new HashMap();
		for(ResSubInfo info:subInfoList){
			param.put("1", info.getSubResId());
			DbFactory.getSqlDdlDao().delAddUptSql("delete from res_file where sub_res_id=?", param);
		}
	}
	
	public void deleteRes(List<ResInfo> resList) throws Exception
	  {
		
		DbFactory.getSqlDdlDao().delete(resList);
		Map param = new HashMap();
		for(ResInfo info:resList){
			param.put("1", info.getResId());
			//删除分集信息
			List<ResSubInfo> dataList=qrySubInfo(info.getResId());
			deleteSub(dataList);
			//删除其他信息
			DbFactory.getSqlDdlDao().delAddUptSql("delete from res_file where res_id=?", param);
			DbFactory.getSqlDdlDao().delAddUptSql("delete from res_attr where res_id=?", param);
			DbFactory.getSqlDdlDao().delAddUptSql("delete from res_owner_tag where res_id=?", param);
		}
		
	  }

	@Override
	public void updateState(String resId,String spInfo,String state) throws Exception {
//		if("0".equals(state)){
//			resetState(resList);
//			return;
//		}
		// TODO Auto-generated method stub
		StringBuilder sql=new StringBuilder("update res_info set check_status=? ");
		sql.append(",check_man=?,check_Date=?");
		sql.append(" where res_id=? ");
		String strSql=sql.toString();
		Map param = new HashMap();
		param.put("1", state);
		param.put("2", UserUtil.getCurUser().getLoginCode());
		param.put("3", SystemDateUtil.getSystemDate());
		param.put("4", resId);
		DbFactory.getSqlDdlDao().delAddUptSql(strSql, param);
		//res_sp_info
		ResSpInfo sp=new ResSpInfo();
		sp.setRecId(PkHelper.getPk("RES_SP_INFO"));
		sp.setResId(new BigDecimal(resId));
		sp.setSpDate(SystemDateUtil.getSystemDate());
		sp.setSpMan(UserUtil.getCurUser().getLoginCode());
		sp.setSpInfo(spInfo);
		DbFactory.getSqlDdlDao().insert(sp);
	}
	public List qrySpInfo(String resId) throws  Exception{
		 StringBuffer sql = new StringBuffer("SELECT * FROM res_sp_info A WHERE A.res_id=1 order by A.rec_id DESC ");
		  Map param = new HashMap();
		  param.put("1", resId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResSpInfo.class);
	}
	
	private void resetState(List<ResInfo> resList) throws Exception {
		// TODO Auto-generated method stub
		Map param = new HashMap();
		for(ResInfo info:resList){
			param.put("1", info.getResId());
			DbFactory.getSqlDdlDao().delAddUptSql("update res_info set check_status=0,publish_man=null,publish_Date=null,check_man=null,check_Date=null where res_id=? ", param);
		}
	}

	@Override
	public void save2(ResInfo resInfo, List<ResFile> fileList,
			List<ResAttr> attrList, List<ResOwnerTag> tagList,
			Collection<SubResVo> subResList) throws Exception {
		// TODO Auto-generated method stub
		if(resInfo.getResId()==null){
			BigDecimal resId = getMax();
			resInfo.setResId(resId);
			if (attrList != null && attrList.size() > 0){
				for (ResAttr resAttr : attrList){
					resAttr.setResId(resId);
				}
			}
			/*if (subResList != null && subResList.size() > 0 && subResList instanceof HashMap){
				HashMap subResList_map = (HashMap)subResList;
				for(Object key : subResList_map.keySet()){
					SubResVo subResVo = (SubResVo)subResList_map.get(key);
					ResSubInfo subInfo = subResVo.getSubInfo();
					subInfo.setResId(resId);
					subResVo.setSubInfo(subInfo);
				}
			}*/
			resInfo.setCreateDate(SystemDateUtil.getSystemDate());
			resInfo.setCreateMan(String.valueOf(UserUtil.getCurUser().getDepartId()));
			DbFactory.getSqlDdlDao().insert(resInfo);
		}else{
			DbFactory.getSqlDdlDao().update(resInfo);
			DbFactory.getSqlDdlDao().delete(ResFile.class,"RES_ID=?",new Object[]{resInfo.getResId()});
			DbFactory.getSqlDdlDao().delete(ResAttr.class,"RES_ID=?",new Object[]{resInfo.getResId()});
			DbFactory.getSqlDdlDao().delete(ResOwnerTag.class,"RES_ID=?",new Object[]{resInfo.getResId()});
		}

		for (ResFile info : fileList){
	    	info.setResId(resInfo.getResId());
	    	DbFactory.getSqlDdlDao().insert(info);
	    }
		
	    for (ResAttr info : attrList){
	    	info.setResId(resInfo.getResId());
	    	DbFactory.getSqlDdlDao().insert(info);
	    }
	    
	    if (tagList.size() > 0){
	    	StringBuilder tagIds = new StringBuilder();
		    for (int k = 0; k < tagList.size() - 1; k++){
		    	String tagId = tagList.get(k).getTagId();
		    	if (tagId != null && tagId.length() > 0){
		    		tagIds.append(tagIds).append(",");
		    	}
		    }
		    ResOwnerTag info = tagList.get(tagList.size() - 1);
		    tagIds.append(info.getTagId());
		    info.setTagId(tagIds.toString());
		    info.setKeyId(PkHelper.getPk("RES_OWNER_TAG"));
	    	info.setResId(resInfo.getResId());
	    	DbFactory.getSqlDdlDao().insert(info);
	    }
	    for (SubResVo vo : subResList){
	    	ResSubInfo info=vo.getSubInfo();
	    	BigDecimal resId = resInfo.getResId();
	    	info.setResId(resId);
	    	List<ResFile> resFiles = vo.getFileList();
	    	if (resFiles != null && resFiles.size() > 0){
	    		for (ResFile resFile :resFiles){
	    			resFile.setResId(resId);
	    		}
	    	}
	    	
	    	
	    	saveSubforUpLoad(info, vo.getFileList());
	    }
	}
	
	private void saveSubforUpLoad(ResSubInfo subInfo, List<ResFile> fileList) throws SQLException, Exception{
		if(subInfo.getSubResId()==null && !"-1".equals(subInfo.getSeqId().toString())){
			subInfo.setSubResId(PkHelper.getPk("SUB_RES"));
			DbFactory.getSqlDdlDao().insert(subInfo);
		}
		
		for (ResFile info : fileList){
			if (!"-1".equals(subInfo.getSeqId().toString())){
				info.setSubResId(subInfo.getSubResId());
			}
	    	DbFactory.getSqlDdlDao().insert(info);
	    }
	}

}