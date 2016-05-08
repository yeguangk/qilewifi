package com.mz.sys.bo;

import java.math.BigDecimal;
import java.util.Date;
import org.frame.db.bo.BaseBo;

public class SystemParameters extends BaseBo
{
  private String keyid;
  private String orgCd;
  private String orgName;
  private String paraType;
  private String paraName;
  private String paraCode;
  private String paraValue;
  private String remark;
  private String state;
  private BigDecimal createbyId;
  private String createbyName;
  private Date createDate;
  private BigDecimal modifybyId;
  private String modifybyName;
  private Date modifyDate;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<keyid>").append(toXmlValue(getKeyid()));
    rtn.append("</keyid>");
    rtn.append("<orgCd>").append(toXmlValue(getOrgCd()));
    rtn.append("</orgCd>");
    rtn.append("<orgName>").append(toXmlValue(getOrgName()));
    rtn.append("</orgName>");
    rtn.append("<paraType>").append(toXmlValue(getParaType()));
    rtn.append("</paraType>");
    rtn.append("<paraName>").append(toXmlValue(getParaName()));
    rtn.append("</paraName>");
    rtn.append("<paraValue>").append(toXmlValue(getParaValue()));
    rtn.append("</paraValue>");
    rtn.append("<remark>").append(toXmlValue(getRemark()));
    rtn.append("</remark>");
    rtn.append("<state>").append(toXmlValue(getState()));
    rtn.append("</state>");
    rtn.append("<createbyId>").append(toXmlValue(getCreatebyId()));
    rtn.append("</createbyId>");
    rtn.append("<createbyName>").append(toXmlValue(getCreatebyName()));
    rtn.append("</createbyName>");
    rtn.append("<createDate>").append(toXmlValue(getCreateDate()));
    rtn.append("</createDate>");
    rtn.append("<modifybyId>").append(toXmlValue(getModifybyId()));
    rtn.append("</modifybyId>");
    rtn.append("<modifybyName>").append(toXmlValue(getModifybyName()));
    rtn.append("</modifybyName>");
    rtn.append("<modifyDate>").append(toXmlValue(getModifyDate()));
    rtn.append("</modifyDate>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"keyid\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"paraType\":").append(toJsonNew(getParaType())).append(",");
    rtn.append("\"paraName\":").append(toJsonNew(getParaName())).append(",");
    rtn.append("\"paraCode\":").append(toJsonNew(getParaCode())).append(",");
    rtn.append("\"paraValue\":").append(toJsonNew(getParaValue())).append(",");
    rtn.append("\"remark\":").append(toJsonNew(getRemark())).append(",");
    rtn.append("\"state\":").append(toJsonNew(getState())).append(",");
    rtn.append("\"createbyId\":").append(toJsonNew(getCreatebyId())).append(",");
    rtn.append("\"createbyName\":").append(toJsonNew(getCreatebyName())).append(",");
    rtn.append("\"createDate\":").append(toJsonNew(getCreateDate())).append(",");
    rtn.append("\"modifybyId\":").append(toJsonNew(getModifybyId())).append(",");
    rtn.append("\"modifybyName\":").append(toJsonNew(getModifybyName())).append(",");
    rtn.append("\"modifyDate\":").append(toJsonNew(getModifyDate()));

    return rtn.toString();
  }

  public void setKeyid(String value)
  {
    this.keyid = value; } 
  public String getKeyid() { return this.keyid; } 
  public void setOrgCd(String value) { this.orgCd = value; } 
  public String getOrgCd() { return this.orgCd; } 
  public void setOrgName(String value) { this.orgName = value; } 
  public String getOrgName() { return this.orgName; } 
  public void setParaType(String value) { this.paraType = value; } 
  public String getParaType() { return this.paraType; } 
  public void setParaName(String value) { this.paraName = value; } 
  public String getParaName() { return this.paraName; } 
  public void setParaCode(String value) { this.paraCode = value; } 
  public String getParaCode() { return this.paraCode; } 
  public void setParaValue(String value) { this.paraValue = value; } 
  public String getParaValue() { return this.paraValue; } 
  public void setRemark(String value) { this.remark = value; } 
  public String getRemark() { return this.remark; } 
  public void setState(String value) { this.state = value; } 
  public String getState() { return this.state; } 
  public void setCreatebyId(BigDecimal value) { this.createbyId = value; } 
  public BigDecimal getCreatebyId() { return this.createbyId; } 
  public void setCreatebyName(String value) { this.createbyName = value; } 
  public String getCreatebyName() { return this.createbyName; } 
  public void setCreateDate(Date value) { this.createDate = value; } 
  public Date getCreateDate() { return this.createDate; } 
  public void setModifybyId(BigDecimal value) { this.modifybyId = value; } 
  public BigDecimal getModifybyId() { return this.modifybyId; } 
  public void setModifybyName(String value) { this.modifybyName = value; } 
  public String getModifybyName() { return this.modifybyName; } 
  public void setModifyDate(Date value) { this.modifyDate = value; } 
  public Date getModifyDate() { return this.modifyDate; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
}