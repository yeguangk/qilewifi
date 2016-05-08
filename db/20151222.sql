ALTER TABLE `sub_res`
ADD COLUMN `seq_id`  bigint NULL AFTER `sub_res_desc`;

ALTER TABLE `res_file`
ADD COLUMN `wb_url`  varchar(255) NULL AFTER `UPLOAD_DATE`;

ALTER TABLE `cust_equipment`
MODIFY COLUMN `EQUIP_NO`  varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
ADD COLUMN `EQUIP_ID`  bigint NULL FIRST ,
ADD COLUMN `EQUIP_NAME`  varchar(300) NULL AFTER `STATE`,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`EQUIP_ID`);