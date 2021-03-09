# 在C/C++注册命令  
本章节中，笔者将带您使用nk的基本输入系统——命令，并尝试自己制作一个命令。  

## 什么是命令  
命令是mc中标准的字符流交互系统，类似于stdin。  

## 基本概念  
### 命令体  
命令体
*****  

### 命令参数  
命令参数  
*****  

## 创建新命令  
代码如下：  
~~~c++
#include <blocklynukkit>
using namespace BlocklyNukkit;
EXPORT(cmdHandler)
void handler(int sender,int args);
int main(){
    logger << "示例命令插件加载完成" << endl;
    int manager = getJIndexByKey("manager");
    int createCommandMethod = getJMethod(manager, "createCommand", "*;*;*;");
    implementJFunction("myCommandHandler","cmdHandler");
    int args[] = {
        pushStringToJavaStack("mycmd"),
        pushStringToJavaStack("一个用C++编写的命令"),
        pushStringToJavaStack("myCommandHandler")
    };
    invokeJMethod(createCommandMethod, manager, 3, args);
    logger << YELLOW << "命令注册成功！" << endl;
    return 0;
}
void handler(int sender,int args){
    int length = getJArrayLength(args);
    if(length == 0){
        logger << BLUE << "命令被处理！" << endl;
    }else{
        logger << LIGHT_PURPLE;
        for(int i=0;i<length;i++){
            logger << getJString(getJObjectFromJArray(args, i));
        }
        logger << endl;
    }
}
~~~  

## 调用命令  
### 以控制台身份调用  
控制台调用  
*****  

### 以玩家身份调用  
玩家调用  
*****  

