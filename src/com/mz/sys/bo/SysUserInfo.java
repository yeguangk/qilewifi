package com.mz.sys.bo;

import java.math.BigDecimal;
import java.util.List;

import org.frame.db.bo.BaseBo;

public class SysUserInfo extends BaseBo
{
  /**
	 * 
	 */
  private static final long serialVersionUID = 1L;

  private String userTypeCd;
  private BigDecimal userId;
  private String name;
  private String loginCode;
  private String password;
  private String departId;
  private BigDecimal state;
  private String departName;
  
  public String getDepartName() {
	return departName;
}
public void setDepartName(String departName) {
	this.departName = departName;
}
public String getUserTypeCd() {
    return this.userTypeCd;
  }
  public void setUserTypeCd(String userTypeCd) {
    this.userTypeCd = userTypeCd;
  }

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<userId>").append(getUserId());
    rtn.append("</userId>");
    rtn.append("<name>").append(xmlValue(getName()));
    rtn.append("</name>");
    rtn.append("<loginCode>").append(xmlValue(getLoginCode()));
    rtn.append("</loginCode>");
    rtn.append("<password>").append(xmlValue(getPassword()));
    rtn.append("</password>");
    rtn.append("<departId>").append(getDepartId());
    rtn.append("</departId>");
    rtn.append("<state>").append(getState());
    rtn.append("</state>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"userId\":\"").append(getUserId()); rtn.append("\",");
    rtn.append("\"name\":\"").append(string2Html(getName())); rtn.append("\",");
    rtn.append("\"loginCode\":\"").append(string2Html(getLoginCode())); rtn.append("\",");
    rtn.append("\"password\":\"").append(string2Html(getPassword())); rtn.append("\",");
    rtn.append("\"departId\":\"").append(getDepartId()); rtn.append("\",");
    rtn.append("\"departName\":\"").append(getDepartName()); rtn.append("\",");
    rtn.append("\"state\":\"").append(getState()); rtn.append("\"");

    return rtn.toString();
  }

  public void setUserId(BigDecimal value){this.userId = value; } 
  public BigDecimal getUserId() { return this.userId; } 
  public void setName(String value) { this.name = value; } 
  public String getName() { return this.name; } 
  public void setLoginCode(String value) { this.loginCode = value; } 
  public String getLoginCode() { return this.loginCode; } 
  public void setPassword(String value) { this.password = value; } 
  public String getPassword() { return this.password; } 
  public void setDepartId(String value) { this.departId = value; } 
  public String getDepartId() { return this.departId; } 
  public void setState(BigDecimal value) { this.state = value; } 
  public BigDecimal getState() { return this.state; }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}