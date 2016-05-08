package com.mz.sys.svr;

import com.mz.sys.bo.SysOptionValue;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class SysCache
{
  private static Map option = new ConcurrentHashMap();

  protected static void cacheOptions(String key, SysOptionValue bean) {
    if (key == null) {
      return;
    }
    List optionList = null;
    if (option.containsKey(key))
      optionList = (List)option.get(key);
    else {
      optionList = new ArrayList();
    }
    optionList.add(bean);
    option.put(key, optionList);
  }
  protected static void reset() {
    option = new HashMap();
  }
  protected static String getOptionTxt(String key, String value) {
    if (option.containsKey(key)) {
      List optionList = (List)option.get(key);
      for (int i = 0; i < optionList.size(); i++) {
        SysOptionValue bean = (SysOptionValue)optionList.get(i);
        if ((bean.getValue() != null) && (bean.getValue().equals(value))) {
          return bean.getText();
        }
      }
    }
    return value;
  }
  public static List getOptionList(String key) {
    List rtn = new ArrayList();
    if (option.containsKey(key)) {
      rtn = (List)option.get(key);
    }
    return rtn;
  }
}