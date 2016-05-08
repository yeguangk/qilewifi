package tool;

import java.util.List;

public class Panel {
	   private String title;
	   private String image;
	   private String show;
	   private List<Box> boxList;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getShow() {
		return show;
	}
	public void setShow(String show) {
		this.show = show;
	}
	public List<Box> getBoxList() {
		return boxList;
	}
	public void setBoxList(List<Box> boxList) {
		this.boxList = boxList;
	}
   
}
