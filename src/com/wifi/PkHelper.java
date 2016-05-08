package com.wifi;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.utils.StringUtil;

public class PkHelper {
	public static BigDecimal getPk(String code) throws Exception{
		return getPk(code,1);
	}
	public static BigDecimal getPk(String code,int num) throws Exception{
		Map param = new HashMap();		
		param.put("1", String.valueOf(num));
		param.put("2", String.valueOf(code));
		Map data=DbFactory.getSqlDdlDao().queryMap(
				"select value+? as VALUE from wifi_pk where code=?",
				new String[]{"VALUE"}, param);
		String val=(String)data.get("VALUE");
		if(StringUtil.isEmpty(val)){
			val="1";
			DbFactory.getSqlDdlDao().delAddUptSql("insert into wifi_pk(value,code)values(?,?)",param);
		}else{
			DbFactory.getSqlDdlDao().delAddUptSql("update wifi_pk set value=value+? where code=?",param);
		}
		return new BigDecimal(val);
	}
	
}
