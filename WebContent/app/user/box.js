Ext.namespace('com.qshin.box');
com.qshin.box.RoleBox=Ext.extend(Ext.ux.BaseGridBox, {
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('roleId'));
			this.setRawValue(selRec.get('roleName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('userId');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["roleId","roleName"];
   },
   getColTitle:function(){
		return [
        {header:"岗位标识",dataIndex:"roleId"},
        {header:"岗位名称",dataIndex:"roleName"}
		];
   },
   getQryUrl:function(){
		return G_ROOT_PATH + '/sysRole.cll?method=queryPage';
   },
   getPkField:function(){
		return "roleId";
   }	
});
Ext.reg("RoleBox",com.qshin.box.RoleBox);
