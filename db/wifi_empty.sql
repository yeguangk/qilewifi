/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:5506
Source Database       : wifi

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-12-01 11:43:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `client_update_info`
-- ----------------------------
DROP TABLE IF EXISTS `client_update_info`;
CREATE TABLE `client_update_info` (
  `UPT_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PLATFORM_NO` varchar(60) DEFAULT NULL,
  `PKG_TYPE` int(11) DEFAULT NULL,
  `VERSION_INFO` varchar(20) DEFAULT NULL,
  `PKG_URL` varchar(150) DEFAULT NULL,
  `MD5_NUM` varchar(50) DEFAULT NULL,
  `UPDATE_METHOD` int(11) DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  `CUST_ID` double DEFAULT NULL,
  `Column_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`UPT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of client_update_info
-- ----------------------------

-- ----------------------------
-- Table structure for `column_info`
-- ----------------------------
DROP TABLE IF EXISTS `column_info`;
CREATE TABLE `column_info` (
  `Column_id` int(11) NOT NULL,
  `Parent_Column_id` int(11) DEFAULT NULL,
  `CUST_ID` double DEFAULT NULL,
  `Column_Name` varchar(60) DEFAULT NULL,
  `Column_Type` int(11) DEFAULT NULL,
  `Default_Flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`Column_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of column_info
-- ----------------------------

-- ----------------------------
-- Table structure for `column_res_list`
-- ----------------------------
DROP TABLE IF EXISTS `column_res_list`;
CREATE TABLE `column_res_list` (
  `Column_id` int(11) DEFAULT NULL,
  `RES_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='记录一个栏目和资源的关系，一个资源可以归属多个子栏目\r\n资源上的栏目，为该资源的管理缺省栏目，作为资源管理树使';

-- ----------------------------
-- Records of column_res_list
-- ----------------------------

-- ----------------------------
-- Table structure for `cust_equipment`
-- ----------------------------
DROP TABLE IF EXISTS `cust_equipment`;
CREATE TABLE `cust_equipment` (
  `EQUIP_NO` varchar(60) NOT NULL,
  `CUST_ID` double DEFAULT NULL,
  `POINT_ID` double NOT NULL,
  `GROUP_ID` double DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`EQUIP_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cust_equipment
-- ----------------------------

-- ----------------------------
-- Table structure for `cust_group`
-- ----------------------------
DROP TABLE IF EXISTS `cust_group`;
CREATE TABLE `cust_group` (
  `GROUP_ID` double NOT NULL,
  `CUST_ID` double DEFAULT NULL,
  `GROUP_NAME` varchar(100) DEFAULT NULL,
  `GROUP_DESC` varchar(400) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`GROUP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cust_group
-- ----------------------------

-- ----------------------------
-- Table structure for `cust_info`
-- ----------------------------
DROP TABLE IF EXISTS `cust_info`;
CREATE TABLE `cust_info` (
  `CUST_ID` double NOT NULL,
  `CUST_TYPE` int(11) DEFAULT NULL,
  `NAME` varchar(300) DEFAULT NULL,
  `JC` varchar(80) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PHONE` varchar(60) DEFAULT NULL,
  `FAX` varchar(60) DEFAULT NULL,
  `ADDRESS` varchar(300) DEFAULT NULL,
  `LINK_MAN` varchar(30) DEFAULT NULL,
  `ACC_NO` varchar(30) DEFAULT NULL,
  `PWD` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`CUST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cust_info
-- ----------------------------
INSERT INTO `cust_info` VALUES ('1', '1', '测试', '测试', null, null, null, null, 'admin', '202CB962AC59075B964B07152D234B70');

-- ----------------------------
-- Table structure for `cust_point`
-- ----------------------------
DROP TABLE IF EXISTS `cust_point`;
CREATE TABLE `cust_point` (
  `POINT_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CUST_ID` double DEFAULT NULL,
  `GROUP_ID` double DEFAULT NULL,
  `POINT_NAME` varchar(60) DEFAULT NULL,
  `POINT_ADDRESS` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `POINT_PHONE` varchar(50) DEFAULT NULL,
  `POINT_FAX` varchar(50) DEFAULT NULL,
  `POINT_MAN` varchar(30) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  `REGION_NO` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`POINT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cust_point
-- ----------------------------

-- ----------------------------
-- Table structure for `panel_box_def`
-- ----------------------------
DROP TABLE IF EXISTS `panel_box_def`;
CREATE TABLE `panel_box_def` (
  `BOX_ID` double NOT NULL,
  `PANEL_ID` double DEFAULT NULL,
  `BOX_TITLE` varchar(150) DEFAULT NULL,
  `BOX_DESC` varchar(400) DEFAULT NULL,
  `BOX_TYPE` int(11) DEFAULT NULL,
  `SHOW_NO` int(11) DEFAULT NULL,
  `PANEL_ID2` double DEFAULT NULL,
  `RES_TYPE` int(11) DEFAULT NULL,
  `SHOW_NUM` int(11) DEFAULT NULL,
  PRIMARY KEY (`BOX_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='面板项类型\r\n   1：滚动\r\n   2：列表';

-- ----------------------------
-- Records of panel_box_def
-- ----------------------------

-- ----------------------------
-- Table structure for `panel_box_item`
-- ----------------------------
DROP TABLE IF EXISTS `panel_box_item`;
CREATE TABLE `panel_box_item` (
  `PDTL_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `BOX_ID` double DEFAULT NULL,
  `SHOW_NO` int(11) DEFAULT NULL,
  `Column_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`PDTL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of panel_box_item
-- ----------------------------

-- ----------------------------
-- Table structure for `panel_def`
-- ----------------------------
DROP TABLE IF EXISTS `panel_def`;
CREATE TABLE `panel_def` (
  `PANEL_ID` double NOT NULL,
  `SCREEN_ID` int(11) DEFAULT NULL,
  `TITLE` varchar(150) DEFAULT NULL,
  `PANEL_DESC` varchar(400) DEFAULT NULL,
  `IMAGE_URL` varchar(150) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`PANEL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='屏幕类型\r\n    1：手机\r\n    2：电视机\r\n    3：PC机';

-- ----------------------------
-- Records of panel_def
-- ----------------------------

-- ----------------------------
-- Table structure for `panel_group`
-- ----------------------------
DROP TABLE IF EXISTS `panel_group`;
CREATE TABLE `panel_group` (
  `PANELS_ID` double NOT NULL,
  `GROUP_ID` double DEFAULT NULL,
  `POINT_ID` double DEFAULT NULL,
  `PANELS_NAME` varchar(60) DEFAULT NULL,
  `PANELS_DESC` varchar(400) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  `VERSION_VAL` int(11) DEFAULT NULL,
  PRIMARY KEY (`PANELS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of panel_group
-- ----------------------------

-- ----------------------------
-- Table structure for `panel_group_dtl`
-- ----------------------------
DROP TABLE IF EXISTS `panel_group_dtl`;
CREATE TABLE `panel_group_dtl` (
  `DTL_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PANELS_ID` double DEFAULT NULL,
  `PANEL_ID` double DEFAULT NULL,
  `SHOW_NO` int(11) DEFAULT NULL,
  PRIMARY KEY (`DTL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of panel_group_dtl
-- ----------------------------

-- ----------------------------
-- Table structure for `region_info`
-- ----------------------------
DROP TABLE IF EXISTS `region_info`;
CREATE TABLE `region_info` (
  `REGION_NO` varchar(30) NOT NULL,
  `REGION_NAME` varchar(60) DEFAULT NULL,
  `REGION_DESC` varchar(400) DEFAULT NULL,
  `PARENT_NO` varchar(30) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`REGION_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of region_info
-- ----------------------------

-- ----------------------------
-- Table structure for `res_attr`
-- ----------------------------
DROP TABLE IF EXISTS `res_attr`;
CREATE TABLE `res_attr` (
  `ATTR_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RES_ID` double DEFAULT NULL,
  `ATTR_NAME` varchar(30) DEFAULT NULL,
  `ATTR_ZH` varchar(60) DEFAULT NULL,
  `ATTR_VAL` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`ATTR_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='资源类型：\r\n  1：电影\r\n  2：APK\r\n  3：通讯运营商资源\r\n  4';

-- ----------------------------
-- Records of res_attr
-- ----------------------------

-- ----------------------------
-- Table structure for `res_file`
-- ----------------------------
DROP TABLE IF EXISTS `res_file`;
CREATE TABLE `res_file` (
  `FILE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `RES_ID` int(11) DEFAULT NULL,
  `sub_res_id` int(11) DEFAULT NULL,
  `FILE_TYPE` varchar(30) DEFAULT NULL,
  `FILE_PATH` varchar(100) DEFAULT NULL,
  `PRE` varchar(30) DEFAULT NULL,
  `seq_id` int(11) DEFAULT NULL,
  `UPLOAD_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`FILE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of res_file
-- ----------------------------

-- ----------------------------
-- Table structure for `res_info`
-- ----------------------------
DROP TABLE IF EXISTS `res_info`;
CREATE TABLE `res_info` (
  `RES_ID` double(20,0) NOT NULL,
  `res_code` varchar(60) DEFAULT NULL,
  `fee_type` int(11) DEFAULT NULL,
  `RES_TYPE` int(11) DEFAULT NULL,
  `RES_TITLE` varchar(60) DEFAULT NULL,
  `res_desc` varchar(1024) DEFAULT NULL,
  `CHECK_STATUS` int(11) DEFAULT NULL,
  `CHECK_MAN` varchar(30) DEFAULT NULL,
  `CHECK_DATE` datetime DEFAULT NULL,
  `PUBLISH_MAN` varchar(30) DEFAULT NULL,
  `PUBLISH_DATE` datetime DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`RES_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of res_info
-- ----------------------------

-- ----------------------------
-- Table structure for `res_owner_tag`
-- ----------------------------
DROP TABLE IF EXISTS `res_owner_tag`;
CREATE TABLE `res_owner_tag` (
  `key_id` int(11) NOT NULL,
  `RES_ID` int(11) DEFAULT NULL,
  `Tag_Type` varchar(30) DEFAULT NULL,
  `Tag_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='定义一个资源在归属上的一些标签\r\n归属标签有：\r\nSITE_GROUP_TAG  营业点分组标记\r\n                                  ';

-- ----------------------------
-- Records of res_owner_tag
-- ----------------------------

-- ----------------------------
-- Table structure for `res_type`
-- ----------------------------
DROP TABLE IF EXISTS `res_type`;
CREATE TABLE `res_type` (
  `TYPE_ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `TYPE_NAME` varchar(30) DEFAULT NULL,
  `TYPE_DESC` varchar(300) DEFAULT NULL,
  `PARENT_ID` double DEFAULT NULL,
  `RES_TYPE` int(11) DEFAULT NULL,
  `CREATE_DATE` datetime DEFAULT NULL,
  `CREATE_MAN` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of res_type
-- ----------------------------

-- ----------------------------
-- Table structure for `sub_res`
-- ----------------------------
DROP TABLE IF EXISTS `sub_res`;
CREATE TABLE `sub_res` (
  `RES_ID` double NOT NULL,
  `sub_res_id` double NOT NULL,
  `sub_res_name` varchar(60) DEFAULT NULL,
  `sub_res_desc` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`RES_ID`,`sub_res_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sub_res
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_resource_info`
-- ----------------------------
DROP TABLE IF EXISTS `sys_resource_info`;
CREATE TABLE `sys_resource_info` (
  `RES_NO` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `RES_NAME` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `RES_TYPE` decimal(1,0) DEFAULT NULL,
  `RES_URL` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PARENT_NO` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `REMARKS` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ORG_CD` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `APP_ID` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SEQ_NUM` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`RES_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_resource_info
-- ----------------------------
INSERT INTO `sys_resource_info` VALUES ('base', '系统权限管理', '0', '', '0', '', '', '', '999');
INSERT INTO `sys_resource_info` VALUES ('busiPoint', '营业点管理', '0', '/wifi/cust/pointMain.jsp', 'custMgr', '', '', '', '3');
INSERT INTO `sys_resource_info` VALUES ('clientMgr', '终端信息管理', '0', '', '0', '', '', '', '4');
INSERT INTO `sys_resource_info` VALUES ('clientUpt', '终端更新升级', '0', '/wifi/upt/uptPkgMain.jsp', 'clientMgr', '', '', '', '1');
INSERT INTO `sys_resource_info` VALUES ('clsInfo', '栏目信息管理', '0', '/wifi/column/columnMgr.jsp', 'clsMgr', '', '', '', '2');
INSERT INTO `sys_resource_info` VALUES ('clsMgr', '资源栏目管理', '0', '', '0', '', '', '', '2');
INSERT INTO `sys_resource_info` VALUES ('clsResMgr', '栏目资源管理', '0', '/wifi/column/columnResMgr.jsp', 'clsMgr', '', '', '', '5');
INSERT INTO `sys_resource_info` VALUES ('cust', '客户信息管理', '0', '/wifi/cust/custMain.jsp', 'custMgr', '', '', '', '1');
INSERT INTO `sys_resource_info` VALUES ('custClient', '客户终端管理', '0', '/wifi/cust/equipMain.jsp', 'custMgr', '', '', '', '6');
INSERT INTO `sys_resource_info` VALUES ('custMgr', '客户信息管理', '0', '', '0', '', '', '', '3');
INSERT INTO `sys_resource_info` VALUES ('panelsMgr', '面板分组管理', '0', '/wifi/panels/panelMain.jsp', 'custMgr', '', '', '', '5');
INSERT INTO `sys_resource_info` VALUES ('pnlMgr', '面板信息管理', '0', '/wifi/panel/panelMain.jsp?type=MOVIE', 'custMgr', '', '', '', '4');
INSERT INTO `sys_resource_info` VALUES ('regionMgr', '区域信息管理', '0', '/wifi/region/regionMgr.jsp', 'clsMgr', '', '', '', '1');
INSERT INTO `sys_resource_info` VALUES ('resInfoMgr', '资源信息管理', '0', '/wifi/resinfo/resMain.jsp', 'clsMgr', '', '', '', '3');
INSERT INTO `sys_resource_info` VALUES ('roleMgr1', '岗位管理', '0', '/app/role/roleMain.jsp', 'base', '', '', '', '3');
INSERT INTO `sys_resource_info` VALUES ('subResInfo', '资源分集管理', '0', '/wifi/resinfo/subResMain.jsp', 'clsMgr', '', '', '', '4');
INSERT INTO `sys_resource_info` VALUES ('sysres', '系统资源', '0', '/app/resource/resourceMgr.jsp', 'base', '', '', '', '4');
INSERT INTO `sys_resource_info` VALUES ('userMgr1', '用户管理', '0', '/app/user/userMain.jsp', 'base', '', '', '', '2');

-- ----------------------------
-- Table structure for `sys_role`
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `ROLE_ID` decimal(8,0) NOT NULL,
  `ROLE_NAME` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `STATE` decimal(8,0) DEFAULT NULL,
  `DEPART_ID` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DEPART_NAME` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ROLE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '系统管理员', '0', null, null);
INSERT INTO `sys_role` VALUES ('2', '1212', '0', '1', '测试');

-- ----------------------------
-- Table structure for `sys_role_res`
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_res`;
CREATE TABLE `sys_role_res` (
  `ROLE_ID` decimal(8,0) DEFAULT NULL,
  `RES_NO` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_role_res
-- ----------------------------
INSERT INTO `sys_role_res` VALUES ('27', 'base');
INSERT INTO `sys_role_res` VALUES ('27', 'sysMgr');
INSERT INTO `sys_role_res` VALUES ('27', 'userMgr');
INSERT INTO `sys_role_res` VALUES ('27', 'sys02_001');
INSERT INTO `sys_role_res` VALUES ('27', 'sys02_002');
INSERT INTO `sys_role_res` VALUES ('27', 'sys02_003');
INSERT INTO `sys_role_res` VALUES ('27', 'sys02_004');
INSERT INTO `sys_role_res` VALUES ('27', 'sys02_005');
INSERT INTO `sys_role_res` VALUES ('27', 'roleMgr');
INSERT INTO `sys_role_res` VALUES ('27', 'sys03_001');
INSERT INTO `sys_role_res` VALUES ('27', 'sys03_002');
INSERT INTO `sys_role_res` VALUES ('27', 'sys03_003');
INSERT INTO `sys_role_res` VALUES ('27', 'sys03_004');
INSERT INTO `sys_role_res` VALUES ('27', 'sysres');
INSERT INTO `sys_role_res` VALUES ('27', 'paramMgr');
INSERT INTO `sys_role_res` VALUES ('27', 'userMgr1');
INSERT INTO `sys_role_res` VALUES ('27', 'roleMgr1');
INSERT INTO `sys_role_res` VALUES ('28', 'base');
INSERT INTO `sys_role_res` VALUES ('28', 'sysMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'userMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'sys02_001');
INSERT INTO `sys_role_res` VALUES ('28', 'sys02_002');
INSERT INTO `sys_role_res` VALUES ('28', 'sys02_003');
INSERT INTO `sys_role_res` VALUES ('28', 'sys02_004');
INSERT INTO `sys_role_res` VALUES ('28', 'sys02_005');
INSERT INTO `sys_role_res` VALUES ('28', 'roleMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'sys03_001');
INSERT INTO `sys_role_res` VALUES ('28', 'sys03_002');
INSERT INTO `sys_role_res` VALUES ('28', 'sys03_003');
INSERT INTO `sys_role_res` VALUES ('28', 'sys03_004');
INSERT INTO `sys_role_res` VALUES ('28', 'sysres');
INSERT INTO `sys_role_res` VALUES ('28', 'paramMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'userMgr1');
INSERT INTO `sys_role_res` VALUES ('28', 'roleMgr1');
INSERT INTO `sys_role_res` VALUES ('28', 'lmMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'lmType');
INSERT INTO `sys_role_res` VALUES ('28', 'lmSpace');
INSERT INTO `sys_role_res` VALUES ('28', 'warnTask');
INSERT INTO `sys_role_res` VALUES ('28', 'devMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'cfgMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'boMgr');
INSERT INTO `sys_role_res` VALUES ('28', 'funMgr');
INSERT INTO `sys_role_res` VALUES ('26', 'base');
INSERT INTO `sys_role_res` VALUES ('26', 'sysMgr');
INSERT INTO `sys_role_res` VALUES ('26', 'userMgr1');
INSERT INTO `sys_role_res` VALUES ('26', 'roleMgr1');
INSERT INTO `sys_role_res` VALUES ('26', 'sysres');
INSERT INTO `sys_role_res` VALUES ('26', 'paramMgr');
INSERT INTO `sys_role_res` VALUES ('2', 'pubRes');
INSERT INTO `sys_role_res` VALUES ('2', 'apkRes');
INSERT INTO `sys_role_res` VALUES ('2', 'appType');
INSERT INTO `sys_role_res` VALUES ('2', 'appInfo');
INSERT INTO `sys_role_res` VALUES ('2', 'movieRes');
INSERT INTO `sys_role_res` VALUES ('2', 'movieType');
INSERT INTO `sys_role_res` VALUES ('2', 'movieInfo');
INSERT INTO `sys_role_res` VALUES ('1', 'pubRes');
INSERT INTO `sys_role_res` VALUES ('1', 'apkRes');
INSERT INTO `sys_role_res` VALUES ('1', 'appType');
INSERT INTO `sys_role_res` VALUES ('1', 'appInfo');
INSERT INTO `sys_role_res` VALUES ('1', 'movieRes');
INSERT INTO `sys_role_res` VALUES ('1', 'movieType');
INSERT INTO `sys_role_res` VALUES ('1', 'movieInfo');
INSERT INTO `sys_role_res` VALUES ('1', 'busRes');
INSERT INTO `sys_role_res` VALUES ('1', 'prodType');
INSERT INTO `sys_role_res` VALUES ('1', 'prodInfo');
INSERT INTO `sys_role_res` VALUES ('1', 'custMgr');
INSERT INTO `sys_role_res` VALUES ('1', 'cust');
INSERT INTO `sys_role_res` VALUES ('1', 'busiPoint');
INSERT INTO `sys_role_res` VALUES ('1', 'pnlMgr');
INSERT INTO `sys_role_res` VALUES ('1', 'panelsMgr');
INSERT INTO `sys_role_res` VALUES ('1', 'custClient');
INSERT INTO `sys_role_res` VALUES ('1', 'clientMgr');
INSERT INTO `sys_role_res` VALUES ('1', 'clientUpt');
INSERT INTO `sys_role_res` VALUES ('1', 'base');
INSERT INTO `sys_role_res` VALUES ('1', 'userMgr1');
INSERT INTO `sys_role_res` VALUES ('1', 'roleMgr1');
INSERT INTO `sys_role_res` VALUES ('1', 'sysres');
INSERT INTO `sys_role_res` VALUES ('1', 'test');

-- ----------------------------
-- Table structure for `sys_user`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `USER_ID` decimal(8,0) NOT NULL,
  `NAME` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LOGIN_CODE` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DEPART_ID` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `STATE` decimal(8,0) NOT NULL,
  `USER_TYPE_CD` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `USER_TYPE_NAMES` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DEPART_NAME` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SEX_FLG` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BIRTHDAY` date DEFAULT NULL,
  `ROLE_NAMES` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('0', '系统管理', 'sys_test', '202CB962AC59075B964B07152D234B70', '', '0', 'U', 'U', 'point21', 'M', '2014-04-17', '系统管理员,');
INSERT INTO `sys_user` VALUES ('254', 'gaoqx', 'gaoqx', '698D51A19D8A121CE581499D7B701668', '2', '1', 'P', 'P', 'point21', 'F', '1980-02-08', '系统管理员,');
INSERT INTO `sys_user` VALUES ('255', '11', '111', '698D51A19D8A121CE581499D7B701668', '1', '0', '', '', '测试', 'F', '2014-11-24', '系统管理员,');

-- ----------------------------
-- Table structure for `sys_user_res`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_res`;
CREATE TABLE `sys_user_res` (
  `USER_ID` decimal(8,0) DEFAULT NULL,
  `RES_NO` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_user_res
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `USER_ID` decimal(8,0) DEFAULT NULL,
  `ROLE_ID` decimal(8,0) DEFAULT NULL,
  `ORG_CD` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ORG_NAME` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES ('237', '23', null, null);
INSERT INTO `sys_user_role` VALUES ('153', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('229', '18', null, null);
INSERT INTO `sys_user_role` VALUES ('232', '18', null, null);
INSERT INTO `sys_user_role` VALUES ('41', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('16', '14', null, null);
INSERT INTO `sys_user_role` VALUES ('60', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('11', '15', null, null);
INSERT INTO `sys_user_role` VALUES ('178', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('34', '22', null, null);
INSERT INTO `sys_user_role` VALUES ('162', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('184', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('172', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('99', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('90', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('89', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('180', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('57', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('139', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('61', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('77', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('65', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('129', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('79', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('163', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('95', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('73', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('68', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('115', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('222', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('174', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('53', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('59', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('63', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('120', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('78', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('117', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('135', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('131', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('166', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('54', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('70', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('102', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('58', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('62', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('69', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('165', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('138', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('124', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('164', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('66', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('112', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('110', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('72', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('92', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('109', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('83', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('145', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('118', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('111', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('48', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('64', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('87', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('96', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('167', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('67', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('74', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('81', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('97', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('23', '13', null, null);
INSERT INTO `sys_user_role` VALUES ('32', '4', null, null);
INSERT INTO `sys_user_role` VALUES ('33', '3', null, null);
INSERT INTO `sys_user_role` VALUES ('21', '6', null, null);
INSERT INTO `sys_user_role` VALUES ('44', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('82', '7', null, null);
INSERT INTO `sys_user_role` VALUES ('88', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('91', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('94', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('36', '2', null, null);
INSERT INTO `sys_user_role` VALUES ('56', '11', null, null);
INSERT INTO `sys_user_role` VALUES ('28', '11', null, null);
INSERT INTO `sys_user_role` VALUES ('31', '12', null, null);
INSERT INTO `sys_user_role` VALUES ('42', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('22', '5', null, null);
INSERT INTO `sys_user_role` VALUES ('26', '11', null, null);
INSERT INTO `sys_user_role` VALUES ('169', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('230', '18', null, null);
INSERT INTO `sys_user_role` VALUES ('35', '2', null, null);
INSERT INTO `sys_user_role` VALUES ('38', '2', null, null);
INSERT INTO `sys_user_role` VALUES ('220', '21', null, null);
INSERT INTO `sys_user_role` VALUES ('71', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('25', '11', null, null);
INSERT INTO `sys_user_role` VALUES ('46', '9', null, null);
INSERT INTO `sys_user_role` VALUES ('43', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('45', '10', null, null);
INSERT INTO `sys_user_role` VALUES ('100', '16', null, null);
INSERT INTO `sys_user_role` VALUES ('93', '17', null, null);
INSERT INTO `sys_user_role` VALUES ('231', '18', null, null);
INSERT INTO `sys_user_role` VALUES ('39', '2', null, null);
INSERT INTO `sys_user_role` VALUES ('37', '2', null, null);
INSERT INTO `sys_user_role` VALUES ('238', '1', null, null);
INSERT INTO `sys_user_role` VALUES ('225', '23', null, null);
INSERT INTO `sys_user_role` VALUES ('236', '1', null, null);
INSERT INTO `sys_user_role` VALUES ('234', '20', null, null);
INSERT INTO `sys_user_role` VALUES ('208', '23', null, null);
INSERT INTO `sys_user_role` VALUES ('221', '23', null, null);
INSERT INTO `sys_user_role` VALUES ('249', '2', null, null);
INSERT INTO `sys_user_role` VALUES (null, '26', null, null);
INSERT INTO `sys_user_role` VALUES ('255', '1', '0', '墨子工作室');
INSERT INTO `sys_user_role` VALUES (null, '26', '0', '墨子工作室');
INSERT INTO `sys_user_role` VALUES ('256', '26', '0', '墨子工作室');
INSERT INTO `sys_user_role` VALUES ('257', '27', '', '');
INSERT INTO `sys_user_role` VALUES ('254', '1', '', '');
INSERT INTO `sys_user_role` VALUES ('0', '1', '001', 'tt');
INSERT INTO `sys_user_role` VALUES (null, '1', '', '');

-- ----------------------------
-- Table structure for `update_range`
-- ----------------------------
DROP TABLE IF EXISTS `update_range`;
CREATE TABLE `update_range` (
  `UPT_ID` bigint(20) DEFAULT NULL,
  `REGION_NO` varchar(30) DEFAULT NULL,
  `POINT_ID` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of update_range
-- ----------------------------

-- ----------------------------
-- Table structure for `wifi_pk`
-- ----------------------------
DROP TABLE IF EXISTS `wifi_pk`;
CREATE TABLE `wifi_pk` (
  `code` varchar(255) DEFAULT NULL,
  `value` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wifi_pk
-- ----------------------------
