Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.CustQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.CustQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
		
					        {layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
                                {
                                    xtype:"datefield",fieldLabel:"统计时间",name:"startDate",id:"startDate",anchor:"100%"
                                 }
                               ]
                             },
                             {layout:'form',columnWidth : 0.20,labelAlign : 'right',labelWidth : 20,labelSeparator:'',items:[
                                 {
                                    xtype:"datefield",fieldLabel:"至",name:"endDate",id:"endDate",anchor:"100%"
                                 }
                               ]
                            },
							{layout:'form',columnWidth : 0.25,buttonAlign : 'left',
                             buttons:this.buildButtons2()
   							}
						]
					}
				];
			},
			buildButtons2 : function() {
				return [ {
					width : 60,
					xtype : 'button',
					text : '查  询',
					 style:"margin-top:-5px;",
					handler : this.qryBtnFun.createDelegate(this)
				}, {
					width : 60,
					xtype : 'button',
					text : '置  空',
					 style:"margin-top:-5px;",
					handler : this.resetBtnFun.createDelegate(this)
				} ];
			},
			qryBtnFun : function() {
				var formValues = this.getForm().getValues();
				Ext.getCmp("v_QryUpdStatusId2").queryData(formValues);
				Ext.Ajax.request({
		                url: G_ROOT_PATH+'/custEquipVisitWeb.cll?method=qryCustVistInfoChart',
		                params: formValues,
		                method: 'POST',
		                callback: function (options, success, response) {
		                    if (success) {
		                        var responseJson = JSON.parse(response.responseText).data;
		                        setOptionValue(option, responseJson);
		                        myChart.setOption(option); 
		                      //  Ext.Msg.alert("成功", responseJson);
		                    } else {
		                        Ext.Msg.confirm('失败',
		                                            '请求超时或网络故障,错误编号：[' + response.status + ']是否要重新发送？', function (btn) {
		                                                if (btn == 'yes') {
		                                                    Ext.Ajax.request(options);
		                                                }
		                                            });
		                    }
		                }
		            });				
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);

function setOptionValue(option, responseJson){
	if (responseJson[0].point_name){
		var point_name = responseJson[0].point_name.split(',');
		option.xAxis[0].data = point_name;
	}
	if(responseJson[0].android_visit_count){
		var android_visit_count = responseJson[0].android_visit_count.split(',');
		option.series[0].data = android_visit_count;
	}
	if (responseJson[0].android_visit_sum){
		var android_visit_sum = responseJson[0].android_visit_sum.split(',');
		option.series[1].data = android_visit_sum;
	}

	if(responseJson[0].iPhone_visit_count){
		var iPhone_visit_count = responseJson[0].iPhone_visit_count.split(',');
		option.series[2].data = iPhone_visit_count;
	}
	if(responseJson[0].iPhone_visit_sum){
		var iPhone_visit_sum = responseJson[0].iPhone_visit_sum.split(',');
		option.series[3].data = iPhone_visit_sum;
	}
}

com.wifi.CustForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  items:[					      
							{layout : 'column',items : [
									{layout:'form',labelAlign : 'right',labelWidth : 50,items:[
										   {xtype:"textfield",fieldLabel:"门店",name:"point_name",id:"point_name",anchor:"100%"}
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 50,items:[
									        {
									          allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"Android访问量",name:"android_visit_sum",id:"android_visit_sum",anchor:"100%"
									        }
									  ]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 50,items:[
  										   {
  											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"Android访问数",name:"android_visit_count",id:"android_visit_count",anchor:"100%"
  									       }
  										]
  									},
									{layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth : 80,items:[
										   {
											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"iPhone访问量",name:"iPhone_visit_sum",id:"iPhone_visit_sum",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 65,items:[
          									{
											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"iPhone访问数",name:"iPhone_visit_count",id:"iPhone_visit_count",anchor:"100%"
									       }
          							  ]
          							}
 									       
								]
							}  
						]
			
			}];
	 }	
});
