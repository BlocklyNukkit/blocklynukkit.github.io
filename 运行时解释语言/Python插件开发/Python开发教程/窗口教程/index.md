---       
toc: true       
---       
# 窗口教程       
请注意，以下内容可能会经常用到某些函数，因此我们会先在这里一一介绍(~~到时候别又问什么意思啊~~       
       
常用函数介绍       
----       
manager.createCommand(name,des,call)介绍：       
>       
>*主条目：[manager基对象详解 § 方法详解](http://www.blocklynukkit.info/1994519#_69)*       
>void manager.createCommand(name,des,call)         
>*创建名称为name,描述为des的命令，回调函数的函数名为call*         
>参数解释：       
>|参数|类型|解释|       
>|----|----|----|       
>|name|String|命令名，支持unicode，但推荐只用英文|       
>|des|String|命令描述，支持unicode|       
>|call|String|命令回调函数，输入完成命令的时候会调用这个函数|       
>返回值：       
>void       
       
this.showToPlayer(p,callback)       
>       
> *主条目：[window基对象详解](http://www.blocklynukkit.info/1994527)*       
> this.showToPlayer(p,callback)       
> *将this窗口显示给p看，当p点击某个按钮时，调用callback函数*       
> 参数解释：       
> |参数|类型|解释|       
> |----|----|----|       
> |p|Player-J|要显示this窗口的玩家|       
> |callback|String|当玩家点击后，要调用的函数|       
       
player.sendMessage(message)       
>       
> *主条目：[BlocklyNukkit 编程开发文档 § Player常用函数](http://www.blocklynukkit.info/1994516#Player_778)*       
> player.sendMessage(message)       
> *给player发送message*       
> |参数|类型|解释|       
> |----|----|----|       
> |message|String|要发送的消息内容|       
> |返回值|Void|返回值为空|       
       
