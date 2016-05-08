package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class SysResQry extends BaseBo
{
  private String resNo;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<resNo>").append(toXmlValue(getResNo()));
    rtn.append("</resNo>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"resNo\":").append(toJsonNew(getResNo()));

    return rtn.toString();
  }

  public void setResNo(String value) {
    this.resNo = value; } 
  public String getResNo() { return this.resNo; }

  public String getChangeInfo(BaseBo bo) {
    return null;
  }
}