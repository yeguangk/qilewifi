package com.wifi.res.svr;

import com.wifi.res.bo.ResType;

import java.math.BigDecimal;
import java.util.List;

public interface ResTypeSvr
{
  public List getSubNode(BigDecimal paramString,BigDecimal resType)
    throws Exception;

  public void save(ResType resType,List<ResType> resTypeList) throws Exception;
}