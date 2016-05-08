package com.wifi.cust.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.UpdateRange;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
import org.frame.utils.SystemDateUtil;
public class UptPkgSvrImpl
  implements UptPkgSvr
{
 
  public List qryUptPkgPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.column_name from client_update_info a left join column_info b on a.column_id=b.column_id where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String uptId = (String)condMap.get("uptId");
    if (!StringUtil.isEmpty(uptId)) {
      param.put(String.valueOf(index++), uptId);
      sql.append(" and a.UPT_ID=? ");
    }
    String columnId = (String)condMap.get("columnId");
    if (!StringUtil.isEmpty(columnId)) {
    	param.put(String.valueOf(index++), columnId);
        sql.append(" and a.column_Id = ? ");
    }
    String platformNo = (String)condMap.get("platformNo");
    if (!StringUtil.isEmpty(platformNo)) {
      param.put(String.valueOf(index++), "%"+platformNo+"%");
      sql.append(" and a.PLATFORM_NO like ? ");
    }
    sql.append(UserUtil.custFilter("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, ClientUpdateInfo.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, ClientUpdateInfo.class);
    }
  }
  
  public void save(ClientUpdateInfo uptPkg,List<UpdateRange> limitList) throws Exception
  {
	uptPkg.setCustId(new BigDecimal(UserUtil.getCurUser().getDepartId()));
	if(uptPkg.getUptId()==null){
		uptPkg.setUptId(PkHelper.getPk("CLIENT_UPDATE_INFO"));		
		DbFactory.getSqlDdlDao().insert(uptPkg);
	}else{
		DbFactory.getSqlDdlDao().update(uptPkg);
		Map param = new HashMap();
		param.put("1", uptPkg.getUptId());
		DbFactory.getSqlDdlDao().delAddUptSql("delete from update_range where upt_id=?", param);
	}
	for(UpdateRange rang:limitList){
		rang.setUptId(uptPkg.getUptId());
		DbFactory.getSqlDdlDao().insert(rang);
	}
  }

@Override
public List qryUptLimit(Map condMap) throws Exception {
	StringBuffer sql = new StringBuffer("select a.*,b.POINT_NAME,c.REGION_NAME from update_range a"); 
	sql.append(" LEFT JOIN cust_point b on a.POINT_ID=b.POINT_ID ");
	sql.append(" LEFT JOIN region_info c on a.REGION_NO=c.REGION_NO ");
	sql.append(" where a.UPT_ID=? ");
	Map param = new HashMap();
	param.put("1", condMap.get("uptId"));
	return DbFactory.getSqlDdlDao().query(sql.toString(), param, UpdateRange.class);
}

@Override
public void delete(List<ClientUpdateInfo> infoList) throws Exception {
	// TODO Auto-generated method stub
	DbFactory.getSqlDdlDao().delete(infoList);
	Map param = new HashMap();
	for(ClientUpdateInfo info:infoList){
		param.put("1", info.getUptId());
		DbFactory.getSqlDdlDao().delAddUptSql("delete from update_range where upt_id=?", param);
	}
}
  
}