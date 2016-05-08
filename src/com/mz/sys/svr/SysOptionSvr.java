package com.mz.sys.svr;

import java.rmi.RemoteException;
import java.util.List;

public abstract interface SysOptionSvr
{
  public abstract void reset()
    throws Exception, RemoteException;

  public abstract String getOptionTxt(String paramString1, String paramString2)
    throws Exception, RemoteException;

  public abstract List getOptionList(String paramString)
    throws Exception, RemoteException;

  public abstract void loadOptions()
    throws Exception, RemoteException;

  public abstract void reLoadOptions()
    throws Exception, RemoteException;
}