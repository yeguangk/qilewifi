package com.wifi.column.web;

import com.wifi.column.bo.ColumnInfo;
import com.wifi.column.svr.ColumnInfoSvr;
import com.wifi.res.bo.ResType;
import com.wifi.res.svr.ResTypeSvr;
import com.wifi.res.vo.ResTypeVo;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class ColumnInfoWeb
{
  public void getSubInfo(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
	Map cond=request.getInputStreamParams();
	ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")));
    HttpUtil.success(treeList, response);
  }
  public void getSubNode(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")));
    String rtn = toJsonString(treeList);
    HttpUtil.outJson(rtn, response);
  }
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	  ColumnInfoVo classVo = (ColumnInfoVo)request.getJsonData(ColumnInfoVo.class);
		ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
	    svr.delete(classVo.getSubInfo());
	    HttpUtil.success(response);
  }
  
  private String toJsonString(List<ColumnInfo> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append((treeList.get(i)).toTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
  ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
  ColumnInfoVo classVo = (ColumnInfoVo)request.getJsonData(ColumnInfoVo.class);
    svr.save(classVo.getColInfo(),classVo.getSubInfo());
    HttpUtil.success(response);
  }
  
  //保存栏目资源列表
  public void sclsRes(MoziRequest request, HttpServletResponse response) throws Exception {
	  ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
	  ColumnResListVo classResVo = (ColumnResListVo)request.getJsonData(ColumnResListVo.class);
	    svr.save(classResVo.getColResList());
	    HttpUtil.success(response);
  }
  //查询栏目资源表
  public void clsRes(MoziRequest request, HttpServletResponse response) throws Exception {
	  Map cond=request.getInputStreamParams();
	  ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
	    List treeList = svr.qryClsRes(new BigDecimal((String)cond.get("columnId")));
	    HttpUtil.success(treeList, response);
  }
  //删除栏目资源列表
  public void delClsRes(MoziRequest request, HttpServletResponse response) throws Exception {
	  ColumnInfoSvr svr = (ColumnInfoSvr)ServiceFactory.getService(ColumnInfoSvr.class);
	  ColumnResListVo classResVo = (ColumnResListVo)request.getJsonData(ColumnResListVo.class);
	    svr.deleteClsRes(classResVo.getColResList());
	    HttpUtil.success(response);
  }  
  
}