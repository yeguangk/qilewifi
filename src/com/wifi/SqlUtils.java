package com.wifi;

public class SqlUtils {
	
	/**
	 * 数组转换为("a","b")
	 * 	如果arrays为空，则返回("");
	 *  
	 * @param arrays
	 * 		传入的数据，
	 * @return
	 */
	public static String arrayToWhereSqlIn(String arrays[]){
		if (arrays != null && arrays.length > 0){
			StringBuilder in = new StringBuilder();
			in.append("(");
			for (int i = 0; i < arrays.length - 1; i++){
				in.append("\"").append(arrays[i]).append("\"").append(", ");
			}
			in.append("\"").append(arrays[arrays.length - 1]).append("\"");
			in.append(")");
			return in.toString();
		}
		return "(\"\")";
		
	}

}
