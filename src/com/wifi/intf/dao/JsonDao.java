package com.wifi.intf.dao;

import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Map;

public interface JsonDao {
	public void queryJson(String strSql, Map paramMap, Class beanClass,PrintWriter print) throws SQLException;
	public void queryJson(String strSql, Map paramMap, Map<String, String> jsonTypeMap, PrintWriter print, boolean isMultiRows) throws SQLException;
	public String queryJson(String strSql, Map paramMap, Map<String, String> jsonTypeMap, boolean isMultiRows) throws SQLException;
}
