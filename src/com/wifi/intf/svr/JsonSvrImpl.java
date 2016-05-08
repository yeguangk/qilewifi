package com.wifi.intf.svr;

import java.io.BufferedReader;
import java.io.File;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.tool.FilesTool;
import org.frame.utils.SystemDateUtil;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mz.sys.web.UserUtil;
import com.wifi.MD5Check;
import com.wifi.PkHelper;
import com.wifi.column.bo.ColumnInfo;
import com.wifi.column.bo.ColumnResList;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.bo.PanelGroupDtl;
import com.wifi.intf.dao.JsonFactory;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;
import com.wifi.res.bo.PublishLog;
import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResOwnerTag;
import com.wifi.res.bo.ResSubInfo;

public class JsonSvrImpl implements JsonSvr {

	@Override
	public void updatefbRes(String path, BigDecimal columnId) throws Exception {
		if(columnId == null ){
			return ;
		}
		String custId = UserUtil.getCurUser().getDepartId();// "1";//
		Map paramMap = new HashMap();
		paramMap.put("1", custId);// UserUtil.getCurUser().getDepartId()
		//
		String date = SystemDateUtil.getSysDateTime();
		String date_replace1 = date.replaceAll(" ", "_");
		String date_replace2 = date_replace1.replaceAll(":", "_");
		String date_replace3 = date_replace2.replaceAll("-", "_");
		String root = path + "data" + File.separator;
		MD5Check md5 = new MD5Check();
		// 文件名
		StringBuilder fileName = new StringBuilder();
		fileName.append("wifi.pub.").append(columnId);
		fileName.append(".").append(date_replace3).append(".json");
		PrintWriter print = null;
		try {
			paramMap.put("1", columnId);
			Map childColInfo_map = DbFactory.getSqlDdlDao().queryMap(
					"SELECT * from (select qryChildColInfo(?) as custIds) a",
					new String[] { "custIds" }, paramMap);
			String cuistIds = (String) childColInfo_map.get("custIds");
			if (cuistIds == null || cuistIds.length() == 0){
				cuistIds="";
			}
			//String whereSql = SqlUtils
			//		.arrayToWhereSqlIn(cuistIds != null ? cuistIds.split(",")
			//				: null);
			print = org.frame.tool.FilesTool.getPrintWriter(root
					+ fileName.toString());
			print.println("[");
			paramMap.clear();
			// 查找栏目子目录column_info
			paramMap.clear();
			paramMap.put("1", custId);
			JsonFactory.getSqlDdlDao().queryJson(
					" select * from column_info where cust_id=? and FIND_IN_SET(column_id, '"
							+ cuistIds + "')", paramMap, ColumnInfo.class,
					print);
			print.println(",");
			paramMap.clear();
			// 栏目资源关系表 column_res_list
			StringBuilder columnResList = new StringBuilder();
			columnResList
					.append("SELECT *  FROM column_res_list WHERE column_id IN ( "
							+ "SELECT column_id FROM column_info  WHERE FIND_IN_SET(column_id, '"
							+ cuistIds + "') ) ");
			// column_res_list
			JsonFactory.getSqlDdlDao().queryJson(columnResList.toString(),
					paramMap, ColumnResList.class, print);
			print.println(",");

			// 资源公共的过滤条件：
			String commonWhereSql = "res_id in ( "
					+ "SELECT res_id  FROM column_res_list  WHERE column_id  in ( "
					+ "SELECT column_id FROM column_info WHERE FIND_IN_SET(column_id, '"
					+ cuistIds + "' ) ) )";
			// 查找栏目下的资源 res_info res_attr res_owner_tag
			// res_info
			StringBuilder resInfoSql = new StringBuilder();
			resInfoSql.append("SELECT * FROM res_info ");
			resInfoSql.append("WHERE ");
			resInfoSql.append(commonWhereSql);
			JsonFactory.getSqlDdlDao().queryJson(resInfoSql.toString(),
					paramMap, ResInfo.class, print);
			print.println(",");

			updateStatus(columnId);

			// res_attr
			StringBuilder resAttrSql = new StringBuilder();
			resAttrSql.append("SELECT * FROM res_attr ");
			resAttrSql.append("WHERE ").append(commonWhereSql);
			JsonFactory.getSqlDdlDao().queryJson(resAttrSql.toString(),
					paramMap, ResAttr.class, print);
			print.println(",");

			// res_owner_tag
			StringBuilder resOwnerTagSql = new StringBuilder();
			resOwnerTagSql.append("SELECT * FROM res_owner_tag ");
			resOwnerTagSql.append("WHERE ").append(commonWhereSql);
			JsonFactory.getSqlDdlDao().queryJson(resOwnerTagSql.toString(),
					paramMap, ResOwnerTag.class, print);
			print.println(",");

			// 查找栏目下的资源分集sub_res
			StringBuilder subResSql = new StringBuilder();
			subResSql.append("SELECT * FROM sub_res ");
			subResSql.append("WHERE ").append(commonWhereSql);
			JsonFactory.getSqlDdlDao().queryJson(subResSql.toString(),
					paramMap, ResSubInfo.class, print);
			print.println(",");

			// 资源文件及资源分集文件 res_file
			StringBuilder resFileSql = new StringBuilder();
			resFileSql.append("SELECT * FROM res_file ");
			resFileSql.append("WHERE ").append(commonWhereSql);
			// paramMap.put("1", columnId);
			JsonFactory.getSqlDdlDao().queryJson(resFileSql.toString(),
					paramMap, ResFile.class, print);

			print.print("]");

		} finally {
			if (print != null)
				print.close();
		}
		//
		PublishLog log = new PublishLog();
		log.setColumnId(columnId);
		log.setCustId(new BigDecimal(custId));
		log.setPublishType(new BigDecimal(1));
		log.setFileUrl("data" + File.separator + fileName);
		log.setMd5Num(md5.getFileMD5String(new File(root + fileName.toString())));
		log.setState(BigDecimal.ZERO);
		log.setPublishId(PkHelper.getPk("PUBLISH_LOG"));
		DbFactory.getSqlDdlDao().insert(log);

	}

	// 暂时保存
	public void updatefbRes_1(String path) throws Exception {
		// TODO Auto-generated method stub
		String custId = UserUtil.getCurUser().getDepartId();// "1";//
		Map paramMap = new HashMap();
		paramMap.put("1", custId);// UserUtil.getCurUser().getDepartId()

		List<ColumnInfo> rootLm = DbFactory
				.getSqlDdlDao()
				.query("select * from column_info where cust_id=? and parent_column_id=0 ",
						paramMap, ColumnInfo.class);
		//
		String date = SystemDateUtil.getSysDateTime();
		String date_replace1 = date.replaceAll(" ", "_");
		String date_replace2 = date_replace1.replaceAll(":", "_");
		String date_replace3 = date_replace2.replaceAll("-", "_");
		String root = path + "data" + File.separator;
		MD5Check md5 = new MD5Check();
		for (ColumnInfo col : rootLm) {
			// 文件名
			StringBuilder fileName = new StringBuilder();
			fileName.append("wifi.pub.").append(col.getColumnId());
			fileName.append(".").append(date_replace3).append(".json");
			PrintWriter print = null;
			try {
				print = org.frame.tool.FilesTool.getPrintWriter(root
						+ fileName.toString());
				print.println("[");

				// 查找栏目子目录column_info
				paramMap = new HashMap();
				paramMap.put("1", custId);
				paramMap.put("2", col.getColumnId());
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								" select * from column_info where cust_id=? and FIND_IN_SET(column_id, qryChildColInfo(?)) ",
								paramMap, ColumnInfo.class, print);
				print.println(",");

				// 栏目资源关系表 column_res_list
				paramMap = new HashMap();
				paramMap.put("1", col.getColumnId());
				// column_res_list
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select a.* from column_res_list a where EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id)",
								paramMap, ColumnResList.class, print);
				print.println(",");

				// 查找栏目下的资源 res_info res_attr res_owner_tag
				// res_info
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select c.* from res_info c where EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id))",
								paramMap, ResInfo.class, print);
				print.println(",");

				updateStatus(col.getColumnId());

				// res_attr
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select d.* from res_attr d where EXISTS( select 1 from res_info c where d.res_id=c.res_id and EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id)))",
								paramMap, ResAttr.class, print);
				print.println(",");

				// res_owner_tag
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select d.* from res_owner_tag d where EXISTS( select 1 from res_info c where d.res_id=c.res_id and EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id)))",
								paramMap, ResOwnerTag.class, print);
				print.println(",");

				// 查找栏目下的资源分集sub_res
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select d.* from sub_res d where EXISTS( select 1 from res_info c where d.res_id=c.res_id and EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id)))",
								paramMap, ResSubInfo.class, print);
				print.println(",");

				// 资源文件及资源分集文件 res_file
				paramMap.put("1", col.getColumnId());
				paramMap.put("2", col.getColumnId());
				JsonFactory
						.getSqlDdlDao()
						.queryJson(
								"select d.* from res_file d where EXISTS( select 1 from res_info c where d.res_id=c.res_id and EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id))) union all select e.* from res_file e where EXISTS(select 1 from sub_res d where d.sub_res_id=e.sub_res_id and EXISTS( select 1 from res_info c where d.res_id=c.res_id and EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id))))",
								paramMap, ResFile.class, print);

				print.print("]");

			} finally {
				if (print != null)
					print.close();
			}
			//
			PublishLog log = new PublishLog();
			log.setColumnId(col.getColumnId());
			log.setCustId(new BigDecimal(custId));
			log.setPublishType(new BigDecimal(1));
			log.setFileUrl("data" + File.separator + fileName);
			log.setMd5Num(md5.getFileMD5String(new File(root
					+ fileName.toString())));
			log.setState(BigDecimal.ZERO);
			log.setPublishId(PkHelper.getPk("PUBLISH_LOG"));
			DbFactory.getSqlDdlDao().insert(log);
		}

		// 查找栏目column_info
		// 查找栏目子目录column_info
		// 栏目资源关系表 column_res_list
		// 查找栏目下的资源 res_info res_attr res_file res_owner_tag sub_res
	}

	private void updateStatus(BigDecimal colId) throws Exception {
		// 更新为已发布
		Map paramMap = new HashMap();
		paramMap.put("1", UserUtil.getCurUser().getLoginCode());
		paramMap.put("2", colId);
		DbFactory
				.getSqlDdlDao()
				.delAddUptSql(
						"update res_info c set c.CHECK_STATUS=3,c.PUBLISH_MAN=?,c.PUBLISH_DATE=now() where EXISTS(select 1 from column_res_list a where c.res_id=a.res_id and EXISTS(select 1 from column_info b where FIND_IN_SET(b.column_id, qryChildColInfo(?)) and a.Column_id=b.column_id))",
						paramMap);
	}

	public String qrypanelPublishByEquipNo(String path, String equipNo)
			throws Exception {
		Map paramMap = new HashMap();
		StringBuilder jsonString = new StringBuilder();
		try {

			jsonString.append("[");
			jsonString.append("{");
			// 获取面板查询SQL
			// panel_group
			paramMap = new HashMap();
			paramMap.put("1", equipNo);
			Map<String, String> panelPublishInfoJsonTypeMap = new HashMap<String, String>();
			panelPublishInfoJsonTypeMap.put("state", "NUMBER");
			panelPublishInfoJsonTypeMap.put("cust_id", "NUMBER");
			panelPublishInfoJsonTypeMap.put("panel_group_id", "NUMBER");
			panelPublishInfoJsonTypeMap.put("equip_id", "NUMBER");
			panelPublishInfoJsonTypeMap.put("region_id", "VARCHAR2");
			panelPublishInfoJsonTypeMap.put("point_id", "NUMBER");
			panelPublishInfoJsonTypeMap.put("point_group_id", "NUMBER");
			panelPublishInfoJsonTypeMap.put("panel_publish_url", "VARCHAR2");
			panelPublishInfoJsonTypeMap.put("panel_publish_id", "NUMBER");
			jsonString.append(JsonFactory.getSqlDdlDao().queryJson(
					getPanelPublishInfoSql(), paramMap,
					panelPublishInfoJsonTypeMap, false));
			jsonString.append(",");

			Map<String, String> panelUpdateInfoJsonTypeMap = new HashMap<String, String>();
			panelUpdateInfoJsonTypeMap.put("version_id", "NUMBER");
			panelUpdateInfoJsonTypeMap.put("version_url", "VARCHAR2");
			jsonString.append(JsonFactory.getSqlDdlDao().queryJson(
					getPanelUpdateInfoSql(), paramMap,
					panelUpdateInfoJsonTypeMap, false));
			jsonString.append(",");

			jsonString.append("\"column_publish_url\":");
			jsonString.append("[");
			Map<String, String> columnPublishInfoJsonTypeMap = new HashMap<String, String>();
			columnPublishInfoJsonTypeMap.put("publish_id", "NUMBER");
			columnPublishInfoJsonTypeMap.put("column_id", "NUMBER");
			columnPublishInfoJsonTypeMap.put("file_url", "VARCHAR2");
			String columnPublishInfoJosn = JsonFactory.getSqlDdlDao()
					.queryJson(getColumnPublishInfoSql(), paramMap,
							columnPublishInfoJsonTypeMap, true);
			if (columnPublishInfoJosn.indexOf("\"publish_id\":\"\",") > -1) {
				jsonString.append("");
			} else {
				jsonString.append(columnPublishInfoJosn);
			}

			jsonString.append("]");
			jsonString.append("}");
			jsonString.append("]");
		} catch (Exception e) {

			e.printStackTrace();
		}
		return jsonString.toString();
	}

	/**
	 * 获取Panel更新的信息
	 * */
	private String getPanelUpdateInfoSql() {
		StringBuilder panelUpdateInfoSql = new StringBuilder();
		panelUpdateInfoSql.append("SELECT ");
		panelUpdateInfoSql.append("client_update_info.upt_id version_id, ");
		panelUpdateInfoSql.append("client_update_info.pkg_url version_url ");
		panelUpdateInfoSql.append("FROM cust_equipment cust_equipment ");
		panelUpdateInfoSql
				.append("INNER JOIN client_update_info client_update_info ON client_update_info.cust_id =  cust_equipment.cust_id ");
		panelUpdateInfoSql.append("WHERE cust_equipment.equip_no = ? ");
		return panelUpdateInfoSql.toString();
	}

	/**
	 * 面板更新的Sql
	 * 
	 * @return
	 */
	private String getPanelPublishInfoSql() {
		/*
		 * SELECT cust_equipment.state status, 设备状态 cust_equipment.cust_id
		 * cust_id, cust_equipment.group_id panel_group_id, 面板组ID
		 * client_update_info.upt_id version_id, 更新表主键
		 * client_update_info.pkg_url version_url, 面板更新地址
		 * publish_log_a.publish_id panel_publish_id, 面板发布ID
		 * cust_point.region_no region_id设备区域ID cust_point.point_id
		 * point_id营业点ID cust_point.group_id point_group_id营业点组ID
		 * publish_log_a.file_url panel_publish_url 面板发布地址
		 */
		StringBuilder panelInfoSql = new StringBuilder();
		panelInfoSql.append("SELECT ");
		panelInfoSql.append("cust_equipment.state state, ");
		panelInfoSql.append("cust_equipment.cust_id cust_id, ");
		panelInfoSql.append("panel_group.panels_id panel_group_id, ");
		panelInfoSql.append("cust_equipment.equip_id equip_id, ");
		panelInfoSql.append("cust_point.region_no region_id, ");
		panelInfoSql.append("cust_point.point_id point_id, ");
		panelInfoSql.append("cust_point.group_id point_group_id, ");
		panelInfoSql.append("publish_log_a.publish_id panel_publish_id, ");
		panelInfoSql.append("publish_log_a.file_url panel_publish_url ");
		panelInfoSql.append("FROM cust_equipment cust_equipment ");
		panelInfoSql
				.append("INNER JOIN panel_group panel_group ON (panel_group.group_id = cust_equipment.group_id OR panel_group.point_id = cust_equipment.point_id) ");
		panelInfoSql
				.append("INNER JOIN publish_log publish_log_a ON cust_equipment.cust_id = publish_log_a.cust_id ");
		panelInfoSql
				.append("INNER JOIN cust_point cust_point ON cust_equipment.cust_id = cust_point.cust_id ");
		panelInfoSql.append("WHERE cust_equipment.equip_no = ? ");
		// panelInfoSql
		// .append("AND panel_group.point_id = cust_equipment.point_id ");
		panelInfoSql
				.append("AND cust_point.point_id = cust_equipment.point_id ");
		panelInfoSql.append("AND publish_log_a.publish_type = 2 ");
		panelInfoSql.append("AND publish_log_a.publish_id = ( ");
		panelInfoSql
				.append("SELECT MAX(publish_id) FROM publish_log publish_log_b ");
		panelInfoSql
				.append("WHERE publish_log_b.cust_id = publish_log_a.cust_id ");
		panelInfoSql.append("AND publish_log_b.publish_type = 2 ");
		panelInfoSql.append("GROUP By publish_log_b.column_id) ");
		return panelInfoSql.toString();
	}

	/**
	 * 栏目更新发布地址Sql
	 * 
	 * @return
	 */
	private String getColumnPublishInfoSql() {
		StringBuilder columnPublishInfoSql = new StringBuilder();
		columnPublishInfoSql.append("SELECT ");
		columnPublishInfoSql.append("publish_log_a.publish_id publish_id, ");
		columnPublishInfoSql.append("publish_log_a.column_id column_id, ");
		columnPublishInfoSql.append("publish_log_a.file_url file_url ");
		columnPublishInfoSql.append("FROM cust_equipment cust_equipment ");
		columnPublishInfoSql
				.append("INNER JOIN publish_log publish_log_a ON cust_equipment.cust_id =  publish_log_a.cust_id ");
		columnPublishInfoSql.append("WHERE cust_equipment.equip_no = ? ");
		columnPublishInfoSql.append("AND publish_log_a.publish_type = 1 ");
		columnPublishInfoSql.append("AND publish_log_a.Publish_ID IN ( ");
		columnPublishInfoSql.append("SELECT MAX(publish_log_b.publish_id ) ");
		columnPublishInfoSql.append("FROM publish_log publish_log_b ");
		columnPublishInfoSql.append("WHERE publish_type = 1 ");
		columnPublishInfoSql
				.append("AND cust_equipment.cust_id = publish_log_b.cust_id ");
		columnPublishInfoSql.append("GROUP BY publish_log_b.column_id ) ");
		columnPublishInfoSql.append(" ");

		return columnPublishInfoSql.toString();
	}

	public String panelPublishByCustId(String path, String equipNo)
			throws Exception {
		// TODO Auto-generated method stub
		// String custId=UserUtil.getCurUser().getDepartId();//"1";//
		Map paramMap = new HashMap();
		// paramMap.put("1", custId);

		String date = SystemDateUtil.getSysDate();
		// 文件名
		StringBuilder fileName = new StringBuilder(path);
		fileName.append("wifi.panel.").append(equipNo).append(".json");

		PrintWriter print = null;
		BufferedReader reader = null;

		try {
			// File file=new File(fileName.toString());
			//
			StringBuilder sb = new StringBuilder();
			// if(file.exists()){
			// String lastdate=getModDate(file);
			// if(lastdate.equals(SystemDateUtil.getSysDate())){
			// reader=FilesTool.getFileReader(fileName.toString());
			// String tempString=null;
			// while ((tempString = reader.readLine()) != null) {
			// sb.append(tempString);
			// }
			// return sb.toString();
			// }
			// }

			// panel_group panel_group_dtl panel_def panel_box_def
			// panel_box_item
			print = org.frame.tool.FilesTool
					.getPrintWriter(fileName.toString());
			print.println("[");

			// panel_group
			paramMap = new HashMap();
			paramMap.put("1", equipNo);
			JsonFactory
					.getSqlDdlDao()
					.queryJson(
							"select * from panel_group g where EXISTS(select 1 from cust_equipment a where a.EQUIP_NO=? and g.CREATE_MAN=a.cust_id and g.GROUP_ID=a.GROUP_ID and g.POINT_ID=a.POINT_ID ) ",
							paramMap, PanelGroup.class, print);
			print.println(",");

			// panel_group_dtl
			JsonFactory
					.getSqlDdlDao()
					.queryJson(
							"select * from panel_group_dtl dtl where EXISTS(select 1 from panel_group g where dtl.PANELS_ID=g.PANELS_ID and EXISTS(select 1 from cust_equipment a where a.EQUIP_NO=? and g.CREATE_MAN=a.cust_id and g.GROUP_ID=a.GROUP_ID and g.POINT_ID=a.POINT_ID ) ) ",
							paramMap, PanelGroupDtl.class, print);
			print.println(",");

			// panel_def
			JsonFactory
					.getSqlDdlDao()
					.queryJson(
							"select * from panel_def p where EXISTS (select 1 from panel_group_dtl dtl where p.PANEL_ID=dtl.PANEL_ID and EXISTS(select 1 from panel_group g where dtl.PANELS_ID=g.PANELS_ID and EXISTS(select 1 from cust_equipment a where a.EQUIP_NO=? and g.CREATE_MAN=a.cust_id and g.GROUP_ID=a.GROUP_ID and g.POINT_ID=a.POINT_ID ) ))",
							paramMap, PanelDef.class, print);
			print.println(",");

			// panel_box_def panel_box_item
			JsonFactory
					.getSqlDdlDao()
					.queryJson(
							"select * from panel_box_def box where EXISTS (select 1 from panel_def p where box.panel_id=p.panel_id and EXISTS (select 1 from panel_group_dtl dtl where p.PANEL_ID=dtl.PANEL_ID and EXISTS(select 1 from panel_group g where dtl.PANELS_ID=g.PANELS_ID and EXISTS(select 1 from cust_equipment a where a.EQUIP_NO=? and g.CREATE_MAN=a.cust_id and g.GROUP_ID=a.GROUP_ID and g.POINT_ID=a.POINT_ID ) )))",
							paramMap, PanelBoxDef.class, print);
			print.println(",");

			// panel_box_item
			JsonFactory
					.getSqlDdlDao()
					.queryJson(
							"select * from panel_box_item it where EXISTS (select 1 from panel_box_def box where it.box_id=box.box_id and EXISTS (select 1 from panel_def p where box.panel_id=p.panel_id and EXISTS (select 1 from panel_group_dtl dtl where p.PANEL_ID=dtl.PANEL_ID and EXISTS(select 1 from panel_group g where dtl.PANELS_ID=g.PANELS_ID and EXISTS(select 1 from cust_equipment a where a.EQUIP_NO=? and g.CREATE_MAN=a.cust_id and g.GROUP_ID=a.GROUP_ID and g.POINT_ID=a.POINT_ID ) ))))",
							paramMap, PanelBoxItem.class, print);

			print.print("]");
			if (print != null) {
				print.close();
				print = null;
			}
			reader = FilesTool.getFileReader(fileName.toString());
			String tempString = null;
			while ((tempString = reader.readLine()) != null) {
				sb.append(tempString);
			}
			return sb.toString();
		} finally {
			try {
				if (print != null)
					print.close();
			} catch (Exception e) {
			}

			if (reader != null)
				reader.close();
		}
		// 查找栏目column_info
		// 查找栏目子目录column_info
		// 栏目资源关系表 column_res_list
		// 查找栏目下的资源 res_info res_attr res_file res_owner_tag sub_res
	}

	public String getModDate(File file) {
		long time = file.lastModified();
		Calendar cal = Calendar.getInstance();
		// HH:mm:ss
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		cal.setTimeInMillis(time);
		return formatter.format(cal.getTime());
	}

	@Override
	public void updatePanelPublishJsonFiels(String path) throws Exception {
		// TODO Auto-generated method stub
		String custId = UserUtil.getCurUser().getDepartId();// "1";//
		Map paramMap = new HashMap();
		paramMap.put("1", custId);// UserUtil.getCurUser().getDepartId()

		// --面板组定义表
		String panelGroupSql = "select * from panel_group where GROUP_ID in (select GROUP_ID from cust_group where cust_id = ?)";
		List<PanelGroup> panelGroups = DbFactory.getSqlDdlDao().query(
				panelGroupSql, paramMap, PanelGroup.class);
		//
		String date = SystemDateUtil.getSysDateTime();
		String root = path + "data" + File.separator;
		MD5Check md5 = new MD5Check();
		paramMap.clear();
		for (PanelGroup panelGroup : panelGroups) {
			// 面板组ID
			BigDecimal groupId = panelGroup.getGroupId();
			paramMap.clear();
			paramMap.put("1", groupId);
			// 文件名
			StringBuilder fileName = new StringBuilder();
			String date_replace1 = date.replaceAll(" ", "_");
			String date_replace2 = date_replace1.replaceAll(":", "_");
			String date_replace3 = date_replace2.replaceAll("-", "_");
			fileName.append("wifi.pub.").append(groupId);
			fileName.append(".").append(date_replace3).append(".json");
			PrintWriter print = null;
			try {
				print = org.frame.tool.FilesTool.getPrintWriter(root
						+ fileName.toString());
				print.println("[");

				// 查找栏目子目录column_info

				// 面板组明细sql
				String panelGroupDtlSql = "select * from panel_group_dtl where PANELS_ID in "
						+ "(select PANELS_ID from panel_group where GROUP_ID = ?)";
				JsonFactory.getSqlDdlDao().queryJson(panelGroupDtlSql,
						paramMap, PanelGroupDtl.class, print);
				print.println(",");

				// 面板定义
				String panelDefSql = "select * from panel_def where PANEL_ID in "
						+ "(select PANEL_ID from panel_group_dtl where PANELS_ID in "
						+ "	(select PANELS_ID from panel_group where GROUP_ID = ?)"
						+ ")";
				JsonFactory.getSqlDdlDao().queryJson(panelDefSql, paramMap,
						PanelDef.class, print);
				print.println(",");

				// 面板项
				String paneBoxDefSql = "select * from panel_box_def where PANEL_ID in "
						+ "(select PANEL_ID from panel_group_dtl where PANELS_ID in "
						+ "	(select PANELS_ID from panel_group where GROUP_ID = ?)"
						+ ")";
				JsonFactory.getSqlDdlDao().queryJson(paneBoxDefSql, paramMap,
						PanelBoxDef.class, print);
				print.println(",");

				// 面板是否有已发布
				// updateStatus(col.getColumnId());

				// 面板内容
				String PanelBoxItemSql = "select * from panel_box_item where box_id in "
						+ "(select box_id from panel_box_def where PANEL_ID in "
						+ "	(select PANEL_ID from panel_group_dtl where PANELS_ID in "
						+ "		(select PANELS_ID from panel_group where GROUP_ID = ?)"
						+ "	)" + ")";
				JsonFactory.getSqlDdlDao().queryJson(PanelBoxItemSql, paramMap,
						PanelBoxItem.class, print);

				print.print("]");

			} finally {
				if (print != null)
					print.close();
			}
			//
			PublishLog log = new PublishLog();
			log.setColumnId(new BigDecimal(0));
			log.setCustId(new BigDecimal(custId));
			log.setFileUrl("data" + File.separator + fileName);
			log.setMd5Num(md5.getFileMD5String(new File(root
					+ fileName.toString())));
			log.setState(BigDecimal.ZERO);
			log.setPublishType(new BigDecimal(2));
			log.setPublishId(PkHelper.getPk("PUBLISH_LOG"));
			DbFactory.getSqlDdlDao().insert(log);

		}

	}

	@Override
	public List qryPanelGroupUrl(String panel_ids)
			throws Exception {
		Map param = new HashMap();
		param.put("1", panel_ids);
		if (null != panel_ids && panel_ids.length() > 0){

			DbFactory.getSqlDdlDao().delAddUptSql("update preview_panel set panel_group_id=?",param);
		}
		// 查询面板预览地址
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT dd_value, dd_text FROM dd_value WHERE dd_code = 'PREVIEW_PANEL' AND dd_sort=?;");
		List result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), new String[]{"dd_value", "dd_text"}, param);
		return result;
	}

	@Override
	public String clientUpdateLogInsertOrUpdate(String json) throws Exception {
		if (null == json || json.length() == 0){
			return "{\"state\":1}";
		}else{
			try{
				JSONArray jsonarray = JSON.parseArray(json);
				if (jsonarray.size() > 0){
					Map paramMap = new HashMap();
					for (int i = 0; i < jsonarray.size(); i++){
						JSONObject jsonobject = (JSONObject)jsonarray.get(i);
						paramMap.clear();
						StringBuilder sql = new StringBuilder();
						sql.append("Select * from client_update_log where ");
						sql.append(getClientUpdateLogWhere(jsonobject));
						List result = DbFactory.getSqlDdlDao().queryListMap(sql.toString(), new String[]{"state"}, paramMap);
						if (null != result && result.size() > 0){
							sql.delete(0, sql.length());
							Integer state = jsonobject.getInteger("state");
							if (state == null) {
								state = 1;
							}
							sql.append("update client_update_log set state = " + state + ", update_date = now() "+
									" where ");
							sql.append(getClientUpdateLogWhere(jsonobject));
							DbFactory.getSqlDdlDao().delAddUptSql(sql.toString(), paramMap);
						}else{
							sql.delete(0, sql.length());
							sql.append("insert into client_update_log(equip_id, column_id, version_id, version_type, state) " +
									"values(?,?,?,?,?)");
							paramMap.clear();
							Integer equip_id = jsonobject.getInteger("equip_id");
							if(null != equip_id){
								paramMap.put("1", equip_id);
							}else{
								paramMap.put("1", " null ");
							}
							Integer column_id = jsonobject.getInteger("column_id");
							if(null != column_id){
								paramMap.put("2", column_id);
							}else{
								paramMap.put("2", "  null ");
							}
							Integer version_id = jsonobject.getInteger("version_id");
							if(null != version_id){
								paramMap.put("3",  version_id);
							}else{
								paramMap.put("3", " null ");
							}
							Integer version_type = jsonobject.getInteger("version_type");
							if(null != version_type){
								paramMap.put("4",  version_type);
							}else{
								paramMap.put("4", " null ");
							}
							Integer state = jsonobject.getInteger("state");
							if (state == null) {
								state = 1;
							}
							paramMap.put("5", state);
							DbFactory.getSqlDdlDao().delAddUptSql(sql.toString(), paramMap);
						}
					}
				}
			}catch (Exception e) {
				return "{\"state\":1}";
			}
		}
		return  "{\"state\":0}";
	}

	private String getClientUpdateLogWhere(JSONObject jsonobject){
		if (null != jsonobject){
			StringBuilder sql = new StringBuilder();
			Integer equip_id = jsonobject.getInteger("equip_id");
			if(null != equip_id){
				sql.append("equip_id =" + equip_id + " ");
			}else{
				sql.append("equip_id is null ");
			}
			Integer column_id = jsonobject.getInteger("column_id");
			sql.append("and ");
			if(null != column_id){
				sql.append("column_id =" + column_id + " ");
			}else{
				sql.append("column_id is null ");
			}
			Integer version_id = jsonobject.getInteger("version_id");
			sql.append("and ");
			if(null != version_id){
				sql.append("version_id =" + version_id + " ");
			}else{
				sql.append("version_id is null ");
			}
			Integer version_type = jsonobject.getInteger("version_type");
			sql.append("and ");
			if(null != version_type){
				sql.append("version_type =" + version_type + " ");
			}else{
				sql.append("version_type is null ");
			}
			return sql.toString();
		}
		return "";
	}

	@Override
	public String accessInfoInsert(String json) throws Exception {
		if (null == json || json.length() == 0){
			return "{\"state\":1}";
		}else{
			try{
				JSONArray jsonarray = JSON.parseArray(json);
				if (jsonarray.size() > 0){
					Map paramMap = new HashMap();
					for (int i = 0; i < jsonarray.size(); i++){
						JSONObject jsonobject = (JSONObject)jsonarray.get(i);
						StringBuilder sql = new StringBuilder();
						sql.append("insert into access_info(box_id, res_id, action, device_type, access_time) " +
								"values(?,?,?,?,cast(? as datetime))");
						paramMap.clear();
						Integer box_id = jsonobject.getInteger("box_id");
						if(null != box_id){
							paramMap.put("1", box_id);
						}else{
							paramMap.put("1", " null ");
						}
						Integer res_id = jsonobject.getInteger("res_id");
						if(null != res_id){
							paramMap.put("2", res_id);
						}else{
							paramMap.put("2", "  null ");
						}
						String action = jsonobject.getString("action");
						if(null != action){
							paramMap.put("3",  action);
						}else{
							paramMap.put("3", " null ");
						}
						Integer device_type = jsonobject.getInteger("device_type");
						if(null != device_type){
							paramMap.put("4",  device_type);
						}else{
							paramMap.put("4", " null ");
						}
						String access_time = jsonobject.getString("access_time");
						if (access_time == null) {
							SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
							access_time = df.format(new Date());
						}
						paramMap.put("5", access_time);
						DbFactory.getSqlDdlDao().delAddUptSql(sql.toString(), paramMap);
					}
				}
			}catch (Exception e) {
				return  "{\"state\":1}";
			}
		}
		return  "{\"state\":0}";
	}
}
