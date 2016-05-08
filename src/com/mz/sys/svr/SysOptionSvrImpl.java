package com.mz.sys.svr;

import com.mz.sys.bo.DdValue;
import com.mz.sys.bo.SysOptionValue;

import java.rmi.RemoteException;
import java.util.List;

public class SysOptionSvrImpl
  implements SysOptionSvr
{
  public void reset()
    throws Exception, RemoteException
  {
    SysCache.reset();
  }
  public String getOptionTxt(String key, String value) throws Exception, RemoteException {
    return SysCache.getOptionTxt(key, value);
  }
  public List getOptionList(String key) throws Exception, RemoteException {
    return SysCache.getOptionList(key);
  }

  public void loadOptions() throws Exception, RemoteException {
    SysOptionHelper helper = null;
    helper = new SysOptionHelper();

    List options = helper.ddOptions();
    for (int i = 0; i < options.size(); i++) {
      DdValue opt = (DdValue)options.get(i);
      SysOptionValue value=new SysOptionValue();
      value.setText(opt.getDdText());
      value.setValue(opt.getDdValue());
      SysCache.cacheOptions(opt.getDdCode(), value);
    }
  }

  public void reLoadOptions()
    throws Exception, RemoteException
  {
    SysCache.reset();
    loadOptions();
  }
}