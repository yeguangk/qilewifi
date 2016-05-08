package tool;

import java.util.List;

public class Box {
   private String id;
   private String box2;
   private String type;
   private String title;
   private String more;
   private String moreUrl;
   private String dispPreLine;
   private List<Item>  itemList;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getBox2() {
	return box2;
}
public void setBox2(String box2) {
	this.box2 = box2;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getMore() {
	return more;
}
public void setMore(String more) {
	this.more = more;
}
public String getMoreUrl() {
	return moreUrl;
}
public void setMoreUrl(String moreUrl) {
	this.moreUrl = moreUrl;
}
public String getDispPreLine() {
	return dispPreLine;
}
public void setDispPreLine(String dispPreLine) {
	this.dispPreLine = dispPreLine;
}
public List<Item> getItemList() {
	return itemList;
}
public void setItemList(List<Item> itemList) {
	this.itemList = itemList;
}
   
}
