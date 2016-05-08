package com.mz.sys.web;

import com.mz.sys.bo.BasAutoCode;
import com.mz.sys.svr.BasAutoCodeSvr;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class BasAutoCodeWeb
{
  private static final Logger log = Logger.getLogger(BasAutoCodeWeb.class);

  public void getTreeJson(MoziRequest request, HttpServletResponse response) throws Exception {
    BasAutoCodeSvr svr = (BasAutoCodeSvr)ServiceFactory.getService(BasAutoCodeSvr.class);
    List autoList = svr.qryList();
    String rtn = toJsonString(autoList);
    HttpUtil.outJson(rtn, response);
  }
  private String toJsonString(List treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((BasAutoCode)treeList.get(i)).toTreeJsonString());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }

  public void saveData(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    BasAutoCodeSvr svr = (BasAutoCodeSvr)ServiceFactory.getService(BasAutoCodeSvr.class);
    BasAutoCode main = (BasAutoCode)request.getJsonData(BasAutoCode.class);
    String optFlg = request.getParameter("optFlg");
    String saveType = request.getParameter("saveType");
    if ((!"add".equals(optFlg)) && (!"copyAdd".equals(optFlg)))
    {
      "edit".equals(optFlg);
    }

    svr.saveData(optFlg, saveType, main);
    HttpUtil.success(response);
  }
  public void getBasAutoCode(MoziRequest request, HttpServletResponse response) throws Exception {
    BasAutoCodeSvr svr = (BasAutoCodeSvr)ServiceFactory.getService(BasAutoCodeSvr.class);
    String keyid = request.getParameter("keyid");
    BasAutoCode code = svr.getBasAutoCode(keyid);
    HttpUtil.success(code, response);
  }
}