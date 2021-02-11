---  
toc: true  
---  
# JSON使用  
在本章节中，笔者将为您介绍如何灵活的运用JSON。本章[参考资料]([https://www.runoob.com/json](https://www.runoob.com/json))  
## 教程  
### JSON语法  
~~~  
{  
"XXX" : "XXX",  
"XXX1" : 1  
}  
~~~  
上面是一个JSON字符串的实例  
**一般地，在JSON中每一个键值或键名一定要用双引号扩起来**  
**特别地，键值如果为数字或布尔值的话，则无需双引号**  
JSON 语法是 JavaScript 对象表示语法的子集。  
*   数据在名称/值对中  
*   数据由逗号分隔  
*   大括号{}保存对象  
*   中括号\[\]保存数组，数组可以包含多个对象  
****  
### JSON转换为JSON对象  
上面的实例是一个JSON字符串。但是在JS中使用，需要将JSON字符串转换为JSON对象。  
使用指令  
>JSON.parse  
就可以将JSON字符串转换为JSON对象。  
****  
### JSON对象的使用  
~~~  
config='{"test" : "testt"}';//赋值JSON  
configobj=JSON.parse(config);//转换为JSON对象  
logger.info(configobj.test);  
~~~  
此时，运行该程序，会输出  
>testt  
**一般的，获取JSON的键值，使用**  
>JSON对象.键名  
**特别地，如果键名为中文，则使用**  
>JSON对象['键名']  
****  
### JSON使用实例  
本插件用途是给玩家发布公告  
~~~  
function sendMessage(){  
    if(l > len){  
        l=0;  
    }  
    var j_list = Java.type("cn.nukkit.Server").getInstance().getOnlinePlayers().values().toArray();  
    for (var j_index in j_list) {  
      j = j_list[j_index];  
      j.sendMessage(message[l]);  
    }  
    l++;  
}  
l=0;  
//初始化  
if(manager.readFile('./plugins/WNotice/config.yml') == 'FILE NOT FOUND'){  
    config='{"通知更替间隔时间（秒）" : 10,"通知消息" : ["      §l§bXX服务器 (>_<)\n          §e在游戏中使用  §f/report <玩家ID>\n            §c来举报作弊/非法组队/非法装备/非法RMB交易\n            §6欢迎大家进行举报监督，共创美好的游戏环境～"]}';  
   manager.writeFile('./plugins/WNotice/config.yml',manager.JSONtoYAML(config));  
}  
//判空  
config=manager.YAMLtoJSON(manager.readFile('./plugins/WNotice/config.yml'));  
configobj=JSON.parse(config);  
time=configobj['通知更替间隔时间（秒）']*20;  
message=configobj['通知消息'];  
len=getLength(message);  
//读取  
manager.createLoopTask('sendMessage',time);  
//循环调用  
~~~  
## 笔记  
>manager.readFile()如果没有该文件，则会返回FILE NOT FOUND  
>如果想要把JSON转换为YAML字符串，则可以使用manager.JSONtoYAML()  
>使用JSON前需要将JSON字符串转换为JSON对象，指令为JSON.parse()  
## 反思与总结  
JSON在JS中使用十分便捷，可以在JS中灵活运用，还能转换为YML，所以可以使用JSON来代替YAML操作