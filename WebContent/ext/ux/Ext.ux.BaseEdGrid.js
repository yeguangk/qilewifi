Ext.namespace('Ext.ux');

Ext.override(Ext.grid.RowSelectionModel,{ 
	onEditorKey:function(o, m) {
		var d = m.getKey(), h, i = this.grid, q = i.lastEdit, l = i.activeEditor, b = m.shiftKey, p, q, a, n,totalRows=this.grid.store.getCount();
		if (d == m.TAB) {
			m.stopEvent();
			l.completeEdit();			   
			if (b) {//shiftKey
				    if(l.row==0&&l.col==1){
				    	h = i.walkCells(l.row, l.col, -1,
								this.acceptsNav, this);
				    }else{
				    	var col=this.getEdColIndex2(l.row,l.col-1);
					    if(col==null){
					    	var row=l.row;
					    	if(l.row>0){
					    		row=l.row-1;
					    	}
					    	col=this.getEdColIndex2(row,(i.colModel).getColumnCount() - 1);
				    		if(col!=null){
					    	    h = i.walkCells(row, col, -1,
										this.acceptsNav, this);
				    		}else{
				    			h = i.walkCells(row,l.col, -1,
										this.acceptsNav, this);
				    		}
					    }else{
					    	h = i.walkCells(l.row, col, -1,
									this.acceptsNav, this);
					    }
				    }
				    
//					if (q.col == 1) {
//						if(l.row>0){
//							h = i.walkCells(l.row-1, (i.colModel).getColumnCount() - 1, -1,
//									this.acceptsNav, this);
//						}else{
//							h = i.walkCells(0, 1, -1,
//									this.acceptsNav, this);
//						}						  
//					} else {
//						h = i.walkCells(l.row, l.col - 1, -1,
//								this.acceptsNav, this);
//					}
			 } else {
				    //var ed=(i.colModel).getCellEditor(1,l.row+1);				    
					if (q.col == (i.colModel).getColumnCount() - 1) //最后一列
					{
						if(l.row<totalRows-1){
							h = i.walkCells(l.row+1,1, 1,
									this.acceptsNav, this);
						}else{
							h = i.walkCells(l.row, l.col, 1,
									this.acceptsNav, this);
						}
					} else {
						var col=this.getEdColIndex(l.row,l.col + 1);
						if(col!=null)
							h = i.walkCells(l.row, col, 1,
									this.acceptsNav, this);
						else{
							var col=null;
							if(l.row<totalRows-1)
								col=this.getEdColIndex(l.row+1,1);
							if(col!=null){
								h = i.walkCells(l.row+1, col,
										1, this.acceptsNav, this);
							}else
							   h = i.walkCells(l.row, l.col,
									1, this.acceptsNav, this);
						}
					}
			}			
		} else {
			if (d == m.ENTER) {
				if (this.moveEditorOnEnter !== false) {
					if (b) {//shiftKey
						if(q.row==0&&q.col==1){
							h = i.walkCells(q.row, q.col, -1,
									this.acceptsNav, this);
						}else{
							var col=this.getEdColIndex2(q.row,q.col - 1);
						    if(col==null){
						    	var row=q.row;
						    	if(q.row>0){
						    		row=q.row-1;
						    	}
						    	col=this.getEdColIndex2(row,(i.colModel).getColumnCount() - 1);
					    		if(col!=null){
						    	    h = i.walkCells(row, col, -1,
											this.acceptsNav, this);
					    		}else{
					    			h = i.walkCells(row,q.col, -1,
											this.acceptsNav, this);
					    		}
						    }else{
						    	h = i.walkCells(q.row, col, -1,
										this.acceptsNav, this);
						    }
						}
						
//						if (q.col == 1) {
//							h = i.walkCells(q.row, 1, -1,
//									this.acceptsNav, this);
//						} else {
//							h = i.walkCells(q.row, q.col - 1,
//									-1, this.acceptsNav, this);
//						}
					} else {
						if (q.col == (i.colModel)
								.getColumnCount() - 1) {
							if(q.row<totalRows-1){
								var col=this.getEdColIndex(q.row+1,1);
								h = i.walkCells(q.row+1, col, 1,
										this.acceptsNav, this);
							}else
								h = i.walkCells(q.row, q.col, 1,
										this.acceptsNav, this);
						} else {
							var col=this.getEdColIndex(q.row,q.col + 1);
							if(col!=null){
								h = i.walkCells(q.row, col,
										1, this.acceptsNav, this);
							}else{
								var col=null;
								if(q.row<totalRows-1)
									col=this.getEdColIndex(q.row+1,1);
								if(col!=null){
									h = i.walkCells(q.row+1, col,
											1, this.acceptsNav, this);
								}else
								   h = i.walkCells(q.row, q.col,
										1, this.acceptsNav, this);
							}
						}
					}
				}
			}
		}
		if (h) {
			a = h[0];
			n = h[1];
			this.onEditorSelect(a, q.row);
			
//			if (i.isEditor && i.editing) {
//				p = i.activeEditor;
//				if (p && p.field.triggerBlur) {
//					p.field.triggerBlur();
//				}
//			}
			i.startEditing(a, n);
		}
	},
	onKeyPress : function(g, b) {
		var a = b == "up", h = a ? "selectPrevious"
				: "selectNext", d = a ? -1 : 1, c;
		if (!g.shiftKey || this.singleSelect) {
			this[h](false);					
		} else {
			if (this.last !== false && this.lastActive !== false) {
				c = this.last;
				this.selectRange(this.last, this.lastActive + d);
				this.grid.getView().focusRow(this.lastActive);				
				if (c !== false) {
					this.last = c;
				}
			} else {
				this.selectFirstRow();
			}
			
		}
	},
	selectNext : function(a) {
		if (this.hasNext()) {
			this.selectRow(this.last + 1, a);
			this.grid.getView().focusRow(this.last);
			this.startEdt(this.last);
			return true;
		}
		return false;
	},
	selectPrevious : function(a) {
		if (this.hasPrevious()) {
			this.selectRow(this.last - 1, a);
			this.grid.getView().focusRow(this.last);
			this.startEdt(this.last);
			return true;
		}
		return false;
	},
	startEdt:function(row){
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var i=0;i<colNums;i++){
			if (colM.isCellEditable(i, row)){
				this.grid.startEditing(row, i);
				return true;
			}
		}
	},
	getEdColIndex:function(row,start){
		var d = this.grid.store.getAt(row);
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var i=start;i<colNums;i++){
			var h = this.grid.colModel.getDataIndex(i), g = {
					grid : this.grid,
					record : d,
					field : h,
					value : d.data[h],
					row : row,
					column : i,
					cancel : false
			};
			if (this.grid.fireEvent("beforeedit", g) !== false
					&& !g.cancel){
				if (colM.isCellEditable(i, row)){
					return i;
				}
			}
		}
		return null;
	},
	getEdColIndex2:function(row,start){
		var d = this.grid.store.getAt(row);
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var k=start;k>=1;k--){
			var h = this.grid.colModel.getDataIndex(k), g = {
					grid : this.grid,
					record : d,
					field : h,
					value : d.data[h],
					row : row,
					column : k,
					cancel : false
			};
			if (this.grid.fireEvent("beforeedit", g) !== false
					&& !g.cancel){
				if (colM.isCellEditable(k, row)){
					return k;
				}
			}
		}
		return null;
	}
});
Ext.ux.MyBaseEdGrid = Ext.extend(Ext.grid.EditorGridPanel, {
   selType:1,
   //insertType:true,autoAddFlg
   addDisable:false,
   delDisable:false,
   delPkList:new Array(),
   vsingleSelect:true,
   gridType:0,
   vMethod:"POST", 
   isShow:false,
   nowRec:null,
   otherBtns:[],
   autoAddFlg:false,
   btnFlg:1,//1:add and del;2: del;
   initComponent: function(){
	   if(!this.listeners){//记录正在编辑的记录
	     this.listeners={
				scope:this,
				beforeedit:function(obj){
					this.nowRec=obj.record;
				}
		 };
       }
	   this.clicksToEdit =1;
	   var v_fieldsArr=this.getCol();
	   var v_colTitle=this.getColTitle();
       var colTitleArr=[];       
	   if(this.selType==0){
		  colTitleArr=v_colTitle;
	   }else if(this.selType==1){
		  //colTitleArr[0]=new Ext.grid.RowNumberer({width: 30});
		   var smCol=new Ext.grid.CheckboxSelectionModel({singleSelect:this.vsingleSelect,grid:this});
		  //if(!this.vsingleSelect)
		  colTitleArr[0]=smCol;
		  for(var z=0;z<v_colTitle.length;z++)
		     colTitleArr[colTitleArr.length]=v_colTitle[z];
		  //if(!this.vsingleSelect)//加上此行代码有问题,不可编辑的grid没有此问题
			this.sm=smCol;			
	   }
	   
	   this.columns=colTitleArr;
	   //
	   var v_GridId=this.id;
	   
	   if(this.isShow)this.gridType=1;
	   if(this.gridType==0){
		   this.tbar=[];
		   if(this.btnFlg==1){
			   this.tbar[this.tbar.length]= {
					 	xtype: 'button',
					 	scope:this,
					 	iconCls:"add",
					 	text : '新 增',
					 	disabled:this.addDisable,
					    handler : function() {
					    	var rowNum=Ext.getCmp(v_GridId+"_rowNum").getValue();
							if(rowNum>50){
								top.Ext.Msg.alert("提示信息","一次新增不能超过50行记录.");   
								return false;
							}
					    	var grid=Ext.getCmp(v_GridId);
					    	var startRow=(grid.store.getCount());
					    	for(var i=0;i<rowNum;i++){
					    	    grid.insertRows();
					        }
					    	if(grid.store.getCount()>0){						    		
					    		grid.startEditorCol(startRow);
						    	grid.getSelectionModel().selectRow(startRow);
					    	}
					    }
					};
			   this.tbar[this.tbar.length]= {width:30,value:1,maxValue:50,xtype:"numberfield",id:v_GridId+"_rowNum",
						enableKeyEvents:true,
						listeners:{
							keyup:function(fld, e){
								if(e.getKey()==e.ENTER){
									var rowNum=Ext.getCmp(v_GridId+"_rowNum").getValue();
									if(rowNum>50){
										top.Ext.Msg.alert("提示信息","一次新增不能超过50行记录.");   
										return false;
									}
							    	var grid=Ext.getCmp(v_GridId);
							    	var startRow=(grid.store.getCount());								    	for(var i=0;i<rowNum;i++){
							    	    grid.insertRows();
							        }
							    	if(grid.store.getCount()>0){
							    		grid.startEditorCol(startRow);
								    	grid.getSelectionModel().selectRow(startRow);
							    	}
								}
							}	
						}								
					};
			   this.tbar[this.tbar.length]={xtype:"label",text:" 行"};
			   this.tbar[this.tbar.length]='-';
		   }
		   if(this.btnFlg==1||this.btnFlg==2){
			   this.tbar[this.tbar.length]={
				 	xtype: 'button',
				 	iconCls:"delete",
				 	text : '删 除',					 	
				 	disabled:this.delDisable,
				    handler : function() {
				    	Ext.getCmp(v_GridId).deleteRows();
				    }
				};
		   }
		   for(var i=0;i<this.otherBtns.length;i++){
			   this.tbar[this.tbar.length]=this.otherBtns[i];
		   }
		   if(this.tbar.length==0){
			   this.tbar=null;
		   }
	   }

	   this.store=new Ext.data.JsonStore({
                    root: 'data',
			        idProperty: this.getPkField(),
					proxy: new Ext.data.HttpProxy({url: this.getQryUrl(),method:this.vMethod}),
					fields:v_fieldsArr				
					});	
	   
       Ext.ux.MyBaseEdGrid.superclass.initComponent.call(this);
   },
   startEditorCol:function(row){
	   var grid=(this.getSelectionModel()).grid;
	   var colM=grid.colModel;
	   var colNums=colM.getColumnCount();
		for(var i=0;i<colNums;i++){
			if (colM.isCellEditable(i, row)){
				grid.startEditing(row, i);
				return true;
			}
		}
   },
   editorFirstRow:function(){
	   if(this.store.getCount()>=1){
		   this.startEditorCol(0);
		   this.getSelectionModel().selectRow(0);
	   }	   
   },   
   queryData:function(params){
//	   var v_params="{";
//	    for(var p in params){
//	    	   try{
//	    		   v_params+="\""+p+"\":\""+params[p]+"\",";
//	    	   }catch(e){}
//	    }
//	    v_params+="aa:11}";

	    this.store.baseParams=params;//Ext.util.JSON.decode(v_params);
	    this.store.load({
	    	scope:this,
	    	callback :function(r,options,success){
				if(success){
				}
			}
	    });
   },
   insertRows : function(){
	   //if(this.insertType){
		   var recrod = new this.store.recordType();
		   recrod.data = {};
		   var keys = this.store.fields.keys;	    
		   for(var i=0;i<keys.length;i++){
			   recrod.data[keys[i]] = '';
		   }
		   //try{
		   this.store.insert(this.store.getCount(),recrod);
		   if(this.isVisible()){
			   this.stopEditing(); 
			   (Ext.getCmp(this.id).getSelectionModel()).selectFirstRow();
			   this.startEditing(0, 0);
		   }
		   return recrod;
		   //}catch(e){}
	   //}
   },
   delPkListClean:function(){
 	this.delPkList.length=0;
 	this.delPkList=[];
  },
   deleteRows:function(){
		var v_Grid=this;
	    var row=v_Grid.getSelectionModel().getSelections();//选择行的个数
//        if(row.length==0){   
//            Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
//        }else if(row.length>1){     
//            Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
//        }else if(row.length==1){ 
		     //top.Ext.Msg.confirm('信息','确定要删除？',
	    		 //function(btn) { 
					 //if(btn == 'yes') { 
	                      
					 		for(var index=0;index<row.length;index++){
					 			if(v_Grid.getPkField()!=null){
						        	var pkValue=row[index].get(v_Grid.getPkField());
						        	if(pkValue!=null&&pkValue.length>0){
						        	   v_Grid.delPkList[(v_Grid.delPkList).length]=pkValue;
						        	}						        	
					 		    }
					 		    v_Grid.store.remove(row[index]);
	                        }
	                      
					 //}
	             //}
		     //)
//        }
 	},
 	g_edGridFieldValid:function (title){
 		var cm=this.getColumnModel();
 		var dataStore=this.store;
 		var len=this.store.getCount();
 		
 		for(var i=0;i<len;i++){
 			var record=dataStore.getAt(i);
 			var fields=record.fields.keys;
 			for(var k=0;k<fields.length;k++){			
 				var colIndex=cm.findColumnIndex(fields[k]);
 				var value=record.data[fields[k]];
 				if(colIndex==-1)continue;
 				var rowIdx=dataStore.indexOfId(record.id);
 				var tmp=cm.getCellEditor(colIndex);
 				if(tmp!=null && typeof tmp!="undefined"&&tmp.field!=null&&typeof tmp.field!="undefined"){
 				    var eitor=tmp.field;
	 				if(!eitor.validateValue(value)){
	 					if(typeof this.title!="undefined")
	 						g_showTip(title,this.title+"数据，必须输入的列字段不能为空."); 
	 					else
	 						g_showTip(title,"表格数据，必须输入的列字段不能为空."); 
	 					if(this.isVisible())
	 						this.startEditing(rowIdx,colIndex);
	 					return false;
	 				}
 				}
 			}
 		}
 		
 		return true;
 	},
 	getOneSel:function(msg){
		var row=this.getSelectionModel().getSelections();
		var vMsg="";
		if(typeof msg!="undefined"){
			vMsg=msg;
		}
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条"+vMsg+"记录.");
           return null;
	    }else if(row.length>1){
	    	top.Ext.Msg.alert("提示信息","只能选择一条"+vMsg+"记录.");
	    	return null;
	    }else{
	    	return row[0];
	    }
	},
	getSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else{
	    	return row;
	    }
	},
	insertRec: function(rows){
		var keys = this.store.fields.keys;	
		for(var i=0;i<rows.length;i++){
		   var recrod = new this.store.recordType();
		   recrod.data = {};		      
		   for(var k=0;k<keys.length;k++){
			   recrod.data[keys[k]] = rows[i].get(keys[k]);
		   }
		   this.store.insert(this.store.getCount(),recrod);
	   }
	},
	countFldVal:function (fldName,val){	
	    var dataStore=this.store;
	    vCount = dataStore.getCount();
	    var dataList='';
	    var num=0;
	    if (vCount > 0) {
	      for (var i = 0; i < vCount; i++){
	    	  var rec=dataStore.getAt(i);
	    	  if(rec.get(fldName)==val){
	    		  num++;
	    	  }    	  
	      }
	    }
	    return num;    
	},
	getRecByFldVal:function (fldName,val){	
	    var dataStore=this.store;
	    vCount = dataStore.getCount();
	    var dataList='';
	    var num=0;
	    if (vCount > 0) {
	      for (var i = 0; i < vCount; i++){
	    	  var rec=dataStore.getAt(i);
	    	  if(rec.get(fldName)==val){
	    		  return rec;
	    	  }    	  
	      }
	    }
	    return null;
	},
	countFldVal:function(fldName,val,rowIdex){	
	    var dataStore=this.store;
	    vCount = dataStore.getCount();
	    var dataList='';
	    var num=0;
	    if (vCount > 0) {
	      for (var i = 0; i < vCount; i++){
	    	  var rec=dataStore.getAt(i);
	    	  if(rec.get(fldName)==val&&rowIdex!=i){
	    		  num++;
	    	  }    	  
	      }
	    }
	    return num;    
	},
 	onDestroy:function(){
		 if(this.body){
	         var c = this.body;
	         c.removeAllListeners();
	         c.update("");
	     }
	     if(this.rendered){  	   
	         Ext.destroy(this.view, this.loadMask);
	     }else if(this.store){
	         this.store.destroy();
	     }
	     
	     Ext.destroy(this.colModel,this.columns,this.bbar,this.store);
	     
	     delete this.selType;
	     delete this.addDisable;
	     delete this.delDisable;
	     delete this.delPkList;
	     delete this.vsingleSelect;
	     delete this.gridType;
	     delete this.store;
	     delete this.colModel;
	     delete this.view;
	     delete this.loadMask;
	     
	     Ext.ux.MyBaseEdGrid.superclass.onDestroy.call(this);
   },
   //需要重写的方法
   getColTitle:function(){
   	return [];
   },
   getCol:function(){
   	return [];
   },
   getQryUrl:function(){
   	return null;
   },
   getPkField:function(){
   	return null;
   }
});

Ext.reg('myBaseEdGrid', Ext.ux.MyBaseEdGrid);