Ext.namespace('Ext.ux');

Ext.ux.form.DefinedDateField = Ext.extend(Ext.form.DateField, {  
    dateFormat: 'YYYY-mm-dd',  
    timeFormat: '',  
    defaultAutoCreate: {  
        tag: "input",  
        type: "text",  
        size: "20",  
        autocomplete: "off"  
    },  
    initComponent: function(){  
        Ext.ux.form.DateTimeField.superclass.initComponent.call(this);  
        this.format = this.dateFormat + ' ' + this.timeFormat;  
        this.afterMethod('afterRender', function(){  
            this.getEl().applyStyles('top:0');  
        });  
    },  
    getValue: function(){  
        return this.parseDate(Ext.form.DateField.superclass.getValue.call(this)) || '';  
    },  
    onTriggerClick: function(){  
        if (this.disabled) {  
            return;  
        }  
        if (this.menu == null) {  
            this.menu = new Ext.menu.DateTimeMenu();  
        }  
        Ext.apply(this.menu.picker, {  
            minDate: this.minValue,  
            maxDate: this.maxValue,  
            disabledDatesRE: this.ddMatch,  
            disabledDatesText: this.disabledDatesText,  
            disabledDays: this.disabledDays,  
            disabledDaysText: this.disabledDaysText,  
            format: this.format,  
            timeFormat: this.timeFormat,  
            dateFormat: this.dateFormat,  
            showToday: this.showToday,  
            minText: String.format(this.minText, this.formatDate(this.minValue)),  
            maxText: String.format(this.maxText, this.formatDate(this.maxValue))  
        });  
        if (this.menuEvents) {  
            this.menuEvents('on');  
        }  
        else {  
            this.menu.on(Ext.apply({}, this.menuListeners, {  
                scope: this  
            }));  
        }  
        this.menu.picker.setValue(this.getValue() || new Date());  
        this.menu.show(this.el, "tl-bl?");  
    }  
});  
Ext.reg('defineddatefield', Ext.ux.form.DefinedDateField);  