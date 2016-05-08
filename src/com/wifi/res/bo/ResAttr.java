package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResAttr extends BaseBo {
    private java.math.BigDecimal attrId;
    private java.math.BigDecimal resId;
    private String attrName;
    private String attrZh;
    private String attrVal;
    public java.math.BigDecimal getAttrId(){
       return this.attrId;
    }
    public void setAttrId(java.math.BigDecimal attrId){
       this.attrId = attrId;
    }    
    public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public String getAttrName(){
       return this.attrName;
    }
    public void setAttrName(String attrName){
       this.attrName = attrName;
    }    
    public String getAttrZh(){
       return this.attrZh;
    }
    public void setAttrZh(String attrZh){
       this.attrZh = attrZh;
    }    
    public String getAttrVal(){
       return this.attrVal;
    }
    public void setAttrVal(String attrVal){
       this.attrVal = attrVal;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"attrId\":").append(toJsonNew(this.getAttrId())).append(",");
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"attrName\":").append(toJsonNew(this.getAttrName())).append(",");
	jsN.append("\"attrZh\":").append(toJsonNew(this.getAttrZh())).append(",");
	jsN.append("\"attrVal\":").append(toJsonNew(this.getAttrVal()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<attrId>").append(toXmlValue(this.getAttrId())).append("</attrId>");
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<attrName>").append(toXmlValue(this.getAttrName())).append("</attrName>");
	xmL.append("<attrZh>").append(toXmlValue(this.getAttrZh())).append("</attrZh>");
	xmL.append("<attrVal>").append(toXmlValue(this.getAttrVal())).append("</attrVal>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
