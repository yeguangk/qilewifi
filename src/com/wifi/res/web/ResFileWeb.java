package com.wifi.res.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.frame.db.bo.BaseBo;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.oreilly.servlet.MultipartRequest;
import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResFile;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResOwnerTag;
import com.wifi.res.bo.ResSubInfo;
import com.wifi.res.svr.ResSvr;
import com.wifi.res.vo.SubResVo;

public class ResFileWeb {

	public final static String SIGN_MULTIDATA = "multipart/form-data";
	public final static String SIGN_BOUNDARY = "boundary=";

	public void upload(MoziRequest request, HttpServletResponse response)
			throws Exception {
		InputStream inputStream = null;
		try {

			int maxPostSize = 15 * 1024 * 1024;
			String temp = request.getRootPath() + File.separator + "upload";

			RenamePolicy rename = new RenamePolicy();
			MultipartRequest mulRequest = new MultipartRequest(request, temp,
					maxPostSize, "UTF-8", rename);

			List<BaseBo> dataArr = new ArrayList<BaseBo>();
			File file = mulRequest.getFile("fileExcel");
			if (file == null) {
				HttpUtil.success(dataArr, response);
				return;
			}
			ResSvr svr = (ResSvr) ServiceFactory.getService(ResSvr.class);

			inputStream = new FileInputStream(file);
			ExcelRead read = new ExcelRead(inputStream);
			//

			int row = 1;
			String curResNo = read.getData(row, 0);
			String lastResNo = curResNo;
			//
			ResInfo resInfo = new ResInfo();
			resInfo.setResCode(curResNo);
			//
			Set attrFilter = new HashSet();

			List atrrList = new ArrayList();
			List tagList = new ArrayList();

			Map<String, SubResVo> subMap = new HashMap<String, SubResVo>();

			while (!StringUtils.isEmpty(curResNo)) {
				// 资源文件
				resInfo.setCheckStatus(BigDecimal.ZERO);
				resInfo.setResCode(curResNo);

				String resType = read.getData(row, 1);
				if (!StringUtils.isEmpty(resType))
					resInfo.setResType(new BigDecimal(resType));

				resInfo.setResTitle(read.getData(row, 2));
				resInfo.setResDesc(read.getData(row, 3));

				//
				// resInfo.setAuthor(read.getData(row,/*excel对应的列序号*/));
				// String fileSize=read.getData(row, /*excel对应的列序号*/);
				// / if(!StringUtils.isEmpty(fileSize))
				// resInfo.setFileSize(new BigDecimal(fileSize));
				// 这里的1、2、3、4、5、6.....你都要根据你的excel模板调整，调整的事情，你自己处理了
				String freeType = read.getData(row, 4);
				if (!StringUtils.isEmpty(freeType))
					resInfo.setFeeType(new BigDecimal(freeType));
				String price = read.getData(row, 5);
				if (!StringUtils.isEmpty(price))
					resInfo.setPrice(new BigDecimal(price));
				resInfo.setAuthor(read.getData(row, 6));

				

				// 资源属性
				for (int i = 15; i < 18; i++) {
					String attrVal = read.getData(row, i);
					String attrName = read.getData(0, i);
					if (!StringUtils.isEmpty(attrVal)) {
						// 去重判断
						if (!attrFilter.contains(attrVal)) {
							ResAttr attr = new ResAttr();
							attr.setAttrName(attrName);
							attr.setAttrVal(attrVal);
							attrFilter.add(attrVal);
							atrrList.add(attr);
						}
					}
				}

				// 子集
				SubResVo subVo = null;
				ResSubInfo sub = null;
				String subSeq = read.getData(row, 7);
			//	if (subSeq != null && !"-1".equals(subSeq)){
					if (subMap.containsKey(curResNo + subSeq)) {
						subVo = subMap.get(curResNo + subSeq);
						sub = subVo.getSubInfo();
					} else {
						subVo = new SubResVo();
						sub = new ResSubInfo();
						sub.setSubResName(read.getData(row, 8));
						sub.setSubResDesc(read.getData(row, 9));
						if (subSeq != null && subSeq.length() > 0) {
							sub.setSeqId(new BigDecimal(subSeq));
						} else {
							sub.setSeqId(null);
						}
						subVo.setSubInfo(sub);
						subVo.setFileList(new ArrayList());
					}
			//	}
				
				//
				ResFile resFile = new ResFile();
				if (subSeq != null && "-1".equals(subSeq)){
					resFile.setSubResId(new BigDecimal(-1));
				}
				String fileSeq = read.getData(row, 10);
				if (!StringUtils.isEmpty(fileSeq))
					resFile.setSeqId(new BigDecimal(fileSeq));

				String fileType = read.getData(row, 11);
				if (fileType != null) {
					resFile.setFileType(fileType);
				}
				resFile.setPre(read.getData(row, 12));
				resFile.setFilePath(read.getData(row, 13));
				//resFile.setWbUrl(read.getData(row, 13));

				//if (subSeq != null && !"-1".equals(subSeq)){
					subVo.getFileList().add(resFile);
					subMap.put(curResNo + subSeq, subVo);
				//}

				String outUrl = read.getData(row, 14);
				if (outUrl != null && outUrl.length() > 0 && resInfo.getOutUrl() == null){
					resInfo.setOutUrl(outUrl);
				}
				// 适用区域
				String region = read.getData(row, 18);
				if (!StringUtils.isEmpty(region)) {
					ResOwnerTag tag = new ResOwnerTag();
					tag.setTagType("REGION_TAG");
					tag.setTagId(region);
					tagList.add(tag);
					
					// 保留字段的数据导入
					String reserve1 = read.getData(row, 19);
					if (null != reserve1 && reserve1.length() > 0) {
						resInfo.setReserve1(reserve1);
					}
					String reserve2 = read.getData(row, 20);
					if (null != reserve2 && reserve2.length() > 0) {
						resInfo.setReserve2(reserve2);
					}
					String reserve3 = read.getData(row, 21);
					if (null != reserve3 && reserve3.length() > 0) {
						resInfo.setReserve3(reserve3);
					}
					String reserve4 = read.getData(row, 22);
					if (null != reserve4 && reserve4.length() > 0) {
						resInfo.setReserve4(reserve4);
					}
					String reserve5 = read.getData(row, 23);
					if (null != reserve5 && reserve5.length() > 0) {
						resInfo.setReserve5(reserve5);
					}
				}

				// 下一行
				lastResNo = curResNo;
				row++;
				curResNo = read.getData(row, 0);
				if (!curResNo.equals(lastResNo)) {
					// 保存资源记录
					svr.save2(resInfo, new ArrayList(), atrrList, tagList,
							subMap.values());
					// 新记录
					resInfo = new ResInfo();
					resInfo.setResCode(curResNo);
					//
					attrFilter.clear();

					atrrList.clear();
					tagList.clear();

					subMap.clear();
				}
			}

			HttpUtil.success(dataArr, response);
		} catch (Exception ex) {
			ex.printStackTrace();
			HttpUtil.failured(ex, response);
		} finally {
			if (inputStream != null)
				inputStream.close();
		}
	}

}
