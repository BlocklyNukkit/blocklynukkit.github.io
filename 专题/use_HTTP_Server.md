# 使用HTTP服务器
*****  

合理的使用网络服务会对玩家体验带来质的改变！

blocklynukkit在manager对象中提供了许多网络服务接口。
请至少粗略查看一遍，这有利于我们接下来的步骤！

|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|createHttpServer|int port|boolean|在指定端口上创建http服务器|
|startHttpServer|int port|void|启动指定端口上已经创建了的http服务器|
|attachHandlerToHttpServer|int port,String path,String functionName|boolean|在指定端口的http服务器上绑定请求处理器，返回是否绑定成功|

接下来我们将演示基本的***HTTP服务器创建***和基本的***URL解/编码***操作。

HTTP服务器启动实列
{% capture idDisplays %}
```javascript
//pragma javascript
var httpserver = {
  port: 8001
};
if(manager.createHttpServer(httpserver.port)){
    logger.info("HTTP服务器允许在: 127.0.0.1:"+httpserver.port);
    var isBind = manager.attachHandlerToHttpServer(httpserver.port, "/api", F(function(request) {
    request.addDefaultResponseHeader();// 添加默认返回头
    request.addResponseHeader("Access-Control-Allow-Origin: *");// 添加允许的访问域 (跨域问题)
    logger.info(request.getHeader());// 返回String 获取请求传入的头部信息 如"Access-Control-Allow-Origin: *"
    logger.info(request.getMethod());// 返回String GET/POST 用于判断请求类型 如"GET"
    logger.info(request.getFromAddress());// 返回String 获取请求来源的地址 如"127.0.0.1:62231"
    logger.info(request.getProtocol());// 返回String 获取请求协议 如"HTTP/1.1"

    logger.info(request.getRequestRawUrl());// 返回String 未经URL解码的URL内容 如"a=1%202&b=3%264%2F"
    logger.info(request.getRequestUrl());// 返回String 已经URL解码的URL内容 如"a=1 2&b=3&4/" (此内容可能导致URL解析出现错误)

    var urlObj = parseURL(request.getRequestRawUrl());// 返回Object 解析URL 如{"a": "1 2", "b": "3&4/"}
    logger.info(JSON.stringify(urlObj));// URL解析的结果
    }));
    if(isBind){
        manager.startHttpServer(httpserver.port);
    }else{
        logger.warn("端口被占用！");
    }
} else {
    logger.warn("HTTP服务器创建失败！");
}
```
---NEWTAB---
```python
#pragma python  
```
---NEWTAB---
```lua
-- pragma lua  
```
---NEWTAB---
```php
//pragma php
```
{% endcapture %}
{% include tab.html tabId="identifyCodes" tabTitles="JavaScript,Python,Lua,PHP" tabContents=idDisplays %}

URL解析函数
{% capture idDisplays2 %}
```javascript
//pragma javascript
var URLEncoder = Java.type("java.net.URLEncoder").encode;// URL编码
var URLDecoder = Java.type("java.net.URLDecoder").decode;// URL解码
function parseURL(url){
	// logger.info(url);
	let arr, obj = {};
	arr = url.split("/?");
	arr = arr[arr.length - 1];
	arr = arr.split("&");
	arr.forEach(function (v) {
		let d = v.split("=");
		obj[d[0]] = URLDecoder(d[1], "UTF-8");
	});
	// logger.info(JSON.stringify(obj));
	return obj;
}
```
---NEWTAB---
```python
#pragma python  
```
---NEWTAB---
```lua
-- pragma lua  
```
---NEWTAB---
```php
//pragma php
```
{% endcapture %}
{% include tab.html tabId="identifyCodes2" tabTitles="JavaScript,Python,Lua,PHP" tabContents=idDisplays2 %}

在此页中，我们仍缺少Python、Lua、PHP等编程语言的教程，希望您能参与编辑为更多BN开发者提供帮助！
