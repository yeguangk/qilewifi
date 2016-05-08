package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class SelOption extends BaseBo
{
  private String value;
  private String text;

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }

  public String toJsonString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"value\":").append(toJsonNew(getValue())).append(",");

    rtn.append("\"text\":").append(toJsonNew(getText()));

    return rtn.toString();
  }

  public String getValue() {
    return this.value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public String getText() {
    return this.text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String toXmlString()
  {
    return null;
  }
}