package com.mz.sys.vo;

import com.mz.sys.bo.SysOrgUserInfo;
import com.mz.sys.bo.SysOrgUserListInfo;
import java.util.List;

public class SysOrgUserVo
{
  private List<SysOrgUserInfo> userList;
  private List<SysOrgUserListInfo> userData;

  public List<SysOrgUserInfo> getUserList()
  {
    return this.userList;
  }
  public void setUserList(List<SysOrgUserInfo> userList) {
    this.userList = userList;
  }
  public List<SysOrgUserListInfo> getUserData() {
    return this.userData;
  }
  public void setUserData(List<SysOrgUserListInfo> userData) {
    this.userData = userData;
  }
}