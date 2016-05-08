<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>客户信息管理</title>
<%@include file="../../common/header.jsp"%>

<script type="text/javascript" src="clientVisitForm.js"></script>
<script type="text/javascript" src="clientVisitGrid.js"></script>
<script type="text/javascript" src="clientVisitEditor.js"></script>
<script type="text/javascript" src="clientVisitMain.js"></script>

<script type="text/javascript">
var versionTypes=<%=OptionsUtil.getDataOption("VERSION_TYPE")%>.data;
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
                'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                myChart = ec.init(document.getElementById('main')); 
                
                option = {
                	title : {
                		text:'按店面的访问量统计'
                	},
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['Android 访问量','iPhone 访问量','','Android 访客数', 'iPhone 访客数']
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"Android 访问量",
                            "type":"bar",
                            "data":[1]
                        },
                        {
                            "name":"iPhone 访问量",
                            "type":"bar",
                            "data":[1]
                        },
                        {
                            "name":"Android 访客数",
                            "type":"bar",
                            "data":[1]
                        },
                        {
                            "name":"iPhone 访客数",
                            "type":"bar",
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