package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class PanelBoxDef extends BaseBo {
    private java.math.BigDecimal boxId;
    private java.math.BigDecimal panelId;
    private String boxTitle;
    private String boxDesc;
    private java.math.BigDecimal boxType;
    private java.math.BigDecimal showNo;
    private java.math.BigDecimal panelId2;
    private java.math.BigDecimal resType;
    private java.math.BigDecimal showNum;
    private java.math.BigDecimal boxClass;
    
    public java.math.BigDecimal getBoxClass() {
		return boxClass;
	}
	public void setBoxClass(java.math.BigDecimal boxClass) {
		this.boxClass = boxClass;
	}
	public java.math.BigDecimal getShowNum() {
		return showNum;
	}
	public void setShowNum(java.math.BigDecimal showNum) {
		this.showNum = showNum;
	}
	public java.math.BigDecimal getResType(){
        return this.resType;
     }
     public void setResType(java.math.BigDecimal resType){
        this.resType = resType;
     }    
    public java.math.BigDecimal getBoxId(){
       return this.boxId;
    }
    public void setBoxId(java.math.BigDecimal boxId){
       this.boxId = boxId;
    }    
    public java.math.BigDecimal getPanelId(){
       return this.panelId;
    }
    public void setPanelId(java.math.BigDecimal panelId){
       this.panelId = panelId;
    }    
    public String getBoxTitle(){
       return this.boxTitle;
    }
    public void setBoxTitle(String boxTitle){
       this.boxTitle = boxTitle;
    }    
    public String getBoxDesc(){
       return this.boxDesc;
    }
    public void setBoxDesc(String boxDesc){
       this.boxDesc = boxDesc;
    }    
    public java.math.BigDecimal getBoxType(){
       return this.boxType;
    }
    public void setBoxType(java.math.BigDecimal boxType){
       this.boxType = boxType;
    }    
    public java.math.BigDecimal getShowNo(){
       return this.showNo;
    }
    public void setShowNo(java.math.BigDecimal showNo){
       this.showNo = showNo;
    }    
    public java.math.BigDecimal getPanelId2(){
       return this.panelId2;
    }
    public void setPanelId2(java.math.BigDecimal panelId2){
       this.panelId2 = panelId2;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"boxId\":").append(toJsonNew(this.getBoxId())).append(",");
	jsN.append("\"panelId\":").append(toJsonNew(this.getPanelId())).append(",");
	jsN.append("\"boxTitle\":").append(toJsonNew(this.getBoxTitle())).append(",");
	jsN.append("\"boxDesc\":").append(toJsonNew(this.getBoxDesc())).append(",");
	jsN.append("\"boxType\":").append(toJsonNew(this.getBoxType())).append(",");
	jsN.append("\"showNo\":").append(toJsonNew(this.getShowNo())).append(",");
	jsN.append("\"showNum\":").append(toJsonNew(this.getShowNum())).append(",");
	jsN.append("\"panelId2\":").append(toJsonNew(this.getPanelId2())).append(",");
	jsN.append("\"boxClass\":").append(toJsonNew(this.getBoxClass())).append(",");
	
	jsN.append("\"resType\":").append(toJsonNew(this.getResType()));
	return jsN.toString();
    }
    public String toJsonString2(int idx){
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"id\":\"box").append(this.getBoxId()).append("\",");
    	jsN.append("\"title\":").append(toJsonNew(this.getBoxTitle())).append(",");
    	jsN.append("\"type\":").append(toJsonNew(this.getBoxType())).append(",");
    	//jsN.append("\"showNo\":").append(toJsonNew(this.getShowNo())).append(",");    	
    	jsN.append("\"dispPreLine\":").append(toJsonNew(this.getShowNum())).append(",");
    	jsN.append("\"moreUrl\":").append(toJsonNew(this.getBoxDesc())).append(",");
    	jsN.append("\"more\":").append(toJsonNew(this.getPanelId2()));
    	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<boxId>").append(toXmlValue(this.getBoxId())).append("</boxId>");
	xmL.append("<panelId>").append(toXmlValue(this.getPanelId())).append("</panelId>");
	xmL.append("<boxTitle>").append(toXmlValue(this.getBoxTitle())).append("</boxTitle>");
	xmL.append("<boxDesc>").append(toXmlValue(this.getBoxDesc())).append("</boxDesc>");
	xmL.append("<boxType>").append(toXmlValue(this.getBoxType())).append("</boxType>");
	xmL.append("<showNo>").append(toXmlValue(this.getShowNo())).append("</showNo>");
	xmL.append("<panelId2>").append(toXmlValue(this.getPanelId2())).append("</panelId2>");
	xmL.append("<boxClass>").append(toXmlValue(this.getBoxClass())).append("</boxClass>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
