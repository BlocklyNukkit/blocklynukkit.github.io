# 玩家进入服务器事件  
代码  

----

~~~python  
def PlayerJoinEvent(playerJoinEvent):  
    logger.info(playerJoinEvent.getPlayer())  
~~~  
FAQ  

----

Q:为什么这个函数叫PlayerJoinEvent，不叫InvokeMum之类的其他函数名呢？  
A:因为有一种叫[事件回调函数](http://www.blocklynukkit.info/1994516#_530)的特殊函数，blocklynukkit会在收到指定的事件后调用这些函数。  
Q:那logger.info()又是个什么东西？  
A:类似于python的print()，用于把信息打印在控制台上  
