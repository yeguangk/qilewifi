package com.wifi.column.bo;
import org.frame.db.bo.BaseBo;
public class ColumnResList extends BaseBo {
    private java.math.BigDecimal columnId;
    private java.math.BigDecimal resId;
    private String resTitle;
    
    public String getResTitle() {
		return resTitle;
	}
	public void setResTitle(String resTitle) {
		this.resTitle = resTitle;
	}
	public java.math.BigDecimal getColumnId(){
       return this.columnId;
    }
    public void setColumnId(java.math.BigDecimal columnId){
       this.columnId = columnId;
    }    
    public java.math.BigDecimal getResId(){
       return this.resId;
    }
    public void setResId(java.math.BigDecimal resId){
       this.resId = resId;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"columnId\":").append(toJsonNew(this.getColumnId())).append(",");
	jsN.append("\"resTitle\":").append(toJsonNew(this.getResTitle())).append(",");
	jsN.append("\"resId\":").append(toJsonNew(this.getResId()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<columnId>").append(toXmlValue(this.getColumnId())).append("</columnId>");
	xmL.append("<resId>").append(toXmlValue(this.getResId())).append("</resId>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
