package com.mz.sys.bo;

import java.math.BigDecimal;
import org.frame.db.bo.BaseBo;

public class SysGenPkValue extends BaseBo
{
  private String seqNo;
  private BigDecimal seqType;
  private String seqName;
  private String tableName;
  private String fieldName;
  private String preValue;
  private BigDecimal valueLen;
  private BigDecimal curValue;
  private BigDecimal cacheValue;
  private String oracleSeq;
  private BigDecimal usedValue;

  public String toXmlString()
  {
    StringBuffer rtn = new StringBuffer();
    rtn.append("<seqNo>").append(xmlValue(getSeqNo()));
    rtn.append("</seqNo>");
    rtn.append("<seqType>").append(getSeqType());
    rtn.append("</seqType>");
    rtn.append("<seqName>").append(xmlValue(getSeqName()));
    rtn.append("</seqName>");
    rtn.append("<tableName>").append(xmlValue(getTableName()));
    rtn.append("</tableName>");
    rtn.append("<fieldName>").append(xmlValue(getFieldName()));
    rtn.append("</fieldName>");
    rtn.append("<preValue>").append(xmlValue(getPreValue()));
    rtn.append("</preValue>");
    rtn.append("<valueLen>").append(getValueLen());
    rtn.append("</valueLen>");
    rtn.append("<curValue>").append(getCurValue());
    rtn.append("</curValue>");
    rtn.append("<cacheValue>").append(getCacheValue());
    rtn.append("</cacheValue>");
    rtn.append("<oracleSeq>").append(xmlValue(getOracleSeq()));
    rtn.append("</oracleSeq>");

    return rtn.toString();
  }
  public String toJsonString() {
    StringBuffer rtn = new StringBuffer();
    rtn.append("\"seqNo\":").append(toJsonNew(getSeqNo())).append(",");
    rtn.append("\"seqType\":").append(toJsonNew(getSeqType())).append(",");
    rtn.append("\"seqName\":").append(toJsonNew(getSeqName())).append(",");
    rtn.append("\"tableName\":").append(toJsonNew(getTableName())).append(",");
    rtn.append("\"fieldName\":").append(toJsonNew(getFieldName())).append(",");
    rtn.append("\"preValue\":").append(toJsonNew(getPreValue())).append(",");
    rtn.append("\"valueLen\":").append(toJsonNew(getValueLen())).append(",");
    rtn.append("\"curValue\":").append(toJsonNew(getCurValue())).append(",");
    rtn.append("\"cacheValue\":").append(toJsonNew(getCacheValue())).append(",");
    rtn.append("\"oracleSeq\":").append(toJsonNew(getOracleSeq()));

    return rtn.toString();
  }

  public BigDecimal getUsedValue()
  {
    return this.usedValue;
  }
  public void setUsedValue(BigDecimal usedValue) {
    this.usedValue = usedValue;
  }
  public void setSeqNo(String value) { this.seqNo = value; } 
  public String getSeqNo() { return this.seqNo; } 
  public void setSeqType(BigDecimal value) { this.seqType = value; } 
  public BigDecimal getSeqType() { return this.seqType; } 
  public void setSeqName(String value) { this.seqName = value; } 
  public String getSeqName() { return this.seqName; } 
  public void setTableName(String value) { this.tableName = value; } 
  public String getTableName() { return this.tableName; } 
  public void setFieldName(String value) { this.fieldName = value; } 
  public String getFieldName() { return this.fieldName; } 
  public void setPreValue(String value) { this.preValue = value; } 
  public String getPreValue() { return this.preValue; } 
  public void setValueLen(BigDecimal value) { this.valueLen = value; } 
  public BigDecimal getValueLen() { return this.valueLen; } 
  public void setCurValue(BigDecimal value) { this.curValue = value; } 
  public BigDecimal getCurValue() { return this.curValue; } 
  public void setCacheValue(BigDecimal value) { this.cacheValue = value; } 
  public BigDecimal getCacheValue() { return this.cacheValue; } 
  public void setOracleSeq(String value) { this.oracleSeq = value; } 
  public String getOracleSeq() { return this.oracleSeq; }

  public String getChangeInfo(BaseBo bo)
  {
    return null;
  }
}