package com.wifi.column.svr;

import com.wifi.column.bo.ColumnInfo;
import com.wifi.column.bo.ColumnResList;
import com.wifi.res.bo.ResType;

import java.math.BigDecimal;
import java.util.List;

public interface ColumnInfoSvr
{
  public List getSubNode(BigDecimal parentId)throws Exception;
  public void delete(List<ColumnInfo> subList)throws Exception;
  public void save(ColumnInfo colInfo,List<ColumnInfo> subList) throws Exception;
  public void deleteClsRes(List<ColumnResList> colResList) throws Exception;
  public List qryClsRes(BigDecimal resId) throws Exception;
  public void save(List<ColumnResList> colResList)throws Exception;
  
  /**
   * 根据当前用户的custId查询栏目的ID和名称
   * @param custId
   * @return
   * @throws Exception
   */
  public List qryColumnIdAndNameByCustId(String custId)throws Exception;
}