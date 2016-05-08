package ${package}.bo;
import org.frame.db.bo.BaseBo;
public class ${class} extends BaseBo {
    <#list properties as prop>
    private ${prop.javaType} ${prop.attrName};
    </#list>
    <#list properties as prop>
    public ${prop.javaType} get${prop.attrName?cap_first}(){
       return this.${prop.attrName};
    }
    public void set${prop.attrName?cap_first}(${prop.javaType} ${prop.attrName}){
       this.${prop.attrName} = ${prop.attrName};
    }    
    </#list>
    public String toJsonString(){
	StringBuilder jsN=new StringBuilder();
	<#list properties as prop>
	jsN.append("\"${prop.attrName}\":").append(toJsonNew(this.get${prop.attrName?cap_first}()))<#if prop_has_next>.append(",")</#if>;
	</#list>	
	return jsN.toString();
    }
    public String toXmlString(){
	StringBuilder xmL=new StringBuilder();
	<#list properties as prop>
	xmL.append("<${prop.attrName}>").append(toXmlValue(this.get${prop.attrName?cap_first}())).append("</${prop.attrName}>");
	</#list>
	return xmL.toString();
    }
    public String getChangeInfo(BaseBo arg0) {
	// TODO Auto-generated method stub
	return null;
    }
}
