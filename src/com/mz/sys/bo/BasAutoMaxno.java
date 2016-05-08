package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class BasAutoMaxno extends BaseBo
{
  private String yearMonth;
  private String keyid;
  private String maxno;
  private String orgCd;
  private String codeClassCd;

  public String getYearMonth()
  {
    return this.yearMonth;
  }
  public void setYearMonth(String yearMonth) {
    this.yearMonth = yearMonth;
  }

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<keyid>").append(toXmlValue(getKeyid()));
    rtn.append("</keyid>");
    rtn.append("<maxno>").append(toXmlValue(getMaxno()));
    rtn.append("</maxno>");
    rtn.append("<orgCd>").append(toXmlValue(getOrgCd()));
    rtn.append("</orgCd>");
    rtn.append("<codeClassCd>").append(toXmlValue(getCodeClassCd()));
    rtn.append("</codeClassCd>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"keyid\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"maxno\":").append(toJsonNew(getMaxno())).append(",");
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"codeClassCd\":").append(toJsonNew(getCodeClassCd()));

    return rtn.toString();
  }

  public void setKeyid(String value)
  {
    this.keyid = value; } 
  public String getKeyid() { return this.keyid; } 
  public void setMaxno(String value) { this.maxno = value; } 
  public String getMaxno() { return this.maxno; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
  public String getOrgCd() {
    return this.orgCd;
  }
  public void setOrgCd(String orgCd) {
    this.orgCd = orgCd;
  }
  public String getCodeClassCd() {
    return this.codeClassCd;
  }
  public void setCodeClassCd(String codeClassCd) {
    this.codeClassCd = codeClassCd;
  }
}