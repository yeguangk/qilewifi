package com.mz.sys.bo;
import org.frame.db.bo.BaseBo;
public class DdCode extends BaseBo {
    private String ddCode;
    private String codeText;
    private java.math.BigDecimal codeSort;
    public java.math.BigDecimal getCodeSort() {
		return codeSort;
	}
	public void setCodeSort(java.math.BigDecimal CodeSort) {
		this.codeSort = codeSort;
	}
    public String getDdCode(){
       return this.ddCode;
    }
    public void setDdCode(String ddCode){
       this.ddCode = ddCode;
    }    
    public String getCodeText(){
       return this.codeText;
    }
    public void setCodeText(String codeText){
       this.codeText = codeText;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"ddCode\":").append(toJsonNew(this.getDdCode())).append(",");
	jsN.append("\"codeSort\":").append(toJsonNew(this.getCodeSort())).append(",");
	jsN.append("\"codeText\":").append(toJsonNew(this.getCodeText()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<ddCode>").append(toXmlValue(this.getDdCode())).append("</ddCode>");
	xmL.append("<codeText>").append(toXmlValue(this.getCodeText())).append("</codeText>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
