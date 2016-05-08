package com.wifi.column.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.PkHelper;
import com.wifi.column.bo.ColumnInfo;
import com.wifi.column.bo.ColumnResList;
import com.wifi.intf.dao.JsonFactory;
import com.wifi.res.bo.ResType;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.utils.SystemDateUtil;
public class ColumnInfoSvrImpl
  implements ColumnInfoSvr
{
  public List getSubNode(BigDecimal parentId)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentId);
    
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.* ");
    sql.append("  from column_info a   ");
    sql.append(" where a.parent_column_id = ? ");
    sql.append(UserUtil.custFilter("a"));
    sql.append(" order by a.column_id asc ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, ColumnInfo.class);
    return list;
  }

  public void save(ColumnInfo colInfo,List<ColumnInfo> subList) throws Exception
  {
	if((colInfo.getColumnId()).compareTo(BigDecimal.ZERO)!=0){
		colInfo.setCustId(new BigDecimal(UserUtil.getCurUser().getDepartId()));
		DbFactory.getSqlDdlDao().update(colInfo);
	} 
	Map param = new HashMap();
	param.put("1", colInfo.getColumnId());
	param.put("2", UserUtil.getCurUser().getDepartId());
	DbFactory.getSqlDdlDao().delAddUptSql("delete from column_info where parent_column_id=? and cust_id=?", param);
    for (ColumnInfo info : subList){
    	info.setParentColumnId(colInfo.getColumnId());
    	info.setCustId(new BigDecimal(UserUtil.getCurUser().getDepartId()));
//    	info.setResType(resType.getResType());
//    	info.setCreateDate(SystemDateUtil.getSystemDate());
//    	info.setCreateMan(String.valueOf(UserUtil.getCurUser().getDepartId()));
        if (info.getColumnId()==null){
        	info.setColumnId(PkHelper.getPk("COLUMN_INFO"));            
        }
        DbFactory.getSqlDdlDao().insert(info);
    }
  }

	@Override
	public void delete(List<ColumnInfo> subList) throws Exception {
		// TODO Auto-generated method stub
		for(ColumnInfo info:subList){
			if(info.getColumnId()!=null){
				if(hasChild(info.getColumnId())){
					throw new Exception("【"+info.getColumnName()+"】还有子栏目，不能删除");
				}
				if(isUse(info.getColumnId())){
					throw new Exception("【"+info.getColumnName()+"】该栏目下还有资源，不能删除");
				}
			}
		}
		for(ColumnInfo info:subList){
			if(info.getColumnId()!=null){
				DbFactory.getSqlDdlDao().delete(info);
			}
		}
	}
	private boolean hasChild(BigDecimal id) throws Exception{
		Map param = new HashMap();
		param.put("1", id);
		long cnt=DbFactory.getSqlDdlDao().queryCount("SELECT 1 FROM column_info WHERE parent_column_id=?", param);
		if(cnt>0){
			return true;
		}else{
			return false;
		}
	}
	private boolean isUse(BigDecimal id) throws Exception{
		Map param = new HashMap();
		param.put("1", id);
		long cnt=DbFactory.getSqlDdlDao().queryCount("SELECT 1 FROM panel_box_item WHERE column_id=?", param);
		if(cnt>0){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public void deleteClsRes(List<ColumnResList> colResList) throws Exception {
		// TODO Auto-generated method stub
		DbFactory.getSqlDdlDao().delete(colResList);
	}

	@Override
	public List qryClsRes(BigDecimal resId) throws Exception {
		Map param = new HashMap();
		param.put("1", resId);
		List list = DbFactory.getSqlDdlDao().query("select a.*,b.res_title from column_res_list a left join res_info b on a.res_id=b.res_id where a.column_id=?",
				param, ColumnResList.class);
		return list;
	}

	@Override
	public void save(List<ColumnResList> colResList) throws Exception {
		// TODO Auto-generated method stub
		Map param = new HashMap();
		param.put("1", colResList.get(0).getColumnId());
		DbFactory.getSqlDdlDao().delAddUptSql("delete from column_res_list where column_id=?", param);
		DbFactory.getSqlDdlDao().insert(colResList);
	}

	@Override
	public List qryColumnIdAndNameByCustId(String custId) throws Exception {
		String whereCustId = custId;
		if (whereCustId == null || whereCustId.length() == 0){
			whereCustId = UserUtil.getCurUser().getDepartId();
		}
		Map param = new HashMap();
		param.put("1", whereCustId);
		String qrySql ="SELECT * FROM column_info WHERE parent_column_id = 0 AND cust_id = ?";
		List columnInfos = DbFactory.getSqlDdlDao().query(qrySql,param, ColumnInfo.class);
		return columnInfos;
	}
}