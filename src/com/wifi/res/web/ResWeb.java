package com.wifi.res.web;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.HttpUtilForMap;
import com.wifi.intf.svr.JsonSvr;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.svr.ResSvr;
import com.wifi.res.vo.ResList;
import com.wifi.res.vo.ResSubList;
import com.wifi.res.vo.ResVo;
import com.wifi.res.vo.SpInfoVo;
import com.wifi.res.vo.SubResVo;

public class ResWeb {
	public void qryInfo(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		List dataList = svr.qryInfoPg(cond, null);
		if (dataList != null && dataList.size() == 1) {
			HttpUtil.success((ResInfo) dataList.get(0), response);
		} else {
			HttpUtil.success(new ResInfo(), response);
		}
	}

	public void qryInfoPg(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		if (request.getParameter("resType") != null
				&& !"".equals(request.getParameter("resType"))) {
			cond.put("resType", request.getParameter("resType"));
		}
		if (request.getParameter("columnId") != null
				&& !"".equals(request.getParameter("columnId"))) {
			cond.put("columnId", request.getParameter("columnId"));
		}
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
		try {
			HttpUtil.success(svr.qryInfoPg(cond, pageInfo), pageInfo, response);
		} catch (Exception e) {
			e.printStackTrace();
			HttpUtil.failured(e, response);
		}

	}

	public void qryFile(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(
				svr.qryFile(new BigDecimal((String) cond.get("resId")),
						request.getParameter("flg")), response);
	}

	public void qryAttr(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(
				svr.qryAttr(new BigDecimal((String) cond.get("resId"))),
				response);
	}

	public void qryTag(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(
				svr.qryTag(new BigDecimal((String) cond.get("resId"))),
				response);
	}

	public void save(MoziRequest request, HttpServletResponse response)
			throws Exception {
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		ResVo resVo = (ResVo) request.getJsonData(ResVo.class);
		svr.save(resVo.getResInfo(), resVo.getResList(), resVo.getAttrList(),
				resVo.getTagList(), resVo.getSubResList());
		HttpUtil.success(response);
	}

	public void saveSub(MoziRequest request, HttpServletResponse response)
			throws Exception {
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		SubResVo resVo = (SubResVo) request.getJsonData(SubResVo.class);
		svr.saveSub(resVo.getSubInfo(), resVo.getFileList());
		HttpUtil.success(response);
	}

	public void qrySubInfo(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(
				svr.qrySubInfo(new BigDecimal((String) cond.get("keyId"))),
				response);
	}

	public void delSub(MoziRequest request, HttpServletResponse response)
			throws Exception {
		ResSubList subList = (ResSubList) request.getJsonData(ResSubList.class);
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		svr.deleteSub(subList.getSubInfo());
		HttpUtil.success(response);
	}

	public void del(MoziRequest request, HttpServletResponse response)
			throws Exception {
		ResList subList = (ResList) request.getJsonData(ResList.class);
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		svr.deleteRes(subList.getInfo());
		HttpUtil.success(response);
	}

	public void qrySubFile(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(
				svr.qrySubFile(new BigDecimal((String) cond.get("subId"))),
				response);
	}

	public void ustate(MoziRequest request, HttpServletResponse response)
			throws Exception {
		SpInfoVo vo = (SpInfoVo) request.getJsonData(SpInfoVo.class);
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		svr.updateState(vo.getResId(), vo.getSpInfo(), vo.getState());
		HttpUtil.success(response);
	}

	public void qrySpInfo(MoziRequest request, HttpServletResponse response)
			throws Exception {
		Map cond = request.getInputStreamParams();
		ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);
		HttpUtil.success(svr.qrySpInfo((String) cond.get("resId")), response);
	}

	public void fbRes(MoziRequest request, HttpServletResponse response)
			throws Exception {
		JsonSvr svr = (JsonSvr) ServiceFactory.getService(JsonSvr.class);
		Map parmsMap = request.getInputStreamParams();
		if (null != parmsMap && parmsMap.size() > 0) {
			String columnId = (String) parmsMap.get("columnId");
			if (null != columnId && columnId.length() > 0) {
				svr.updatefbRes(request.getRootPath(), new BigDecimal(columnId));
				HttpUtil.success(response);
			}
		}
	}

	/**
	 * 面板发布接口
	 * 
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	public void publishPanelRess(MoziRequest request,
			HttpServletResponse response) throws Exception {
		JsonSvr svr = (JsonSvr) ServiceFactory.getService(JsonSvr.class);
		svr.updatePanelPublishJsonFiels(request.getRootPath());
		HttpUtil.success(response);
	}

	/**
	 * 根据面板组IDs更新PREVIEW_PANEL的值及查询dd_value
	 * 
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	public void qryPanelGroupUrl(MoziRequest request,
			HttpServletResponse response) throws Exception {
		JsonSvr svr = (JsonSvr) ServiceFactory.getService(JsonSvr.class);
		Map params = request.getInputStreamParams();
		String panel_ids = (String) params.get("panels_id");
		List result = svr.qryPanelGroupUrl(panel_ids);
		HttpUtilForMap.success(result, response);
	}
}