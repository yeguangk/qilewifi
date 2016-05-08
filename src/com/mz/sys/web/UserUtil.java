package com.mz.sys.web;

import com.mz.sys.bo.SysUserInfo;
import com.mz.sys.svr.CurUserSvr;

import java.rmi.RemoteException;
import java.text.NumberFormat;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.proxy.AbsUserUtil;
import org.frame.svr.ServiceFactory;

public class UserUtil extends AbsUserUtil {
	private static CurUserSvr svr = null;

	static {
		try {
			svr = (CurUserSvr) ServiceFactory.getService(CurUserSvr.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static SysUserInfo getCurUser() throws Exception {
		return svr.getCurUser();
	}

	public static void cacheCurUser(SysUserInfo userInfo) throws Exception {
		svr.cacheCurUser(userInfo);
	}

	public String getLoginCode() {
		try {
			return svr.getCurUser().getLoginCode();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	public static String custFilter3(String aliasName) throws RemoteException,
	Exception {
		SysUserInfo user = svr.getCurUser();
		StringBuffer rtn = new StringBuffer();
		if (!StringUtils.isEmpty(UserUtil.getCurUser().getDepartId())) {
			rtn.append(" and (");
			if (aliasName != null)
				rtn.append(aliasName).append(".");
			rtn.append("DEPART_ID='")
					.append(UserUtil.getCurUser().getDepartId()).append("') ");
		}
		return rtn.toString();
	}
	public static String custFilter2(String aliasName) throws RemoteException,
			Exception {
		SysUserInfo user = svr.getCurUser();
		StringBuffer rtn = new StringBuffer();
		if (!StringUtils.isEmpty(UserUtil.getCurUser().getDepartId())) {
			rtn.append(" and (");
			if (aliasName != null)
				rtn.append(aliasName).append(".");
			rtn.append("CREATE_MAN='")
					.append(UserUtil.getCurUser().getDepartId()).append("') ");
		}
		return rtn.toString();
	}

	public static String custFilter(String aliasName) throws RemoteException,
			Exception {
		SysUserInfo user = svr.getCurUser();
		StringBuffer rtn = new StringBuffer();
		if (!StringUtils.isEmpty(UserUtil.getCurUser().getDepartId())) {
			rtn.append(" and (");
			if (aliasName != null)
				rtn.append(aliasName).append(".");
			rtn.append("CUST_ID='").append(UserUtil.getCurUser().getDepartId())
					.append("') ");
		}
		return rtn.toString();
	}

}