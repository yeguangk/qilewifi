package com.wifi.intf.svr;

public interface IntfSvr {
  public String lgn(String sn)throws Exception;
  public String tplData(String tplId)throws Exception;
  public String custInfo(String custId)throws Exception;
}
