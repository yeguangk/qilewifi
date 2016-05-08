package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class PublishRange extends BaseBo {
    private java.math.BigDecimal publishId;
    private String regionNo;
    private java.math.BigDecimal pointId;

    private String regionName;
    private String pointName;
    
    public String getRegionName() {
		return regionName;
	}
	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}
	public String getPointName() {
		return pointName;
	}
	public void setPointName(String pointName) {
		this.pointName = pointName;
	}
	public java.math.BigDecimal getPublishId(){
       return this.publishId;
    }
    public void setPublishId(java.math.BigDecimal publishId){
       this.publishId = publishId;
    }    
    public String getRegionNo(){
       return this.regionNo;
    }
    public void setRegionNo(String regionNo){
       this.regionNo = regionNo;
    }    
    public java.math.BigDecimal getPointId(){
       return this.pointId;
    }
    public void setPointId(java.math.BigDecimal pointId){
       this.pointId = pointId;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"publishId\":").append(toJsonNew(this.getPublishId())).append(",");
	jsN.append("\"regionNo\":").append(toJsonNew(this.getRegionNo())).append(",");
	
	jsN.append("\"regionName\":").append(toJsonNew(this.getRegionName())).append(",");
	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName())).append(",");

	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<publishId>").append(toXmlValue(this.getPublishId())).append("</publishId>");
	xmL.append("<regionNo>").append(toXmlValue(this.getRegionNo())).append("</regionNo>");
	xmL.append("<pointId>").append(toXmlValue(this.getPointId())).append("</pointId>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
