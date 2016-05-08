package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysResourceInfo extends BaseBo
{
  private String flg;
  private BigDecimal subcount;
  private BigDecimal seqNum;
  private String resNo;
  private String resName;
  private BigDecimal resType;
  private String resUrl;
  private String parentNo;
  private String remarks;
  private String orgCd;
  private String appId;
  public String parentName;

  public BigDecimal getSeqNum()
  {
    return this.seqNum;
  }
  public void setSeqNum(BigDecimal seqNum) {
    this.seqNum = seqNum;
  }
  public BigDecimal getSubcount() {
    return this.subcount;
  }
  public void setSubcount(BigDecimal subcount) {
    this.subcount = subcount;
  }
  public String getFlg() {
    return this.flg;
  }
  public void setFlg(String flg) {
    this.flg = flg;
  }

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<resNo>").append(toXmlValue(getResNo()));
    rtn.append("</resNo>");
    rtn.append("<resName>").append(toXmlValue(getResName()));
    rtn.append("</resName>");
    rtn.append("<resType>").append(toXmlValue(getResType()));
    rtn.append("</resType>");
    rtn.append("<resUrl>").append(toXmlValue(getResUrl()));
    rtn.append("</resUrl>");
    rtn.append("<parentNo>").append(toXmlValue(getParentNo()));
    rtn.append("</parentNo>");
    rtn.append("<remarks>").append(toXmlValue(getRemarks()));
    rtn.append("</remarks>");
    rtn.append("<orgCd>").append(toXmlValue(getOrgCd()));
    rtn.append("</orgCd>");
    rtn.append("<appId>").append(toXmlValue(getAppId()));
    rtn.append("</appId>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"resNo\":").append(toJsonNew(getResNo())).append(",");
    rtn.append("\"resName\":").append(toJsonNew(getResName())).append(",");
    rtn.append("\"resType\":").append(toJsonNew(getResType())).append(",");
    rtn.append("\"resUrl\":").append(toJsonNew(getResUrl())).append(",");
    rtn.append("\"parentNo\":").append(toJsonNew(getParentNo())).append(",");
    rtn.append("\"remarks\":").append(toJsonNew(getRemarks())).append(",");
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"subcount\":").append(toJsonNew(getSubcount())).append(",");
    rtn.append("\"seqNum\":").append(toJsonNew(getSeqNum())).append(",");
    rtn.append("\"appId\":").append(toJsonNew(getAppId()));

    return rtn.toString();
  }

  public void setResNo(String value)
  {
    this.resNo = value; } 
  public String getResNo() { return this.resNo; } 
  public void setResName(String value) { this.resName = value; } 
  public String getResName() { return this.resName; } 
  public void setResType(BigDecimal value) { this.resType = value; } 
  public BigDecimal getResType() { return this.resType; } 
  public void setResUrl(String value) { this.resUrl = value; } 
  public String getResUrl() { return this.resUrl; } 
  public void setParentNo(String value) { this.parentNo = value; } 
  public String getParentNo() { return this.parentNo; } 
  public void setRemarks(String value) { this.remarks = value; } 
  public String getRemarks() { return this.remarks; } 
  public void setOrgCd(String value) { this.orgCd = value; } 
  public String getOrgCd() { return this.orgCd; } 
  public void setAppId(String value) { this.appId = value; } 
  public String getAppId() { return this.appId; }

  public String getParentName()
  {
    return this.parentName;
  }
  public void setParentName(String parentName) {
    this.parentName = parentName;
  }

  public String getChangeInfo(BaseBo arg0) {
    return null;
  }
  public String toTreeNode() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"text\":").append(toJsonNew(getResName())).append(",");
    rtn.append("\"id\":").append(toJsonNew(getResNo())).append(",");

    rtn.append("\"resNo\":").append(toJsonNew(getResNo())).append(",");
    rtn.append("\"parentName\":").append(toJsonNew(getParentName())).append(",");
    rtn.append("\"resName\":").append(toJsonNew(getResName())).append(",");
    rtn.append("\"resType\":").append(toJsonNew(getResType())).append(",");
    rtn.append("\"resUrl\":").append(toJsonNew(getResUrl())).append(",");
    rtn.append("\"parentNo\":").append(toJsonNew(getParentNo())).append(",");
    rtn.append("\"remarks\":").append(toJsonNew(getRemarks())).append(",");
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"seqNum\":").append(toJsonNew(getSeqNum())).append(",");
    rtn.append("\"appId\":").append(toJsonNew(getAppId()));
    return rtn.toString();
  }
}