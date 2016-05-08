package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class PreValue extends BaseBo
{

  private String pre1;
  private String pre2;
    
  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<pre1>").append(xmlValue(getPre1()));
    rtn.append("</pre1>");
    rtn.append("<pre2>").append(xmlValue(getPre2()));
    rtn.append("</pre2>");
    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"pre1\":").append(toJsonNew(getPre1())).append(",");
    rtn.append("\"pre2\":").append(toJsonNew(getPre2()));
    return rtn.toString();
  }
 
  public String getPre1() {
	return pre1;
}
public void setPre1(String pre1) {
	this.pre1 = pre1;
}
public String getPre2() {
	return pre2;
}
public void setPre2(String pre2) {
	this.pre2 = pre2;
}
public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}