package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class UpdateRange extends BaseBo {
    private java.math.BigDecimal uptId;
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
	public java.math.BigDecimal getUptId(){
       return this.uptId;
    }
    public void setUptId(java.math.BigDecimal uptId){
       this.uptId = uptId;
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
	jsN.append("\"uptId\":").append(toJsonNew(this.getUptId())).append(",");
	jsN.append("\"regionNo\":").append(toJsonNew(this.getRegionNo())).append(",");

	jsN.append("\"regionName\":").append(toJsonNew(this.getRegionName())).append(",");
	jsN.append("\"pointName\":").append(toJsonNew(this.getPointName())).append(",");

	jsN.append("\"pointId\":").append(toJsonNew(this.getPointId()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<uptId>").append(toXmlValue(this.getUptId())).append("</uptId>");
	xmL.append("<regionNo>").append(toXmlValue(this.getRegionNo())).append("</regionNo>");
	xmL.append("<pointId>").append(toXmlValue(this.getPointId())).append("</pointId>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
