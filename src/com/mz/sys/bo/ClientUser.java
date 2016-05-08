package com.mz.sys.bo;

import java.math.BigDecimal;
import java.util.Date;
import org.frame.db.bo.BaseBo;

public class ClientUser extends BaseBo
{
  private BigDecimal userId;
  private String loginName;
  private String userName;
  private String password;
  private String lastUuid;
  private Date lastLoginTime;

  public String toJsonString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"userId\":").append(toJsonNew(getUserId())).append(",");
    rtn.append("\"loginName\":").append(toJsonNew(getLoginName())).append(",");
    rtn.append("\"userName\":").append(toJsonNew(getUserName())).append(",");
    rtn.append("\"password\":").append(toJsonNew(getPassword())).append(",");
    rtn.append("\"lastUuid\":").append(toJsonNew(getLastUuid())).append(",");
    rtn.append("\"lastLoginTime\":").append(toJsonNew(getLastLoginTime())).append(",");
   
    return rtn.toString();
  }

public BigDecimal getUserId() {
	return userId;
}

public void setUserId(BigDecimal userId) {
	this.userId = userId;
}

public String getLoginName() {
	return loginName;
}

public void setLoginName(String loginName) {
	this.loginName = loginName;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getLastUuid() {
	return lastUuid;
}

public void setLastUuid(String lastUuid) {
	this.lastUuid = lastUuid;
}

public Date getLastLoginTime() {
	return lastLoginTime;
}

public void setLastLoginTime(Date lastLoginTime) {
	this.lastLoginTime = lastLoginTime;
}

public String toXmlString()
  {
    return null;
  }

@Override
public String getChangeInfo(BaseBo arg0) {

	return null;
}
}