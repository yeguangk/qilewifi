package com.mz.sys.utils;

import com.mz.sys.bo.BasAutoCode;
import com.mz.sys.bo.BasAutoMaxno;
import java.math.BigDecimal;
import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class BusiNoUtil
{
  public static String genNo(String codeClassCd, String orgId, String date)
    throws Exception, RemoteException
  {
    BasAutoCode bo = qryBasAutoCode(codeClassCd);
    if (bo == null) {
      throw new Exception("没找到自动编码规则");
    }

    StringBuffer pk = new StringBuffer();
    String tmp = bo.getSplitter();
    if ((tmp == null) || (tmp.equals(""))) tmp = "";

    if ((bo.getCodePre() != null) && (!"".equals(bo.getCodePre()))) {
      pk.append(bo.getCodePre()).append(tmp);
    }

    if ("80B".equals(bo.getCodeRangeCd())) {
      pk.append(orgId).append(tmp);
    }

    String yearMonthDay = "";
    if ("Y".equals(bo.getSnFlg()))
      yearMonthDay = date.substring(0, 4);
    else if ("M".equals(bo.getSnFlg()))
      yearMonthDay = date.substring(0, 4) + date.substring(5, 7);
    else if ("D".equals(bo.getSnFlg()))
      yearMonthDay = date.substring(0, 4) + date.substring(5, 7) + date.substring(8, 10);
    else if ("DD".equals(bo.getSnFlg()))
      yearMonthDay = date.substring(8, 10);
    else {
      yearMonthDay = date.substring(0, 4) + date.substring(5, 7);
    }

    if ("YYYY".equals(bo.getYearType()))
      pk.append(yearMonthDay).append(tmp);
    else if ("YY".equals(bo.getYearType())) {
      pk.append(yearMonthDay.substring(2, yearMonthDay.length())).append(tmp);
    }
    String orgCd = "-1";

    if ("80B".equals(bo.getCodeRangeCd())) {
      orgCd = orgId;
    }
    BasAutoMaxno snoBo = getSnoMax(orgCd, codeClassCd, yearMonthDay);
    if (snoBo == null) {
      throw new Exception("没找到最大序号记录");
    }
    BigDecimal maxNo = new BigDecimal(snoBo.getMaxno()).add(new BigDecimal("1"));
    String max = maxNo.toString();
    snoBo.setMaxno(max);
    updateBasAutoMaxno(snoBo);

    int len = bo.getSno().intValue();
    pk.append(StringUtils.leftPad(max, len, "0"));

    return pk.toString();
  }

  private static BasAutoCode qryBasAutoCode(String codeClassCd) throws Exception
  {
    StringBuffer strSql = new StringBuffer("select * from bas_auto_code where code_class_cd=? ");
    Map param = new HashMap();
    param.put("1", codeClassCd);
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, BasAutoCode.class);
    if (beanList.size() >= 1) {
      return (BasAutoCode)beanList.get(0);
    }
    return null;
  }

  private static void updateBasAutoMaxno(BasAutoMaxno bo) throws Exception
  {
    DbFactory.getSqlDdlDao().update(bo);
  }

  private static BasAutoMaxno getSnoMax(String orgCd, String busiType, String yearMonthDay) throws Exception {
    StringBuffer strSql = null;
    strSql = new StringBuffer("select * from bas_auto_maxno where org_cd=? and code_class_cd=? ");
    Map param = null;
    param = new HashMap();
    param.put("1", orgCd);
    param.put("2", busiType);
    if (!"".equals(yearMonthDay)) {
      strSql.append(" and NVL(YEAR_MONTH,'')= ? ");
      param.put("3", yearMonthDay);
    } else {
      strSql.append(" and YEAR_MONTH is null ");
    }
    List beanList = DbFactory.getSqlDdlDao().query(strSql.toString(), param, BasAutoMaxno.class);
    if (beanList.size() > 0) {
      return (BasAutoMaxno)beanList.get(0);
    }
    BasAutoMaxno bo = new BasAutoMaxno();
    bo.setCodeClassCd(busiType);
    bo.setOrgCd(orgCd);
    bo.setYearMonth(yearMonthDay);
    bo.setMaxno("0");
    bo.setKeyid(PkUtil.getKeyId());
    insertBasAutoMaxno(bo);
    return bo;
  }

  private static void insertBasAutoMaxno(BasAutoMaxno bo) throws Exception
  {
    DbFactory.getSqlDdlDao().insert(bo);
  }
}