package com.wifi.res.bo;
import org.frame.db.bo.BaseBo;
public class PanelBoxItem extends BaseBo {
    private java.math.BigDecimal pdtlId;
    private java.math.BigDecimal boxId;
    private java.math.BigDecimal columnId;
    private java.math.BigDecimal showNo;
    private String columnName;
    
    public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public java.math.BigDecimal getPdtlId(){
       return this.pdtlId;
    }
    public void setPdtlId(java.math.BigDecimal pdtlId){
       this.pdtlId = pdtlId;
    }    
    public java.math.BigDecimal getBoxId(){
       return this.boxId;
    }
    public void setBoxId(java.math.BigDecimal boxId){
       this.boxId = boxId;
    }    
    public java.math.BigDecimal getColumnId(){
       return this.columnId;
    }
    public void setColumnId(java.math.BigDecimal columnId){
       this.columnId = columnId;
    }    
    public java.math.BigDecimal getShowNo(){
       return this.showNo;
    }
    public void setShowNo(java.math.BigDecimal showNo){
       this.showNo = showNo;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"pdtlId\":").append(toJsonNew(this.getPdtlId())).append(",");
	jsN.append("\"boxId\":").append(toJsonNew(this.getBoxId())).append(",");
	jsN.append("\"columnId\":").append(toJsonNew(this.getColumnId())).append(",");
	jsN.append("\"columnName\":").append(toJsonNew(this.getColumnName())).append(",");
	jsN.append("\"showNo\":").append(toJsonNew(this.getShowNo()));
	return jsN.toString();
    }
    public String toJsonString2(){
    	StringBuilder jsN=new StringBuilder();
    	jsN.append("\"id\":").append(toJsonNew(this.getPdtlId())).append(",");
    	jsN.append("\"title\":").append(toJsonNew(this.getColumnName())).append(",");
    	jsN.append("\"showNo\":").append(toJsonNew(this.getShowNo()));
    	return jsN.toString();
        }
    //"id":"1","name":"苹果iPhone6" ,"name2":"￥5499","type":3,	"image": "/res/adpic/phones/1.jpg", "href": "","param1":"","param2":2
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<pdtlId>").append(toXmlValue(this.getPdtlId())).append("</pdtlId>");
	xmL.append("<boxId>").append(toXmlValue(this.getBoxId())).append("</boxId>");
	xmL.append("<columnId>").append(toXmlValue(this.getColumnId())).append("</columnId>");
	xmL.append("<showNo>").append(toXmlValue(this.getShowNo())).append("</showNo>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
