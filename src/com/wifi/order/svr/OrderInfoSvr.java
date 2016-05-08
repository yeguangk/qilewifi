package com.wifi.order.svr;

import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

import org.frame.db.page.PageUtil;

public interface OrderInfoSvr {
	
	/**
	 * 获取该用户的当前生效订购记录的接口
	 * @param loginName
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	String getOrder(String loginName) throws Exception, RemoteException;
	
	/**
	 * 查询支付信息
	 * @param mapInfo
	 * @param pageUtil
	 * @return
	 * @throws Exception
	 * @throws RemoteException
	 */
	List queryOrderInfos(Map mapInfo, PageUtil pageUtil)throws Exception, RemoteException;

}
