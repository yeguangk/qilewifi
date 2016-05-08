package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResFile extends BaseBo {
    private java.math.BigDecimal fileId;
    private java.math.BigDecimal resId;
    private String fileType;
    private String filePath;
    private String pre;
    private java.util.Date uploadDate;
    
    private java.math.BigDecimal subResId;
    private java.math.BigDecimal seqId;
    private String wbUrl;
    
    public String getWbUrl() {
		return wbUrl;
	}
	public void setWbUrl(String wbUrl) {
		this.wbUrl = wbUrl;
	}
	public java.math.BigDecimal getSubResId() {
		return subResId;
	}
	public void setSubResId(java.math.BigDecimal subResId) {
		this.subResId = subResId;
	}
	public java.math.BigDecimal getSeqId() {
		return seqId;
	}
	public void setSeqId(java.math.BigDecimal seqId) {
		this.seqId = seqId;
	}
	public java.math.BigDecimal getFileId(){
       return this.fileId;
    }
    public void setFileId(java.math.BigDecimal fileId){
       this.fileId = fileId;
    }    
    public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public String getFileType(){
       return this.fileType;
    }
    public void setFileType(String fileType){
       this.fileType = fileType;
    }    
    public String getFilePath(){
       return this.filePath;
    }
    public void setFilePath(String filePath){
       this.filePath = filePath;
    }    
    public String getPre(){
       return this.pre;
    }
    public void setPre(String pre){
       this.pre = pre;
    }    
    public java.util.Date getUploadDate(){
       return this.uploadDate;
    }
    public void setUploadDate(java.util.Date uploadDate){
       this.uploadDate = uploadDate;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"fileId\":").append(toJsonNew(this.getFileId())).append(",");
	jsN.append("\"resId\":").append(toJsonNew(this.getResId())).append(",");
	jsN.append("\"subResId\":").append(toJsonNew(this.getSubResId())).append(",");
	jsN.append("\"seqId\":").append(toJsonNew(this.getSeqId())).append(",");
	jsN.append("\"fileType\":").append(toJsonNew(this.getFileType())).append(",");
	jsN.append("\"filePath\":").append(toJsonNew(this.getFilePath())).append(",");
	jsN.append("\"pre\":").append(toJsonNew(this.getPre())).append(",");
	jsN.append("\"urlInfo\":").append(toJsonNew(pre+filePath)).append(",");
	jsN.append("\"wbUrl\":").append(toJsonNew(this.getWbUrl())).append(",");
	jsN.append("\"uploadDate\":").append(toJsonNew(this.getUploadDate()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<fileId>").append(toXmlValue(this.getFileId())).append("</fileId>");
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	xmL.append("<fileType>").append(toXmlValue(this.getFileType())).append("</fileType>");
	xmL.append("<filePath>").append(toXmlValue(this.getFilePath())).append("</filePath>");
	xmL.append("<pre>").append(toXmlValue(this.getPre())).append("</pre>");
	xmL.append("<uploadDate>").append(toXmlValue(this.getUploadDate())).append("</uploadDate>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
