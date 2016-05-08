package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysUserRole extends BaseBo
{
  private BigDecimal userId;
  private BigDecimal roleId;
  private String roleName;
  private String orgCd;
  private String orgName;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<userId>").append(getUserId());
    rtn.append("</userId>");
    rtn.append("<roleId>").append(getRoleId());
    rtn.append("</roleId>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"userId\":").append(toJsonNew(getUserId())).append(",");
    rtn.append("\"roleName\":").append(toJsonNew(getRoleName())).append(",");
    rtn.append("\"orgCd\":").append(toJsonNew(getOrgCd())).append(",");
    rtn.append("\"orgName\":").append(toJsonNew(getOrgName())).append(",");
    rtn.append("\"roleId\":").append(toJsonNew(getRoleId()));

    return rtn.toString();
  }

  public String getOrgCd()
  {
    return this.orgCd;
  }
  public void setOrgCd(String orgCd) {
    this.orgCd = orgCd;
  }
  public String getOrgName() {
    return this.orgName;
  }
  public void setOrgName(String orgName) {
    this.orgName = orgName;
  }
  public String getRoleName() {
    return this.roleName;
  }
  public void setRoleName(String roleName) {
    this.roleName = roleName;
  }
  public void setUserId(BigDecimal value) { this.userId = value; } 
  public BigDecimal getUserId() { return this.userId; } 
  public void setRoleId(BigDecimal value) { this.roleId = value; } 
  public BigDecimal getRoleId() { return this.roleId; }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}