package com.wifi.intf.dao;

import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.frame.db.KEYS;
import org.frame.db.bo.AttrCol;
import org.frame.db.bo.AttrColMapCache;
import org.frame.db.bo.AttrColMapInfo;
import org.frame.db.dao.ConnectionThread;
import org.frame.db.dao.type.ResultSetUtil;
import org.frame.utils.DateFormat;
import org.frame.utils.DateTimeUtil;

final class JsonDaoImpl implements JsonDao {
	private static final String DateType = "DATE";
	private static final String DateTime = "DATETIME";
	private String dbid = null;
	private static final Logger log = Logger.getLogger(JsonDaoImpl.class);

	public JsonDaoImpl() throws Exception {
		init(KEYS.DUALDB);
	}

	public JsonDaoImpl(String dbid) throws Exception {
		init(dbid);
	}

	/**
	 * 根据实体类生成JSON文件
	 */
	public void queryJson(String strSql, Map paramMap, Class beanClass,
			PrintWriter print) throws SQLException {

		AttrColMapInfo mapInfo = getMapInfo(beanClass);
		PreparedStatement prepareObject = null;
		ResultSet resultSet = null;
		try {
			prepareObject = ConnectionThread.dbCon(this.dbid).prepareStatement(
					strSql);

			int indexV = 1;
			if (paramMap != null && paramMap.keySet().size() > 0) {
				indexV = paramMap.keySet().size() + 1;
				setValue(prepareObject, paramMap);
			}

			resultSet = prepareObject.executeQuery();
			toJson(resultSet, mapInfo, print);

		} catch (SQLException ex) {
			// ConnectionThread.free();

			log.debug(ex.getMessage(), ex);
			throw new SQLException("数据库查询操作失败");
		} finally {
			close(resultSet);
			close(prepareObject);
		}
	}

	/**
	 * 自定义查询条件生成JSON
	 */
	public void queryJson(String strSql, Map paramMap, Map<String, String> jsonTypeMap,
			PrintWriter print, boolean isMultiRows) throws SQLException {
		PreparedStatement prepareObject = null;
		ResultSet resultSet = null;
		try {
			prepareObject = ConnectionThread.dbCon(this.dbid).prepareStatement(
					strSql);

			int indexV = 1;
			if (paramMap != null && paramMap.keySet().size() > 0) {
				indexV = paramMap.keySet().size() + 1;
				setValue(prepareObject, paramMap);
			}
			resultSet = prepareObject.executeQuery();
			toJson(resultSet, jsonTypeMap, print, isMultiRows);
		} catch (SQLException ex) {
			// ConnectionThread.free();

			log.debug(ex.getMessage(), ex);
			throw new SQLException("数据库查询操作失败");
		} finally {
			close(resultSet);
			close(prepareObject);
		}
	}

	private void init(String dbid) throws Exception {
		this.dbid = dbid;
	}

	private AttrColMapInfo getMapInfo(Class cls) throws SQLException {
		try {
			return AttrColMapCache.get(cls);
		} catch (Exception e) {

			log.debug(e.getMessage(), e);
			throw new SQLException("没找到BO持久化信息");
		}
	}
	
	/**
	 * 自定义查询字段值转换JSON
	 * @param  mapInfo  key 字段名称 value 类型  
	 * */
	private void toJson(ResultSet resultSet, Map<String, String> mapInfo,
			PrintWriter print, boolean isMultiRows) throws SQLException {
		StringBuilder error = null;
		error = new StringBuilder();
		int flg = 1;
		if (!resultSet.next()) {
			String keys[] = mapInfo.keySet().toArray(new String[0]);
			for (int i = 0; i < keys.length - 1; i++){
				print.print("\"" + keys[i] + "\":\"\"" + ", ");
			}
			print.print("\"" + keys[keys.length - 1] + "\":\"\"");
		}
		else{
			do{
				if (flg != 1)
					print.println(",");
				if (isMultiRows){
					print.println("{");
				}
				int i = 0;
				for (String key : mapInfo.keySet()) {
					Object value = null;
					try {
						value = ResultSetUtil.getValue(resultSet, key,
								mapInfo.get(key));
						// 先取值，以防异常，导致json数据格式错误
						if (i == 0) {
							i = 1;
						} else {
							print.print(",");
						}
						print.print("\"");
						print.print(key.toLowerCase());
						print.print("\":");
						if (value != null) {
							if (value instanceof String) {
								print.print("\"");
								print.print((String) value);
								print.print("\"");
							} else if (value instanceof Timestamp)
								try {
									print.print("\"");
									print.print(DateTimeUtil.getDateToStr(
											(Timestamp) value,
											DateFormat.YYYY_MM_DD_HH_MM_SS));
									print.print("\"");
								} catch (ParseException e) {
									// TODO Auto-generated catch block
									e.printStackTrace();
								}
							else if (value instanceof java.sql.Date)
								try {
									print.print("\"");
									print.print(DateTimeUtil.getDateToStr(
											(Date) value, DateFormat.YYYY_MM_DD));
									print.print("\"");
								} catch (ParseException e) {
									// TODO Auto-generated catch block
									e.printStackTrace();
								}
							else {
								print.print("\"");
								print.print(value);
								print.print("\"");
							}
						} else {
							print.print("\"\"");
						}
					} catch (SQLException ex) {
						if (flg == 1) {
							error.append(key).append("：")
									.append(ex.getMessage()).append(";");
						}
					}
	
				}
				if (isMultiRows){
					print.println("}");
				}
				if (flg == 1)
					flg = 2;
			}while (resultSet.next());
		}
		print.println();
		//print.println("]");
		//print.println("}");
		if (error.length() > 0) {
			log.debug(error);
		}
	}
	
	private void toJson(ResultSet resultSet, AttrColMapInfo mapInfo,
			PrintWriter print) throws SQLException {
		StringBuilder error = null;
		error = new StringBuilder();
		int flg = 1;
		AttrCol[] acArr = mapInfo.getAttrColList();
		// int size = 1;
		print.println("{");
		print.print("\"");
		print.print(mapInfo.getTableName());
		print.println("\":[");
		while (resultSet.next()) {
			if (flg != 1)
				print.println(",");

			print.print("{");
			//
			int i = 0;
			for (AttrCol col : acArr) {
				if (!"0".equals(col.getDdlFlg())) {
					continue;
				}
				Object value = null;
				try {
					value = ResultSetUtil.getValue(resultSet, col.getCol(),
							col.getType());
					// 先取值，以防异常，导致json数据格式错误
					if (i == 0) {
						i = 1;
					} else {
						print.print(",");
					}
					print.print("\"");
					print.print(col.getCol().toLowerCase());
					print.print("\":");
					if (value != null) {
						if (value instanceof String) {
							print.print("\"");
							print.print(string2Html((String) value));
							print.print("\"");
						} else if (value instanceof Timestamp)
							try {
								print.print("\"");
								print.print(DateTimeUtil.getDateToStr(
										(Timestamp) value,
										DateFormat.YYYY_MM_DD_HH_MM_SS));
								print.print("\"");
							} catch (ParseException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
						else if (value instanceof java.sql.Date)
							try {
								print.print("\"");
								print.print(DateTimeUtil.getDateToStr(
										(Date) value, DateFormat.YYYY_MM_DD));
								print.print("\"");
							} catch (ParseException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
						else {
							print.print("\"");
							print.print(value);
							print.print("\"");
						}
					} else {
						print.print("\"\"");
					}
				} catch (SQLException ex) {
					if (flg == 1) {
						error.append(col.getCol()).append("：")
								.append(ex.getMessage()).append(";");
					}
				}

			}
			// 列循环结束
			print.print("}");

			if (flg == 1)
				flg = 2;
			//

			// size++;
		}
		print.println();
		print.println("]");
		print.println("}");
		if (error.length() > 0) {
			log.debug(error);
		}
	}

	private void setValue(PreparedStatement prepareObject, Map paramMap)
			throws SQLException {
		Iterator it = paramMap.keySet().iterator();
		while (it.hasNext()) {
			String key = ((String) it.next());
			int index = Integer.parseInt(key);
			Object value = paramMap.get(key);
			if (value != null
					&& "java.util.Date".equals(value.getClass().getName())) {
				prepareObject.setTimestamp(index,
						DateTimeUtil.getSqlTimestamp((java.util.Date) value));
			} else {
				prepareObject.setObject(index, value);
			}
		}
	}

	private void setValue(String type, int index,
			PreparedStatement prepareObject, Object value) throws SQLException {
		if (DateTime.equals(type) || DateType.equals(type)) {
			prepareObject.setObject(index, getSqlTimestamp((Date) value));
		} else {
			prepareObject.setObject(index, value);
		}
	}

	protected String string2Html(String s) {
		if (s == null) {
			return "";
		}
		StringBuilder sb = new StringBuilder(s.length() + 20);
		char[] chars = s.toCharArray();
		for (char c : chars) {
			switch (c) {
			case '\"':
				sb.append("\\\"");
				break;
			case '\\':
				sb.append("\\\\");
				break;
			case '/':
				sb.append("\\/");
				break;
			case '\b':
				sb.append("\\b");
				break;
			case '\f':
				sb.append("\\f");
				break;
			case '\n':
				sb.append("\\n");
				break;
			case '\r':
				sb.append("\\r");
				break;
			case '\t':
				sb.append("\\t");
				break;
			default:
				sb.append(c);
			}
		}
		return sb.toString();
	}

	private void close(PreparedStatement prepareObject) {
		if (prepareObject != null)
			try {
				prepareObject.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
			}
	}

	private void close(ResultSet resultSet) {
		if (resultSet != null)
			try {
				resultSet.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
			}
	}

	private java.sql.Timestamp getSqlTimestamp(java.util.Date oldDate) {
		if (oldDate == null) {
			return null;
		}
		try {
			java.sql.Timestamp newDate = new java.sql.Timestamp(
					oldDate.getTime());
			return newDate;
		} catch (Exception ex) {

			log.debug(ex.getMessage(), ex);
			return null;
		}
	}

	/**
	 * 自定义查询条件生成JSON
	 */
	public String queryJson(String strSql, Map paramMap, Map<String, String> jsonTypeMap, boolean isMultiRows) throws SQLException {
		PreparedStatement prepareObject = null;
		ResultSet resultSet = null;
		String jsonString = null;
		try {
			prepareObject = ConnectionThread.dbCon(this.dbid).prepareStatement(
					strSql);

			int indexV = 1;
			if (paramMap != null && paramMap.keySet().size() > 0) {
				indexV = paramMap.keySet().size() + 1;
				setValue(prepareObject, paramMap);
			}
			resultSet = prepareObject.executeQuery();
			jsonString = toJson(resultSet, jsonTypeMap, isMultiRows);
		} catch (SQLException ex) {
			// ConnectionThread.free();

			log.debug(ex.getMessage(), ex);
			throw new SQLException("数据库查询操作失败");
		} finally {
			close(resultSet);
			close(prepareObject);
		}
		return jsonString;
	}
	
	/**
	 * 自定义查询字段值转换JSON格式-不输出文件
	 * @param  mapInfo  key 字段名称 value 类型  
	 * */
	private String toJson(ResultSet resultSet, Map<String, String> mapInfo,boolean isMultiRows) throws SQLException {
		StringBuilder error = new StringBuilder();
		StringBuilder jsonString = new StringBuilder();
		int flg = 1;
		if (!resultSet.next()) {
			String keys[] = mapInfo.keySet().toArray(new String[0]);
			for (int i = 0; i < keys.length - 1; i++){
				jsonString.append("\"" + keys[i] + "\":\"\"" + ", ");
			}
			jsonString.append("\"" + keys[keys.length - 1] + "\":\"\"");
		}
		else{
			do{
				if (flg != 1)
					jsonString.append(",");
				if (isMultiRows){
					jsonString.append("{");
				}
				int i = 0;
				for (String key : mapInfo.keySet()) {
					Object value = null;
					try {
						value = ResultSetUtil.getValue(resultSet, key,
								mapInfo.get(key));
						// 先取值，以防异常，导致json数据格式错误
						if (i == 0) {
							i = 1;
						} else {
							jsonString.append(",");
						}
						jsonString.append("\"");
						jsonString.append(key.toLowerCase());
						jsonString.append("\":");
						if (value != null) {
							if (value instanceof String) {
								jsonString.append("\"");
								jsonString.append((String) value);
								jsonString.append("\"");
							} else if (value instanceof Timestamp)
								try {
									jsonString.append("\"");
									jsonString.append(DateTimeUtil.getDateToStr(
											(Timestamp) value,
											DateFormat.YYYY_MM_DD_HH_MM_SS));
									jsonString.append("\"");
								} catch (ParseException e) {
									// TODO Auto-generated catch block
									e.printStackTrace();
								}
							else if (value instanceof java.sql.Date)
								try {
									jsonString.append("\"");
									jsonString.append(DateTimeUtil.getDateToStr(
											(Date) value, DateFormat.YYYY_MM_DD));
									jsonString.append("\"");
								} catch (ParseException e) {
									// TODO Auto-generated catch block
									e.printStackTrace();
								}
							else {
								jsonString.append("\"");
								jsonString.append(value);
								jsonString.append("\"");
							}
						} else {
							jsonString.append("\"\"");
						}
					} catch (SQLException ex) {
						if (flg == 1) {
							error.append(key).append("：")
									.append(ex.getMessage()).append(";");
						}
					}
	
				}
				if (isMultiRows){
					jsonString.append("}");
				}
				if (flg == 1)
					flg = 2;
			}while (resultSet.next());
		}
		jsonString.append("\n");
		//print.println("]");
		//print.println("}");
		if (error.length() > 0) {
			log.debug(error);
		}
		return jsonString.toString();
	}
}
