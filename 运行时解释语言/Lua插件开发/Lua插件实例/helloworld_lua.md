---
toc: true
---
# **Hello,world**
不管是什么编程语言都从Hello,world开始
我们先创建一个函数，叫PlayerJoinEvent，这个函数在每次有玩家加入服务器的时候会自动调用
就像这样
```
function PlayerJoinEvent(event)
end
```
然后加上输出控制台提示
*logger:info("Hello,world!")*
代码变成
```
function PlayerJoinEvent(event)
    logger:info("Hello, world!")
end
```
然后把lua插件放到/plugin/BlocklyNukkit文件夹里，重启服务器
在你加入服务器的时候，你就可以看到提示啦