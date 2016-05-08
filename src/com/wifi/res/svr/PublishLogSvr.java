package com.wifi.res.svr;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

import com.wifi.res.bo.PanelBoxDef;
import com.wifi.res.bo.PanelBoxItem;
import com.wifi.res.bo.PanelDef;
import com.wifi.res.bo.PublishLog;
import com.wifi.res.bo.PublishRange;

public interface PublishLogSvr
{
	public List qryLogPg(Map condMap,PageUtil pageInfo)throws Exception;

	public void save(PublishLog mainInfo, List<PublishRange> limitList)throws Exception;
	
	public List qryLogLimit(Map condMap) throws Exception;
}