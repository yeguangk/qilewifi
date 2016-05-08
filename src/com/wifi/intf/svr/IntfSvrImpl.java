package com.wifi.intf.svr;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;

import com.wifi.cust.bo.CustGroup;
import com.wifi.cust.bo.CustPoint;
import com.wifi.cust.bo.PanelGroupDtl;
import com.wifi.cust.bo.ShowResInfo;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.ResAttr;

public class IntfSvrImpl implements IntfSvr {

	public String lgn(String sn) throws Exception {
		// TODO Auto-generated method stub
		//查找客户终端绑定表，获得营业分组，及营业点
		Map data=getCustInfoBySn(sn);
		if(data.get("POINT_ID")!=null&&!"".equals((String)data.get("POINT_ID"))){//根据营业分点查找模板
			data=getTplByPointId((String)data.get("POINT_ID"));
		}else if(data.get("GROUP_ID")!=null&&!"".equals((String)data.get("GROUP_ID"))){//根据营业分组查找模板
			data=getTplByGrpId((String)data.get("GROUP_ID"));
		}
		StringBuilder json;
		if(data.get("PANELS_ID")!=null&&!"".equals((String)data.get("PANELS_ID"))){
			json=new StringBuilder("{\"success\":true,\"tplId\":");
			json.append(data.get("PANELS_ID"));
			data=getTplVersion((String)data.get("PANELS_ID"));
			if(data.get("VERSION_VAL")!=null&&!"".equals((String)data.get("VERSION_VAL"))){
				json.append(",\"version\":").append(data.get("VERSION_VAL"));
			}else{
				json.append(",\"version\":1");
			}
			json.append("}");
		}else{
			json=new StringBuilder("{\"success\":false,\"msg\":\"设备没绑定界面模板\"}");
		}
		return json.toString();
	}
	/**
	 * 根据设备串号查找营业点设置
	 * @param sn
	 * @return
	 * @throws Exception
	 */
	private Map getCustInfoBySn(String sn) throws Exception{
		StringBuffer sql = new StringBuffer("select a.POINT_ID,a.GROUP_ID from cust_equipment a where a.EQUIP_NO =?");
		Map param = new HashMap();
		param.put("1", sn);
		return DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"POINT_ID","GROUP_ID"}, param); 
	}
	/**
	 * 营业分组，查找最新的模板
	 * @param groupId
	 * @return
	 * @throws Exception
	 */
	private Map getTplByGrpId(String groupId) throws Exception{
		StringBuffer sql = new StringBuffer("select Max(a.PANELS_ID) PANELS_ID from panel_group a where a.GROUP_ID =?");
		Map param = new HashMap();
		param.put("1", groupId);
		return DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"PANELS_ID"}, param); 
	}
	/**
	 * 营业点，查找最新的模板
	 * @param groupId
	 * @return
	 * @throws Exception
	 */
	private Map getTplByPointId(String pointId) throws Exception{
		StringBuffer sql = new StringBuffer("select Max(a.PANELS_ID) PANELS_ID from panel_group a where a.POINT_ID =?");
		Map param = new HashMap();
		param.put("1", pointId);
		return DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"PANELS_ID"}, param); 
	}
	private Map getTplVersion(String panelsId) throws Exception{
		StringBuffer sql = new StringBuffer("select a.VERSION_VAL from panel_group a where a.PANELS_ID =?");
		Map param = new HashMap();
		param.put("1", panelsId);
		return DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"VERSION_VAL"}, param); 
	}
	public String tplData(String tplId) throws Exception {
		// TODO Auto-generated method stub
		//查找模板明细
		List<PanelGroupDtl> panelList= qryGrpDtl(tplId);
		StringBuilder json=new StringBuilder("{");
		int i=1;
		for(PanelGroupDtl panel:panelList){
			if(i!=1){
				json.append(",");
			}else{
				i=2;
			}
			json.append("\"panel").append(panel.getPanelId()).append("\":{");
			json.append(panel.toJsonString2()).append(",\"boxList\":[");
			//查找每个明细面板项
			List<PanelBoxDef> boxList= qryBoxs(panel.getPanelId());
			int k=1;
			for(PanelBoxDef box:boxList){
				if(k!=1){
					json.append(",");
				}else{
					k=2;
				}
				//查找每个面板项内容
				json.append("{").append(box.toJsonString2(k)).append(",\"itemList\":[");
				//"id":"box1","type":"滚动","title":"滚动","itemList":
				List<ShowResInfo> itemList=qryBoxItems(box.getBoxId());
				int m=1;
				for(ShowResInfo item:itemList){
					//内容扩展属性
					if(m!=1){
						json.append(",");
					}else{
						m=2;
					}
					json.append("{").append(item.toJsonString());
					//资源扩展属性
					List<ResAttr> attrList=qryAttr(item.getResId());
					for(ResAttr attr:attrList){
						json.append(",\"").append(attr.getAttrName()).append("\":\"").append(attr.getAttrVal()).append("\"");
					}
					json.append("}");
				}
				json.append("]}");
			}
			json.append("]}");	
		}
		
		//查找每个明细面板项
		json.append("}");
		return json.toString();
	}
	 private List qryAttr(BigDecimal resId)throws Exception
	  {
		  StringBuffer sql = new StringBuffer("select a.* from res_attr a where a.RES_ID=? ");
		  Map param = new HashMap();
		  param.put("1", resId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ResAttr.class);
	  }
	private List qryBoxItems(BigDecimal boxId)throws Exception
	  {
		  StringBuffer sql = new StringBuffer("select a.PDTL_ID,b.* from panel_box_item a , res_info b where a.RES_ID=b.RES_ID and a.BOX_ID=? order by a.SHOW_NO ");
		  Map param = new HashMap();
		  param.put("1", boxId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, ShowResInfo.class);
	  }
	private List qryBoxs(BigDecimal panelId)throws Exception
	  {
		  StringBuffer sql = new StringBuffer("select a.* from panel_box_def a where a.PANEL_ID=? order by a.SHOW_NO ");
		  Map param = new HashMap();
		  param.put("1", panelId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, PanelBoxDef.class);
	  }
	private List qryGrpDtl(String grpId)throws Exception
	  {
		  StringBuffer sql = new StringBuffer("select a.*,b.TITLE,b.SCREEN_ID,b.IMAGE_URL from panel_group_dtl a , panel_def b where a.PANEL_ID=b.PANEL_ID and a.PANELS_ID=? order by a.SHOW_NO ");
		  Map param = new HashMap();
		  param.put("1", grpId);
		  return DbFactory.getSqlDdlDao().query(sql.toString(), param, PanelGroupDtl.class);
	  }
	public String custInfo(String custId) throws Exception {
		// TODO Auto-generated method stub
		//查找分组
		List<CustGroup> data=qryCustGrpPg(custId);
		StringBuilder json=new StringBuilder("{\"grpList\":[");
		int flg=1;
		for(CustGroup grp:data){
			if(flg!=1){
				json.append(",");
			}else{
				flg=2;
			}
			json.append("{").append(grp.toJsonString2()).append("}");
		}
		//查找营业点
		List<CustPoint> data2=qryPointPg(custId);
		json.append("],\"pointList\":[");
		flg=1;
		for(CustPoint grp:data2){
			if(flg!=1){
				json.append(",");
			}else{
				flg=2;
			}
			json.append("{").append(grp.toJsonString2()).append("}");
		}
		json.append("]}");
		return json.toString();
	}
	
	private List qryCustGrpPg(String custId)throws Exception
	  {	   
	    StringBuffer sql = new StringBuffer("select a.* from cust_group a where a.CUST_ID=?  ");
	    Map param = new HashMap();
	    param.put("1", custId);
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustGroup.class);
	  }
	  
	private List qryPointPg(String custId)throws Exception
	  {
	   
	    StringBuffer sql = new StringBuffer("select a.* from cust_point a where EXISTS( select 1 from cust_group b where a.GROUP_ID=b.GROUP_ID and b.CUST_ID=?) ");
	    Map param = new HashMap();
	    param.put("1",custId);
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustPoint.class);
	  }

}
