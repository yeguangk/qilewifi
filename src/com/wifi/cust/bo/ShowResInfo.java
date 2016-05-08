package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class ShowResInfo extends BaseBo {
    private java.math.BigDecimal resId;
    private java.math.BigDecimal resType;
    private String resTitle;
    private String resPic;
    private String resUrl;
    private java.math.BigDecimal typeId;
    private String regionId;
    private java.math.BigDecimal checkStatus;
    private String checkMan;
    private java.util.Date checkDate;
    private String publishMan;
    private java.util.Date publishDate;
    private java.util.Date createDate;
    private String createMan;
    private String typeName;
    private java.math.BigDecimal showNo;
    private java.math.BigDecimal pdtlId;
    
    public java.math.BigDecimal getShowNo() {
		return showNo;
	}
	public void setShowNo(java.math.BigDecimal showNo) {
		this.showNo = showNo;
	}
	public java.math.BigDecimal getPdtlId() {
		return pdtlId;
	}
	public void setPdtlId(java.math.BigDecimal pdtlId) {
		this.pdtlId = pdtlId;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public java.math.BigDecimal getResType(){
       return this.resType;
    }
    public void setResType(java.math.BigDecimal resType){
       this.resType = resType;
    }    
    public String getResTitle(){
       return this.resTitle;
    }
    public void setResTitle(String resTitle){
       this.resTitle = resTitle;
    }    
    public String getResPic(){
       return this.resPic;
    }
    public void setResPic(String resPic){
       this.resPic = resPic;
    }    
    public String getResUrl(){
       return this.resUrl;
    }
    public void setResUrl(String resUrl){
       this.resUrl = resUrl;
    }    
    public java.math.BigDecimal getTypeId(){
       return this.typeId;
    }
    public void setTypeId(java.math.BigDecimal typeId){
       this.typeId = typeId;
    }    
    public String getRegionId(){
       return this.regionId;
    }
    public void setRegionId(String regionId){
       this.regionId = regionId;
    }    
    public java.math.BigDecimal getCheckStatus(){
       return this.checkStatus;
    }
    public void setCheckStatus(java.math.BigDecimal checkStatus){
       this.checkStatus = checkStatus;
    }    
    public String getCheckMan(){
       return this.checkMan;
    }
    public void setCheckMan(String checkMan){
       this.checkMan = checkMan;
    }    
    public java.util.Date getCheckDate(){
       return this.checkDate;
    }
    public void setCheckDate(java.util.Date checkDate){
       this.checkDate = checkDate;
    }    
    public String getPublishMan(){
       return this.publishMan;
    }
    public void setPublishMan(String publishMan){
       this.publishMan = publishMan;
    }    
    public java.util.Date getPublishDate(){
       return this.publishDate;
    }
    public void setPublishDate(java.util.Date publishDate){
       this.publishDate = publishDate;
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
	////"id":"1","name":"苹果iPhone6" ,"name2":"￥5499","type":3,	"image": "/res/adpic/phones/1.jpg", "href": "","param1":"","param2":2
	jsN.append("\"id\":").append(toJsonNew(this.getPdtlId())).append(",");
	jsN.append("\"name\":").append(toJsonNew(this.getResTitle())).append(",");
	jsN.append("\"type\":").append(toJsonNew(this.getTypeId())).append(",");
	jsN.append("\"image\":").append(toJsonNew(this.getResPic())).append(",");
	jsN.append("\"href\":").append(toJsonNew(this.getResUrl()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<resType>").append(toXmlValue(this.getResType())).append("</resType>");
	xmL.append("<resTitle>").append(toXmlValue(this.getResTitle())).append("</resTitle>");
	xmL.append("<resPic>").append(toXmlValue(this.getResPic())).append("</resPic>");
	xmL.append("<resUrl>").append(toXmlValue(this.getResUrl())).append("</resUrl>");
	xmL.append("<typeId>").append(toXmlValue(this.getTypeId())).append("</typeId>");
	xmL.append("<regionId>").append(toXmlValue(this.getRegionId())).append("</regionId>");
	xmL.append("<checkStatus>").append(toXmlValue(this.getCheckStatus())).append("</checkStatus>");
	xmL.append("<checkMan>").append(toXmlValue(this.getCheckMan())).append("</checkMan>");
	xmL.append("<checkDate>").append(toXmlValue(this.getCheckDate())).append("</checkDate>");
	xmL.append("<publishMan>").append(toXmlValue(this.getPublishMan())).append("</publishMan>");
	xmL.append("<publishDate>").append(toXmlValue(this.getPublishDate())).append("</publishDate>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
