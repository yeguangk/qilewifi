package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysOrgInfo extends BaseBo
{
  private String flg;
  private BigDecimal subcount;
  public String parentName;
  private String orgCd;
  private String orgName;
  private String orgMinName;
  private String parentCd;
  private String orgEnname;
  private String contactMan;
  private String contactTel;
  private String contactAddr;
  private String zipCd;
  private String faxTel;
  private String gsNo;
  private String taxNo;
  private String province;
  private String city;

  public String getParentName()
  {
    return this.parentName;
  }
  public void setParentName(String parentName) {
    this.parentName = parentName;
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
    rtn.append("<orgCd>").append(toXmlValue(getOrgCd()));
    rtn.append("</orgCd>");
    rtn.append("<orgName>").append(toXmlValue(getOrgName()));
    rtn.append("</orgName>");
    rtn.append("<orgMinName>").append(toXmlValue(getOrgMinName()));
    rtn.append("</orgMinName>");
    rtn.append("<parentCd>").append(toXmlValue(getParentCd()));
    rtn.append("</parentCd>");
    rtn.append("<orgEnname>").append(toXmlValue(getOrgEnname()));
    rtn.append("</orgEnname>");
    rtn.append("<contactMan>").append(toXmlValue(getContactMan()));
    rtn.append("</contactMan>");
    rtn.append("<contactTel>").append(toXmlValue(getContactTel()));
    rtn.append("</contactTel>");
    rtn.append("<contactAddr>").append(toXmlValue(getContactAddr()));
    rtn.append("</contactAddr>");
    rtn.append("<zipCd>").append(toXmlValue(getZipCd()));
    rtn.append("</zipCd>");
    rtn.append("<faxTel>").append(toXmlValue(getFaxTel()));
    rtn.append("</faxTel>");
    rtn.append("<gsNo>").append(toXmlValue(getGsNo()));
    rtn.append("</gsNo>");
    rtn.append("<taxNo>").append(toXmlValue(getTaxNo()));
    rtn.append("</taxNo>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"orgMinName\":").append(toJsonNew(getOrgMinName())).append(",");
    rtn.append("\"parentCd\":").append(toJsonNew(getParentCd())).append(",");
    rtn.append("\"orgEnname\":").append(toJsonNew(getOrgEnname())).append(",");
    rtn.append("\"contactMan\":").append(toJsonNew(getContactMan())).append(",");
    rtn.append("\"contactTel\":").append(toJsonNew(getContactTel())).append(",");
    rtn.append("\"contactAddr\":").append(toJsonNew(getContactAddr())).append(",");
    rtn.append("\"zipCd\":").append(toJsonNew(getZipCd())).append(",");
    rtn.append("\"faxTel\":").append(toJsonNew(getFaxTel())).append(",");
    rtn.append("\"gsNo\":").append(toJsonNew(getGsNo())).append(",");
    rtn.append("\"taxNo\":").append(toJsonNew(getTaxNo())).append(",");
    rtn.append("\"province\":").append(toJsonNew(getProvince())).append(",");
    rtn.append("\"city\":").append(toJsonNew(getCity()));

    return rtn.toString();
  }

  public void setOrgCd(String value)
  {
    this.orgCd = value; } 
  public String getOrgCd() { return this.orgCd; } 
  public void setOrgName(String value) { this.orgName = value; } 
  public String getOrgName() { return this.orgName; } 
  public void setOrgMinName(String value) { this.orgMinName = value; } 
  public String getOrgMinName() { return this.orgMinName; } 
  public void setParentCd(String value) { this.parentCd = value; } 
  public String getParentCd() { return this.parentCd; } 
  public void setOrgEnname(String value) { this.orgEnname = value; } 
  public String getOrgEnname() { return this.orgEnname; } 
  public void setContactMan(String value) { this.contactMan = value; } 
  public String getContactMan() { return this.contactMan; } 
  public void setContactTel(String value) { this.contactTel = value; } 
  public String getContactTel() { return this.contactTel; } 
  public void setContactAddr(String value) { this.contactAddr = value; } 
  public String getContactAddr() { return this.contactAddr; } 
  public void setZipCd(String value) { this.zipCd = value; } 
  public String getZipCd() { return this.zipCd; } 
  public void setFaxTel(String value) { this.faxTel = value; } 
  public String getFaxTel() { return this.faxTel; } 
  public void setGsNo(String value) { this.gsNo = value; } 
  public String getGsNo() { return this.gsNo; } 
  public void setTaxNo(String value) { this.taxNo = value; } 
  public String getTaxNo() { return this.taxNo; } 
  public void setProvince(String value) { this.province = value; } 
  public String getProvince() { return this.province; } 
  public void setCity(String value) { this.city = value; } 
  public String getCity() { return this.city; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
  public String toTreeNode() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"text\":").append(toJsonNew(getOrgMinName())).append(",");
    rtn.append("\"id\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"parentName\":").append(toJsonNew(getParentName())).append(",");

    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"parentCd\":").append(toJsonNew(getParentCd())).append(",");
    rtn.append("\"orgEnname\":").append(toJsonNew(getOrgEnname())).append(",");
    rtn.append("\"contactMan\":").append(toJsonNew(getContactMan())).append(",");
    rtn.append("\"contactTel\":").append(toJsonNew(getContactTel())).append(",");
    rtn.append("\"contactAddr\":").append(toJsonNew(getContactAddr())).append(",");
    rtn.append("\"zipCd\":").append(toJsonNew(getZipCd())).append(",");
    rtn.append("\"faxTel\":").append(toJsonNew(getFaxTel())).append(",");
    rtn.append("\"gsNo\":").append(toJsonNew(getGsNo())).append(",");
    rtn.append("\"taxNo\":").append(toJsonNew(getTaxNo())).append(",");
    rtn.append("\"province\":").append(toJsonNew(getProvince())).append(",");
    rtn.append("\"city\":").append(toJsonNew(getCity()));
    return rtn.toString();
  }
}