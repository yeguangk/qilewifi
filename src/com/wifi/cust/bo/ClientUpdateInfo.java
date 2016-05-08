package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class ClientUpdateInfo extends BaseBo {
    private java.math.BigDecimal uptId;
    private String platformNo;
    private java.math.BigDecimal pkgType;
    private String versionInfo;
    private String pkgUrl;
    private String md5Num;
    private java.math.BigDecimal updateMethod;
    private java.math.BigDecimal state;
    private java.math.BigDecimal columnId;
    private String columnName;
    private java.math.BigDecimal custId;
    
    public java.math.BigDecimal getColumnId() {
		return columnId;
	}
	public void setColumnId(java.math.BigDecimal columnId) {
		this.columnId = columnId;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public java.math.BigDecimal getCustId() {
		return custId;
	}
	public void setCustId(java.math.BigDecimal custId) {
		this.custId = custId;
	}
	public java.math.BigDecimal getUptId(){
       return this.uptId;
    }
    public void setUptId(java.math.BigDecimal uptId){
       this.uptId = uptId;
    }    
    public String getPlatformNo(){
       return this.platformNo;
    }
    public void setPlatformNo(String platformNo){
       this.platformNo = platformNo;
    }    
   
    public java.math.BigDecimal getPkgType(){
       return this.pkgType;
    }
    public void setPkgType(java.math.BigDecimal pkgType){
       this.pkgType = pkgType;
    }    
    public String getVersionInfo(){
       return this.versionInfo;
    }
    public void setVersionInfo(String versionInfo){
       this.versionInfo = versionInfo;
    }    
    public String getPkgUrl(){
       return this.pkgUrl;
    }
    public void setPkgUrl(String pkgUrl){
       this.pkgUrl = pkgUrl;
    }    
    public String getMd5Num(){
       return this.md5Num;
    }
    public void setMd5Num(String md5Num){
       this.md5Num = md5Num;
    }    
    public java.math.BigDecimal getUpdateMethod(){
       return this.updateMethod;
    }
    public void setUpdateMethod(java.math.BigDecimal updateMethod){
       this.updateMethod = updateMethod;
    }    
    public java.math.BigDecimal getState(){
       return this.state;
    }
    public void setState(java.math.BigDecimal state){
       this.state = state;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"uptId\":").append(toJsonNew(this.getUptId())).append(",");
	jsN.append("\"platformNo\":").append(toJsonNew(this.getPlatformNo())).append(",");

	jsN.append("\"pkgType\":").append(toJsonNew(this.getPkgType())).append(",");
	jsN.append("\"versionInfo\":").append(toJsonNew(this.getVersionInfo())).append(",");
	jsN.append("\"pkgUrl\":").append(toJsonNew(this.getPkgUrl())).append(",");
	jsN.append("\"md5Num\":").append(toJsonNew(this.getMd5Num())).append(",");
	jsN.append("\"updateMethod\":").append(toJsonNew(this.getUpdateMethod())).append(",");

	jsN.append("\"columnId\":").append(toJsonNew(this.getColumnId())).append(",");
	jsN.append("\"columnName\":").append(toJsonNew(this.getColumnName())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	
	jsN.append("\"state\":").append(toJsonNew(this.getState()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<uptId>").append(toXmlValue(this.getUptId())).append("</uptId>");
	xmL.append("<platformNo>").append(toXmlValue(this.getPlatformNo())).append("</platformNo>");

	xmL.append("<pkgType>").append(toXmlValue(this.getPkgType())).append("</pkgType>");
	xmL.append("<versionInfo>").append(toXmlValue(this.getVersionInfo())).append("</versionInfo>");
	xmL.append("<pkgUrl>").append(toXmlValue(this.getPkgUrl())).append("</pkgUrl>");
	xmL.append("<md5Num>").append(toXmlValue(this.getMd5Num())).append("</md5Num>");
	xmL.append("<updateMethod>").append(toXmlValue(this.getUpdateMethod())).append("</updateMethod>");
	xmL.append("<state>").append(toXmlValue(this.getState())).append("</state>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
