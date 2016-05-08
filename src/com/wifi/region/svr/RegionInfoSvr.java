package com.wifi.region.svr;

import com.wifi.region.bo.RegionInfo;

import java.math.BigDecimal;
import java.util.List;

public interface RegionInfoSvr
{
  public List getSubNode(BigDecimal parentId)throws Exception;
  public void delete(List<RegionInfo> subList)throws Exception;
  public void save(RegionInfo classInfo,List<RegionInfo> subList) throws Exception;
}