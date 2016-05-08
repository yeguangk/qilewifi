package com.wifi.cust.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.bo.CustPoint;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
import org.frame.utils.SystemDateUtil;
public class PointSvrImpl
  implements PointSvr
{
 
  public List qryPointPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.NAME,c.GROUP_NAME,d.region_name from cust_point a  ");
    sql.append("left join cust_info b on a.CUST_ID=b.CUST_ID  ");
    sql.append(" left join cust_group c on c.GROUP_ID=a.GROUP_ID ");
    sql.append(" left join region_info d on d.region_no=a.region_no ");
    sql.append(" where 1=1");
    Map param = new HashMap();
    int index = 1;
    String regionNo = (String)condMap.get("regionNo");
    if (!StringUtil.isEmpty(regionNo)) {
      param.put(String.valueOf(index++), regionNo);
      sql.append(" and a.region_no=? ");
    }
    String pointId = (String)condMap.get("pointId");
    if (!StringUtil.isEmpty(pointId)) {
      param.put(String.valueOf(index++), pointId);
      sql.append(" and a.POINT_ID=? ");
    }
    String pointName = (String)condMap.get("pointName");
    if (!StringUtil.isEmpty(pointName)) {
    	param.put(String.valueOf(index++), "%"+pointName+"%");
        sql.append(" and a.POINT_NAME like ? ");
    }
    String name = (String)condMap.get("name");
    if (!StringUtil.isEmpty(name)) {
      param.put(String.valueOf(index++), "%"+name+"%");
      sql.append(" and b.NAME like ? ");
    }
    sql.append(UserUtil.custFilter2("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustPoint.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustPoint.class);
    }
  }
  
  public void save(CustPoint point) throws Exception
  {
	point.setCreateMan(UserUtil.getCurUser().getDepartId());
	point.setCreateDate(SystemDateUtil.getSystemDate());
	if(point.getPointId()==null){
		DbFactory.getSqlDdlDao().insert(point);
	}else{
		DbFactory.getSqlDdlDao().update(point);
	}
  }

	@Override
	public void delete(List<CustPoint> infoList) throws Exception {
		// TODO Auto-generated method stub
		DbFactory.getSqlDdlDao().delete(infoList);
	}

	@Override
	public List qryPointName() throws Exception {
		 StringBuffer sql = new StringBuffer("select cust_point.point_id, cust_point.point_name from cust_point ");
		 return DbFactory.getSqlDdlDao().query(sql.toString(), new HashMap(), CustPoint.class);
	}
  
}