package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class ResType extends BaseBo {
    private java.math.BigDecimal typeId;
    private String typeName;
    private String typeDesc;
    private java.math.BigDecimal parentId;
    private java.math.BigDecimal resType;
    private java.util.Date createDate;
    private String createMan;
    public java.math.BigDecimal getTypeId(){
       return this.typeId;
    }
    public void setTypeId(java.math.BigDecimal typeId){
       this.typeId = typeId;
    }    
    public String getTypeName(){
       return this.typeName;
    }
    public void setTypeName(String typeName){
       this.typeName = typeName;
    }    
    public String getTypeDesc(){
       return this.typeDesc;
    }
    public void setTypeDesc(String typeDesc){
       this.typeDesc = typeDesc;
    }    
    public java.math.BigDecimal getParentId(){
       return this.parentId;
    }
    public void setParentId(java.math.BigDecimal parentId){
       this.parentId = parentId;
    }    
    public java.math.BigDecimal getResType(){
       return this.resType;
    }
    public void setResType(java.math.BigDecimal resType){
       this.resType = resType;
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
	jsN.append("\"typeId\":").append(toJsonNew(this.getTypeId())).append(",");
	jsN.append("\"typeName\":").append(toJsonNew(this.getTypeName())).append(",");
	jsN.append("\"typeDesc\":").append(toJsonNew(this.getTypeDesc())).append(",");
	jsN.append("\"parentId\":").append(toJsonNew(this.getParentId())).append(",");
	jsN.append("\"resType\":").append(toJsonNew(this.getResType())).append(",");
	jsN.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
	jsN.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<typeId>").append(toXmlValue(this.getTypeId())).append("</typeId>");
	xmL.append("<typeName>").append(toXmlValue(this.getTypeName())).append("</typeName>");
	xmL.append("<typeDesc>").append(toXmlValue(this.getTypeDesc())).append("</typeDesc>");
	xmL.append("<parentId>").append(toXmlValue(this.getParentId())).append("</parentId>");
	xmL.append("<resType>").append(toXmlValue(this.getResType())).append("</resType>");
	xmL.append("<createDate>").append(toXmlValue(this.getCreateDate())).append("</createDate>");
	xmL.append("<createMan>").append(toXmlValue(this.getCreateMan())).append("</createMan>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
    
    public String toTreeNode() {
        StringBuffer rtn = new StringBuffer();
        rtn.append("\"text\":").append(toJsonNew(getTypeName())).append(",");
        rtn.append("\"id\":").append(toJsonNew(getTypeId())).append(",");

        rtn.append("\"parentId\":").append(toJsonNew(getParentId())).append(",");
        rtn.append("\"typeId\":").append(toJsonNew(this.getTypeId())).append(",");
        rtn.append("\"typeName\":").append(toJsonNew(this.getTypeName())).append(",");
        rtn.append("\"typeDesc\":").append(toJsonNew(this.getTypeDesc())).append(",");
        rtn.append("\"parentId\":").append(toJsonNew(this.getParentId())).append(",");
        rtn.append("\"resType\":").append(toJsonNew(this.getResType())).append(",");
        rtn.append("\"createDate\":").append(toJsonNew(this.getCreateDate())).append(",");
        rtn.append("\"createMan\":").append(toJsonNew(this.getCreateMan()));
        return rtn.toString();
      }
}
