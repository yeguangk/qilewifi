package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class PanelGroupDtl extends BaseBo {
    private java.math.BigDecimal dtlId;
    private java.math.BigDecimal panelsId;
    private java.math.BigDecimal panelId;
    private java.math.BigDecimal showNo;

    private java.math.BigDecimal screenId;
    private String title;
    private String image;
    
    public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public java.math.BigDecimal getScreenId() {
		return screenId;
	}
	public void setScreenId(java.math.BigDecimal screenId) {
		this.screenId = screenId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public java.math.BigDecimal getDtlId(){
       return this.dtlId;
    }
    public void setDtlId(java.math.BigDecimal dtlId){
       this.dtlId = dtlId;
    }    
    public java.math.BigDecimal getPanelsId(){
       return this.panelsId;
    }
    public void setPanelsId(java.math.BigDecimal panelsId){
       this.panelsId = panelsId;
    }    
    public java.math.BigDecimal getPanelId(){
       return this.panelId;
    }
    public void setPanelId(java.math.BigDecimal panelId){
       this.panelId = panelId;
    }    
    public java.math.BigDecimal getShowNo(){
       return this.showNo;
    }
    public void setShowNo(java.math.BigDecimal showNo){
       this.showNo = showNo;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"dtlId\":").append(toJsonNew(this.getDtlId())).append(",");
	jsN.append("\"panelsId\":").append(toJsonNew(this.getPanelsId())).append(",");
	jsN.append("\"screenId\":").append(toJsonNew(this.getScreenId())).append(",");
	jsN.append("\"title\":").append(toJsonNew(this.getTitle())).append(",");
	jsN.append("\"panelId\":").append(toJsonNew(this.getPanelId())).append(",");
	jsN.append("\"showNo\":").append(toJsonNew(this.getShowNo()));
	return jsN.toString();
    }
    public String toJsonString2(){//"title":"首页","image":"/url/img1.png","show":"1"
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"screenId\":").append(toJsonNew(this.getScreenId())).append(",");
    	jsN.append("\"title\":").append(toJsonNew(this.getTitle())).append(",");
    	jsN.append("\"image\":").append(toJsonNew(this.getImage())).append(",");
    	jsN.append("\"show\":").append(toJsonNew(this.getShowNo()));
    	return jsN.toString();
        }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<dtlId>").append(toXmlValue(this.getDtlId())).append("</dtlId>");
	xmL.append("<panelsId>").append(toXmlValue(this.getPanelsId())).append("</panelsId>");
	xmL.append("<panelId>").append(toXmlValue(this.getPanelId())).append("</panelId>");
	xmL.append("<showNo>").append(toXmlValue(this.getShowNo())).append("</showNo>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
