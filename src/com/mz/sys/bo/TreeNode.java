package com.mz.sys.bo;

import org.frame.db.bo.BaseBo;

public class TreeNode extends BaseBo
{
  private String nodeId;
  private String nodeTxt;
  private String parentId;
  private String checked;
  private String locationKindCd;
  private String locationFuncCd;
  private String kid;
  private String isLeaf;

  public String getLocationFuncCd()
  {
    return this.locationFuncCd;
  }

  public void setLocationFuncCd(String locationFuncCd) {
    this.locationFuncCd = locationFuncCd;
  }

  public String getIsLeaf()
  {
    return this.isLeaf;
  }

  public void setIsLeaf(String isLeaf) {
    this.isLeaf = isLeaf;
  }

  public String toJsonString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"nodeId\":").append(toJsonNew(getNodeId() == null ? null : getNodeId().trim())).append(",");
    rtn.append("\"nodeTxt\":").append(toJsonNew(getNodeTxt())).append(",");
    rtn.append("\"parentId\":").append(toJsonNew(getParentId() == null ? null : getParentId().trim())).append(",");
    rtn.append("\"locationKindCd\":").append(toJsonNew(getLocationKindCd() == null ? null : getLocationKindCd().trim())).append(",");
    rtn.append("\"isLeaf\":").append(getIsLeaf()); rtn.append(",");
    rtn.append("\"locationFuncCd\":").append(toJsonNew(getLocationFuncCd() == null ? null : getLocationFuncCd().trim())).append(",");
    rtn.append("\"kid\":").append(toJsonNew(getKid() == null ? null : getKid().trim())).append(",");
    rtn.append("\"checked\":").append(getChecked());
    return rtn.toString();
  }
  public String toTreeNode() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"text\":").append(toJsonNew(getNodeTxt())).append(",");
    rtn.append("\"id\":").append(toJsonNew(getNodeId())).append(",");
    rtn.append("\"parentId\":").append(toJsonNew(getParentId()));
    return rtn.toString();
  }
  public String getNodeId() {
    return this.nodeId;
  }

  public void setNodeId(String nodeId) {
    this.nodeId = nodeId;
  }

  public String getNodeTxt() {
    return this.nodeTxt;
  }

  public void setNodeTxt(String nodeTxt) {
    this.nodeTxt = nodeTxt;
  }

  public String getParentId() {
    return this.parentId;
  }

  public void setParentId(String parentId) {
    this.parentId = parentId;
  }

  public String getChecked() {
    return this.checked;
  }

  public void setChecked(String checked) {
    this.checked = checked;
  }

  public String getLocationKindCd() {
    return this.locationKindCd;
  }

  public void setLocationKindCd(String locationKindCd) {
    this.locationKindCd = locationKindCd;
  }

  public String toXmlString()
  {
    return null;
  }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }

  public String getKid() {
    return this.kid;
  }

  public void setKid(String kid) {
    this.kid = kid;
  }
}