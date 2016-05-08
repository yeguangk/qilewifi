package com.mz.sys.bo;
import org.frame.db.bo.BaseBo;
public class DdValue extends BaseBo {
    private java.math.BigDecimal ddId;
    private String ddCode;
    private String ddValue;
    private String ddText;
    private java.math.BigDecimal ddSort;
    
    public java.math.BigDecimal getDdId(){
       return this.ddId;
    }
    public void setDdId(java.math.BigDecimal ddId){
       this.ddId = ddId;
    }    
    public String getDdCode(){
       return this.ddCode;
    }
    public void setDdCode(String ddCode){
       this.ddCode = ddCode;
    }    
    public String getDdValue(){
       return this.ddValue;
    }
    public void setDdValue(String ddValue){
       this.ddValue = ddValue;
    }    
    public String getDdText(){
       return this.ddText;
    }
    public void setDdText(String ddText){
       this.ddText = ddText;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"ddId\":").append(toJsonNew(this.getDdId())).append(",");
	jsN.append("\"ddCode\":").append(toJsonNew(this.getDdCode())).append(",");
	jsN.append("\"ddValue\":").append(toJsonNew(this.getDdValue())).append(",");
	jsN.append("\"ddSort\":").append(toJsonNew(this.getDdSort())).append(",");
	jsN.append("\"ddText\":").append(toJsonNew(this.getDdText()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<ddId>").append(toXmlValue(this.getDdId())).append("</ddId>");
	xmL.append("<ddCode>").append(toXmlValue(this.getDdCode())).append("</ddCode>");
	xmL.append("<ddValue>").append(toXmlValue(this.getDdValue())).append("</ddValue>");
	xmL.append("<ddText>").append(toXmlValue(this.getDdText())).append("</ddText>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
	public java.math.BigDecimal getDdSort() {
		return ddSort;
	}
	public void setDdSort(java.math.BigDecimal ddSort) {
		this.ddSort = ddSort;
	}
}
