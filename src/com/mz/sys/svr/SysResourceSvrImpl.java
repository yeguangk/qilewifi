package com.mz.sys.svr;

import com.mz.sys.bo.SysResourceInfo;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.frame.db.dao.DbFactory;
import org.frame.db.dao.SqlDdlDao;

public class SysResourceSvrImpl
  implements SysResourceSvr
{
  public List getSubNode(String parentNo)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentNo);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select a.*, bb.res_name parent_name, ");
    sql.append(" c.subcount ");
    sql.append("  from sys_resource_info a left join sys_resource_info bb on a.parent_no = bb.res_no ");
    sql.append("  left join (select count(b.res_no) subcount,b.parent_no from sys_resource_info b group by b.parent_no) c on a.RES_NO=c.parent_no ");
    sql.append(" where a.PARENT_NO = ? order by a.SEQ_NUM ");

    List list = DbFactory.getSqlDdlDao().query(sql.toString(), param, SysResourceInfo.class);
    return list;
  }

  public void save(SysResourceInfo sysResourceInfo, String flg)
    throws Exception
  {
    if ("0".equals(flg)) {
      if (getCount(sysResourceInfo.getResNo()) == 0L)
        DbFactory.getSqlDdlDao().insert(sysResourceInfo);
      else
        throw new Exception("当前编码已经存在，请重新输入别的编码");
    }
    else if ("1".equals(flg))
      DbFactory.getSqlDdlDao().update(sysResourceInfo);
  }

  public long getCount(String typeCd)
    throws Exception
  {
    Map param = new HashMap();
    param.put("1", typeCd);
    StringBuffer sql = new StringBuffer();
    sql = new StringBuffer("select 1 from sys_resource_info a ");
    sql.append(" where a.res_no = ? order by a.res_no ");
    return DbFactory.getSqlDdlDao().queryCount(sql.toString(), param);
  }

  public void save(List<SysResourceInfo> subNodeInfo, String parentNo) throws Exception
  {
    Map param = new HashMap();
    param.put("1", parentNo);
    DbFactory.getSqlDdlDao().delete(SysResourceInfo.class, "parent_no=?", new Object[] { parentNo });

    for (SysResourceInfo info : subNodeInfo)
      if (getCount(info.getResNo()) == 0L)
        DbFactory.getSqlDdlDao().insert(info);
      else
        throw new Exception("当前编码已经存在，请重新输入别的编码");
  }
}