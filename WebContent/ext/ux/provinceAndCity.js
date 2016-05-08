// 省/直辖市
var provinceNames=["福建省","北京市","上海市","江苏省","浙江省","安微省","江西省","山东省","河南省","湖北省",
                 "湖南省","广东省","广西省","海南省","重庆市","云南省","天津市","河北省","山西省","内蒙古",
                 "辽宁省","吉林省","黑龙江省","四川省","贵州省","西藏","陕西省","甘肃省","青海省","宁夏",
                 "新疆"];
                 
/**
 * 省编码
 */
var povinceCode=[1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31];
//JSON对象                
var provinceDATA=[{"value":"1","text":"福建省"},{"value":"2","text":"北京市"},{"value":"3","text":"上海市"},{"value":"4","text":"江苏省"},{"value":"5","text":"浙江省"},
                  {"value":"6","text":"安微省"},{"value":"7","text":"江西省"},{"value":"8","text":"山东省"},{"value":"9","text":"河南省"},{"value":"10","text":"湖北省"},
                  {"value":"11","text":"湖南省"},{"value":"12","text":"广东省"},{"value":"13","text":"广西省"},{"value":"14","text":"海南省"},{"value":"15","text":"重庆市"},
                  {"value":"16","text":"云南省"},{"value":"17","text":"天津市"},{"value":"18","text":"河北省"},{"value":"19","text":"山西省"},{"value":"20","text":"内蒙古"},
                  {"value":"21","text":"辽宁省"},{"value":"22","text":"吉林省"},{"value":"23","text":"黑龙江省"},{"value":"24","text":"四川省"},{"value":"25","text":"贵州省"},
                  {"value":"26","text":"西藏"},{"value":"27","text":"陕西省"},{"value":"28","text":"甘肃省"},{"value":"29","text":"青海省"},{"value":"30","text":"宁夏"},
                  {"value":"31","text":"新疆"}
                 ];
//城市
/*福建省 059*/ 
var fjCityName=["福州","厦门","泉州","漳州","三明","莆田","南平","龙岩","宁德"];
var fjCityCode=["0591","0592","0595","0596","0598","0594","0599","0597","0593"];     
/*北京 010*/ 
var beiJingCityName=["北京"];
var beiJingCityCode=["010"];
/*上海 021*/
var shangHaiCityName=["上海"];
var shangHaiCityCode=["021"];
/*江苏 */
var jsCityName=["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"];
var jsCityCode=["025","0510","0516","0519","0512","0513","0518","0517","0515","0514","0511","0523","0527"];
/*浙江 */
var zjCityName=["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"];
var zjCityCode=["0571","0574","0577","0573","0572","0575","0579","0570","0580","0576","0578"];
/*安微 */
var awCityName=["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","毫州","池州","宣城"];
var awCityCode=["0551","0553","0552","0554","0555","0561","0562","0556","0559","0550","0558","0557","0565","0564","0558","0566","0563"];
/*江西 */
var jxCityName=["南昌","吉安","抚州","九江","景德镇","上饶","鹰潭","宜春","萍乡","赣州","抚州","新余"];
var jxCityCode=["0791","0796","0794","0792","0798","0793","0701","0795","0799","0797","0794","0790"];
/*山东 */
var sdCtiyName=["济南","淄博","东营","烟台","青岛","莱芜","济宁","荷泽","日照","聊城","德州","滨州","潍坊","威海","泰安","临沂","枣庄"];
var sdCtiyCode=["0531","0533","0546","0535","0532","0634","0537","0530","0633","0635","0534","0543","0536","0631","0538","0539","0632"];
/*河南 */
var heNanCityName=["郑州","焦作","鹤壁","许昌","驻马店","周口","洛阳","开封","新乡","安阳","濮阳","缧河","信阳","平顶山","三门峡","南阳","商丘"];
var heNanCityCode=["0371","0391","0392","0374","0396","0394","0379","0378","0373","0372","0393","0395","0376","0375","0398","0377","0370"];
/*湖北 */
var huBeiCtiyName=["武汉","天门","仙桃","荆门","咸宁","十堰","枝城","黄石","宜昌","襄樊","孝感","荆州","黄冈","随州","恩施","潜江","神农架"];
var huBeiCityCode=["027","07280","07281","0724","0715","07190","07170","0714","07171","0710","0712","0716","0713","0722","0718","07282","07191"];
/*湖南 */
var huNanCityName=["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"];
var huNanCityCode=["0731","0733","0732","0734","0739","0730","0736","0744","7037","0735","0746","0745","0738","0743"];
/*广东 */
var gdCityName=["广州","韶关","梅州","潮州","汕尾","深圳","茂名","佛山","江门","清远","韶关","汕头","惠州","河源","湛江","肇庆","中山","阳江"];
var gdCityCode=["020","0769","0753","0768","0660","0755","0668","0757","0750","0763","0751","0754","0752","0762","0759","0758","0760","0662"];
/*广西 */
var gxCityName=["南宁","百色","北海","桂林","柳州","河池","凭祥","钦州","玉林","梧州","合山","钦州","防城港"];
var gxCityCode=["07710","0776","0779","0773","0772","0778","07711","077700","0775","0774","0772","07771","07701"];
/*海南 */
var haiNanCityName=["海口","三亚"];
var haiNanCityCode=["08980","08981"];
/*重庆 023*/ 
var chongQinCityName=["重庆"];
var chongQinCityCode=["023"];
/*云南 */
var yunNanCityName=["昆明","曲靖","大理","保山","文山","临沧","昭通","楚雄","玉溪","丽江"];
var yunNanCityCode=["0871","0874","0872","0875","0876","0883","0870","0878","0877","0888"];
/*天津022*/
var tjCityName=["天津"];
var  tjCityCode=["022"];
/*河北*/
var heBeibCityName=["石家庄","张家口","承德","秦皇岛", "唐山","廊坊", "保定", "沧州", "衡水","邢台", "邯郸"];
var heBeiCityCode=["0311", "0313",  "0314", "0335",  "0315", "0316","0312", "0317", "0318","0319", "0310"];
/*山西*/
var sxCityName=["太原", "大同", "朔州","阳泉", "长治","晋城","忻州","晋中","临汾","运城","吕梁"];
var sxCityCode=["0351","0352","0349","0353","0355","0356","0350","0354","0357","0359","0358"];
/*内蒙古*/
var nmgCityName=["呼和浩特", "包头","乌海","赤峰","通辽","呼伦贝尔","兴安盟","鄂尔多斯","锡林郭勒",
								"阿拉善","巴彦淖尔","乌兰察布","海拉尔","满洲里","乌兰浩特","锡林浩特"];
var nmgCityCode=["0471","0472","0473","0476","0475","04700","0482","0477","0479","0483","0478",
								"0474","04701","04702","0482","0479"];
/*辽宁*/
var lnCityName=["沈阳", "朝阳","阜新","铁岭","抚顺","本溪","辽阳","鞍山","丹东","大连",
								"营口","盘锦","锦州","葫芦岛"];
var lnCityCode=["024","0421","0418","0410","0413",
								"0414","0419","0412","0415","0411","0417","0427","0416","0429"];
/*吉林*/
var jlCityName=["长春","延边","白城","松原","吉林","四平","辽源","通化","白山"];
var jlCityCode=["0431","0431","0436","0438","0432","0434","0437","0435","0439"];
/*黑龙江*/

var hljCityName=["哈尔滨","齐齐哈尔","黑河","大庆","鹤岗","佳木斯","牡丹江","大兴安岭",
								"伊春","双鸭山","鸡西","七台河","绥化"];
var hljCityCode=["0451","0452","0456","0459","04540","04541","04542","04530","0457",
								"0458","04544","04531","04531","0455"];
/*四川 */
var scCityName=["成都","广元","绵阳","德阳","南充","广安","遂宁","内江","乐山",
							"自贡","泸州","宜宾","攀枝花","巴中","达州","资阳","眉山","雅安","甘孜","凉山","阿坝","北海"]; 
var scCityCode=["0280","0839","0816","0838","0817","0826","0825","0832","0833"
							,"0813","0830","0831","0812","0827","0818","0281","0282","0835","0836","0834","0837","0779"];
/*贵州*/
var gzCityName=["贵阳","六盘水","遵义","安顺","毕节","黔东南","黔南","黔西南","铜仁"]; 
var gzCityCode=["0851","0858","0852","0853","0857","0855","0854","0859","0856"];
/*西藏*/
var xzCityName=["拉萨","阿里","昌都","林芝","日喀则","山南","那曲"]; 
var xzCityCode=["0891","0897","0895","0894","0892","0983","0896"];
/*陕西*/
var sxiCityName=["西安","咸阳","渭南","延安","宝鸡","汉中","铜川","榆林","商洛","安康"]; 
var sxiCityCode=["029","0910","0913","0911","0917","0916","0919","0912","0914","0915"];
/*甘肃*/
var gsCityName=["兰州","酒泉","嘉峪关","张掖","天水","白银","定西","甘南","金昌","临夏","陇南","平凉","庆阳","武威"]; 
var gsCityCode=["0931","09370","09371","0936","0938","0943","0932","0941","09350","09351","0930",
		"0939","0933","0934","0935"];
/*青海*/

var qhCityName=["西宁","果洛","海北","海东","海南州","海西","黄南","树"]; 
var qhCityCode=["0971","0975","0970","0972","0974","0979","0973","0976"];
/*宁夏*/

var nxCityName=["银川","石嘴山","固原","中卫","吴忠"]; 
var nxCityCode=["0951","0952","0954","0955","0953"];
/*新疆*/
var xjCityName=[
		"乌鲁木齐","昌吉","克拉玛依","吐鲁番","哈密","石河子","伊犁","巴音郭楞","和田","阿勒泰",
		"塔城","阿克苏 ","博尔塔拉","克孜勒苏","喀什","图木舒克","阿拉尔 ","五家渠"]; 
var xjCityCode=["0991","09940","0990","0995","0902","0993","0999","0996","0903","0906",
		"0901","0997","0909","0908","09980","09981","0997","09941"];

/**
 * 设置城市
 * @param ]] provinceIndex
 * @param ]] provinceId
 * @param ]] cityId
 */
function setCity(provinceIndex,city){
	
	city.options.length=0;//清空
	//city.options.add(new Option("-----------请选择-----------","0"));
	switch(provinceIndex){
	  case "1":{//福建省
	    initCityNameAndCode(provinceIndex,city,fjCityName,fjCityCode);
	    break;
	  }
	  case "2":{//北京市
		initCityNameAndCode(provinceIndex,city,beiJingCityName,beiJingCityCode);
		break;
	  }
	  case "3":{////上海市
	    initCityNameAndCode(provinceIndex,city,shangHaiCityName,shangHaiCityCode);
		break;
	  }
	  case "4":{//江苏省
	    initCityNameAndCode(provinceIndex,city,jsCityName,jsCityCode);
		break;
	  }
	  case "5":{//浙江省
	    initCityNameAndCode(provinceIndex,city,zjCityName,zjCityCode);
		break;
	  }
	  case "6"://安微省
	    initCityNameAndCode(provinceIndex,city,awCityName,awCityCode);
		break;
	  case "7"://江西省
	    initCityNameAndCode(provinceIndex,city,jxCityName,jxCityCode);
		break;
	  case "8"://山东省
	    initCityNameAndCode(provinceIndex,city,sdCtiyName,sdCtiyCode);
		break;
	  case "9"://河南省
	    initCityNameAndCode(provinceIndex,city,heNanCityName,heNanCityCode);
		break;
	  case "10"://湖北省
	    initCityNameAndCode(provinceIndex,city,huBeiCtiyName,huBeiCityCode);
		break;
	  case "11"://湖南省
	    initCityNameAndCode(provinceIndex,city,huNanCityName,huNanCityCode);
		break;
	  case "12"://广东省
	    initCityNameAndCode(provinceIndex,city,gdCityName,gdCityCode);
		break;
	  case "13"://广西省
	    initCityNameAndCode(provinceIndex,city,gxCityName,gxCityCode);
		break;
	  case "14"://海南省
	   initCityNameAndCode(provinceIndex,city,haiNanCityName,haiNanCityCode);
		break;
	  case "15"://重庆市
	    initCityNameAndCode(provinceIndex,city,chongQinCityName,chongQinCityCode);
		break;
	  case "16"://云南省
	    initCityNameAndCode(provinceIndex,city,yunNanCityName,yunNanCityCode);
		break;
	  case "17"://天津市
	    initCityNameAndCode(provinceIndex,city,tjCityName,tjCityCode);
		break;
	  case "18"://河北省
	    initCityNameAndCode(provinceIndex,city,heBeibCityName,heBeibCityCode);
		break;
	  case "19"://山西省
	    initCityNameAndCode(provinceIndex,city,sxCityName,sxCityCode);
		break;
	  case "20"://内蒙古
	    initCityNameAndCode(provinceIndex,city,nmgCityName,nmgCityCode);
		break;
	  case "21"://辽宁省
	    initCityNameAndCode(provinceIndex,city,lnCityName,lnCityCode);
		break;
	  case "22"://吉林省
	    initCityNameAndCode(provinceIndex,city,jlCityName,jlCityCode);
		break;
	  case "23"://黑龙江省
	    initCityNameAndCode(provinceIndex,city,hljCityName,hljCityCode);
		break;
	  case "24"://四川省
	    initCityNameAndCode(provinceIndex,city,scCityName,scCityCode);
		break;
	  case "25"://贵州省
	    initCityNameAndCode(provinceIndex,city,gzCityName,gzCityCode);
		break;
	  case "26"://西藏
	    initCityNameAndCode(provinceIndex,city,xzCityName,xzCityCode);
		break;
	  case "27"://陕西省
	    initCityNameAndCode(provinceIndex,city,sxiCityName,sxiCityCode);
		break;
	  case "28"://甘肃省
	    initCityNameAndCode(provinceIndex,city,gsCityName,gsCityCode);
		break;
	  case "29"://青海省
	    initCityNameAndCode(provinceIndex,city,qhCityName,qhCityCode);
		break;
	  case "30"://宁夏
	    initCityNameAndCode(provinceIndex,city,nxCityName,nxCityCode);
		break;
	  case "31"://新疆
	    initCityNameAndCode(provinceIndex,city,xjCityName,xjCityCode);
		break;
	}
  //if(provinceIndex==0) alert("请选择省/直辖市");
}
/**
 * 
 * @param {} provinceIndex
 * @param {} city
 */
function setCityW(provinceIndex,city,selCityIndex){
	
	city.options.length=0;//清空
	city.options.add(new Option("选择城市","0"));
	switch(provinceIndex){
	  case "1":{//福建省
	    initCityNameAndCodeW(provinceIndex,city,fjCityName,fjCityCode,selCityIndex);
	    break;
	  }
	  case "2":{//北京市
		initCityNameAndCodeW(provinceIndex,city,beiJingCityName,beiJingCityCode,selCityIndex);
		break;
	  }
	  case "3":{////上海市
	    initCityNameAndCodeW(provinceIndex,city,shangHaiCityName,shangHaiCityCode,selCityIndex);
		break;
	  }
	  case "4":{//江苏省
	    initCityNameAndCodeW(provinceIndex,city,jsCityName,jsCityCode,selCityIndex);
		break;
	  }
	  case "5":{//浙江省
	    initCityNameAndCodeW(provinceIndex,city,zjCityName,zjCityCode,selCityIndex);
		break;
	  }
	  case "6"://安微省
	    initCityNameAndCodeW(provinceIndex,city,awCityName,awCityCode,selCityIndex);
		break;
	  case "7"://江西省
	    initCityNameAndCodeW(provinceIndex,city,jxCityName,jxCityCode,selCityIndex);
		break;
	  case "8"://山东省
	    initCityNameAndCodeW(provinceIndex,city,sdCtiyName,sdCtiyCode,selCityIndex);
		break;
	  case "9"://河南省
	    initCityNameAndCodeW(provinceIndex,city,heNanCityName,heNanCityCode,selCityIndex);
		break;
	  case "10"://湖北省
	    initCityNameAndCodeW(provinceIndex,city,huBeiCtiyName,huBeiCtiyCode,selCityIndex);
		break;
	  case "11"://湖南省
	    initCityNameAndCodeW(provinceIndex,city,huNanCityName,huNanCityCode,selCityIndex);
		break;
	  case "12"://广东省
	    initCityNameAndCodeW(provinceIndex,city,gdCityName,gdCityCode,selCityIndex);
		break;
	  case "13"://广西省
	    initCityNameAndCodeW(provinceIndex,city,gxCityName,gxCityCode,selCityIndex);
		break;
	  case "14"://海南省
	   initCityNameAndCodeW(provinceIndex,city,haiNanCityName,haiNanCityCode,selCityIndex);
		break;
	  case "15"://重庆市
	    initCityNameAndCodeW(provinceIndex,city,chongQinCityName,chongQinCityCode,selCityIndex);
		break;
	  case "16"://云南省
	    initCityNameAndCodeW(provinceIndex,city,yunNanCityName,yunNanCityCode,selCityIndex);
		break;
	  case "17"://天津市
	    initCityNameAndCodeW(provinceIndex,city,tjCityName,tjCityCode,selCityIndex);
		break;
	  case "18"://河北省
	    initCityNameAndCodeW(provinceIndex,city,heBeibCityName,heBeibCityCode,selCityIndex);
		break;
	  case "19"://山西省
	    initCityNameAndCodeW(provinceIndex,city,sxCityName,sxCityCode,selCityIndex);
		break;
	  case "20"://内蒙古
	    initCityNameAndCodeW(provinceIndex,city,nmgCityName,nmgCityCode,selCityIndex);
		break;
	  case "21"://辽宁省
	    initCityNameAndCodeW(provinceIndex,city,lnCityName,lnCityCode,selCityIndex);
		break;
	  case "22"://吉林省
	    initCityNameAndCodeW(provinceIndex,city,jlCityName,jlCityCode,selCityIndex);
		break;
	  case "23"://黑龙江省
	    initCityNameAndCodeW(provinceIndex,city,hljCityName,hljCityCode,selCityIndex);
		break;
	  case "24"://四川省
	    initCityNameAndCodeW(provinceIndex,city,scCityName,scCityCode,selCityIndex);
		break;
	  case "25"://贵州省
	    initCityNameAndCodeW(provinceIndex,city,gzCityName,gzCityCode,selCityIndex);
		break;
	  case "26"://西藏
	    initCityNameAndCodeW(provinceIndex,city,xzCityName,xzCityCode,selCityIndex);
		break;
	  case "27"://陕西省
	    initCityNameAndCodeW(provinceIndex,city,sxiCityName,sxiCityCode,selCityIndex);
		break;
	  case "28"://甘肃省
	    initCityNameAndCodeW(provinceIndex,city,gsCityName,gsCityCode),selCityIndex;
		break;
	  case "29"://青海省
	    initCityNameAndCodeW(provinceIndex,city,qhCityName,qhCityCode,selCityIndex);
		break;
	  case "30"://宁夏
	    initCityNameAndCodeW(provinceIndex,city,nxCityName,nxCityCode,selCityIndex);
		break;
	  case "31"://新疆
	    initCityNameAndCodeW(provinceIndex,city,xjCityName,xjCityCode,selCityIndex);
		break;
	}
  //if(provinceIndex==0) alert("请选择省/直辖市");
}
/**
 * 通过省份编码获取城市编码数组
 * @param {} provinceCode
 */
function cityCodeArryByProCode(provinceCode){
	switch(provinceCode){
	  case 1:return fjCityCode;
	  case 2:return beiJingCityCode;
	  case 3:return shangHaiCityCode;
	  case 4:return jsCityCode;
	  case 5:return zjCityCode;
	  case 6:return awCityCode;
	  case 7:return jxCityCode;
	  case 8:return sdCtiyCode;
	  case 9:return heNanCityCode;
	  case 10:return huBeiCtiyCode;
	  case 11:return huNanCityCode;
	  case 12:return gdCityCode;
	  case 13:return gxCityCode;
	  case 14:return haiNanCityCode;
	  case 15:return chongQinCityCode;
	  case 16:return yunNanCityCode;
	  case 17:return tjCityCode;
	  case 18:return heBeibCityCode;
	  case 19:return sxCityCode;
	  case 20:return nmgCityCode;
	  case 21:return lnCityCode;
	  case 22:return jlCityCode;
	  case 23:return hljCityCode;
	  case 24:return scCityCode;
	  case 25:return gzCityCode;
	  case 26:return xzCityCode;
	  case 27:return sxiCityCode;
	  case 28:return gsCityCode;
	  case 29:return qhCityCode;
	  case 30:return nxCityCode;
	  case 31:return xjCityCode;
	}
}
/**
 * 通过省份编码获取城市名称数组
 * @param {} provinceCode
 */
function cityNameArryByProCode(provinceCode){
	switch(provinceCode){
	  case 1:return fjCityName;
	  case 2:return beiJingCityName;
	  case 3:return shangHaiCityName;
	  case 4:return jsCityName;
	  case 5:return zjCityName;
	  case 6:return awCityName;
	  case 7:return jxCityName;
	  case 8:return sdCtiyName;
	  case 9:return heNanCityName;
	  case 10:return huBeiCtiyName;
	  case 11:return huNanCityName;
	  case 12:return gdCityName;
	  case 13:return gxCityName;
	  case 14:return haiNanCityName;
	  case 15:return chongQinCityName;
	  case 16:return yunNanCityName;
	  case 17:return tjCityName;
	  case 18:return heBeibCityName;
	  case 19:return sxCityName;
	  case 20:return nmgCityName;
	  case 21:return lnCityName;
	  case 22:return jlCityName;
	  case 23:return hljCityName;
	  case 24:return scCityName;
	  case 25:return gzCityName;
	  case 26:return xzCityName;
	  case 27:return sxiCityName;
	  case 28:return gsCityName;
	  case 29:return qhCityName;
	  case 30:return nxCityName;
	  case 31:return xjCityName;
	}
}
/**
 * 初始化城市
 * @param ]] cityName
 * @param ]] cityCode
 */
function initCityNameAndCode(provinceIndex,city,cityName,cityCode){	
    for(i=0;i<cityName.length;i++){
       var op=new Option(cityName[i],cityCode[i]);
        city.options.add(op);
    }
 
}
function initCityNameAndCodeW(provinceIndex,city,cityName,cityCode,selCityIndex){	
    for(i=0;i<cityName.length;i++){
       var op=new Option(cityName[i],cityCode[i]);
       if(selCityIndex!=null&&selCityIndex==cityCode[i]) op.selected = true;
        city.options.add(op);
    }
 
}
/**
 * 通过省份编码获取省份名称
 * @param {} provinceCode
 *            省份编码，类型：数字型
 */
function getprovinceNameByCode(proCode){
	var index=0;
	var size=povinceCode.length;
	for(var i=0;i<size;i++){
		if(povinceCode[i]==proCode){
		  index=i;
		  break;
		}
	}
	return provinceNames[index];
}
/**
 * 通过省份编码以及城市编码获取城市名称
 * @param {} provinceCode
 *            身份编码，类型：数字型
 * @param {} cityCode
 *            城市编码，类型：字符串
 */
function getCityName(provinceCode,cityCode){
	var cityCodeArry=cityCodeArryByProCode(provinceCode);
	var cityNameArry=cityNameArryByProCode(provinceCode);
	var index=0;
	var size=cityCodeArry.length;
	for(var i=0;i<size;i++){
		 if(cityCode==cityCodeArry[i]){
		 	index=i;
		 	break;
		 }
	}
	return cityNameArry[index];
	
}
/**
 * 行业/职业编码
 * @type 
 */
var professionCode=[1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22];
   
/**
 * 行业/职业 名称
 * @type 
 */
var professionName=["政府机关/干部","邮电通信","计算机","网络","商业/贸易","银行/金融/证劵/保险/投资","税务","咨询","社会服务","旅游/饭后",
                    "健康/医疗服务","房地产","交通服务","法律/司法","文化/娱乐/体育","媒介/广告","科研/教育","农业/渔业/林业/畜牧业","矿业/制造业","学生",
                    "自由职业","其他"];
/**
 * 获取行业/职业：
 * @param {} professionCode
 */
function getProfession(proCode){
	var index=0;
	var size=professionCode.length;
	for(var i=0;i<size;i++){
		if(professionCode[i]==proCode){
		  index=i;
		  break;
		}
	}
	return professionName[index];
}
/**
 * 通过省份编码获取城市JSON对象
 * @param {} proCode
 */
function getCtiyJson(proCode){
	var cityCode=cityCodeArryByProCode(proCode);
	var cityName=cityNameArryByProCode(proCode);
	var size=cityCode.length;
	var cityDATA='[';
	for(var i=0;i<size;i++){
		cityDATA+='{\"value\":\"'+cityCode[i]+'\",\"text\":\"'+cityName[i]+'\"'+'},'
	}
	if(size>=1) cityDATA=cityDATA.substring(0,cityDATA.length-1);
	cityDATA+=']';
	return cityDATA;
}		                     
