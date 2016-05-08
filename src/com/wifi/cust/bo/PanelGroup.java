package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class PanelGroup extends BaseBo {
    private java.math.BigDecimal panelsId;
    private java.math.BigDecimal groupId;
    private java.math.BigDecimal pointId;
    private String panelsName;
    private String panelsDesc;
    private java.util.Date createDate;
    private String createMan;
    private java.math.BigDecimal versionVal;
    
    public java.math.BigDecimal getVersionVal() {
		return versionVal;
	}
	public void setVersionVal(java.math.BigDecimal versionVal) {
		this.versionVal = versionVal;
	}
	private String pointName;
    private String groupName;
    
    public String getPointName() {
		return pointName;
	}
	public void setPointName(String pointName) {
		this.pointName = pointName;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public java.math.BigDecimal getPanelsId(){
       return this.panelsId;
    }
    public void setPanelsId(java.math.BigDecimal panelsId){
       this.panelsId = panelsId;
    }    
    public java.math.BigDecimal getGroupId(){
       return this.groupId;
    }
    public void setGroupId(java.math.BigDecimal groupId){
       this.groupId = groupId;
    }    
    public java.math.BigDecimal getPointId(){
       return this.pointId;
    }
    public void setPointId(java.math.BigDecimal pointId){
       this.pointId = pointId;
    }    
    public String getPanelsName(){
       return this.panelsName;
    }
    public void setPanelsName(String panelsName){
       this.panelsName = panelsName;
    }    
    public String getPanelsDesc(){
       return this.panelsDesc;
    }
    public void setPanelsDesc(String panelsDesc){
       this.panelsDesc = panelsDesc;
    }    
    public java.util.Date getCreateDate(){
       return this.createDate;
    }
    public void setCreateDate(java.util.Date createDate){
       this.createDate = createDate;
    }    
    public String getCreateMan(){
       return this.createMan;
    }
    public void setCreateMan(String createMan){
       this.createMan = createMan;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"panelsId\":").append(toJsonNew(this.getPanelsId())).append(",");
	jsN.append("\"groupId\":").append(toJsonNew(this.getGroupId())).append(",");
	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId())).append(",");
	jsN.append("\"panelsName\":").append(toJsonNew(this.getPanelsName())).append(",");
	jsN.append("\"panelsDesc\":").append(toJsonNew(this.getPanelsDesc())).append(",");
	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName())).append(",");
	jsN.append("\"groupName\":").append(toJsonNew(this.getGroupName())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"versionVal\":").append(toJsonNew(this.getVersionVal())).append(",");	
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<panelsId>").append(toXmlValue(this.getPanelsId())).append("</panelsId>");
	xmL.append("<groupId>").append(toXmlValue(this.getGroupId())).append("</groupId>");
	xmL.append("<pointId>").append(toXmlValue(this.getPointId())).append("</pointId>");
	xmL.append("<panelsName>").append(toXmlValue(this.getPanelsName())).append("</panelsName>");
	xmL.append("<panelsDesc>").append(toXmlValue(this.getPanelsDesc())).append("</panelsDesc>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
