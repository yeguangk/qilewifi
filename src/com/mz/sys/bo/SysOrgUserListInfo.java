package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysOrgUserListInfo extends BaseBo
{
  private String attachOrgName;
  private String attachUserName;
  private String keyid;
  private String orgUserId;
  private String orgId;
  private String orgName;
  private String attachOrgId;
  private BigDecimal attachUserId;
  private BigDecimal userId;
  private String userName;
  private String parentOrgId;

  public String getAttachOrgName()
  {
    return this.attachOrgName;
  }
  public void setAttachOrgName(String attachOrgName) {
    this.attachOrgName = attachOrgName;
  }
  public String getAttachUserName() {
    return this.attachUserName;
  }
  public void setAttachUserName(String attachUserName) {
    this.attachUserName = attachUserName;
  }

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<keyid>").append(toXmlValue(getKeyid()));
    rtn.append("</keyid>");
    rtn.append("<orgUserId>").append(toXmlValue(getOrgUserId()));
    rtn.append("</orgUserId>");
    rtn.append("<orgId>").append(toXmlValue(getOrgId()));
    rtn.append("</orgId>");
    rtn.append("<orgName>").append(toXmlValue(getOrgName()));
    rtn.append("</orgName>");
    rtn.append("<attachOrgId>").append(toXmlValue(getAttachOrgId()));
    rtn.append("</attachOrgId>");
    rtn.append("<attachUserId>").append(toXmlValue(getAttachUserId()));
    rtn.append("</attachUserId>");
    rtn.append("<userId>").append(toXmlValue(getUserId()));
    rtn.append("</userId>");
    rtn.append("<userName>").append(toXmlValue(getUserName()));
    rtn.append("</userName>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"keyid\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"orgUserId\":").append(toJsonNew(getOrgUserId())).append(",");
    rtn.append("\"orgId\":").append(toJsonNew(getOrgId())).append(",");
    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"userId\":").append(toJsonNew(getUserId())).append(",");
    rtn.append("\"parentOrgId\":").append(toJsonNew(getParentOrgId())).append(",");
    rtn.append("\"attachOrgName\":").append(toJsonNew(getAttachOrgName())).append(",");
    rtn.append("\"attachUserName\":").append(toJsonNew(getAttachUserName())).append(",");
    rtn.append("\"userName\":").append(toJsonNew(getUserName()));

    return rtn.toString();
  }

  public String getParentOrgId()
  {
    return this.parentOrgId;
  }
  public void setParentOrgId(String parentOrgId) {
    this.parentOrgId = parentOrgId;
  }
  public void setKeyid(String value) { this.keyid = value; } 
  public String getKeyid() { return this.keyid; } 
  public void setOrgUserId(String value) { this.orgUserId = value; } 
  public String getOrgUserId() { return this.orgUserId; } 
  public void setOrgId(String value) { this.orgId = value; } 
  public String getOrgId() { return this.orgId; } 
  public void setOrgName(String value) { this.orgName = value; } 
  public String getOrgName() { return this.orgName; } 
  public void setAttachOrgId(String value) { this.attachOrgId = value; } 
  public String getAttachOrgId() { return this.attachOrgId; } 
  public void setAttachUserId(BigDecimal value) { this.attachUserId = value; } 
  public BigDecimal getAttachUserId() { return this.attachUserId; } 
  public void setUserId(BigDecimal value) { this.userId = value; } 
  public BigDecimal getUserId() { return this.userId; } 
  public void setUserName(String value) { this.userName = value; } 
  public String getUserName() { return this.userName; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
}