package com.wifi.cust.svr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;

import com.mz.sys.bo.DdValue;
import com.mz.sys.web.UserUtil;

public class PreSvrImpl implements PreSvr{

	@Override
	public Map getPre() throws Exception {
		StringBuffer strSql = new StringBuffer(" select pre1,pre2 from res_file_pre where cust_id=? ");
	    Map param = new HashMap();
	    param.put("1", UserUtil.getCurUser().getDepartId());
	    return DbFactory.getSqlDdlDao().queryMap(strSql.toString(), new String[]{"PRE1","PRE2"},param);
	}

	@Override
	public void save(String pre, String flg) throws Exception {
		// TODO Auto-generated method stub
		Map data=getPre();
		Map param = new HashMap();
		param.put("1", UserUtil.getCurUser().getDepartId());
		long cnt=DbFactory.getSqlDdlDao().queryCount("select 1 from res_file_pre where cust_id=?", param);
		if(cnt==0){			
			param.put("1", UserUtil.getCurUser().getDepartId());
			param.put("2", pre);
			DbFactory.getSqlDdlDao().delAddUptSql("insert into res_file_pre(cust_id,pre"+flg+")values(?,?)", param);
		}else{			
			param.put("1", pre);
			param.put("2", UserUtil.getCurUser().getDepartId());
			DbFactory.getSqlDdlDao().delAddUptSql("update res_file_pre set pre"+flg+"=? where cust_id=? ", param);
		}
	}

}
