<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>客户信息管理</title>
<%@include file="../../common/header.jsp"%>

<script type="text/javascript" src="singleClientVisitForm.js"></script>
<script type="text/javascript" src="singleClientVisitGrid.js"></script>
<script type="text/javascript" src="singleClientVisitEditor.js"></script>
<script type="text/javascript" src="singleClientVisitMain.js"></script>

<script type="text/javascript">
//var versionTypes=<%=OptionsUtil.getDataOption("VERSION_TYPE")%>.data;
var clientInfos=<%=OptionsUtil.getClientInfos()%>.data;
var clientAttrs = function(){
	var attrs= [];
	if (clientInfos){
		for (var i = 0; i < clientInfos.length; i++){
			var attr = {};
			attr.value = clientInfos[i].pointId;
			attr.text = clientInfos[i].pointName;
			attrs[attrs.length] = attr;
		}
	}
	return attrs;
}();
Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.wifi.CustMain({});
		}
);

</script>
<script src="../../echarts/dist/echarts.js"></script>
<script type="text/javascript">
        // 路径配置
        require.config({
            paths: {
                echarts: '../../echarts/dist'
            }
        });
        var myChart;
        var option;
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                myChart = ec.init(document.getElementById('main')); 
                
                option = {
                	title : {
                		text:'单一店面访问量时间统计'
                	},
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['示例店面']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['示例']
                        }
                    ],
                   toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
                    yAxis : [
                        {
                        	name : '访问量',
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"时间",
                            "type":"line",
                            "data":[1]
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );    
</script>
</head>
<body>
</body>
</html>