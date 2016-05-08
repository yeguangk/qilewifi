package com.mz.sys.vo;

import com.mz.sys.bo.SysRole;
import com.mz.sys.bo.SysRoleRes;
import java.io.Serializable;
import java.util.List;

public class SysRoleVo
  implements Serializable
{
  private SysRole roleInfo;
  private List<SysRoleRes> resList;

  public SysRole getRoleInfo()
  {
    return this.roleInfo;
  }
  public void setRoleInfo(SysRole roleInfo) {
    this.roleInfo = roleInfo;
  }
  public List<SysRoleRes> getResList() {
    return this.resList;
  }
  public void setResList(List<SysRoleRes> resList) {
    this.resList = resList;
  }
}