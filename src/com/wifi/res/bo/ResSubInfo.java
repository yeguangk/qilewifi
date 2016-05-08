package com.wifi.res.bo;
import java.math.BigDecimal;

import org.frame.db.bo.BaseBo;
public class ResSubInfo extends BaseBo {
    private java.math.BigDecimal resId;
    private java.math.BigDecimal subResId;
    private String subResName;
    private String subResDesc;
    private String subResFiles;
    private BigDecimal seqId;
    
    public BigDecimal getSeqId() {
		return seqId;
	}
	public void setSeqId(BigDecimal seqId) {
		this.seqId = seqId;
	}
	public String getSubResFiles() {
		return subResFiles;
	}
	public void setSubResFiles(String subResFiles) {
		this.subResFiles = subResFiles;
	}
	public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public java.math.BigDecimal getSubResId(){
       return this.subResId;
    }
    public void setSubResId(java.math.BigDecimal subResId){
       this.subResId = subResId;
    }    
    public String getSubResName(){
       return this.subResName;
    }
    public void setSubResName(String subResName){
       this.subResName = subResName;
    }    
    public String getSubResDesc(){
       return this.subResDesc;
    }
    public void setSubResDesc(String subResDesc){
       this.subResDesc = subResDesc;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"subResId\":").append(toJsonNew(this.getSubResId())).append(",");
	jsN.append("\"subResName\":").append(toJsonNew(this.getSubResName())).append(",");
	jsN.append("\"seqId\":").append(toJsonNew(this.getSeqId())).append(",");
	jsN.append("\"subResDesc\":").append(toJsonNew(this.getSubResDesc()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<subResId>").append(toXmlValue(this.getSubResId())).append("</subResId>");
	xmL.append("<subResName>").append(toXmlValue(this.getSubResName())).append("</subResName>");
	xmL.append("<subResDesc>").append(toXmlValue(this.getSubResDesc())).append("</subResDesc>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
