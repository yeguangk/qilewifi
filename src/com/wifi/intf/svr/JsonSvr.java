package com.wifi.intf.svr;

import java.math.BigDecimal;
import java.util.List;

public interface JsonSvr {
	/**
	 * 资源发布
	 * @param path
	 * @throws Exception
	 */
	public void updatefbRes(String path, BigDecimal columnId) throws Exception;
	
	/**
	 * 根据设备的设备号查询发布文件
	 * @param path
	 * @param equipNo
	 * @return
	 * @throws Exception
	 */
	public String qrypanelPublishByEquipNo(String path,String equipNo) throws Exception;
	
	/**
	 * 面板发布Panel调用
	 * @param path
	 * @throws Exception
	 */
	public void updatePanelPublishJsonFiels(String path) throws Exception;
	
	/**
	 * 根据面板组ID更新preview_panel表和查询面板预览dd_value
	 * @param previewPanel 面板预览
	 * @param panel_ids    面板组ID
	 * @return
	 * @throws Exception
	 */
	public List qryPanelGroupUrl(String panel_ids) throws Exception;
	
	/**
	 * 根据josn参数更新或添加数据client_Update_Log表数据
	 * @param josn 添加的或更新的数据
	 * @return 返回状态
	 * @throws Exception
	 */
	public String clientUpdateLogInsertOrUpdate(String josn) throws Exception;
	/**
	 * 根据josn参数更新或添加数据access_info数据
	 * @param josn 添加的或更新的数据
	 * @return 返回状态
	 * @throws Exception
	 */
	public String accessInfoInsert(String josn) throws Exception;
}
