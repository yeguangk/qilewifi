package com.mz.sys.web;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.mz.sys.svr.ClientUserSvr;

public class ClientUserWeb {
	private static final Logger log = Logger.getLogger(ClientUserWeb.class);

	public void register(MoziRequest request,
			HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		String loginName = request.getParameter("loginname");
		String password = request.getParameter("passwd");
		String uuid = request.getParameter("uuid");
		
		ClientUserSvr clientUserSvr = (ClientUserSvr)ServiceFactory.getService(ClientUserSvr.class);
		HttpUtil.outJson(clientUserSvr.registerClient(loginName, password, uuid), response);
	}
	
	public void login(MoziRequest request,
			HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		String loginName = request.getParameter("loginname");
		String password = request.getParameter("passwd");
		String uuid = request.getParameter("uuid");
		ClientUserSvr clientUserSvr = (ClientUserSvr)ServiceFactory.getService(ClientUserSvr.class);
		HttpUtil.outJson(clientUserSvr.clientUserOnline(loginName, password, uuid), response);
	}
	
	public void changePasswd(MoziRequest request,
			HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		String loginName = request.getParameter("loginname");
		String password = request.getParameter("passwd");
		String uuid = request.getParameter("uuid");
		ClientUserSvr clientUserSvr = (ClientUserSvr)ServiceFactory.getService(ClientUserSvr.class);
		HttpUtil.outJson(clientUserSvr.changePasswd(loginName, password, uuid), response);
	}
	
	public void queryAllClientUserInfos(MoziRequest request,
			HttpServletResponse response) throws Exception {
		ClientUserSvr clientUserSvr = (ClientUserSvr)ServiceFactory.getService(ClientUserSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(request);
		HttpUtil.success(clientUserSvr.queryAllClientUserInfos(pageInfo),pageInfo, response);
	}
	
}
