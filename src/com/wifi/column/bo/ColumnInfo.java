package com.wifi.column.bo;
import org.frame.db.bo.BaseBo;
public class ColumnInfo extends BaseBo {
    private java.math.BigDecimal columnId;
    private java.math.BigDecimal parentColumnId;
    private java.math.BigDecimal custId;
    private String columnName;
    private java.math.BigDecimal columnType;
    private java.math.BigDecimal defaultFlag;
       
    public java.math.BigDecimal getColumnId() {
		return columnId;
	}
	public void setColumnId(java.math.BigDecimal columnId) {
		this.columnId = columnId;
	}
	public java.math.BigDecimal getParentColumnId() {
		return parentColumnId;
	}
	public void setParentColumnId(java.math.BigDecimal parentColumnId) {
		this.parentColumnId = parentColumnId;
	}
	public java.math.BigDecimal getCustId() {
		return custId;
	}
	public void setCustId(java.math.BigDecimal custId) {
		this.custId = custId;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public java.math.BigDecimal getColumnType() {
		return columnType;
	}
	public void setColumnType(java.math.BigDecimal columnType) {
		this.columnType = columnType;
	}
	public java.math.BigDecimal getDefaultFlag(){
       return this.defaultFlag;
    }
    public void setDefaultFlag(java.math.BigDecimal defaultFlag){
       this.defaultFlag = defaultFlag;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"columnId\":").append(toJsonNew(this.getColumnId())).append(",");
	jsN.append("\"parentColumnId\":").append(toJsonNew(this.getParentColumnId())).append(",");
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"columnName\":").append(toJsonNew(this.getColumnName())).append(",");
	jsN.append("\"columnType\":").append(toJsonNew(this.getColumnType())).append(",");
	jsN.append("\"defaultFlag\":").append(toJsonNew(this.getDefaultFlag()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<defaultFlag>").append(toXmlValue(this.getDefaultFlag())).append("</defaultFlag>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
    public String toTreeNode() {
        StringBuilder jsN=new StringBuilder();
    	jsN.append("\"id\":").append(toJsonNew(this.getColumnId())).append(",");
    	jsN.append("\"text\":").append(toJsonNew(this.getColumnName())).append(",");
    	jsN.append("\"parentColumnId\":").append(toJsonNew(this.getParentColumnId())).append(",");
    	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
    	jsN.append("\"columnType\":").append(toJsonNew(this.getColumnType())).append(",");
    	jsN.append("\"defaultFlag\":").append(toJsonNew(this.getDefaultFlag()));
    	return jsN.toString();
      }
}
