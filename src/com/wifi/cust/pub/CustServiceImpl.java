package com.wifi.cust.pub;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;

import com.wifi.cust.bo.CustInfo;

public class CustServiceImpl implements ICustService {

	@Override
	public List<CustInfo> qryCustInfoByContion(Map<String, Object> conditionMap, List<String> params)
			throws Exception {
		List<CustInfo>  custInfos = new ArrayList<CustInfo>();
		StringBuilder sql = new StringBuilder();
		if (null == params || params.size() == 0){
			sql.append("SELECT * FROM cust_info ");
		}else{
			sql.append("SELECT ");
			for (int i = 0; i < params.size() - 1; i++){
				sql.append(params.get(i)).append(", ");
			}
			sql.append(params.get(params.size() - 1)).append(" ");
			sql.append("FROM cust_info ");
		}
		if (conditionMap != null && conditionMap.size() > 0){
			sql.append("WHERE ");
			String keys[] = conditionMap.keySet().toArray(new String[0]);
			sql.append(keys[0]).append(" ").append(conditionMap.get(keys[0])).append(" ");
			for (int i = 1; i < keys.length; i++){
				sql.append("AND ");
				sql.append(keys[i]).append(" ").append(conditionMap.get(keys[i])).append(" ");
			}
			custInfos = DbFactory.getSqlDdlDao().query(sql.toString(), CustInfo.class);
		}
		return custInfos;
	}

}
