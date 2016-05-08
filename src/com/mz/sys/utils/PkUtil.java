package com.mz.sys.utils;

import com.mz.sys.bo.SysGenPkValue;
import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class PkUtil
{
  public static String getKeyId()
  {
    return UUID.randomUUID().toString().toUpperCase();
  }
  public static String updatePkValue(String seqNo) throws Exception, RemoteException {
    if (seqNo == null) {
      throw new Exception("主键生成规则查询条件不能为空.");
    }
    SysGenPkValue pkValueCond = new SysGenPkValue();
    pkValueCond.setSeqNo(seqNo);
    List pkValueList = querySysGenPkValue(pkValueCond);
    if ((pkValueList != null) && (pkValueList.size() > 0)) {
      return updatePkValue((SysGenPkValue)pkValueList.get(0));
    }
    throw new Exception("主键" + seqNo + "在主键生成规则表里没有配置.");
  }

  private static String updatePkValue(SysGenPkValue pkValue) throws Exception {
    int type = pkValue.getSeqType().intValue();
    switch (type) {
    case 1:
      return updatePkValue(pkValue, type);
    case 2:
      return updatePkValue(pkValue, type);
    case 3:
      return updatePkValue(pkValue, type);
    }
    return null;
  }

  private static String updatePkValue(SysGenPkValue pkValue, int type) throws Exception {
    BigDecimal curValue = pkValue.getCurValue().add(BigDecimal.ONE);

    pkValue.setCurValue(curValue);
    updateSysGenPkValue(pkValue);
    String tmp = curValue.toString();
    if (type == 3) {
      return tmp;
    }
    StringBuffer buff = new StringBuffer();
    tmp = StringUtils.leftPad(tmp, pkValue.getValueLen().intValue(), '0');
    if (type == 1) {
      buff.append(pkValue.getPreValue()).append(tmp);
      return buff.toString();
    }
    return tmp;
  }

  private static List querySysGenPkValue(SysGenPkValue bo)
    throws Exception
  {
    StringBuffer strSql = new StringBuffer("select * from sys_gen_pkvalue where 1=1 ");
    Map param = new HashMap();
    if (bo.getSeqNo() != null) {
      strSql.append(" and seq_no=? ");
      param.put("1", bo.getSeqNo());
    }
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, SysGenPkValue.class);
    return beanList;
  }
  private static void updateSysGenPkValue(SysGenPkValue bo) throws Exception {
    DbFactory.getSqlDdlDao().update(bo);
  }
}