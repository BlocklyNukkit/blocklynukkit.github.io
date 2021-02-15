# QQ机器人  
**前言：**  
众所周知，自从酷q被停止运营之后，一众qq机器人框架都挂了......  
现在市面上只剩下为数不多的没有跑路的qq机器人框架，其中小栗子机器人框架是唯一一个免费的大型框架（不是打广告），blocklynukkit从1.2.8.4测试版r1开始提供了对小栗子机器人框架的api支持，使得各位服主可以通过blocklynukkit快速的对接配置\*\*和mc服务器内部，本教程将介绍如何使用。  
**配置环境：**  
首先，你需要有一台windows系统的服务器（linux不推荐但也可以）  
下载1.2.8.4测试版r1及以上版本的blocklynukkit并安装  
下载连接**：****[blocklynukkit-1284-beta.r1.jar](https://www.mcbbs.net/plugin.php?id=link_redirect&target=https%3A%2F%2Ficesight.lanzous.com%2FigRZDfnf14d)**下载完毕后安装到nukkit服务器中  
然后下载小栗子机器人框架，可以官网下载，这里提供已经配置好bn接口的一键使用包：  
下载链接：**[小栗子qq机器人框架.zip](https://www.mcbbs.net/plugin.php?id=link_redirect&target=https%3A%2F%2Ficesight.lanzous.com%2Fi2gOjfnf8md)**  
然后解压，打开压缩包中的小栗子框架.exe程序  
打开后进入首页用户列表，右键空白处打开菜单，点击添加单个选项  
![](https://attachment.mcbbs.net/forum/202008/15/160711ehkufikoldxix2dm.png)  
输入账号和密码，点击添加  
![](https://attachment.mcbbs.net/forum/202008/15/160738b1wofennc2vn2oe8.png)  
添加完毕之后，在用户列表中选中刚刚添加的账号，右键打开菜单，选择登录选中qq选项  
![](https://attachment.mcbbs.net/forum/202008/15/160858bykt6t5d0dhdijpt.png)  
登录成功后，进入应用中心界面，启用HttpAPI和TCPAPI两个插件  
![](https://attachment.mcbbs.net/forum/202008/15/161116rhz2nfanmugmfah8.png)  
至此，机器人环境配置完成。  
**机器人使用：**  
blocklynukkit提供了机器人接口，可以通过JavaScript或者python来使用机器人，目前机器人接口比较少，日后会逐渐增加。  
注：图形编辑器的机器人模块正在加紧制作中，暂时没弄好。  
1、正确安装blocklynukkit：  
详见：[**https://www.mcbbs.net/thread-987302-1-1.html**](https://www.mcbbs.net/thread-987302-1-1.html)  
2、学习blocklynukkit基本的js于py函数库：  
详见：**[http://www.blocklynukkit.info](https://www.mcbbs.net/plugin.php?id=link_redirect&target=http%3A%2F%2Fwww.blocklynukkit.info)**  
3、编写第一个机器人  
bn机器人编写并不难，下面将带您初步认识编写一个机器人插件的一般步骤：  
①启动机器人  
首先确保环境正确配置的情况下，使用如下代码即可启动机器人  
javascript:  
```javascript
manager.qq.startBot();  
```  
python:  
```python
manager.qq.startBot()  
```  
②监听聊天事件  
bn中，qq机器人收到的聊天事件将以事件的形式公开给bn插件，关于qq聊天的事件目前有两种：  
QQGroupMessageEvent --机器人收到qq群消息事件  
其成员函数有：  
- String getSelfQQ() 获取收到消息的qq账号  
- String getFromQQ() 获取发送消息的qq账号  
- String getFromGroup() 获取消息事件的qq群号  
- String getMessage() 获取消息 

QQFriendMessageEvent --机器人收到qq好友消息事件  
其成员函数有：  
- String getEventId() 获取事件id  
- String getEventSeed() 获取事件中的群消息标识码  
- String getFromQQ() 获取发送消息的qq  
- String getSelfQQ() 获取接受到群消息的qq账号  
- String getMessage() 获取事件的消息  

下面是监听qq聊天事件的示例：  
javascript:  
```javascript
function QQFriendMessageEvent(event){  
    let self = event.getSelfQQ();  
    let fromqq = event.getFromQQ();  
    let message = event.getMessage();  
    logger.info(self+"收到好友"+fromqq+"的消息: "+message);  
}  
function QQGroupMessageEvent(event){  
    let self = event.getSelfQQ();  
    let group = event.getFromGroup();  
    let fromqq = event.getFromQQ();  
    let message = event.getMessage();  
    logger.info(self+"收到群"+group+"中"+fromqq+"的消息: "+message);  
}  
```  
python:  
```python
def QQFriendMessageEvent(event):  
    selfqq = event.getSelfQQ()  
    fromqq = event.getFromQQ()  
    message = event.getMessage()  
    logger.info(selfqq+u"收到好友"+fromqq+u"的消息: "+message)  
def QQGroupMessageEvent(event):  
    selfqq = event.getSelfQQ()  
    group = event.getFromGroup()  
    fromqq = event.getFromQQ()  
    message = event.getMessage()  
    logger.info(selfqq+u"收到群"+group+u"中"+fromqq+u"的消息: "+message)  
```  
③机器人发送信息  
JavaScript：  
```javascript
manager.qq.sendFriendMessage("发送消息qq号","发送给qq号","消息内容"); //给好友发消息  
manager.qq.sendGroupMessage("发送消息qq号","群号","消息内容"); //给qq群发送消息  
```  
python：  
```python
manager.qq.sendFriendMessage(u"发送消息qq号",u"发送给qq号",u"消息内容") #给好友发消息  
manager.qq.sendGroupMessage(u发送消息qq号",u"群号",u"消息内容") #给qq群发送消息  
```  
④机器人发送图文使用qq.sendGroupPicMessage(String fromQQ,String toGroup,String picturePaths,String message)发送qq图文消息picturePaths用;分割多个本地图片路径  
消息中使用图片只需用%picture数字%即可，数字指代第几个路径的图片，从0开始算起  
JavaScript：  
```javascript
manager.qq.sendGroupPicMessage("发送消息qq号","发送给qq号","C:/Users/Administer/image.jpg;C:/Users/Administer/smile.jpg","图片image.png是:%picture0%\n图片smile.jpg是%picture1% "); //给qq群发图文消息  
```  
python：  
```python
manager.qq.sendGroupMessage(u"发送消息qq号",u"群号",u"C:/Users/Administer/image.jpg;C:/Users/Administer/smile.jpg",u"图片image.png是:%picture0%\n图片smile.jpg是%picture1% ") #给qq群发送图文消息  
```