package com.mz.sys.svr;

import com.mz.sys.bo.SysOrgInfo;
import com.mz.sys.bo.SysOrgUserInfo;
import com.mz.sys.bo.SysOrgUserListInfo;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class SysOrgInfoSvrImpl
  implements SysOrgInfoSvr
{
  public List getSubNode(String parentNo)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentNo);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.*,'' parent_name, c.subcount ");
    sql.append("  from SYS_ORG_INFO a  left join  ");
    sql.append("  (select count(b.org_cd) subcount, b.parent_cd from SYS_ORG_INFO b group by b.parent_cd) c on c.parent_cd=a.org_cd ");
    sql.append(" where a.PARENT_CD = ? order by a.ORG_CD ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, SysOrgInfo.class);
    return list;
  }

  public void save(SysOrgInfo sysOrgInfo, String flg) throws Exception {
    if ("0".equals(flg)) {
      if (getCount(sysOrgInfo.getOrgCd()) == 0L)
        DbFactory.getSqlDdlDao().insert(sysOrgInfo);
      else
        throw new Exception("当前编码已经存在，请重新输入别的编码");
    }
    else if ("1".equals(flg))
      DbFactory.getSqlDdlDao().update(sysOrgInfo);
  }

  public long getCount(String orgCd) throws Exception
  {
    Map param = new HashMap();
    param.put("1", orgCd);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select 1 from SYS_ORG_INFO a ");
    sql.append(" where a.org_cd = ? ");
    return DbFactory.getSqlDdlDao().queryCount(sql.toString(), param);
  }

  public void save(List<SysOrgInfo> subNodeInfo, String parentNo) throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentNo);
    DbFactory.getSqlDdlDao().delete(SysOrgInfo.class, "parent_cd=?", new Object[] { parentNo });
    for (SysOrgInfo info : subNodeInfo) {
      if (("".equals(info.getOrgCd())) || (info.getOrgCd() == null)) {
        String max = getMaxNo(info.getParentCd());
        String temp = null;
        if ((!"".equals(max)) && (max != null))
          temp = StringUtils.leftPad(String.valueOf(Integer.valueOf(StringUtils.replaceOnce(max, info.getParentCd(), "")).intValue() + 1), 3, '0');
        else {
          temp = StringUtils.leftPad("1", 3, '0');
        }
        if (!"0".equals(info.getParentCd()))
          info.setOrgCd(info.getParentCd() + temp);
        else {
          info.setOrgCd(temp);
        }
      }
      DbFactory.getSqlDdlDao().insert(info);
    }
  }

  public String getMaxNo(String parentCd) throws Exception { Map param = new HashMap();
    param.put("1", parentCd);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select max(org_cd) org_cd from SYS_ORG_INFO a ");
    sql.append(" where a.parent_cd = ? ");
    String[] fieldList = { "ORG_CD" };
    Map dataMap = DbFactory.getSqlDdlDao().queryMap(sql.toString(), fieldList, param);
    return (String)dataMap.get("ORG_CD"); }

  public List qrySysUser(String orgId) throws Exception {
    Map param = new HashMap();
    param.put("1", orgId);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.*,b.org_name org_name1, c.ROLE_NAMES role_name ");
    sql.append("  from sys_org_user a,org_view b,sys_user c ");
    sql.append(" where a.org_id = ? and c.USER_ID=a.USER_ID and a.org_id=b.ORG_CD order by a.user_id ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, SysOrgUserInfo.class);
    return list;
  }

  public void saveOrgUser(List<SysOrgUserInfo> subNodeInfo, List<SysOrgUserListInfo> userData, String orgId) throws Exception
  {
    Map param = new HashMap();
    param.put("1", orgId);
    DbFactory.getSqlDdlDao().delete(SysOrgUserInfo.class, "org_id=?", new Object[] { orgId });
    DbFactory.getSqlDdlDao().delete(SysOrgUserListInfo.class, "parent_org_id=?", new Object[] { orgId });

    for (SysOrgUserInfo info : subNodeInfo) {
      if (getCount(info.getUserId(), info.getOrgId()) == 0L)
        DbFactory.getSqlDdlDao().insert(info);
    }
    DbFactory.getSqlDdlDao().insert(userData);
  }
  public long getCount(BigDecimal userId, String orgId) throws Exception {
    Map param = new HashMap();
    param.put("1", orgId);
    param.put("2", userId);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select 1 from sys_org_user a ");
    sql.append(" where org_id = ? and user_id=?");
    return DbFactory.getSqlDdlDao().queryCount(sql.toString(), param);
  }

  public List qrySysUserList(String orgId, String userId) throws Exception {
    Map param = new HashMap();
    param.put("1", orgId);

    StringBuffer sql = null;
    sql = new StringBuffer("select a.*,c.ORG_NAME ATTACH_ORG_NAME,aa.USER_NAME attach_user_name  from sys_org_user_list a, ");
    sql.append(" sys_org_user aa,org_view c where aa.org_id=? and aa.KEYID=a.ORG_USER_ID and aa.ORG_ID=c.ORG_CD ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, SysOrgUserListInfo.class);
    return list;
  }
}