package com.mz.sys.utils;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class SystemDateUtil
{
  public static Date getSystemDate()
    throws Exception
  {
    Date d = new Date();
    SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String tmp = sdf.format(d);

    SimpleDateFormat sdf2 = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    return sdf2.parse(tmp);
  }

  public static String getSysDateTime() throws Exception {
    Date d = new Date();
    SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    return sdf.format(d);
  }
  public static String getSysDate() throws Exception {
    Date d = new Date();
    SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
    return sdf.format(d);
  }
  public static String FormatDateString(Date date) throws Exception {
    if (date == null) return "";
    SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
    return sdf.format(date);
  }
  public static Date StringFormatDate(String dateValues) throws Exception {
    Date date = new Date();
    SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
    return sdf.parse(dateValues);
  }
  public static Date StringFormatDate(String dateValues, String format) throws Exception {
    SimpleDateFormat sdf = getSimpleDateFormat(format);
    return sdf.parse(dateValues);
  }
  public static String FormatDateString(Date date, String format) throws Exception {
    SimpleDateFormat sdf = getSimpleDateFormat(format);
    return sdf.format(date);
  }
  public static Date addDate(Date date, BigDecimal addHoure, String format) throws Exception {
    SimpleDateFormat sdf = getSimpleDateFormat(format);
    String tmp = sdf.format(date);
    SimpleDateFormat sdf2 = new SimpleDateFormat(format);
    Date newDate = sdf2.parse(tmp);
    BigDecimal time = new BigDecimal(newDate.getTime());
    time = time.add(addHoure.multiply(new BigDecimal(3600000)));
    return new Date(time.longValue());
  }
  private static SimpleDateFormat getSimpleDateFormat(String format) {
    SimpleDateFormat sdf = new SimpleDateFormat(format);
    sdf.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));
    return sdf;
  }

  public static Date addDate(BigDecimal addHoure, Date date, String format)
    throws Exception
  {
    SimpleDateFormat sdf = getSimpleDateFormat(format);
    Calendar Cal = Calendar.getInstance();
    Cal.setTime(date);
    String addHoureTmp = addHoure.toString();
    int hour = addHoure.intValue();
    int minute = 0;
    int beginIndex = addHoureTmp.indexOf(".");

    if (beginIndex > -1) {
      String tmp1 = addHoureTmp.substring(beginIndex + 1);
      if (tmp1 != null) {
        String minuteStr = tmp1 + "0";

        minute = (int)(Integer.parseInt(minuteStr) * 0.6D);
        hour = Integer.parseInt(addHoureTmp.substring(0, beginIndex));
      }
    }
    Cal.add(11, hour);
    Cal.add(12, minute);
    String dateValues = sdf.format(Cal.getTime());
    return sdf.parse(dateValues);
  }
  public static String getYear() throws Exception {
    return FormatDateString(getSystemDate(), "yyyy");
  }
  public static String getYear(int val) throws Exception {
    String year = FormatDateString(getSystemDate(), "yyyy");
    BigDecimal yearb = new BigDecimal(year).subtract(BigDecimal.valueOf(val));
    return String.valueOf(yearb.intValue());
  }
}