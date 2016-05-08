package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysOrgUserInfo extends BaseBo
{
  private String keyid;
  private String orgId;
  private String orgName;
  private BigDecimal userId;
  private String userName;
  private String roleName;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<keyid>").append(toXmlValue(getKeyid()));
    rtn.append("</keyid>");
    rtn.append("<orgId>").append(toXmlValue(getOrgId()));
    rtn.append("</orgId>");
    rtn.append("<orgName>").append(toXmlValue(getOrgName()));
    rtn.append("</orgName>");
    rtn.append("<userId>").append(toXmlValue(getUserId()));
    rtn.append("</userId>");
    rtn.append("<userName>").append(toXmlValue(getUserName()));
    rtn.append("</userName>");
    rtn.append("<roleName>").append(toXmlValue(getRoleName()));
    rtn.append("</roleName>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"keyid\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"orgId\":").append(toJsonNew(getOrgId())).append(",");
    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"userId\":").append(toJsonNew(getUserId())).append(",");
    rtn.append("\"userName\":").append(toJsonNew(getUserName())).append(",");
    rtn.append("\"roleName\":").append(toJsonNew(getRoleName()));

    return rtn.toString();
  }

  public void setKeyid(String value)
  {
    this.keyid = value; } 
  public String getKeyid() { return this.keyid; } 
  public void setOrgId(String value) { this.orgId = value; } 
  public String getOrgId() { return this.orgId; } 
  public void setOrgName(String value) { this.orgName = value; } 
  public String getOrgName() { return this.orgName; } 
  public void setUserId(BigDecimal value) { this.userId = value; } 
  public BigDecimal getUserId() { return this.userId; } 
  public void setUserName(String value) { this.userName = value; } 
  public String getUserName() { return this.userName; } 
  public void setRoleName(String value) { this.roleName = value; } 
  public String getRoleName() { return this.roleName; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
}