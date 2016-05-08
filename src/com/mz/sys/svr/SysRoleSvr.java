package com.mz.sys.svr;

import com.mz.sys.bo.SysRole;
import com.mz.sys.bo.SysRoleRes;
import com.mz.sys.bo.TreeNode;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;
import org.frame.db.page.PageUtil;

public abstract interface SysRoleSvr
{
  public abstract void saveOpt(SysRole paramSysRole, List<SysRoleRes> paramList)
    throws Exception, RemoteException;

  public abstract List querySysRole(Map paramMap, PageUtil paramPageUtil)
    throws Exception, RemoteException;

  public abstract List<TreeNode> getResoureTree(String paramString)
    throws Exception, RemoteException;
}