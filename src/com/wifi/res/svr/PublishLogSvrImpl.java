package com.wifi.res.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.cust.bo.UpdateRange;
import com.wifi.res.bo.PublishLog;
import com.wifi.res.bo.PublishRange;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
public class PublishLogSvrImpl
  implements PublishLogSvr
{
 
	public List qryLogPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.column_Name from publish_log a LEFT JOIN column_info b on b.Column_id=a.Column_id where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String colId = (String)condMap.get("columnId");
    if (!StringUtil.isEmpty(colId)) {
      param.put(String.valueOf(index++), colId);
      sql.append(" and a.column_id=? ");
    }
    sql.append(UserUtil.custFilter("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, PublishLog.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, PublishLog.class);
    }
  }

	@Override
	public void save(PublishLog mainInfo, List<PublishRange> limitList)
			throws Exception {
		if( mainInfo.getPublishId()==null){
			return ;
		}
		Map param=new HashMap();
		param.put("1", mainInfo.getPublishId());
		DbFactory.getSqlDdlDao().delAddUptSql("delete from publish_range where publish_id=?", param);
		for(PublishRange rang:limitList){
			rang.setPublishId(mainInfo.getPublishId());
			DbFactory.getSqlDdlDao().insert(rang);
		}
	}
	public List qryLogLimit(Map condMap) throws Exception {
		StringBuffer sql = new StringBuffer("select a.*,b.POINT_NAME,c.REGION_NAME from publish_range a"); 
		sql.append(" LEFT JOIN cust_point b on a.POINT_ID=b.POINT_ID ");
		sql.append(" LEFT JOIN region_info c on a.REGION_NO=c.REGION_NO ");
		sql.append(" where a.publish_id=? ");
		Map param = new HashMap();
		param.put("1", condMap.get("publishId"));
		return DbFactory.getSqlDdlDao().query(sql.toString(), param, PublishRange.class);
	}
}