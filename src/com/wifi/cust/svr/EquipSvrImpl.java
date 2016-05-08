package com.wifi.cust.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.cust.bo.CustEquipment;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
public class EquipSvrImpl
  implements EquipSvr
{
 
  public List qryEquipPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.NAME,c.GROUP_NAME,d.POINT_NAME from cust_equipment a left join cust_info b on a.CUST_ID=b.CUST_ID  left join cust_group c on c.GROUP_ID=a.GROUP_ID  left join cust_point d on d.POINT_ID=a.POINT_ID where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String panelId = (String)condMap.get("custId");
    if (!StringUtil.isEmpty(panelId)) {
      param.put(String.valueOf(index++), panelId);
      sql.append(" and a.CUST_ID=? ");
    }
    String equipNo = (String)condMap.get("equipNo");
    if (!StringUtil.isEmpty(equipNo)) {
      param.put(String.valueOf(index++), "%"+equipNo+"%");
      sql.append(" and a.EQUIP_NO like ? ");
    }
    String groupId = (String)condMap.get("groupId");
    if (!StringUtil.isEmpty(groupId)) {
      param.put(String.valueOf(index++), groupId);
      sql.append(" and a.GROUP_ID = ? ");
    }
    String pointId = (String)condMap.get("pointId");
    if (!StringUtil.isEmpty(pointId)) {
      param.put(String.valueOf(index++), pointId);
      sql.append(" and a.POINT_ID=? ");
    }
    String equipNo2 = (String)condMap.get("equipNo2");
    if (!StringUtil.isEmpty(equipNo2)) {
      param.put(String.valueOf(index++),equipNo2);
      sql.append(" and a.EQUIP_NO = ? ");
    }
    //sql.append(UserUtil.getFilter("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustEquipment.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustEquipment.class);
    }
  }

@Override
public void save(CustEquipment equip) throws Exception {
	// TODO Auto-generated method stub
	Map cond=new HashMap();
	cond.put("equipNo2", equip.getEquipNo());
	List<CustEquipment> datalist=qryEquipPg(cond,null);
	if(equip.getEquipId()==null){
		if(datalist.size()>0){
			throw new Exception("设备号已经存在");
		}
		equip.setCustId(new BigDecimal(UserUtil.getCurUser().getDepartId()));
		equip.setEquipId(PkHelper.getPk("CUST_EQUIP"));
		DbFactory.getSqlDdlDao().insert(equip);
	}else{
		if(datalist.size()==1){
			CustEquipment tmp=datalist.get(0);
			if((tmp.getEquipId()).compareTo(equip.getEquipId())==0){
				DbFactory.getSqlDdlDao().update(equip);
			}else{
				throw new Exception("设备号已经被占用");
			}
		}else{
			throw new Exception("找不到原来的记录");
		}
	}
	
}

@Override
public void delete(CustEquipment equip) throws Exception {
	// TODO Auto-generated method stub
	Map cond=new HashMap();
	cond.put("1", equip.getEquipId());
	DbFactory.getSqlDdlDao().delAddUptSql("delete from cust_equipment where equip_id=?", cond);
}
  
}