package com.wifi.res.web;

import java.io.File;

import com.oreilly.servlet.multipart.FileRenamePolicy;

public class RenamePolicy implements FileRenamePolicy{
     public File  rename(File file){
        String newName = addInNameExt(file.getName() , getDateStr());
        
        File result = new File(file.getParentFile() , newName);

        return result;
     }
     //返回一个当前时间的字符串表示
     private String getDateStr(){
         return String.valueOf(System.nanoTime());
     }
     private String addInNameExt(String fullName , String add){
         String name = "";//文件名 
         String ext = ""; //后缀
         char point = '.';
        int index = fullName.lastIndexOf(point);
        
        if(index != -1){//如果有后缀
            name = fullName.substring(0 , index);
            ext = fullName.substring(index + 1);
        }
        else{
            name = fullName;
        }

        return add + point + ext;
     }
}
