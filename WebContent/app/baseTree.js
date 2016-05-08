/*
 {
   xtype: 'mzBaseTreePanel',
   queryUrl:'../testWeb.cll?method=loadAllMenu&menuid='
 }
 */
Com.panel.MzBaseTreePanel = Ext.extend(Ext.Panel, {
	loadUrl:G_ROOT_PATH+"/loginWeb.cll?method=loadAllMenu",
	rootId:0,
	border:false,
	frame:false,
	initComponent: function(){
		this.width=200;
		this.height=200;
		this.layout="accordion";
		this.collapsible=false;   
		this.collapseMode='mini'; 
		this.collapseFirst=true; 
		this.split=true;
		this.layoutConfig= {
		    animate: true
		}
		var loadMenu=PostInfoJson(this.loadUrl);
		if(loadMenu==null){
			g_forwardLogin();
		}
		if(loadMenu!=null && typeof loadMenu.data!="undefined"){
			var menuNodeList=loadMenu.data;
			
			var treePnlArr=new Array();	
			for(var i=0;i<menuNodeList.length;i++){
				var parentNd;
				if(menuNodeList[i].parentNo=="0"){
					parentNd = new Ext.tree.TreeNode(  {
				        text: menuNodeList[i].resName,
				        draggable:false,
				        border : false,
				        expanded: true,
				        id:""+menuNodeList[i].resNo,
				        url:menuNodeList[i].resUrl
				    });
					var treePnl=new Ext.tree.TreePanel({
						border:false,
						frame:false,
						width:100,
						title:menuNodeList[i].resName,
						url:menuNodeList[i].resUrl,
						border : false,
						rootVisible:false,
						root:parentNd,
						//iconCls:"add",
						autoScroll:true
				   });
				   treePnlArr[treePnlArr.length]=treePnl;
				}else{
					for(var k=0;k<treePnlArr.length;k++){
						parentNd=(treePnlArr[k]).getNodeById(""+menuNodeList[i].parentNo);
						if(parentNd){
							var node=new Ext.tree.TreeNode({
								id:""+menuNodeList[i].resNo,
								text:menuNodeList[i].resName,
				        		url:menuNodeList[i].resUrl,
				        		expanded: true,
								border : false
							});
							node.on('click', function(node, e){
								if(!node.isExpanded())
									 node.expand();
								else
									node.collapse();
							    menuNdClk(node);
							});

							parentNd.appendChild(node);
							
						}
					}
				}
			}
			if(menuNodeList.length>0){
			   this.items=treePnlArr;
			}
	    }
		Com.panel.MzBaseTreePanel.superclass.initComponent.call(this);
   },onDestroy:function(){
	   if(this.body){
           var c = this.body;
           c.removeAllListeners();
           c.update("");
       }  
	   Ext.destroy(this.items);
	   delete this.width;
	   delete this.height;
	   delete this.layout;
	   delete this.collapsible;
	   delete this.collapseMode;
	   delete this.collapseFirst;
	   delete this.split;
		
	   delete this.layoutConfig;
	   delete this.items;
	   
       Com.panel.MzBaseTreePanel.superclass.onDestroy.call(this);
   }
   
})
Ext.reg('mzBaseTreePanel', Com.panel.MzBaseTreePanel);