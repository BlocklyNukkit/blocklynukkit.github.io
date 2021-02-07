---
toc: true
---
# logger基对象详解
## logger基对象
logger基对象是用来在控制台进行输出的基对象，于print(python)或console.log(js)不同，它会按照nk格式进行输出，而且效率更高

## logger基对象方法一览
*与编程开发文档同步于2020/7/19*
|方法名|参数|返回值|解释|
|-|-|-|-|
|info|void|void|在控制台发送INFO开头的信息|
|warning|void|void|在控制台发送WARN开头的警告|

## 方法详解
*  logger.info()
    *在控制台发送INFO开头的信息*  
    示例：javascript
    ```javascript
    logger.info("这是示例的输出信息");
    ```
    该示例会在控制台输出“这是示例的输出信息”字样
    示例：python
    ```python
    logger.info(u'这是示例的输出信息')
    ```
     该示例会在控制台输出“这是示例的输出信息”字样，注意要使用unicode字符串，因为在python中不这样使用会导致乱码。
    示例：javascript
    ```javascript
    function PlayerJoinEvent(event){
        logger.info("玩家"+event.getPlayer().getName()+"进入了服务器");
    }
    ```
    该实例会当玩家进入服务器的时候在控制台输出"玩家xxxx进入了服务器"字样
    示例：python
    ```python
    def PlayerJoinEvent(event):
        logger.info(u"玩家"+event.getPlayer().getName()+u"进入了服务器")
    ```
    该实例会当玩家进入服务器的时候在控制台输出"玩家xxxx进入了服务器"字样，注意要使用unicode字符串，因为在python中不这样使用会导致乱码。
    ******

* logger.warning()
    *在控制台发送WARN开头的警告*
    示例：javascript
    ```javascript
    logger.warning("发出了一个警告！");
    ```
    该示例会在控制台输出“发出了一个警告！”字样
    示例：python
    ```python
    logger.warning(u'发出了一个警告！')
    ```
    该示例会在控制台输出“发出了一个警告！”字样，注意要使用unicode字符串，因为在python中不这样使用会导致乱码。从bn解释器传入的参数所有字符串都是unicode。
    示例：javascript
    ```javascript
    function PlayerQuitEvent(event){
        logger.warning("玩家"+event.getPlayer().getName()+"退出了服务器"！);
    }
    ```
    该实例会当玩家退出服务器的时候在控制台输出"玩家xxxx退出了服务器！"字样
    示例：python
    ```python
    def PlayerQuitEvent(event):
        logger.warning(u"玩家"+event.getPlayer().getName()+u"退出了服务器！")
    ```
    该实例会当玩家退出服务器的时候在控制台输出"玩家xxxx退出了服务器！"字样，注意要使用unicode字符串，因为在python中不这样使用会导致乱码。从bn解释器传入的参数所有字符串都是unicode。
    ******
