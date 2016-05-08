package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class PublishLog extends BaseBo {
    private java.math.BigDecimal publishId;
    private java.math.BigDecimal custId;
    private java.math.BigDecimal columnId;
    private String fileUrl;
    private String md5Num;
    private java.math.BigDecimal state;
    private String columnName;
    private java.math.BigDecimal publishType;
    
    public java.math.BigDecimal getPublishType() {
		return publishType;
	}
	public void setPublishType(java.math.BigDecimal publishType) {
		this.publishType = publishType;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public java.math.BigDecimal getPublishId(){
       return this.publishId;
    }
    public void setPublishId(java.math.BigDecimal publishId){
       this.publishId = publishId;
    }    
    public java.math.BigDecimal getCustId(){
       return this.custId;
    }
    public void setCustId(java.math.BigDecimal custId){
       this.custId = custId;
    }    
    public java.math.BigDecimal getColumnId(){
       return this.columnId;
    }
    public void setColumnId(java.math.BigDecimal columnId){
       this.columnId = columnId;
    }    
    public String getFileUrl(){
       return this.fileUrl;
    }
    public void setFileUrl(String fileUrl){
       this.fileUrl = fileUrl;
    }    
    public String getMd5Num(){
       return this.md5Num;
    }
    public void setMd5Num(String md5Num){
       this.md5Num = md5Num;
    }    
    public java.math.BigDecimal getState(){
       return this.state;
    }
    public void setState(java.math.BigDecimal state){
       this.state = state;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"publishId\":").append(toJsonNew(this.getPublishId())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"columnId\":").append(toJsonNew(this.getColumnId())).append(",");
	jsN.append("\"fileUrl\":").append(toJsonNew(this.getFileUrl())).append(",");
	jsN.append("\"md5Num\":").append(toJsonNew(this.getMd5Num())).append(",");
	jsN.append("\"columnName\":").append(toJsonNew(this.getColumnName())).append(",");
	jsN.append("\"state\":").append(toJsonNew(this.getState()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<publishId>").append(toXmlValue(this.getPublishId())).append("</publishId>");
	xmL.append("<custId>").append(toXmlValue(this.getCustId())).append("</custId>");
	xmL.append("<columnId>").append(toXmlValue(this.getColumnId())).append("</columnId>");
	xmL.append("<fileUrl>").append(toXmlValue(this.getFileUrl())).append("</fileUrl>");
	xmL.append("<md5Num>").append(toXmlValue(this.getMd5Num())).append("</md5Num>");
	xmL.append("<state>").append(toXmlValue(this.getState())).append("</state>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
