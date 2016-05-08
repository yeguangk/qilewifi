package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResOwnerTag extends BaseBo {
    private java.math.BigDecimal keyId;
    private java.math.BigDecimal resId;
    private String tagType;
    private String tagId;
    public java.math.BigDecimal getKeyId(){
       return this.keyId;
    }
    public void setKeyId(java.math.BigDecimal keyId){
       this.keyId = keyId;
    }    
    public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public String getTagType(){
       return this.tagType;
    }
    public void setTagType(String tagType){
       this.tagType = tagType;
    }    
    public String getTagId(){
       return this.tagId;
    }
    public void setTagId(String tagId){
       this.tagId = tagId;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"keyId\":").append(toJsonNew(this.getKeyId())).append(",");
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"tagType\":").append(toJsonNew(this.getTagType())).append(",");
	jsN.append("\"tagId\":").append(toJsonNew(this.getTagId()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<keyId>").append(toXmlValue(this.getKeyId())).append("</keyId>");
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<tagType>").append(toXmlValue(this.getTagType())).append("</tagType>");
	xmL.append("<tagId>").append(toXmlValue(this.getTagId())).append("</tagId>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
