package com.wifi.cust.svr;

import java.util.Map;

public interface PreSvr {
   public Map getPre() throws Exception;
   public void save(String pre,String flg) throws Exception;
}
