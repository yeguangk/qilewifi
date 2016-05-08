package com.wifi.cust.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
import org.frame.utils.SystemDateUtil;
public class PanelGrpSvrImpl
  implements PanelGrpSvr
{
 
  public List qryGrpPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.GROUP_NAME,c.POINT_NAME from panel_group a left join cust_group b on a.GROUP_ID=b.GROUP_ID left join cust_point c on c.POINT_ID=a.POINT_ID where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String panelId = (String)condMap.get("panelId");
    if (!StringUtil.isEmpty(panelId)) {
      param.put(String.valueOf(index++), panelId);
      sql.append(" and a.PANEL_ID=? ");
    }
    String resType = (String)condMap.get("resType");
    if (!StringUtil.isEmpty(resType)) {
      param.put(String.valueOf(index++), resType);
      sql.append(" and a.RES_TYPE=? ");
    }
    String title = (String)condMap.get("title");
    if (!StringUtil.isEmpty(title)) {
      param.put(String.valueOf(index++), "%"+title+"%");
      sql.append(" and a.PANELS_NAME like ? ");
    }
    String panelsName = (String)condMap.get("panelsName");
    if (!StringUtil.isEmpty(panelsName)) {
      param.put(String.valueOf(index++), "%"+panelsName+"%");
      sql.append(" and a.PANELS_NAME like ? ");
    }
    
    String screenId = (String)condMap.get("screenId");
    if (!StringUtil.isEmpty(screenId)) {
      param.put(String.valueOf(index++), screenId);
      sql.append(" and a.SCREEN_ID=? ");
    }
    String groupId = (String)condMap.get("groupId");
    if (!StringUtil.isEmpty(groupId)) {
      param.put(String.valueOf(index++), groupId);
      sql.append(" and a.GROUP_ID=? ");
    }
    String pointId = (String)condMap.get("pointId");
    if (!StringUtil.isEmpty(pointId)) {
      param.put(String.valueOf(index++), pointId);
      sql.append(" and a.POINT_ID=? ");
    }
    sql.append(UserUtil.custFilter2("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, PanelGroup.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, PanelGroup.class);
    }
  }
  
  public List qryGrpDtl(BigDecimal grpId)throws Exception
  {
	  StringBuffer sql = new StringBuffer("select a.*,b.TITLE,b.SCREEN_ID from panel_group_dtl a, panel_def b where a.PANEL_ID=b.PANEL_ID and a.PANELS_ID=? ");
	  Map param = new HashMap();
	  param.put("1", grpId);
	  return DbFactory.getSqlDdlDao().query(sql.toString(), param, PanelGroupDtl.class);
  }
  private BigDecimal getMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.PANELS_ID) maxval from panel_group a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  public void save(PanelGroup group,List<PanelGroupDtl> dtlList) throws Exception
  {
	if(group.getPanelsId()==null){
		group.setPanelsId(getMax());
		group.setVersionVal(BigDecimal.ONE);
		group.setCreateDate(SystemDateUtil.getSystemDate());
		group.setCreateMan(String.valueOf(UserUtil.getCurUser().getDepartId()));
		DbFactory.getSqlDdlDao().insert(group);
	}else{
		if(group.getVersionVal()!=null)
		    group.setVersionVal(group.getVersionVal().add(BigDecimal.ONE));//更新版本号
		else
			group.setVersionVal(BigDecimal.ONE);
		DbFactory.getSqlDdlDao().update(group);
	}
	DbFactory.getSqlDdlDao().delete(PanelGroupDtl.class,"PANELS_ID=?",new Object[]{group.getPanelsId()});
    for (PanelGroupDtl info : dtlList){
    	info.setPanelsId(group.getPanelsId());
    	DbFactory.getSqlDdlDao().insert(info);
    }
  }
  
  public void updateVersion(BigDecimal panelsId) throws Exception
  {
	  DbFactory.getSqlDdlDao().update(PanelGroup.class,"VERSION_VAL=VERSION_VAL+1","PANELS_ID=?",new Object[]{panelsId});
  }

@Override
public void delete(List<PanelGroup> infoList) throws Exception {
	// TODO Auto-generated method stub
	DbFactory.getSqlDdlDao().delete(infoList);
	for(PanelGroup group:infoList){
	   DbFactory.getSqlDdlDao().delete(PanelGroupDtl.class,"PANELS_ID=?",new Object[]{group.getPanelsId()});
	}
}

}