package com.wifi.region.bo;
import org.frame.db.bo.BaseBo;
public class RegionInfo extends BaseBo {
    private String regionNo;
    private String regionName;
    private String regionDesc;
    private String parentNo;
    private java.util.Date createDate;
    private String createMan;
    public String getRegionNo(){
       return this.regionNo;
    }
    public void setRegionNo(String regionNo){
       this.regionNo = regionNo;
    }    
    public String getRegionName(){
       return this.regionName;
    }
    public void setRegionName(String regionName){
       this.regionName = regionName;
    }    
    public String getRegionDesc(){
       return this.regionDesc;
    }
    public void setRegionDesc(String regionDesc){
       this.regionDesc = regionDesc;
    }    
    public String getParentNo(){
       return this.parentNo;
    }
    public void setParentNo(String parentNo){
       this.parentNo = parentNo;
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
	jsN.append("\"regionNo\":").append(toJsonNew(this.getRegionNo())).append(",");
	jsN.append("\"regionName\":").append(toJsonNew(this.getRegionName())).append(",");
	jsN.append("\"regionDesc\":").append(toJsonNew(this.getRegionDesc())).append(",");
	jsN.append("\"parentNo\":").append(toJsonNew(this.getParentNo())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toTreeNode() {
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"id\":").append(toJsonNew(this.getRegionNo())).append(",");
    	jsN.append("\"text\":").append(toJsonNew(this.getRegionName())).append(",");
    	jsN.append("\"regionDesc\":").append(toJsonNew(this.getRegionDesc())).append(",");
    	jsN.append("\"parentNo\":").append(toJsonNew(this.getParentNo())).append(",");
    	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
    	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
    	return jsN.toString();
    }
    public String chkTreeNode() {
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"id\":").append(toJsonNew(this.getRegionNo())).append(",");
    	jsN.append("\"text\":").append(toJsonNew(this.getRegionName())).append(",");
    	jsN.append("\"regionDesc\":").append(toJsonNew(this.getRegionDesc())).append(",");
    	jsN.append("\"parentNo\":").append(toJsonNew(this.getParentNo())).append(",");
    	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
    	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan())).append(",");
    	jsN.append("\"checked\":false");
    	return jsN.toString();
    }
    
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<regionNo>").append(toXmlValue(this.getRegionNo())).append("</regionNo>");
	xmL.append("<regionName>").append(toXmlValue(this.getRegionName())).append("</regionName>");
	xmL.append("<regionDesc>").append(toXmlValue(this.getRegionDesc())).append("</regionDesc>");
	xmL.append("<parentNo>").append(toXmlValue(this.getParentNo())).append("</parentNo>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
