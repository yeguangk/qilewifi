package com.wifi.cust.svr;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.utils.StringUtil;

public class CustEquipVisitSvrImpl implements CustEquipVisitSvr {

	@Override
	public List qryCustEquipVisitByTime(Map condMap, PageUtil pageInfo)
			throws Exception {
		String queryParams[] = new String[] { "point_name",
				"android_visit_sum", "android_visit_count",
				"iPhone_visit_count", "iPhone_visit_sum" };
		Map param = new HashMap();
		String sql = getsql(condMap, param);
		if (pageInfo != null) {
			pageInfo.setRowTotal(DbFactory.getSqlDdlDao()
					.queryCount(sql, param));
			List result = DbFactory.getSqlDdlDao().queryListMap(sql,
					queryParams, param, pageInfo);
			return result;
		} else {
			List result = DbFactory.getSqlDdlDao().queryListMap(sql,
					queryParams, param);
			return result;
		}
	}

	private String getsql(Map condMap, Map param) {
		StringBuffer sql = new StringBuffer("select "
				+ "android_view.point_name point_name, "
				+ "sum(android_view.android_visit_num) android_visit_sum, "
				+ "sum(android_view.android_visit_fre) android_visit_count, "
				+ "sum(iPhone_view.iPhone_visit_num) iPhone_visit_sum, "
				+ "sum(iPhone_view.iPhone_visit_fre) iPhone_visit_count "
				+ " from android_view android_view "
				+ "inner join iPhone_view iPhone_view "
				+ "on iPhone_view.point_id = android_view.point_id "
				+ "WHERE 1=1 ");

		int index = 1;
		String startTime = (String) condMap.get("startTime");
		if (!StringUtil.isEmpty(startTime)) {
			startTime = startTime.replace("年", "-");
			startTime = startTime.replace("月", "-");
			startTime = startTime.replace("日", "");
			startTime = "20" + startTime;
			param.put(String.valueOf(index++), startTime);
			sql.append(" and a.access_time_info >= ? ");
		}
		String endTime = (String) condMap.get("endTime");
		if (!StringUtil.isEmpty(endTime)) {
			endTime = endTime.replace("年", "-");
			endTime = endTime.replace("月", "-");
			endTime = endTime.replace("日", "");
			endTime = "20" + endTime;
			param.put(String.valueOf(index++), endTime);
			sql.append(" and a.access_time_info <= ? ");
		}
		sql.append("group by point_name ");

		return sql.toString();

	}

	@Override
	public List qryCustEquipVisitByTimeChart(Map condMap, PageUtil pageInfo)
			throws SQLException, Exception {
		String queryParams[] = new String[] { "point_name",
				"android_visit_sum", "android_visit_count",
				"iPhone_visit_count", "iPhone_visit_sum" };
		Map param = new HashMap();
		String sql = getsql(condMap, param);
		List result = null;
		if (pageInfo != null) {
			result = DbFactory.getSqlDdlDao().queryListMap(sql, queryParams,
					param, pageInfo);
		} else {
			result = DbFactory.getSqlDdlDao().queryListMap(sql, queryParams,
					param);
		}

		return getChartList(result);
	}

	private List<Map<String, String>> getChartList(List value) {
		List<Map<String, String>> result = new ArrayList<Map<String, String>>();
		StringBuilder pointNameString = new StringBuilder();
		StringBuilder androidVisitSumString = new StringBuilder();
		StringBuilder androidVisitCountString = new StringBuilder();
		StringBuilder iPhoneVisitSumString = new StringBuilder();
		StringBuilder iPhoneVisitCountString = new StringBuilder();
		if (null != value && value.size() > 0) {
			for (int i = 0; i < value.size() - 1; i++) {
				Object object = value.get(i);
				appendStringValue(object, pointNameString,
						androidVisitSumString, androidVisitCountString,
						iPhoneVisitSumString, iPhoneVisitCountString);
			}
			Object object = value.get(value.size() - 1);
			appendStringValue(object, pointNameString, androidVisitSumString,
					androidVisitCountString, iPhoneVisitSumString,
					iPhoneVisitCountString);

			Map<String, String> chartValueMap = new HashMap<String, String>();
			chartValueMap.put("point_name", pointNameString.toString()
					.substring(0, pointNameString.length() - 1));
			chartValueMap.put("android_visit_sum", androidVisitSumString
					.toString()
					.substring(0, androidVisitSumString.length() - 1));
			chartValueMap.put(
					"android_visit_count",
					androidVisitCountString.toString().substring(0,
							androidVisitCountString.length() - 1));
			chartValueMap
					.put("iPhone_visit_sum", iPhoneVisitSumString.toString()
							.substring(0, iPhoneVisitSumString.length() - 1));
			chartValueMap.put(
					"iPhone_visit_count",
					iPhoneVisitCountString.toString().substring(0,
							iPhoneVisitCountString.length() - 1));
			result.add(chartValueMap);
		}
		return result;
	}

	private void appendStringValue(Object object,
			StringBuilder pointNameString, StringBuilder androidVisitSumString,
			StringBuilder androidVisitCountString,
			StringBuilder iPhoneVisitSumString,
			StringBuilder iPhoneVisitCountString) {
		if (object instanceof Map) {
			Map map = (Map) object;
			for (Object keyValue : map.keySet()) {
				String key = (String) keyValue;
				if ("point_name".equals(key)) {
					pointNameString.append(map.get(key)).append(",");
				} else if ("android_visit_sum".equals(key)) {
					androidVisitSumString.append(map.get(key)).append(",");
				} else if ("android_visit_count".equals(key)) {
					androidVisitCountString.append(map.get(key)).append(",");
				} else if ("iPhone_visit_sum".equals(key)) {
					iPhoneVisitSumString.append(map.get(key)).append(",");
				} else if ("iPhone_visit_count".equals(key)) {
					iPhoneVisitCountString.append(map.get(key)).append(",");
				}

			}
		}

	}

	@Override
	public List qrySingleClientVisitByClientIdAndTime(Map condMap,
			PageUtil pageInfo) throws Exception {
		String queryParams[] = new String[] { "res_name","visit_sum"};
		Map param = new HashMap();
		StringBuilder sql = new StringBuilder();
		sql.append("  select res_title res_name, sum(res_count) visit_sum from single_cilent_visit_view " +
				"where visit_time >= ? " +
				"and visit_time <= ? " +
				"and box_id = ? " + 
				"Group by res_name " +
				"order by visit_sum desc ");
		String startTime = (String) condMap.get("startDate");
		param.put("1", getReplaceTimeFormat(startTime));
		String endTime = (String) condMap.get("endDate");
		param.put("2", getReplaceTimeFormat(endTime));
		String cilentId = (String) condMap.get("cilentId");
		param.put("3", cilentId);
		List result = null;
		if (pageInfo != null) {
			result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), queryParams,
					param, pageInfo);
		} else {
			result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), queryParams,
					param);
		}
		return result;
	}
	
	private String getReplaceTimeFormat(String time){
		String tmpTime = time;
		tmpTime = tmpTime.replace("年", "-");
		tmpTime = tmpTime.replace("月", "-");
		tmpTime = tmpTime.replace("日", "");
		tmpTime = "20" + tmpTime;
		return tmpTime;
	}

}