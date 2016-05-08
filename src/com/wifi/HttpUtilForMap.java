package com.wifi;

import java.io.IOException;
import java.io.Writer;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.bo.BaseBo;
import org.frame.db.page.PageUtil;
import org.frame.utils.ExceptionUtil;

public class HttpUtilForMap {

	public static void failured(Exception ex, HttpServletResponse response) {
		try {
			Writer writer = getWrite(response);
			writer.write("{\"success\":false, \"msg\":\"");
			writer.write(ExceptionUtil.getExtJsMessage(ex));
			writer.write("\"}");
		} catch (Exception exception) {
		}
	}
	public static void success(List beanList, HttpServletResponse response) {
		try {
			Writer writer = getWrite(response);
			writer.write("{\"success\": true,\"data\":");
			outJsonArr(beanList, writer);
			writer.write("}");
		} catch (Exception ex1) {
			failured(ex1, response);
		}
	}
	
	public static void success(List beanList, PageUtil pageInfo, HttpServletResponse response)
    {
        try
        {
            Writer writer = getWrite(response);
            writer.write("{\"success\": true,\"data\":");
            outJsonArr(beanList, writer);
            writer.write(",\"pageInfo\":{");
            writer.write("\"rowCount\":");
            writer.write(String.valueOf(pageInfo.getRowTotal()));
            writer.write(",");
            writer.write("\"pageRowSize\":");
            writer.write(String.valueOf(pageInfo.getPageSize()));
            writer.write(",");
            writer.write("\"curPageNo\":");
            writer.write(String.valueOf(pageInfo.getCurPageNo()));
            writer.write("}}");
        }
        catch(IOException e)
        {
            failured(e, response);
        }
    }

	public static void outJsonArr(List beanList, HttpServletResponse response) {
		try {
			outJsonArr(beanList, getWrite(response));
		} catch (Exception ex1) {
			failured(ex1, response);
		}
	}

	public static void toXmlArr(List beanList, HttpServletResponse response) {
		try {
			Writer writer = getWrite(response);
			writer.write("<data>\r\n");
			if (beanList != null) {
				for (Iterator iterator = beanList.iterator(); iterator
						.hasNext(); writer.write("</row>\r\n")) {
					BaseBo bo = (BaseBo) iterator.next();
					writer.write("<row>");
					writer.write(bo.toJsonString());
				}

			}
			writer.write("</data>\r\n");
		} catch (Exception ex1) {
			failured(ex1, response);
		}
	}




	public static void outJson(String data, HttpServletResponse response) {
		try {
			getWrite(response).write(data);
		} catch (IOException e) {
			failured(e, response);
		}
	}

	public static Writer getWrite(HttpServletResponse response)
			throws IOException {
		response.resetBuffer();
		return response.getWriter();
	}

	public static void outJsonArr(List beanList, Writer writer)
			throws IOException {
		writer.write("[");
		if (beanList != null) {
			int i = 0;
			for (Iterator iterator = beanList.iterator(); iterator.hasNext();) {
				Map map = (Map) iterator.next();
				if (i == 0) {
					writer.write("{");
					writer.write(mapValueToString(map));
					writer.write("}");
					i++;
				} else {
					writer.write(",{");
					writer.write(mapValueToString(map));
					writer.write("}");
				}
			}

		}
		writer.write("]");
	}
	
	/**
	 * Map格式信息转换为字符串
	 * @param map 
	 * @return
	 */
	public static String mapValueToString(Map map){
		if(null != map && map.size() > 0){
			StringBuilder result = new StringBuilder();
			
			for (Object key : map.keySet()){
				result.append("\"" + key.toString() + "\"").append(":").append("\"" + map.get(key) + "\"").append(",");
			}
			String value = result.toString();
			return value.substring(0, value.length() - 1);
		}

		return "";
	}

}
