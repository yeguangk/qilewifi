package com.wifi.res.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.res.bo.ResType;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.utils.SystemDateUtil;
public class ResTypeSvrImpl
  implements ResTypeSvr
{
  public List getSubNode(BigDecimal parentId,BigDecimal resType)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", resType);
    param.put("2", resType);
    param.put("3", parentId);
    param.put("4", resType);
    
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.*, bb.TYPE_NAME parent_name, ");
    sql.append(" c.subcount ");
    sql.append("  from res_type a left join res_type bb on a.PARENT_ID = bb.TYPE_ID and a.RES_TYPE = bb.RES_TYPE and bb.RES_TYPE=? ");
    sql.append("  left join (select count(b.TYPE_ID) subcount,b.PARENT_ID from res_type b where b.RES_TYPE=? group by b.PARENT_ID) c on a.TYPE_ID=c.PARENT_ID ");
    sql.append(" where a.PARENT_ID = ? and a.RES_TYPE=? ");
    sql.append(UserUtil.custFilter2("a"));
    sql.append(" order by a.TYPE_ID desc ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, ResType.class);
    return list;
  }

  public long getCount(BigDecimal typeCd)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", typeCd);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select 1 from res_type a ");
    sql.append(" where a.TYPE_ID = ? order by a.TYPE_ID ");
    return DbFactory.getSqlDdlDao().queryCount(sql.toString(), param);
  }

  public void save(ResType resType,List<ResType> resTypeList) throws Exception
  {
	if((resType.getTypeId()).compareTo(BigDecimal.ZERO)!=0){
		DbFactory.getSqlDdlDao().update(resType);
	}   

    for (ResType info : resTypeList){
    	info.setParentId(resType.getTypeId());
    	info.setResType(resType.getResType());
    	info.setCreateDate(SystemDateUtil.getSystemDate());
    	info.setCreateMan(String.valueOf(UserUtil.getCurUser().getDepartId()));
        if (info.getTypeId()==null)
           DbFactory.getSqlDdlDao().insert(info);
        else
    	   DbFactory.getSqlDdlDao().update(info);
    }
  }
}