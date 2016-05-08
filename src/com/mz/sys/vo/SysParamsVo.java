package com.mz.sys.vo;

import com.mz.sys.bo.SystemParameters;
import java.util.List;

public class SysParamsVo
{
  public List<SystemParameters> paramsList;
  public String delStr;

  public List<SystemParameters> getParamsList()
  {
    return this.paramsList;
  }
  public void setParamsList(List<SystemParameters> paramsList) {
    this.paramsList = paramsList;
  }
  public String getDelStr() {
    return this.delStr;
  }
  public void setDelStr(String delStr) {
    this.delStr = delStr;
  }
}