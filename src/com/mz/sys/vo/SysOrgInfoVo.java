package com.mz.sys.vo;

import com.mz.sys.bo.SysOrgInfo;
import java.util.List;

public class SysOrgInfoVo
{
  private List<SysOrgInfo> subNodeInfo;

  public List<SysOrgInfo> getSubNodeInfo()
  {
    return this.subNodeInfo;
  }

  public void setSubNodeInfo(List<SysOrgInfo> subNodeInfo) {
    this.subNodeInfo = subNodeInfo;
  }
}