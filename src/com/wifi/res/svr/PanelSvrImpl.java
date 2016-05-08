package com.wifi.res.svr;

import com.mz.sys.web.UserUtil;
import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.pub.ICustService;
import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.frame.db.dao.DbFactory;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.StringUtil;
import org.frame.utils.SystemDateUtil;

public class PanelSvrImpl implements PanelSvr {

	public List qryPanelPg(Map condMap, PageUtil pageInfo) throws Exception {

		StringBuffer sql = new StringBuffer(
				"select a.* from panel_def a where 1=1 ");
		Map param = new HashMap();
		int index = 1;
		String panelId = (String) condMap.get("panelId");
		if (!StringUtil.isEmpty(panelId)) {
			param.put(String.valueOf(index++), panelId);
			sql.append(" and a.PANEL_ID=? ");
		}
		String resType = (String) condMap.get("resType");
		if (!StringUtil.isEmpty(resType)) {
			param.put(String.valueOf(index++), resType);
			sql.append(" and a.RES_TYPE=? ");
		}
		String title = (String) condMap.get("title");
		if (!StringUtil.isEmpty(title)) {
			param.put(String.valueOf(index++), "%" + title + "%");
			sql.append(" and a.TITLE like ? ");
		}
		String screenId = (String) condMap.get("screenId");
		if (!StringUtil.isEmpty(screenId)) {
			param.put(String.valueOf(index++), screenId);
			sql.append(" and a.SCREEN_ID=? ");
		}
		String cust_id = (String) condMap.get("cust_id");
		if (!StringUtil.isEmpty(cust_id)) {
			param.put(String.valueOf(index++), cust_id);
			sql.append(" and a.PANEL_ID in (" +
					"select b.panel_id from panel_def b where PANEL_ID in" +  
						"(select PANEL_ID from panel_group_dtl where PANELS_ID in" +
							"(select PANELS_ID from panel_group where GROUP_ID in " +
								"(select GROUP_ID from cust_group where cust_id = ?)" +
							 ")" +
						")" +
					") ");
		}

		String keyWord = (String) condMap.get("keyWord");
		if (!StringUtil.isEmpty(keyWord)) {
			param.put(String.valueOf(index++), "%" + keyWord + "%");
			sql.append(" and ( a.TITLE like ? ");
			param.put(String.valueOf(index++), keyWord);
			sql.append(" or a.PANEL_ID= ? )");
		}

		sql.append(UserUtil.custFilter2("a"));
		if (pageInfo != null) {
			pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(
					sql.toString(), param));
			return DbFactory.getSqlDdlDao().query(sql.toString(), param,
					PanelDef.class, pageInfo);
		} else {
			return DbFactory.getSqlDdlDao().query(sql.toString(), param,
					PanelDef.class);
		}
	}

	public List qryBoxs(BigDecimal panelId) throws Exception {
		StringBuffer sql = new StringBuffer(
				"select a.* from panel_box_def a where a.PANEL_ID=? ");
		Map param = new HashMap();
		param.put("1", panelId);
		return DbFactory.getSqlDdlDao().query(sql.toString(), param,
				PanelBoxDef.class);
	}

	public List qryBox(BigDecimal boxId) throws Exception {
		StringBuffer sql = new StringBuffer(
				"select a.* from panel_box_def a where a.BOX_ID=? ");
		Map param = new HashMap();
		param.put("1", boxId);
		return DbFactory.getSqlDdlDao().query(sql.toString(), param,
				PanelBoxDef.class);
	}

	public List qryBoxItems(BigDecimal boxId) throws Exception {
		StringBuffer sql = new StringBuffer(
				"select a.*,b.Column_Name from panel_box_item a left join column_info b on a.Column_id=b.Column_id where a.BOX_ID=? ");
		Map param = new HashMap();
		param.put("1", boxId);
		return DbFactory.getSqlDdlDao().query(sql.toString(), param,
				PanelBoxItem.class);
	}

	private BigDecimal getMax() throws Exception {
		StringBuffer sql = new StringBuffer(
				"select max(a.PANEL_ID) maxval from panel_def a ");
		Map param = new HashMap();
		Map dataMap = DbFactory.getSqlDdlDao().queryMap(sql.toString(),
				new String[] { "MAXVAL" }, param);
		if (dataMap.get("MAXVAL") != null
				&& !"".equals((String) dataMap.get("MAXVAL"))) {
			return new BigDecimal((String) dataMap.get("MAXVAL"))
					.add(BigDecimal.ONE);
		} else {
			return BigDecimal.ONE;
		}
	}

	private BigDecimal getBoxIdMax() throws Exception {
		StringBuffer sql = new StringBuffer(
				"select max(a.BOX_ID) maxval from panel_box_def a ");
		Map param = new HashMap();
		Map dataMap = DbFactory.getSqlDdlDao().queryMap(sql.toString(),
				new String[] { "MAXVAL" }, param);
		if (dataMap.get("MAXVAL") != null
				&& !"".equals((String) dataMap.get("MAXVAL"))) {
			return new BigDecimal((String) dataMap.get("MAXVAL"))
					.add(BigDecimal.ONE);
		} else {
			return BigDecimal.ONE;
		}
	}

	public void save(PanelDef panelInfo, PanelBoxDef boxInfo,
			List<PanelBoxItem> itemList) throws Exception {

		if (panelInfo.getPanelId() == null) {
			BigDecimal displayClass = panelInfo.getDisplayClass();
			if (null == displayClass){
				panelInfo.setDisplayClass(new BigDecimal(0));
			}
			panelInfo.setPanelId(getMax());
			panelInfo.setCreateDate(SystemDateUtil.getSystemDate());
			panelInfo.setCreateMan(String.valueOf(UserUtil.getCurUser()
					.getDepartId()));
			DbFactory.getSqlDdlDao().insert(panelInfo);
		} else {
			DbFactory.getSqlDdlDao().update(panelInfo);
			// //更新版本号
			// Map param=new HashMap();
			// param.put("1", panelInfo.getPanelId());
			// DbFactory.getSqlDdlDao().delAddUptSql("update panel_group a set a.VERSION_VAL=VERSION_VAL+1 where EXISTS( select 1 from panel_group_dtl b where a.PANELS_ID=b.PANELS_ID and b.panel_id=?)",
			// param);
		}
		BigDecimal showNum = boxInfo.getShowNum();
		if (showNum == null){
			 boxInfo.setShowNum(new BigDecimal(-1));
		}
		BigDecimal boxClass = boxInfo.getBoxClass();
		if (null == boxClass){
			boxInfo.setBoxClass(new BigDecimal(0));
		}
		boxInfo.setPanelId(panelInfo.getPanelId());
		if (boxInfo.getBoxId() == null) {
			boxInfo.setBoxId(getBoxIdMax());
			DbFactory.getSqlDdlDao().insert(boxInfo);
		} else {
			DbFactory.getSqlDdlDao().update(boxInfo);
		}
		DbFactory.getSqlDdlDao().delete(PanelBoxItem.class, "BOX_ID=?",
				new Object[] { boxInfo.getBoxId() });
		for (PanelBoxItem info : itemList) {
			info.setBoxId(boxInfo.getBoxId());
			DbFactory.getSqlDdlDao().insert(info);
		}
	}

	public BigDecimal saveCopy(BigDecimal panelId) throws Exception {
		PanelDef pnl = qryPanelById(panelId);
		pnl.setPanelId(getMax());
		DbFactory.getSqlDdlDao().insert(pnl);

		List<PanelBoxDef> boxs = qryBoxs(panelId);
		BigDecimal boxId = getBoxIdMax();
		for (PanelBoxDef box : boxs) {
			box.setPanelId(pnl.getPanelId());
			List<PanelBoxItem> itemList = qryBoxItems(box.getBoxId());
			for (PanelBoxItem item : itemList) {
				item.setBoxId(boxId);
				item.setPdtlId(null);
				DbFactory.getSqlDdlDao().insert(item);
			}
			box.setBoxId(boxId);
			DbFactory.getSqlDdlDao().insert(box);
			boxId = boxId.add(BigDecimal.ONE);
		}
		return pnl.getPanelId();
	}

	public PanelDef qryPanelById(BigDecimal panelId) throws Exception {

		StringBuffer sql = new StringBuffer(
				"select a.* from panel_def a where a.PANEL_ID=? ");
		Map param = new HashMap();
		int index = 1;
		param.put(String.valueOf(index++), panelId);
		List dataList = DbFactory.getSqlDdlDao().query(sql.toString(), param,
				PanelDef.class);
		if (dataList.size() > 0) {
			return (PanelDef) dataList.get(0);
		} else {
			throw new Exception("没找到面板信息");
		}
	}

	public void delete(BigDecimal boxId) throws Exception {
		// TODO Auto-generated method stub
		DbFactory.getSqlDdlDao().delete(PanelBoxDef.class, "BOX_ID=?",
				new Object[] { boxId });
		DbFactory.getSqlDdlDao().delete(PanelBoxItem.class, "BOX_ID=?",
				new Object[] { boxId });
	}

	@Override
	public void delete(List<PanelDef> infoList) throws Exception {
		// TODO Auto-generated method stub
		DbFactory.getSqlDdlDao().delete(infoList);
		StringBuilder sql = new StringBuilder("delete from panel_box_item ");
		sql.append(" where EXISTS(select 1 from panel_box_def  ");
		sql.append(" where panel_box_def.BOX_ID=panel_box_item.BOX_ID  ");
		sql.append(" and panel_box_def.PANEL_ID=? )  ");

		String s = sql.toString();
		Map param = new HashMap();
		for (PanelDef info : infoList) {
			param.put("1", info.getPanelId());
			DbFactory.getSqlDdlDao().delAddUptSql(s, param);
			DbFactory.getSqlDdlDao().delete(PanelBoxDef.class, "PANEL_ID=?",
					new Object[] { info.getPanelId() });
		}
	}

	@Override
	public List qryPanelPgByCustName(Map condMap, PageUtil pageInfo)
			throws Exception {
		
		// 查询客户信息
		String custName = (String) condMap.get("name");
		Map<String, Object> custCondition = new HashMap<String, Object>();
		custCondition.put("name", "= '" + custName + "' ");
		ICustService svr = (ICustService)ServiceFactory.getService(ICustService.class);
		StringBuffer sql = new StringBuffer(
				"select a.* from panel_def a where 1=1 ");
		Map param = new HashMap();
		int index = 1;
		String panelId = (String) condMap.get("panelId");
		if (!StringUtil.isEmpty(panelId)) {
			param.put(String.valueOf(index++), panelId);
			sql.append(" and a.PANEL_ID=? ");
		}
		String resType = (String) condMap.get("resType");
		if (!StringUtil.isEmpty(resType)) {
			param.put(String.valueOf(index++), resType);
			sql.append(" and a.RES_TYPE=? ");
		}
		String title = (String) condMap.get("title");
		if (!StringUtil.isEmpty(title)) {
			param.put(String.valueOf(index++), "%" + title + "%");
			sql.append(" and a.TITLE like ? ");
		}
		String screenId = (String) condMap.get("screenId");
		if (!StringUtil.isEmpty(screenId)) {
			param.put(String.valueOf(index++), screenId);
			sql.append(" and a.SCREEN_ID=? ");
		}

		String keyWord = (String) condMap.get("keyWord");
		if (!StringUtil.isEmpty(keyWord)) {
			param.put(String.valueOf(index++), "%" + keyWord + "%");
			sql.append(" and ( a.TITLE like ? ");
			param.put(String.valueOf(index++), keyWord);
			sql.append(" or a.PANEL_ID= ? )");
		}

		sql.append(UserUtil.custFilter2("a"));
		if (pageInfo != null) {
			pageInfo.setRowTotal(DbFactory.getSqlDdlDao().queryCount(
					sql.toString(), param));
			return DbFactory.getSqlDdlDao().query(sql.toString(), param,
					PanelDef.class, pageInfo);
		} else {
			return DbFactory.getSqlDdlDao().query(sql.toString(), param,
					PanelDef.class);
		}
	}

	@Override
	public List qryPanelGroup(String cust_id) throws Exception {
		if(cust_id != null){
			StringBuilder sql = new StringBuilder();
			sql.append("SELECT panels_id, panels_name FROM panel_group panel_group WHERE EXISTS ( " +
					"SELECT 1 FROM panel_group_dtl panel_group_dtl " +
					"WHERE panel_group.panels_id = panel_group_dtl.panels_id " +
					"AND  panel_group_dtl.panel_id IN ( " +
					"SELECT panel_def.panel_id " +
					"FROM panel_def panel_def WHERE panel_def.create_man = " +cust_id + "))");
			List result = DbFactory.getSqlDdlDao().query(sql.toString(),PanelGroup.class);
			return result;
		}
		return null;
	}

	
}