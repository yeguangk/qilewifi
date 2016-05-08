package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class CustPoint extends BaseBo {
    private java.math.BigDecimal pointId;
    private java.math.BigDecimal custId;
    private java.math.BigDecimal groupId;
    private String pointName;
    private String pointAddress;
    private String pointPhone;
    private String pointFax;
    private String pointMan;
    private java.util.Date createDate;
    private String createMan;
    private String groupName;
    private String name;
    private String regionNo;
    private String regionName;
    
    public String getRegionNo() {
		return regionNo;
	}
	public void setRegionNo(String regionNo) {
		this.regionNo = regionNo;
	}
	public String getRegionName() {
		return regionName;
	}
	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public java.math.BigDecimal getPointId(){
       return this.pointId;
    }
    public void setPointId(java.math.BigDecimal pointId){
       this.pointId = pointId;
    }    
    public java.math.BigDecimal getCustId(){
       return this.custId;
    }
    public void setCustId(java.math.BigDecimal custId){
       this.custId = custId;
    }    
    public java.math.BigDecimal getGroupId(){
       return this.groupId;
    }
    public void setGroupId(java.math.BigDecimal groupId){
       this.groupId = groupId;
    }    
    public String getPointName(){
       return this.pointName;
    }
    public void setPointName(String pointName){
       this.pointName = pointName;
    }    
    public String getPointAddress(){
       return this.pointAddress;
    }
    public void setPointAddress(String pointAddress){
       this.pointAddress = pointAddress;
    }    
    public String getPointPhone(){
       return this.pointPhone;
    }
    public void setPointPhone(String pointPhone){
       this.pointPhone = pointPhone;
    }    
    public String getPointFax(){
       return this.pointFax;
    }
    public void setPointFax(String pointFax){
       this.pointFax = pointFax;
    }    
    public String getPointMan(){
       return this.pointMan;
    }
    public void setPointMan(String pointMan){
       this.pointMan = pointMan;
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
	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"groupId\":").append(toJsonNew(this.getGroupId())).append(",");
	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName())).append(",");
	jsN.append("\"pointAddress\":").append(toJsonNew(this.getPointAddress())).append(",");
	jsN.append("\"pointPhone\":").append(toJsonNew(this.getPointPhone())).append(",");
	jsN.append("\"pointFax\":").append(toJsonNew(this.getPointFax())).append(",");
	jsN.append("\"pointMan\":").append(toJsonNew(this.getPointMan())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"groupName\":").append(toJsonNew(this.getGroupName())).append(",");
	jsN.append("\"name\":").append(toJsonNew(this.getName())).append(",");
	jsN.append("\"regionNo\":").append(toJsonNew(this.getRegionNo())).append(",");
	jsN.append("\"regionName\":").append(toJsonNew(this.getRegionName())).append(",");
	
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    
    public String toJsonString2(){
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId())).append(",");
    	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName()));
    	return jsN.toString();
    }
    
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<pointId>").append(toXmlValue(this.getPointId())).append("</pointId>");
	xmL.append("<custId>").append(toXmlValue(this.getCustId())).append("</custId>");
	xmL.append("<groupId>").append(toXmlValue(this.getGroupId())).append("</groupId>");
	xmL.append("<pointName>").append(toXmlValue(this.getPointName())).append("</pointName>");
	xmL.append("<pointAddress>").append(toXmlValue(this.getPointAddress())).append("</pointAddress>");
	xmL.append("<pointPhone>").append(toXmlValue(this.getPointPhone())).append("</pointPhone>");
	xmL.append("<pointFax>").append(toXmlValue(this.getPointFax())).append("</pointFax>");
	xmL.append("<pointMan>").append(toXmlValue(this.getPointMan())).append("</pointMan>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
