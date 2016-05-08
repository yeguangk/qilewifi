package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysRoleRes extends BaseBo
{
  private BigDecimal roleId;
  private String resNo;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<roleId>").append(toXmlValue(getRoleId()));
    rtn.append("</roleId>");
    rtn.append("<resNo>").append(toXmlValue(getResNo()));
    rtn.append("</resNo>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"roleId\":").append(toJsonNew(getRoleId())).append(",");
    rtn.append("\"resNo\":").append(toJsonNew(getResNo()));

    return rtn.toString();
  }

  public void setRoleId(BigDecimal value)
  {
    this.roleId = value; } 
  public BigDecimal getRoleId() { return this.roleId; } 
  public void setResNo(String value) { this.resNo = value; } 
  public String getResNo() { return this.resNo; }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}