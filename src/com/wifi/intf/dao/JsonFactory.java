package com.wifi.intf.dao;

import java.util.HashMap;
import java.util.Map;

import org.frame.db.KEYS;

public class JsonFactory {
	 private static ThreadLocal<Map> local=new ThreadLocal<Map>();
	 public static JsonDao getSqlDdlDao() throws Exception{
		 return newDao(KEYS.DUALDB);
	 }
	 public static JsonDao getSqlDdlDao(String dbid) throws Exception{
		 return newDao(dbid);
	 }
	 private static JsonDao newDao(String dbId) throws Exception{
		 Map<String,JsonDao> daoMap=local.get();
		 JsonDao dao=null;
		 if(daoMap==null){
			 daoMap=new HashMap<String,JsonDao>();
			 dao= new JsonDaoImpl(dbId);
			 daoMap.put(dbId, dao);
			 local.set(daoMap);
		 }else{
			 daoMap=local.get();
			 if(!daoMap.containsKey(dbId)){
				 dao= new JsonDaoImpl(dbId);
				 daoMap.put(dbId, dao);
				 local.set(daoMap);
			 }else{
				 dao=daoMap.get(dbId);
			 }
		 }
		 return dao;
	 }
	 
}
