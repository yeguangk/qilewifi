package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class SysParamValue extends BaseBo
{
  private String para;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<para>").append(toXmlValue(getPara()));
    rtn.append("</para>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"para\":").append(toJsonNew(getPara()));

    return rtn.toString();
  }

  public void setPara(String value) {
    this.para = value; } 
  public String getPara() { return this.para; }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }
}