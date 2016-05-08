package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class BasAutoCode extends BaseBo
{
  private String snFlg;
  private String keyid;
  private String codeClassCd;
  private String codeClassName;
  private String codePre;
  private String splitter;
  private String yearType;
  private BigDecimal sno;
  private String codeExample;
  private String codeRangeCd;
  private String createOrgCd;
  private String createOrgName;

  public String getSnFlg()
  {
    return this.snFlg;
  }
  public void setSnFlg(String snFlg) {
    this.snFlg = snFlg;
  }

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<keyid>").append(toXmlValue(getKeyid()));
    rtn.append("</keyid>");
    rtn.append("<codeClassCd>").append(toXmlValue(getCodeClassCd()));
    rtn.append("</codeClassCd>");
    rtn.append("<codeClassName>").append(toXmlValue(getCodeClassName()));
    rtn.append("</codeClassName>");
    rtn.append("<codePre>").append(toXmlValue(getCodePre()));
    rtn.append("</codePre>");
    rtn.append("<splitter>").append(toXmlValue(getSplitter()));
    rtn.append("</splitter>");
    rtn.append("<yearType>").append(toXmlValue(getYearType()));
    rtn.append("</yearType>");
    rtn.append("<sno>").append(toXmlValue(getSno()));
    rtn.append("</sno>");
    rtn.append("<codeExample>").append(toXmlValue(getCodeRangeCd()));
    rtn.append("</codeExample>");
    rtn.append("<codeRangeCd>").append(toXmlValue(getCodeRangeCd()));
    rtn.append("</codeRangeCd>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"keyid\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"codeClassCd\":").append(toJsonNew(getCodeClassCd())).append(",");
    rtn.append("\"codeClassName\":").append(toJsonNew(getCodeClassName())).append(",");
    rtn.append("\"codePre\":").append(toJsonNew(getCodePre())).append(",");
    rtn.append("\"splitter\":").append(toJsonNew(getSplitter())).append(",");
    rtn.append("\"yearType\":").append(toJsonNew(getYearType())).append(",");
    rtn.append("\"sno\":").append(toJsonNew(getSno())).append(",");
    rtn.append("\"codeExample\":").append(toJsonNew(getCodeExample())).append(",");
    rtn.append("\"snFlg\":").append(toJsonNew(getSnFlg())).append(",");
    rtn.append("\"createOrgCd\":").append(toJsonNew(getCreateOrgCd())).append(",");
    rtn.append("\"createOrgName\":").append(toJsonNew(getCreateOrgName())).append(",");
    rtn.append("\"codeRangeCd\":").append(toJsonNew(getCodeRangeCd()));

    return rtn.toString();
  }
  public String toNewJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"id\":").append(toJsonNew(getCodeClassCd())).append(",");
    rtn.append("\"text\":").append(toJsonNew(getCodeClassName())).append(",");
    rtn.append("\"parentId\":").append(toJsonNew(""));
    return rtn.toString();
  }
  public String toTreeJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"id\":").append(toJsonNew(getKeyid())).append(",");
    rtn.append("\"text\":").append(toJsonNew(getCodeClassName())).append(",");
    rtn.append("\"cls\":").append(toJsonNew("file")).append(",");
    rtn.append("\"leaf\":").append(toJsonNew("true"));
    return rtn.toString();
  }

  public void setKeyid(String value)
  {
    this.keyid = value; } 
  public String getKeyid() { return this.keyid; } 
  public void setCodeClassCd(String value) { this.codeClassCd = value; } 
  public String getCodeClassCd() { return this.codeClassCd; } 
  public void setCodeClassName(String value) { this.codeClassName = value; } 
  public String getCodeClassName() { return this.codeClassName; } 
  public void setCodePre(String value) { this.codePre = value; } 
  public String getCodePre() { return this.codePre; } 
  public void setSplitter(String value) { this.splitter = value; } 
  public String getSplitter() { return this.splitter; } 
  public void setYearType(String value) { this.yearType = value; } 
  public String getYearType() { return this.yearType; } 
  public void setSno(BigDecimal value) { this.sno = value; } 
  public BigDecimal getSno() { return this.sno; } 
  public void setCodeExample(String value) { this.codeExample = value; } 
  public String getCodeExample() { return this.codeExample; }

  public String getCreateOrgCd() {
    return this.createOrgCd;
  }
  public void setCreateOrgCd(String createOrgCd) {
    this.createOrgCd = createOrgCd;
  }
  public String getCreateOrgName() {
    return this.createOrgName;
  }
  public void setCreateOrgName(String createOrgName) {
    this.createOrgName = createOrgName;
  }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
  public String getCodeRangeCd() {
    return this.codeRangeCd;
  }
  public void setCodeRangeCd(String codeRangeCd) {
    this.codeRangeCd = codeRangeCd;
  }
}