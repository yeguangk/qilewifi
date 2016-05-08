package com.wifi.cust.pub;

import java.util.List;
import java.util.Map;

import com.wifi.cust.bo.CustInfo;

/**
 * 提供其他模块调用 
 * @author yegk
 *
 */
public interface ICustService {

	/**
	 * 根据客户的信息条件查询客户信息
	 * @param conditionMap	key=条件名称 value=条件值,这里的条件值带符号：in、 = ...
	 * @param params	需要查询的字段
	 * 		如果params是null 或者 空 默认查询客户字段的全部信息
	 * @return
	 * @throws Exception
	 */
	public List<CustInfo> qryCustInfoByContion(Map<String, Object> conditionMap, List<String> params) throws Exception;
}
