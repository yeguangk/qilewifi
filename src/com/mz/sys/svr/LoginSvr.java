package com.mz.sys.svr;

import com.mz.sys.bo.SysUserInfo;

import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

public abstract interface LoginSvr {
	public abstract boolean checkLogin(String paramString1,
			String paramString2, SysUserInfo paramSysUserInfo)
			throws Exception, RemoteException;

	public abstract boolean loginForPdt(String paramString1,
			String paramString2, SysUserInfo paramSysUserInfo)
			throws Exception, RemoteException;

	public abstract Map getUserResMap(BigDecimal paramBigDecimal)
			throws Exception, RemoteException;

	public abstract List getUserMenuList(Map paramMap) throws Exception,
			RemoteException;

	public List getMenuList() throws Exception, RemoteException;

	public abstract List getDataPermission(BigDecimal paramBigDecimal,
			String paramString) throws Exception, RemoteException;

	public abstract List getMenuByBtn(String paramString) throws Exception,
			RemoteException;

	public abstract List getUserOrg(String paramString) throws Exception,
			RemoteException;

	public abstract List getMenuByPageId(String paramString) throws Exception,
			RemoteException;
}