package com.mz.sys.vo;

import com.mz.sys.bo.SysOrgUserListInfo;
import java.util.List;

public class SysOrgUserListVo
{
  private List<SysOrgUserListInfo> subNodeInfo;

  public List<SysOrgUserListInfo> getSubNodeInfo()
  {
    return this.subNodeInfo;
  }

  public void setSubNodeInfo(List<SysOrgUserListInfo> subNodeInfo) {
    this.subNodeInfo = subNodeInfo;
  }
}