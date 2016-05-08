function removeTabEvent(tabpanel, tab) {
	Ext.MessageBox.show({
		title : '关闭' + tab.title + '窗口确认',
		msg : '是否关闭当前窗口',
		buttons : Ext.Msg.YESNO,
		icon : Ext.Msg.QUESTION,
		fn : function(btn, text) {
			if (btn == 'yes') {
				//移除beforeremove事件，为了防止tabpanel.remove(tab)时进入死循环  
				tabpanel.un('beforeremove', removeTabEvent);
				//移除tab            
				alert(tab.id);
				tabpanel.remove(tab);
				
				//增加beforeremove事件      
				tabpanel.addListener('beforeremove', removeTabEvent, tabpanel);
			}
		}
	}); //这一句很关键
	return false;
}