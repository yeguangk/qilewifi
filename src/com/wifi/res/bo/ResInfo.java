package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResInfo extends BaseBo {
    private java.math.BigDecimal resId;
    private java.math.BigDecimal resType;
    private String resTitle;
    
    private java.math.BigDecimal checkStatus;
    private String checkMan;
    private java.util.Date checkDate;
    private String publishMan;
    private java.util.Date publishDate;
    private java.util.Date createDate;
    private String createMan;
    
    private java.math.BigDecimal feeType;
    
    private String resDesc;
    private String resCode;
    
    private java.math.BigDecimal fileSize;
	private String author;
	private String outUrl;
	
	/**reserve1~5为保留字段*/
	private String reserve1;
	private String reserve2;
	private String reserve3;
	private String reserve4;
	private String reserve5;
	
	private java.math.BigDecimal price;
	
	public java.math.BigDecimal getPrice() {
		return price;
	}
	public void setPrice(java.math.BigDecimal price) {
		this.price = price;
	}
	public String getReserve1() {
		return reserve1;
	}
	public void setReserve1(String reserve1) {
		this.reserve1 = reserve1;
	}
	public String getReserve2() {
		return reserve2;
	}
	public void setReserve2(String reserve2) {
		this.reserve2 = reserve2;
	}
	public String getReserve3() {
		return reserve3;
	}
	public void setReserve3(String reserve3) {
		this.reserve3 = reserve3;
	}
	public String getReserve4() {
		return reserve4;
	}
	public void setReserve4(String reserve4) {
		this.reserve4 = reserve4;
	}
	public String getReserve5() {
		return reserve5;
	}
	public void setReserve5(String reserve5) {
		this.reserve5 = reserve5;
	}
    public  String getOutUrl() {
		return outUrl;
	}
	public  void setOutUrl(String outUrl) {
		this.outUrl = outUrl;
	}
	public  java.math.BigDecimal getFileSize() {
		return fileSize;
	}
	public  void setFileSize(java.math.BigDecimal fileSize) {
		this.fileSize = fileSize;
	}

    public  String getAuthor() {
		return author;
	}
	public  void setAuthor(String author) {
		this.author = author;
	}
	public java.math.BigDecimal getFeeType() {
		return feeType;
	}
	public void setFeeType(java.math.BigDecimal feeType) {
		this.feeType = feeType;
	}
	public String getResDesc() {
		return resDesc;
	}
	public void setResDesc(String resDesc) {
		this.resDesc = resDesc;
	}
	public String getResCode() {
		return resCode;
	}
	public void setResCode(String resCode) {
		this.resCode = resCode;
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
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"resType\":").append(toJsonNew(this.getResType())).append(",");
	jsN.append("\"resTitle\":").append(toJsonNew(this.getResTitle())).append(",");
	jsN.append("\"checkStatus\":").append(toJsonNew(this.getCheckStatus())).append(",");
	jsN.append("\"checkMan\":").append(toJsonNew(this.getCheckMan())).append(",");
	jsN.append("\"checkDate\":").append(toJsonNew(this.getCheckDate())).append(",");
	jsN.append("\"publishMan\":").append(toJsonNew(this.getPublishMan())).append(",");
	jsN.append("\"publishDate\":").append(toJsonNew(this.getPublishDate())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");

	jsN.append("\"feeType\":").append(toJsonNew(this.getFeeType())).append(",");
	jsN.append("\"price\":").append(toJsonNew(this.getPrice())).append(",");
	jsN.append("\"resDesc\":").append(toJsonNew(this.getResDesc())).append(",");
	jsN.append("\"resCode\":").append(toJsonNew(this.getResCode())).append(",");
	jsN.append("\"fileSize\":").append(toJsonNew(this.getFileSize())).append(",");
	jsN.append("\"author\":").append(toJsonNew(this.getAuthor())).append(",");
	jsN.append("\"outUrl\":").append(toJsonNew(this.getOutUrl())).append(",");
	jsN.append("\"reserve1\":").append(toJsonNew(this.getReserve1())).append(",");
	jsN.append("\"reserve2\":").append(toJsonNew(this.getReserve2())).append(",");
	jsN.append("\"reserve3\":").append(toJsonNew(this.getReserve3())).append(",");
	jsN.append("\"reserve4\":").append(toJsonNew(this.getReserve4())).append(",");
	jsN.append("\"reserve5\":").append(toJsonNew(this.getReserve5())).append(",");
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<resType>").append(toXmlValue(this.getResType())).append("</resType>");
	xmL.append("<resTitle>").append(toXmlValue(this.getResTitle())).append("</resTitle>");
	xmL.append("<checkStatus>").append(toXmlValue(this.getCheckStatus())).append("</checkStatus>");
	xmL.append("<checkMan>").append(toXmlValue(this.getCheckMan())).append("</checkMan>");
	xmL.append("<checkDate>").append(toXmlValue(this.getCheckDate())).append("</checkDate>");
	xmL.append("<feeType>").append(toXmlValue(this.getFeeType())).append("</feeType>");
	xmL.append("<price>").append(toXmlValue(this.getPrice())).append("</price>");
	xmL.append("<resDesc>").append(toXmlValue(this.getResDesc())).append("</resDesc>");
	xmL.append("<resCode>").append(toXmlValue(this.getResCode())).append("</resCode>");
	xmL.append("<publishMan>").append(toXmlValue(this.getPublishMan())).append("</publishMan>");
	xmL.append("<publishDate>").append(toXmlValue(this.getPublishDate())).append("</publishDate>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<fileSize>").append(toXmlValue(this.getFileSize())).append("</fileSize>");
	xmL.append("<author>").append(toXmlValue(this.getAuthor())).append("</author>");
	xmL.append("<outUrl>").append(toXmlValue(this.getOutUrl())).append("</outUrl>");
	xmL.append("<reserve1>").append(toXmlValue(this.getReserve1())).append("</reserve1>");
	xmL.append("<reserve2>").append(toXmlValue(this.getReserve2())).append("</reserve2>");
	xmL.append("<reserve3>").append(toXmlValue(this.getReserve3())).append("</reserve3>");
	xmL.append("<reserve4>").append(toXmlValue(this.getReserve4())).append("</reserve4>");
	xmL.append("<reserve5>").append(toXmlValue(this.getReserve5())).append("</reserve5>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
