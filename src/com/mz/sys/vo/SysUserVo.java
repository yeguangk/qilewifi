package com.mz.sys.vo;

import com.mz.sys.bo.SysUser;
import com.mz.sys.bo.SysUserRole;
import java.io.Serializable;
import java.util.List;

public class SysUserVo
  implements Serializable
{
  private SysUser user;
  private List<SysUserRole> roleList;

  public SysUser getUser()
  {
    return this.user;
  }
  public void setUser(SysUser user) {
    this.user = user;
  }
  public List<SysUserRole> getRoleList() {
    return this.roleList;
  }
  public void setRoleList(List<SysUserRole> roleList) {
    this.roleList = roleList;
  }
}