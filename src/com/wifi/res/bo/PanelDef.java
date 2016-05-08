package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class PanelDef extends BaseBo {
    private java.math.BigDecimal panelId;
    private java.math.BigDecimal screenId;
    private String title;
    private String panelDesc;
    private String imageUrl;
    private java.util.Date createDate;
    private String createMan;
    
    private java.math.BigDecimal displayClass;
    public java.math.BigDecimal getDisplayClass() {
		return displayClass;
	}
	public void setDisplayClass(java.math.BigDecimal displayClass) {
		this.displayClass = displayClass;
	}
	public java.math.BigDecimal getPanelId(){
       return this.panelId;
    }
    public void setPanelId(java.math.BigDecimal panelId){
       this.panelId = panelId;
    }    
    public java.math.BigDecimal getScreenId(){
       return this.screenId;
    }
    public void setScreenId(java.math.BigDecimal screenId){
       this.screenId = screenId;
    }    
    public String getTitle(){
       return this.title;
    }
    public void setTitle(String title){
       this.title = title;
    }    
    public String getPanelDesc(){
       return this.panelDesc;
    }
    public void setPanelDesc(String panelDesc){
       this.panelDesc = panelDesc;
    }    
    public String getImageUrl(){
       return this.imageUrl;
    }
    public void setImageUrl(String imageUrl){
       this.imageUrl = imageUrl;
    }    
    public java.util.Date getCreateDate(){
       return this.createDate;
    }
    public void setCreateDate(java.util.Date createDate){
       this.createDate = createDate;
    }    
    public String getCreateMan(){
       return this.createMan;
    }
    public void setCreateMan(String createMan){
       this.createMan = createMan;
    }    
    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"panelId\":").append(toJsonNew(this.getPanelId())).append(",");
	jsN.append("\"screenId\":").append(toJsonNew(this.getScreenId())).append(",");
	jsN.append("\"title\":").append(toJsonNew(this.getTitle())).append(",");
	jsN.append("\"panelDesc\":").append(toJsonNew(this.getPanelDesc())).append(",");
	jsN.append("\"imageUrl\":").append(toJsonNew(this.getImageUrl())).append(",");
	jsN.append("\"displayClass\":").append(toJsonNew(this.getDisplayClass())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<panelId>").append(toXmlValue(this.getPanelId())).append("</panelId>");
	xmL.append("<screenId>").append(toXmlValue(this.getScreenId())).append("</screenId>");
	xmL.append("<title>").append(toXmlValue(this.getTitle())).append("</title>");
	xmL.append("<panelDesc>").append(toXmlValue(this.getPanelDesc())).append("</panelDesc>");
	xmL.append("<imageUrl>").append(toXmlValue(this.getImageUrl())).append("</imageUrl>");
	xmL.append("<displayClass>").append(toXmlValue(this.getDisplayClass())).append("</displayClass>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
