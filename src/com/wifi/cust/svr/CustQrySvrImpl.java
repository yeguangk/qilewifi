package com.wifi.cust.svr;

import com.mz.sys.bo.TreeNode;
import com.mz.sys.web.UserUtil;
import com.wifi.cust.bo.CustGroup;
import com.wifi.cust.bo.CustPoint;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;
public class CustQrySvrImpl
  implements CustQrySvr
{
 
  public List qryCustGrpPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.*,b.NAME from cust_group a left join cust_info b on a.CUST_ID=b.CUST_ID where 1=1 ");
    Map param = new HashMap();
    int index = 1;
    String panelId = (String)condMap.get("custId");
    if (!StringUtil.isEmpty(panelId)) {
      param.put(String.valueOf(index++), panelId);
      sql.append(" and a.CUST_ID=? ");
    }
    String keyWord = (String)condMap.get("keyWord");
    if (!StringUtil.isEmpty(keyWord)) {
      param.put(String.valueOf(index++), "%"+keyWord+"%");
      sql.append(" and ( a.GROUP_NAME like ? ");
      param.put(String.valueOf(index++), "%"+keyWord+"%");
      sql.append(" or b.NAME like ? ");
      param.put(String.valueOf(index++), keyWord);
      sql.append(" or a.GROUP_ID= ? )");
    }
    sql.append(UserUtil.custFilter("a"));
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustGroup.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustGroup.class);
    }
  }
  
  public List qryPointPg(Map condMap,PageUtil pageInfo)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select a.* from cust_point a where a.GROUP_ID=? ");
    Map param = new HashMap();
    int index = 1;
    param.put(String.valueOf(index++), condMap.get("groupId"));
    String keyWord = (String)condMap.get("keyWord");
    if (!StringUtil.isEmpty(keyWord)) {
      param.put(String.valueOf(index++), "%"+keyWord+"%");
      sql.append(" and ( a.POINT_NAME like ? )");
    }
    if(pageInfo!=null){
	    pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(sql.toString(), param));
	    return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustPoint.class, pageInfo);
    }else{
    	return DbFactory.getSqlDdlDao().query(sql.toString(), param, CustPoint.class);
    }
  }
  
  
  public List qryCustTree(String parentId)throws Exception
  {
   
    StringBuffer sql = new StringBuffer("select CONCAT(CUST_ID,'-0') node_id,0 parent_id,NAME node_txt from cust_info a ");
    sql.append(" where 0=? ");
    sql.append(UserUtil.custFilter2("a"));
    sql.append(" union all  ");
    sql.append(" select CONCAT(GROUP_ID,'-1') node_id,CONCAT(CUST_ID,'-0') parent_id,GROUP_NAME node_txt from cust_group a ");
    sql.append(" where CONCAT(CUST_ID,'-0')=? ");
    sql.append(" union ALL ");
    sql.append(" select CONCAT(POINT_ID,'-2') node_id, CONCAT(GROUP_ID,'-1') parent_id,POINT_NAME node_txt from cust_point a");
    sql.append(" where  CONCAT(GROUP_ID,'-1')=? ");
    Map param = new HashMap();
    param.put("1", parentId);
    param.put("2", parentId);
    param.put("3", parentId);
    return DbFactory.getSqlDdlDao().query(sql.toString(), param, TreeNode.class);
  }
  
  
}