package tool;

import org.frame.svr.ServiceFactory;

import com.wifi.intf.svr.JsonSvr;


public class GenBo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        org.frame.tool.db.GenBo.genBoCm();
        
//        JsonSvr svr;
//		try {
//			org.frame.db.bo.AttrColInit.init();
//			svr = (JsonSvr) ServiceFactory.getService(JsonSvr.class);
////	        svr.updatefbRes("D:\\");
//	        svr.panel("D:\\", "1");
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}
	/**
	  public static void main(String[] args ) {
		Calendar cal = Calendar.getInstance();
		System.out.println("今天的日期: " + cal.getTime());
		int day_of_week = cal.get(Calendar.DAY_OF_WEEK) - 2;
		cal.add(Calendar.DATE, - day_of_week);
		System.out.println("本周第一天: " + cal.getTime());
		cal.add(Calendar.DATE, 6);
		System.out.println("本周末: " + cal.getTime());
	  }
	 */
    public static void aa(){
    	
    }
}
