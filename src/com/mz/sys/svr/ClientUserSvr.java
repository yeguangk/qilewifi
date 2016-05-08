package com.mz.sys.svr;

import java.rmi.RemoteException;
import java.util.List;

import org.frame.db.page.PageUtil;

public interface ClientUserSvr {
	
	/***
	 * 注册用户信息
	 * @param loginname
	 * @param passwd
	 * @param uuid
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	String registerClient(String loginName, String password, String uuid)
			throws Exception, RemoteException;
	
	/**
	 * 用户上线
	 * @param loginname
	 * @param passwd
	 * @param uuid
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	String clientUserOnline(String loginName, String password, String uuid)
			throws Exception, RemoteException;
	
	/**
	 * 查询所有客户端的用户信息
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	List queryAllClientUserInfos(PageUtil pageInfo)throws Exception, RemoteException;
	
	/**
	 * 修改密码
	 * @param loginName
	 * @param password
	 * @param uuid
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	String changePasswd(String loginName, String password, String uuid)throws Exception, RemoteException;

}
