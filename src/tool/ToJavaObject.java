package tool;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.List;

import com.alibaba.fastjson.JSONObject;

public class ToJavaObject {
/*
  insert into res_info (RES_TYPE,RES_TITLE,RES_PIC,RES_URL,TYPE_ID,REGION_ID,CHECK_STATUS,CHECK_MAN,CHECK_DATE,PUBLISH_MAN,PUBLISH_DATE,CREATE_DATE,CREATE_MAN,RES_ID)
  values (3,'三星GALAXY Note4 SM-N9106W 4G版','/res/unicom/phone/9.jpg','unicom_phone_detail.html',14,'',NULL,'',NULL,'',NULL,'24-Nov-2014.19:11:05','null',85);  (0 milliseconds)
  insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) values (85,'actionType','','5',NULL); 
 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			//File file = new File("F:\\pjt_src\\wifi\\box.json");
			BufferedReader bf=new BufferedReader(new InputStreamReader(new FileInputStream("F:\\pjt_src\\wifi\\kkk.txt"),"GBK"));  
//			BufferedReader bf=org.frame.tool.FilesTool.getFileReader("F:\\pjt_src\\wifi\\zzz.txt");
			String valueString = null;
			StringBuffer val = new StringBuffer();
		    while ((valueString=bf.readLine())!=null){
		    	val.append(valueString);
		    }
		    
		    Panels pnl=JSONObject.parseObject(val.toString(), Panels.class);
		    Panel pnl5=pnl.getPanel5();
		    List<Box> boxs=pnl5.getBoxList();
		    int i=86;
		    for(Box box:boxs){
		    	List<Item> items=box.getItemList();
		    	
		    	 for(Item item:items){
		    		System.out.print("insert into res_info (RES_TYPE,RES_TITLE,RES_PIC,RES_URL,TYPE_ID,REGION_ID,CHECK_STATUS,CHECK_MAN,CHECK_DATE,PUBLISH_MAN,PUBLISH_DATE,CREATE_DATE,CREATE_MAN,RES_ID)");
		    		System.out.print("values (3,'"+item.getName()+"','"+item.getImage()+"','"+item.getHref()+"',14,'',NULL,'',NULL,'',NULL,now(),'null',"+i+");");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'actionType','','"+item.getActionType()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'param2','','"+item.getParam2()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'param1','','"+item.getParam1()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'name2','','"+item.getName2()+"',NULL);");
		    		System.out.println("");
		    		i++;
		    	 }
		    }
		    Panel pnl6=pnl.getPanel6();
		    boxs=pnl6.getBoxList();
		    for(Box box:boxs){
		    	List<Item> items=box.getItemList();
		    	
		    	 for(Item item:items){
		    		System.out.print("insert into res_info (RES_TYPE,RES_TITLE,RES_PIC,RES_URL,TYPE_ID,REGION_ID,CHECK_STATUS,CHECK_MAN,CHECK_DATE,PUBLISH_MAN,PUBLISH_DATE,CREATE_DATE,CREATE_MAN,RES_ID)");
		    		System.out.print("values (3,'"+item.getName()+"','"+item.getImage()+"','"+item.getHref()+"',22,'',NULL,'',NULL,'',NULL,now(),'null',"+i+");");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'actionType','','"+item.getActionType()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'param2','','"+item.getParam2()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'param1','','"+item.getParam1()+"',NULL);");
		    		System.out.println("");
		    		System.out.print("insert into res_attr (RES_ID,ATTR_NAME,ATTR_ZH,ATTR_VAL,ATTR_ID) ");
		    		System.out.print(" values ("+i+",'name2','','"+item.getName2()+"',NULL);");
		    		System.out.println("");
		    		i++;
		    	 }
		    }
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
