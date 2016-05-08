package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class CustEquipment extends BaseBo {
	private java.math.BigDecimal equipId;
    private String equipNo;
    private String equipName;
    private java.math.BigDecimal custId;
    private java.math.BigDecimal pointId;
    private java.math.BigDecimal groupId;
    private java.math.BigDecimal state;
    private String name;
    private String groupName;
    private String pointName;
    
    public java.math.BigDecimal getEquipId() {
		return equipId;
	}
	public void setEquipId(java.math.BigDecimal equipId) {
		this.equipId = equipId;
	}
	public String getEquipName() {
		return equipName;
	}
	public void setEquipName(String equipName) {
		this.equipName = equipName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getPointName() {
		return pointName;
	}
	public void setPointName(String pointName) {
		this.pointName = pointName;
	}
	public String getEquipNo(){
       return this.equipNo;
    }
    public void setEquipNo(String equipNo){
       this.equipNo = equipNo;
    }    
    public java.math.BigDecimal getCustId(){
       return this.custId;
    }
    public void setCustId(java.math.BigDecimal custId){
       this.custId = custId;
    }    
    public java.math.BigDecimal getPointId(){
       return this.pointId;
    }
    public void setPointId(java.math.BigDecimal pointId){
       this.pointId = pointId;
    }    
    public java.math.BigDecimal getGroupId(){
       return this.groupId;
    }
    public void setGroupId(java.math.BigDecimal groupId){
       this.groupId = groupId;
    }    
    public java.math.BigDecimal getState(){
       return this.state;
    }
    public void setState(java.math.BigDecimal state){
       this.state = state;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"equipNo\":").append(toJsonNew(this.getEquipNo())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId())).append(",");
	jsN.append("\"groupId\":").append(toJsonNew(this.getGroupId())).append(",");
	jsN.append("\"name\":").append(toJsonNew(this.getName())).append(",");
	jsN.append("\"groupName\":").append(toJsonNew(this.getGroupName())).append(",");
	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName())).append(",");
	
	jsN.append("\"equipId\":").append(toJsonNew(this.getEquipId())).append(",");
	jsN.append("\"equipName\":").append(toJsonNew(this.getEquipName())).append(",");
	 
	jsN.append("\"state\":").append(toJsonNew(this.getState()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<equipNo>").append(toXmlValue(this.getEquipNo())).append("</equipNo>");
	xmL.append("<custId>").append(toXmlValue(this.getCustId())).append("</custId>");
	xmL.append("<pointId>").append(toXmlValue(this.getPointId())).append("</pointId>");
	xmL.append("<groupId>").append(toXmlValue(this.getGroupId())).append("</groupId>");
	xmL.append("<state>").append(toXmlValue(this.getState())).append("</state>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
