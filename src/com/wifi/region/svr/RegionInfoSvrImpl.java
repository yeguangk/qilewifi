package com.wifi.region.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.region.bo.RegionInfo;
import com.wifi.res.bo.ResType;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.utils.SystemDateUtil;
public class RegionInfoSvrImpl
  implements RegionInfoSvr
{
  public List getSubNode(BigDecimal parentId)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentId);
    
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.* ");
    sql.append("  from region_info a  ");
    sql.append(" where a.PARENT_NO = ? ");
    //不做用户区分 20160105
    // sql.append(UserUtil.custFilter2("a"));
    sql.append(" order by a.region_no asc ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, RegionInfo.class);
    return list;
  }

  public void save(RegionInfo regionInfo,List<RegionInfo> subList) throws Exception
  {
	if(!"0".equals(regionInfo.getRegionNo())){
		//regionInfo.setCustId(new BigDecimal(UserUtil.getCurUser().getDepartId()));
		DbFactory.getSqlDdlDao().update(regionInfo);
	} 
	Map param = new HashMap();
	param.put("1", regionInfo.getRegionNo());
	DbFactory.getSqlDdlDao().delAddUptSql("delete from region_info where parent_no=? ", param);
    for (RegionInfo info : subList){
    	info.setParentNo(regionInfo.getRegionNo());
    	info.setCreateMan(UserUtil.getCurUser().getDepartId());
    	info.setCreateDate(SystemDateUtil.getSystemDate());
    	
        if (StringUtils.isEmpty(info.getRegionNo())){
        	info.setRegionNo(PkHelper.getPk("REGION_NO").toString());            
        }
        DbFactory.getSqlDdlDao().insert(info);
    }
  }

	@Override
	public void delete(List<RegionInfo> subList) throws Exception {
		// TODO Auto-generated method stub
		for(RegionInfo info:subList){
			if(info.getRegionNo()!=null){
				if(hasChild(info.getRegionNo())){
					throw new Exception("【"+info.getRegionName()+"】还有下级区域，不能删除");
				}				
			}
		}
		for(RegionInfo info:subList){
			if(info.getRegionNo()!=null){
				DbFactory.getSqlDdlDao().delete(info);
			}
		}
	}
	private boolean hasChild(String regionNo) throws Exception{
		Map param = new HashMap();
		param.put("1", regionNo);
		long cnt=DbFactory.getSqlDdlDao().queryCount("SELECT 1 FROM region_info WHERE PARENT_NO=?", param);
		if(cnt>0){
			return true;
		}else{
			return false;
		}
	}
}