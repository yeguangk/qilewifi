package com.wifi.cust.web;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.mz.sys.bo.SysOrgInfo;
import com.mz.sys.bo.TreeNode;
import com.mz.sys.svr.SysOrgInfoSvr;
import com.wifi.cust.svr.CustQrySvr;

public class CustQryWeb
{
	
  public void qryCustGrpPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustQrySvr svr = (CustQrySvr)ServiceFactory.getService(CustQrySvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryCustGrpPg(cond,pageInfo),pageInfo, response);
  }
  public void qryPointPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustQrySvr svr = (CustQrySvr)ServiceFactory.getService(CustQrySvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryPointPg(cond,pageInfo),pageInfo, response);
  }
  
  public void qryCustTree(MoziRequest request, HttpServletResponse response) throws Exception {
	    Map map = request.getInputStreamParams();
	    String parentId = (String)map.get("parentId");
	    if (parentId == null) {
	    	parentId = request.getParameter("parentId");
	    }
	    CustQrySvr svr = (CustQrySvr)ServiceFactory.getService(CustQrySvr.class);
	    List treeList = svr.qryCustTree(parentId);
	    String rtn = toJsonString(treeList);
	    HttpUtil.outJson(rtn, response);
  }
  private String toJsonString(List<TreeNode> treeList) {
	    StringBuffer sb = new StringBuffer();
	    sb.append("[");
	    int i=1;
	    for (TreeNode node:treeList) {
	    	 if (i!=1)
	 	        sb.append(",");
	    	 else
	    		 i=2;
	      sb.append("{").append(node.toTreeNode()).append("}");	     
	    }
	    sb.append("]");
	    return sb.toString();
	  }
  
}