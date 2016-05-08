<?xml version="1.0" encoding="UTF-8"?>
<mapping class="${package}.bo.${class}" type="${mapType}"  pks="${pks}" baseTable="${tableName}">
<sql>${sql}</sql>
<attrList>
  <#list properties as prop>
  <attr name="${prop.attrName}" col="${prop.colName}" title="${prop.zhName}" ddlFlg="${prop.ddlFlg}" type="${prop.colType}" />
  </#list>
</attrList>
</mapping>
