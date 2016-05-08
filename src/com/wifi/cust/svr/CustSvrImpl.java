package com.wifi.cust.svr;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;

import com.wifi.cust.bo.CustGroup;
import com.wifi.cust.bo.CustInfo;
import com.wifi.cust.bo.CustPoint;
public class CustSvrImpl
  implements CustSvr
{
 
	public List qryCustPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.* from cust_info a where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String custId = (String)condMap.get("custId");
    if (!StringUtil.isEmpty(custId)) {
      param.put(String.valueOf(index++), custId);
      sql.append(" and a.CUST_ID=? ");
    }
    String name = (String)condMap.get("name");
    if (!StringUtil.isEmpty(name)) {
      param.put(String.valueOf(index++), "%"+name+"%");
      sql.append(" and a.NAME like ? ");
    }
    //sql.append(UserUtil.custFilter("a"));
    
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustInfo.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustInfo.class);
    }
  }
  
	public List qryCustGroup(BigDecimal custId)throws Exception
  {
	  StringBuffer sql = new StringBuffer("select a.* from cust_group a where a.cust_id=? ");
	  Map param = new HashMap();
	  param.put("1", custId);
	  return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustGroup.class);
  }
  private BigDecimal getMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.CUST_ID) maxval from cust_info a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  private BigDecimal getGroupMax()throws Exception
  {
	  StringBuffer sql = new StringBuffer("select max(a.GROUP_ID) maxval from cust_group a ");
	  Map param = new HashMap();
	  Map dataMap= DbFactory.getSqlDdlDao().queryMap(sql.toString(), new String[]{"MAXVAL"}, param);
	  if(dataMap.get("MAXVAL")!=null&&!"".equals((String)dataMap.get("MAXVAL"))){
		  return new BigDecimal((String)dataMap.get("MAXVAL")).add(BigDecimal.ONE);
	  }else{
		  return BigDecimal.ONE;
	  }
  }
  public void save(CustInfo custInfo,List<CustGroup> groupList) throws Exception
  {
	if(custInfo.getCustId()==null){
		custInfo.setCustId(getMax());
		DbFactory.getSqlDdlDao().insert(custInfo);
	}else{
		DbFactory.getSqlDdlDao().update(custInfo);
		DbFactory.getSqlDdlDao().delete(CustGroup.class,"CUST_ID=?",new Object[]{custInfo.getCustId()});
	}	
    for (CustGroup info : groupList){
    	info.setCustId(custInfo.getCustId());
    	if(info.getGroupId()==null){
    		info.setGroupId(getGroupMax());
    	}
    	DbFactory.getSqlDdlDao().insert(info);    	
    }
  }

@Override
public void delete(List<CustInfo> infoList) throws Exception {
	// TODO Auto-generated method stub
	DbFactory.getSqlDdlDao().delete(infoList);
	for(CustInfo custInfo:infoList){
	    DbFactory.getSqlDdlDao().delete(CustGroup.class,"CUST_ID=?",new Object[]{custInfo.getCustId()});
	    DbFactory.getSqlDdlDao().delete(CustPoint.class,"CUST_ID=?",new Object[]{custInfo.getCustId()});
	}
}

@Override
public void updatePwd(String custId) throws Exception {
	// TODO Auto-generated method stub
	Map param = new HashMap();
	param.put("1", custId);
	DbFactory.getSqlDdlDao().delAddUptSql("update cust_info set pwd='202CB962AC59075B964B07152D234B70' where cust_id=?", param);
}

@Override
public CustInfo qryCustInfoById(BigDecimal custId) throws Exception {
	 StringBuffer sql = new StringBuffer("select a.* from cust_info a where a.cust_id=? ");
	  Map param = new HashMap();
	  param.put("1", custId);
	  List<CustInfo> custInfos = DbFactory.getSqlDdlDao().query(sql.toString(), param, CustInfo.class);
	  if (custInfos != null && custInfos.size() > 0){
		  return custInfos.get(0);
	  }
	  return new CustInfo();
}


@Override
public List qryCustUpdateStatus(Map condMap, PageUtil pageInfo)
		throws Exception {
	StringBuffer sql = new StringBuffer("SELECT a.equip_id equipId, b.equip_no equipNo, b.equip_name equipName,c.column_id columnId, " +
			"(CASE a.version_type WHEN 1 THEN CONCAT('栏目--', IFNULL(c.column_name,'')) WHEN 2 THEN CONCAT('面板--', IFNULL(c.column_name,'')) " +
			"WHEN 3 THEN CONCAT('客户端程序--', IFNULL(c.column_name,'')) ELSE NULL END) columnName, a.version_id versionId, " +
			"a.update_date updateDate, a.data_cnt dataCnt " +
			"FROM client_update_log a " +
			"LEFT JOIN column_info c ON c.column_id = a.column_id " +
			"LEFT JOIN cust_equipment b ON a.equip_id = b.equip_id ");
	sql.append("WHERE a.update_date = ( " +
			"SELECT MAX( d.update_date ) " +
			"FROM client_update_log d " +
			"WHERE d.equip_id = a.equip_id " +
			"AND d.version_type = a.version_type " +
			"AND d.column_id = a.column_id ) " );
	Map param = new HashMap();
	int index = 1;
	String equip_id = (String)condMap.get("equip_id");
	if (null != equip_id && equip_id.length() > 0){
		sql.append("AND  a.equip_id = ? " );
		param.put(String.valueOf(index++), equip_id);
	}
	String version_type = (String)condMap.get("version_type");
	if (null != version_type && version_type.length() > 0){
		sql.append("AND a.version_type = ? ");
		param.put(String.valueOf(index++), version_type);
	}
	String equip_no= (String)condMap.get("equip_no");
	if (null != equip_no && equip_no.length() > 0){
		sql.append("AND  b.equip_no = ? " );
		param.put(String.valueOf(index++), equip_no);
	}
	sql.append("ORDER BY a.equip_id , a.update_date DESC");
	// 需要展现的界面字段
	String qryParams[] = new String[]{"equipId","equipNo","equipName","columnId","columnName",
			"versionId","updateDate","dataCnt"};
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    List result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), qryParams, param,  pageInfo);
	    return result;
    }else{
    	List result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), qryParams, param);
    	return result;
    }
}
  
}