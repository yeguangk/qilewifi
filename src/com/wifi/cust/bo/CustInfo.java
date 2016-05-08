package com.wifi.cust.bo;
import org.frame.db.bo.BaseBo;
public class CustInfo extends BaseBo {
    private java.math.BigDecimal custId;
    private java.math.BigDecimal custType;
    private String name;
    private String jc;
    private String phone;
    private String fax;
    private String address;
    private String linkMan;
    private String accNo;
    private String pwd;
    public java.math.BigDecimal getCustId(){
       return this.custId;
    }
    public void setCustId(java.math.BigDecimal custId){
       this.custId = custId;
    }    
    public java.math.BigDecimal getCustType(){
       return this.custType;
    }
    public void setCustType(java.math.BigDecimal custType){
       this.custType = custType;
    }    
    public String getName(){
       return this.name;
    }
    public void setName(String name){
       this.name = name;
    }    
    public String getJc(){
       return this.jc;
    }
    public void setJc(String jc){
       this.jc = jc;
    }    
    public String getPhone(){
       return this.phone;
    }
    public void setPhone(String phone){
       this.phone = phone;
    }    
    public String getFax(){
       return this.fax;
    }
    public void setFax(String fax){
       this.fax = fax;
    }    
    public String getAddress(){
       return this.address;
    }
    public void setAddress(String address){
       this.address = address;
    }    
    public String getLinkMan(){
       return this.linkMan;
    }
    public void setLinkMan(String linkMan){
       this.linkMan = linkMan;
    }    
    public String getAccNo(){
       return this.accNo;
    }
    public void setAccNo(String accNo){
       this.accNo = accNo;
    }    
    public String getPwd(){
       return this.pwd;
    }
    public void setPwd(String pwd){
       this.pwd = pwd;
    }    
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	jsN.append("\"custId\":").append(toJsonNew(this.getCustId())).append(",");
	jsN.append("\"custType\":").append(toJsonNew(this.getCustType())).append(",");
	jsN.append("\"name\":").append(toJsonNew(this.getName())).append(",");
	jsN.append("\"jc\":").append(toJsonNew(this.getJc())).append(",");
	jsN.append("\"phone\":").append(toJsonNew(this.getPhone())).append(",");
	jsN.append("\"fax\":").append(toJsonNew(this.getFax())).append(",");
	jsN.append("\"address\":").append(toJsonNew(this.getAddress())).append(",");
	jsN.append("\"linkMan\":").append(toJsonNew(this.getLinkMan())).append(",");
	jsN.append("\"accNo\":").append(toJsonNew(this.getAccNo())).append(",");
	jsN.append("\"pwd\":").append(toJsonNew(this.getPwd()));
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	xmL.append("<custId>").append(toXmlValue(this.getCustId())).append("</custId>");
	xmL.append("<custType>").append(toXmlValue(this.getCustType())).append("</custType>");
	xmL.append("<name>").append(toXmlValue(this.getName())).append("</name>");
	xmL.append("<jc>").append(toXmlValue(this.getJc())).append("</jc>");
	xmL.append("<phone>").append(toXmlValue(this.getPhone())).append("</phone>");
	xmL.append("<fax>").append(toXmlValue(this.getFax())).append("</fax>");
	xmL.append("<address>").append(toXmlValue(this.getAddress())).append("</address>");
	xmL.append("<linkMan>").append(toXmlValue(this.getLinkMan())).append("</linkMan>");
	xmL.append("<accNo>").append(toXmlValue(this.getAccNo())).append("</accNo>");
	xmL.append("<pwd>").append(toXmlValue(this.getPwd())).append("</pwd>");
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
