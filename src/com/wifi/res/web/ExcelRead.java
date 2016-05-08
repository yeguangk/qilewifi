package com.wifi.res.web;

import java.io.FileInputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;

public class ExcelRead {
	private HSSFWorkbook workbook = null;
	private HSSFSheet sheet = null;
	private int curRow=0;
	private HSSFRow rowObj =null;
	public ExcelRead(String filePath, int idx) throws Exception {
		workbook = new HSSFWorkbook(new FileInputStream(filePath));
		sheet = workbook.getSheetAt(idx);
	}

	public ExcelRead(String filePath) throws Exception {
		workbook = new HSSFWorkbook(new FileInputStream(filePath));
		sheet = workbook.getSheetAt(0);
	}
	
	public ExcelRead(InputStream in) throws Exception {
		workbook = new HSSFWorkbook(in);
		sheet = workbook.getSheetAt(0);
	}

	public void changeHSSFSheet(int idx) {
		sheet = workbook.getSheetAt(idx);
	}
	private void changeRow(int row){
		if(this.curRow!=row){
			this.rowObj=sheet.getRow(row);
			this.curRow=row;
		}
	}
	public String getData(int row,int col){
		changeRow(row);
		if(this.rowObj==null){
			return "";
		}
		HSSFCell cell=this.rowObj.getCell(col);
		if(cell==null){
			return ""; 
		}
		
		String cellValue = "";
		System.out.println("col====="+col+";type===="+cell.getCellType());
		
		switch(cell.getCellType()){
		case Cell.CELL_TYPE_STRING:
            cellValue = cell.getRichStringCellValue().getString();
            break;
        case Cell.CELL_TYPE_NUMERIC:
            if (DateUtil.isCellDateFormatted(cell)) {
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
                cellValue = formatter.format(cell.getDateCellValue());
            } else {
            	double doubleVal = cell.getNumericCellValue();
            	long longVal = Math.round(cell.getNumericCellValue());
            	if((longVal + ".0").equals(String.valueOf(doubleVal))) {
            		cellValue=String.valueOf(longVal);
            	}else{
            		cellValue=String.valueOf(doubleVal);
            	}
            }
            break;
        case Cell.CELL_TYPE_BOOLEAN:
            cellValue = String.valueOf(cell.getBooleanCellValue());
            break;
        case Cell.CELL_TYPE_FORMULA:
            cellValue = cell.getCellFormula();
            break;
        default:
        	cellValue="";
		}
		cellValue=cellValue==null?"":cellValue;
		return cellValue;
	}
	
}
