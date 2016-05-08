package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class CustGroup extends BaseBo {
    private java.math.BigDecimal groupId;
    private java.math.BigDecimal custId;
    private String groupName;
    private String groupDesc;
    private java.util.Date createDate;
    private String createMan;
    private String name;
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public java.math.BigDecimal getGroupId(){
       return this.groupId;
    }
    public void setGroupId(java.math.BigDecimal groupId){
       this.groupId = groupId;
    }    
    public java.math.BigDecimal getCustId(){
       return this.custId;
    }
    public void setCustId(java.math.BigDecimal custId){
       this.custId = custId;
    }    
    public String getGroupName(){
       return this.groupName;
    }
    public void setGroupName(String groupName){
       this.groupName = groupName;
    }    
    public String getGroupDesc(){
       return this.groupDesc;
    }
    public void setGroupDesc(String groupDesc){
       this.groupDesc = groupDesc;
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
	jsN.append("\"groupId\":").append(toJsonNew(this.getGroupId())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"groupName\":").append(toJsonNew(this.getGroupName())).append(",");
	jsN.append("\"name\":").append(toJsonNew(this.getName())).append(",");
	jsN.append("\"groupDesc\":").append(toJsonNew(this.getGroupDesc())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toJsonString2(){
		StringBuilder jsN=new StringBuilder();
		jsN.append("\"groupId\":").append(toJsonNew(this.getGroupId())).append(",");
		jsN.append("\"groupName\":").append(toJsonNew(this.getGroupName()));
		return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<groupId>").append(toXmlValue(this.getGroupId())).append("</groupId>");
	xmL.append("<custId>").append(toXmlValue(this.getCustId())).append("</custId>");
	xmL.append("<groupName>").append(toXmlValue(this.getGroupName())).append("</groupName>");
	xmL.append("<groupDesc>").append(toXmlValue(this.getGroupDesc())).append("</groupDesc>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
