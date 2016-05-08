package com.mz.sys.vo;

import com.mz.sys.bo.SysResourceInfo;
import java.util.List;

public class SysResourceInfoVo
{
  private List<SysResourceInfo> subNodeInfo;

  public List<SysResourceInfo> getSubNodeInfo()
  {
    return this.subNodeInfo;
  }

  public void setSubNodeInfo(List<SysResourceInfo> subNodeInfo) {
    this.subNodeInfo = subNodeInfo;
  }
}