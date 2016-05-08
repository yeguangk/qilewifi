package com.mz.sys.bo;

import java.math.BigDecimal;
import java.util.Date;
import org.frame.db.bo.BaseBo;

public class SysUser extends BaseBo
{
  private BigDecimal userId;
  private String name;
  private String loginCode;
  private String password;
  private String departId;
  private BigDecimal state;
  private String userTypeCd;
  private String userTypeNames;
  private String departName;
  private String sexFlg;
  private Date birthDay;
  private String roleNames;

  public String toJsonString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"userId\":").append(toJsonNew(getUserId())).append(",");
    rtn.append("\"userName\":").append(toJsonNew(getName())).append(",");
    rtn.append("\"name\":").append(toJsonNew(getName())).append(",");
    rtn.append("\"loginCode\":").append(toJsonNew(getLoginCode())).append(",");
    rtn.append("\"password\":").append(toJsonNew(getPassword())).append(",");
    rtn.append("\"departId\":").append(toJsonNew(getDepartId())).append(",");
    rtn.append("\"state\":").append(toJsonNew(getState())).append(",");
    rtn.append("\"userTypeNames\":").append(toJsonNew(getUserTypeNames())).append(",");
    rtn.append("\"departName\":").append(toJsonNew(getDepartName())).append(",");
    rtn.append("\"sexFlg\":").append(toJsonNew(getSexFlg())).append(",");
    rtn.append("\"birthDay\":").append(toJsonNew(getBirthDay())).append(",");
    rtn.append("\"roleNames\":").append(toJsonNew(getRoleNames())).append(",");
    rtn.append("\"userTypeCd\":").append(toJsonNew(getUserTypeCd()));
    return rtn.toString();
  }

  public String getRoleNames()
  {
    return this.roleNames;
  }

  public void setRoleNames(String roleNames) {
    this.roleNames = roleNames;
  }

  public String getUserTypeNames() {
    return this.userTypeNames;
  }

  public void setUserTypeNames(String userTypeNames) {
    this.userTypeNames = userTypeNames;
  }

  public String getDepartName() {
    return this.departName;
  }

  public void setDepartName(String departName) {
    this.departName = departName;
  }

  public String getSexFlg() {
    return this.sexFlg;
  }

  public void setSexFlg(String sexFlg) {
    this.sexFlg = sexFlg;
  }

  public Date getBirthDay() {
    return this.birthDay;
  }

  public void setBirthDay(Date birthDay) {
    this.birthDay = birthDay;
  }

  public String getUserTypeCd() {
    return this.userTypeCd;
  }

  public void setUserTypeCd(String userTypeCd) {
    this.userTypeCd = userTypeCd;
  }

  public void setUserId(BigDecimal value) {
    this.userId = value;
  }

  public BigDecimal getUserId() {
    return this.userId;
  }

  public void setName(String value) {
    this.name = value;
  }

  public String getName() {
    return this.name;
  }

  public void setLoginCode(String value) {
    this.loginCode = value;
  }

  public String getLoginCode() {
    return this.loginCode;
  }

  public void setPassword(String value) {
    this.password = value;
  }

  public String getPassword() {
    return this.password;
  }

  public void setDepartId(String value) {
    this.departId = value;
  }

  public String getDepartId() {
    return this.departId;
  }

  public void setState(BigDecimal value) {
    this.state = value;
  }

  public BigDecimal getState() {
    return this.state;
  }

  public String getChangeInfo(BaseBo arg0)
  {
    return null;
  }

  public String toXmlString()
  {
    return null;
  }
}