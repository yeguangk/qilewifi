package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class SysOptionValue extends BaseBo
{
//  private BigDecimal valueId;
//  private String optionNo;
  private String value;
  private String text;
//  private BigDecimal sort;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<value>").append(xmlValue(getValue()));
    rtn.append("</value>");
    rtn.append("<text>").append(xmlValue(getText()));
    rtn.append("</text>");
    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
//    rtn.append("\"valueId\":").append(toJsonNew(getValueId())).append(",");
//    rtn.append("\"optionNo\":").append(toJsonNew(getOptionNo())).append(",");
    rtn.append("\"value\":").append(toJsonNew(getValue())).append(",");
    rtn.append("\"text\":").append(toJsonNew(getText()));
//    .append(",");
//    rtn.append("\"sort\":").append(toJsonNew(getSort()));

    return rtn.toString();
  }
  public String toNewJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"value\":").append(toJsonNew(getValue())).append(",");
    rtn.append("\"text\":").append(toJsonNew(getText()));
//    .append(",");
//    rtn.append("\"otherValue\":").append(toJsonNew(""));

    return rtn.toString();
  }

//  public void setValueId(BigDecimal value)
//  {
//    this.valueId = value; 
//    } 
//  public BigDecimal getValueId() { return this.valueId; } 
//  public void setOptionNo(String value) { this.optionNo = value; } 
//  public String getOptionNo() { return this.optionNo; } 
  public void setValue(String value) { this.value = value; } 
  public String getValue() { return this.value; } 
  public void setText(String value) { this.text = value; } 
  public String getText() { return this.text; } 
//  public void setSort(BigDecimal value) { this.sort = value; } 
//  public BigDecimal getSort() { return this.sort; }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}