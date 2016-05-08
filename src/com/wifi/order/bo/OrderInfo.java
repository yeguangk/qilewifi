package com.wifi.order.bo;

import java.util.Date;

import org.frame.db.bo.BaseBo;

public class OrderInfo extends BaseBo {
	private java.math.BigDecimal orderId;
	private String orderCode;
	private java.math.BigDecimal resId;
	private java.math.BigDecimal userId;
	private java.math.BigDecimal amount;
	private Date orderDate;
	private Date expDate;

	public String toJsonString() {
		StringBuilder jsN = new StringBuilder();
		jsN.append("\"orderId\":").append(toJsonNew(this.getOrderId()))
				.append(",");
		jsN.append("\"orderCode\":").append(toJsonNew(this.getOrderCode()))
				.append(",");

		jsN.append("\"resId\":").append(toJsonNew(this.getResId()))
				.append(",");
		jsN.append("\"userId\":").append(toJsonNew(this.getUserId()))
				.append(",");
		jsN.append("\"amount\":").append(toJsonNew(this.getAmount()))
				.append(",");
		jsN.append("\"orderDate\":").append(toJsonNew(this.getOrderDate()))
				.append(",");
		jsN.append("\"expDate\":").append(toJsonNew(this.getExpDate()));

		return jsN.toString();
	}

	public String toXmlString() {
		StringBuilder xmL = new StringBuilder();
		xmL.append("<orderId>").append(toXmlValue(this.getOrderId()))
				.append("</orderId>");
		xmL.append("<orderCode>").append(toXmlValue(this.getOrderCode()))
				.append("</orderCode>");

		xmL.append("<resId>").append(toXmlValue(this.getResId()))
				.append("</resId>");
		xmL.append("<userId>").append(toXmlValue(this.getUserId()))
				.append("</userId>");
		xmL.append("<amount>").append(toXmlValue(this.getAmount()))
				.append("</amount>");
		xmL.append("<orderDate>").append(toXmlValue(this.getOrderDate()))
				.append("</orderDate>");
		xmL.append("<expDate>").append(toXmlValue(this.getExpDate()))
				.append("</expDate>");
		return xmL.toString();
	}
	
	public java.math.BigDecimal getOrderId() {
		return orderId;
	}

	public void setOrderId(java.math.BigDecimal orderId) {
		this.orderId = orderId;
	}

	public String getOrderCode() {
		return orderCode;
	}

	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}

	public java.math.BigDecimal getResId() {
		return resId;
	}

	public void setResId(java.math.BigDecimal resId) {
		this.resId = resId;
	}

	public java.math.BigDecimal getUserId() {
		return userId;
	}

	public void setUserId(java.math.BigDecimal userId) {
		this.userId = userId;
	}

	public java.math.BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(java.math.BigDecimal amount) {
		this.amount = amount;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getExpDate() {
		return expDate;
	}

	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}

	public String getChangeInfo(BaseBo arg0) {
		// TODO Auto-generated method stub
		return null;
	}
}
