package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysRole extends BaseBo
{
  private BigDecimal roleId;
  private String roleName;
  private BigDecimal state;
  private String stateTxt;
  private String departId;
  private String departName;
  
  public String getDepartId() {
	return departId;
  }
  public void setDepartId(String departId) {
	this.departId = departId;
}
public String getDepartName() {
	return departName;
}
public void setDepartName(String departName) {
	this.departName = departName;
}
public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<roleId>").append(getRoleId());
    rtn.append("</roleId>");
    rtn.append("<roleName>").append(xmlValue(getRoleName()));
    rtn.append("</roleName>");
    rtn.append("<state>").append(getState());
    rtn.append("</state>");
    rtn.append("<stateTxt>").append(xmlValue(getStateTxt()));
    rtn.append("</stateTxt>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"roleId\":").append(toJsonNew(getRoleId())).append(",");
    rtn.append("\"roleName\":").append(toJsonNew(getRoleName())).append(",");
    rtn.append("\"state\":").append(toJsonNew(getState())).append(",");
    rtn.append("\"departName\":").append(toJsonNew(getDepartName())).append(",");
    rtn.append("\"departId\":").append(toJsonNew(getDepartId())).append(",");
    rtn.append("\"stateTxt\":").append(toJsonNew(getStateTxt()));

    return rtn.toString();
  }

  public void setRoleId(BigDecimal value)
  {
    this.roleId = value; } 
  public BigDecimal getRoleId() { return this.roleId; } 
  public void setRoleName(String value) { this.roleName = value; } 
  public String getRoleName() { return this.roleName; } 
  public void setState(BigDecimal value) { this.state = value; } 
  public BigDecimal getState() { return this.state; }


  public String getStateTxt()
  {
    if ((this.state != null) && (BigDecimal.ZERO.compareTo(this.state) == 0)) {
      return "在用";
    }
    return "注销";
  }

  public void setStateTxt(String stateTxt)
  {
    this.stateTxt = stateTxt;
  }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}