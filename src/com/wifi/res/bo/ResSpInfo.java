package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResSpInfo extends BaseBo {
    private java.math.BigDecimal recId;
    private java.math.BigDecimal resId;
    private String spInfo;
    private java.util.Date spDate;
    private String spMan;
    public java.math.BigDecimal getRecId(){
       return this.recId;
    }
    public void setRecId(java.math.BigDecimal recId){
       this.recId = recId;
    }    
    public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public String getSpInfo(){
       return this.spInfo;
    }
    public void setSpInfo(String spInfo){
       this.spInfo = spInfo;
    }    
    public java.util.Date getSpDate(){
       return this.spDate;
    }
    public void setSpDate(java.util.Date spDate){
       this.spDate = spDate;
    }    
    public String getSpMan(){
       return this.spMan;
    }
    public void setSpMan(String spMan){
       this.spMan = spMan;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"recId\":").append(toJsonNew(this.getRecId())).append(",");
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"spInfo\":").append(toJsonNew(this.getSpInfo())).append(",");
	jsN.append("\"spDate\":").append(toJsonNew(this.getSpDate())).append(",");
	jsN.append("\"spMan\":").append(toJsonNew(this.getSpMan()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<recId>").append(toXmlValue(this.getRecId())).append("</recId>");
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<spInfo>").append(toXmlValue(this.getSpInfo())).append("</spInfo>");
	xmL.append("<spDate>").append(toXmlValue(this.getSpDate())).append("</spDate>");
	xmL.append("<spMan>").append(toXmlValue(this.getSpMan())).append("</spMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
