---
layout: default
toc: true
---
# manager基对象详解
[toc]

## manager基对象
manager基对象是进行基本操作的基对象，内含很多nk基础功能和便捷功能

## manager对象方法一览
*与编程开发文档同步于2020/8/12*
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|getFile|String dir,String filename|File-J|获取bn目录下dir文件夹的filename文件(可为不存在文件)|
|time|int second|String|将秒数转为时:分:秒字符串|
|createConfig|File-J file,int type|Config-J|在虚拟文件file处构建种类type(yaml==2)的配置文件|
|createCommand|String name,String des,String call|void|创建名称为name,描述为des的命令，回调函数的函数名为call|
|createCommand|String name,String des,String call,String per|void|同上，但是仅限有per权限的玩家可用|
|createTask|String functionName, int delay|TaskHandler-J|延迟dalay刻调用函数名functionName的函数(不会阻塞)|
|createLoopTask|String functionName, int delay|TaskHandler-J|每dalay刻重复调用函数名functionNmae的函数|
|getTaskId|TaskHandler-J handler|int|获取handler的任务id|
|cancelTask|int id|void|取消任务ID为id的任务|
|getPlugin|String name|Plugin-J|获取注册名称为name的插件对象|
|plugin|void|Plugin-J|获取plugin基对象(有点多余)|
|buildskin|Player-J player,String skin|void|将玩家的皮肤设置为BlocklyNukkit/skin文件夹下的同名皮肤(自动识别4D)|
|buildskinfor|Player-J player,String skin,Player to|void|同上，但只展示给to玩家|
|getMoney|Player-J player|double|获取玩家player金钱(EconomyAPI)|
|reduceMoney|Player-J player,double money|void|给玩家减去money金钱(可减为负数)|
|addMoney|Player-J player,double money|void|给玩家加上money金钱|
|setMoney|Player-J player,double money|void|设置玩家的金钱为money|
|getAllKeyInConfig|Config-J config|Array|获取config配置文件的所有键|
|putEasy|String string,\<E\> val|void|存入临时存储->键string,值为泛型val|
|getEasy\<E\>|String string|\<E\>|获取临时存储->键string|
|setPrivateCall|String event,String callname|void|将event事件回调在本插件映射到callname函数|
|PlayerIsOP|Player-J player|boolean|获取player是否是op|
|getPlayerGameMode|Player-J player|int|获取玩家的游戏模式id(0-生存 1-创造 2-冒险 3-观察者)|
|kickPlayer|Player-J player,String reason|void|踢出玩家player并发送踢出原因reason|
|setHTMLPlaceholder|String key,String value|void|设置速建官网功能的自定义placeholder|
|getPlayerArea|Player-J player|String|获取玩家的地理位置字符串|
|checkIsBear|Player-J player|String|使用BlackBE云黑检查玩家是否为熊孩子|
|buildvec3|double x,double y,double z|Vector3-J|从xyz构建三维向量|
|httpRequest|String method,String url,String data|String|发送method(GET/POST)类型的http请求并获取返回值|
|callFunciton|String fun,\<E+\> args...|void|调用函数名为fun的函数(直接写函数名调用所有插件中同名的函数,可以在开头加入xxx.js::函数名这样指定调用xxx.js下面的函数),注入参数为args,args参数不限类型,不限数量(0-1024),但是需要保证和被调用的函数参数一致|
|readFile|String path|String|以文本格式自适应编码读取path路径的文件返回字符串内容|
|writeFile|String path,String text|void|向path路径的文件(不存在自动创建)以utf8编码写入text|
|isFileSame|String p1,String p2|boolean|比较p1路径和p2路径的文件是否相同|
|JSONtoYAML|String json|String|将json字符串转为yaml字符串|
|YAMLtoJSON|String yaml|String|将yaml字符串转为json字符串|
|newCommand|String name, String des, Function fun|void|创建一个名称为name，描述为des，处理函数为fun的命令，fun是一个函数，有名函数的函数名(无需字符串)或一个匿名函数|
|newCommand|String name, String des, Function fun, String per|void|同上，但仅限有per权限的玩家使用|
|setTimeout|Function fun,int delay,<E+>... args|int|同浏览器上面的用法，但无法执行字符串，注册延时调用，返回任务id|
|clearTimeout|int id|void|取消任务ID为id的延时调用|
|setInterval|Function fun,int delay,<E+>... args|int|同浏览器上面的用法，但无法执行字符串，注册循环调用，返回任务id|
|clearInterval|int id|void|取消任务ID为id的循环调用|
|isWindows|void|boolean|获取当前运行环境是否是Windows系统|
|createPermission|String per,String description,String defaultper|void|创建一个权限，名称为per，描述为description，默认授予组为defaultper(OP/ALL/NONE 管理员/全体/控制台)|
|removePermission|String per|void|删除一个权限|
|checkPlayerPermission|String per,Player player|boolean|检查一个玩家是否有per权限|
|MD5Encryption|String str|String|将字符串进行md5加密|
|SHA1Encryption|String str|String|将字符串进行sha1加密|
|loadJar|String path|void|加载path路径的jar包作为依赖|
|bStats|String pluginName,String pluginVer,String authorName,int pluginid|void|使用bstats统计，参数请填写你在bstats的申请内容|
|getServerMotd|String host, int port, String callback|void|根据服务器IP和端口获取在线人数信息|
|getVariableFrom|String scriptName,String varName|\<E\>|获取scriptname插件varName变量的值|
|putVariableTo|String scriptName,String varName,<E> var|void|在scriptname插件中声明varName变量，值为var|
|getCPULoad|void|double|获取服务器的cpu负载|
|getCPUCores|void|int|获取服务器核心数量|
|getMemoryTotalSizeMB|void|double|获取服务器总内存|
|getMemoryUsedSizeMB|void|double|获取服务器已用内存|
|forceDisconnect|Player-J player|void|立即让服务器停止响应player的数据，玩家会以为自己网卡了|
|getEventFunctions|Event-J event|Array\<String\>|获取event事件可用的成员函数名称|

## 方法详解
* File manager.getFile(dir,filename)
    *获取bn目录下的文件*
    参数解释：
    - dir->String bn下的文件目录
    - filename->String 文件名称，需要后缀名
    
    返回值：
    - ->File 对应的java文件对象
    
    示例：
    ```
    //pragma JavaScript
    logger.info("文件的大小为"+manager.getFile("./test","file.txt").length()+"字节");
    ```
    ```python
    #pragma Python
    logger.info(u"文件的大小为"+manager.getFile(u"./test",u"file.txt").length()+u"字节")
    ```
    输出./plugins/BlocklyNukkit/test/file.txt文件的大小

* String manager.time(second)
    *将秒数转为时:分:秒字符串*
    参数解释：
    - second->int 秒数
    
    返回值：
    - ->String 对应的时分秒字符串
    
* Config manager.createConfig(file,type)
    *在虚拟文件file处构建种类type(yaml==2)的配置文件*
    参数解释：
    - file->File 使用的文件对象
    - type->int 配置文件种类，1==json，2==yml

    返回值：
    - ->Config 创建的配置文件对象
    
* void manager.createCommand(name,des,call)
    *创建名称为name,描述为des的命令，回调函数的函数名为call*
    参数解释：
    - name->String 命令名，支持unicode，但推荐只用英文
    - des->String 命令描述，支持unicode
    - call->String 命令回调函数，输入完成命令的时候会调用这个函数

    返回值：
    - ->void
    示例：
    ```
    //javascript
    manager.createCommand("testcmd", "测试命令", 'MyCallback');
    function MyCallback(sender, args) {
        sender.sendMessage("你刚刚输入了testcmd命令！");
        if(sender.getName()=="CONSOLE") {
            logger.info("刚刚testcmd命令被从控制台调用了");
        }else {
            logger.info("刚刚testcmd命令被玩家输入了");
        }
        for(let i=0;i<args,i++) {
            sender.sendMessage("第"+i+"个命令参数是："+args[i]);
        }
    }
    ```
    ```python
    #python
    manager.createCommand(u"testcmd", u"测试命令",u 'MyCallback')
    def MyCallback(sender, args):
        sender.sendMessage(u"你刚刚输入了testcmd命令！")
        if sender.getName()==u"CONSOLE":
            logger.info(u"刚刚testcmd命令被从控制台调用了")
        else:
            logger.info(u"刚刚testcmd命令被玩家输入了")
        i=0
        while i<len(args):
            sender.sendMessage(u"第"+i+u"个命令参数是："+args[i])
            i+=1
    ```
    
* void manager.createCommand(name,des,call,per)
    *同上，但是仅限有per权限的玩家可用*
    参数解释：
    - name->String 同上
    - des->String 同上
    - call->String 同上
    - per->String 命令的权限节点，只有拥有此权限的玩家才会看到此命令

    返回值：
    - ->void
    
* TaskHandler manager.createTask(functionName,tick)
    *延迟dalay刻调用函数名functionName的函数(不会阻塞)*
    参数解释：
    - functionName->String 延迟结束时候调用的函数的函数名
    - tick->int 延迟的tick时间，1tick=0.05s

    返回值：
    - ->TaskHandler 延迟调用的任务的管理器
    
* TaskHandler manager.createLoopTask(functionName,tick)
    *每dalay刻重复调用函数名functionNmae的函数*
    参数解释：
    - functionName->String 被重复调用的函数的函数名
    - tick->int 重复调用的tick间隔时间，1tick=0.05s

    返回值：
    - ->TaskHandler 循环调用的任务的管理器
    
* int manager.getTaskId(handler)
    *获取handler的任务id*
    参数解释：
    - handler->TaskHandler 定时任务的管理器

    返回值：
    - ->int 任务管理器的任务id
    
* void manager.cancelTask(id)
    *取消任务ID为id的任务*
    参数解释：
    - id->int 要取消的任务的id

    返回值：
    - ->void
    
* Plugin manager.getPlugin(name)
    *获取注册名称为name的插件对象*
    参数解释：
    - name->String 要获取的插件的名称

    返回值：
    - ->Plugin 获取的插件对象，如果插件未安装为空
    
* Plugin manager.plugin(void)
    *获取plugin基对象(有点多余)*
    参数解释：
    - void->void

    返回值：
    - ->Plugin plugin基对象(历史遗留的上古函数)
    
* void manager.buildskin(player,skin)
    *将玩家的皮肤设置为BlocklyNukkit/skin文件夹下的同名皮肤(自动识别4D)*
    参数解释：
    - player->Player 要设置皮肤的玩家对象
    - skin->String 皮肤名称，就是皮肤的图片名称，在BlocklyNukkit文件夹的skin文件夹中，无后缀名，4D皮肤请将json文件的名字改为图片相同的名字

    返回值：
    - ->void
    
* void manager.buildskinfor(player,skin,to)
    *同上，但只展示给to玩家*
    参数解释：
    - player->Player 同上
    - skin->String 同上
    - to->Player 能看见皮肤改动的玩家（其他玩家看不到皮肤改动）

    返回值：
    - ->void
    
* double manager.getMoney(player)
    *获取玩家player金钱(EconomyAPI)*
    参数解释：
    - player->Player 获取玩家的金钱

    返回值：
    - ->double 这个玩家的金钱数量
    
* void manager.reduceMoney(player,money)
    *给玩家减去money金钱(可减为负数)*
    参数解释：
    - player->Player 被操作的玩家
    - money->double 减少的金钱数量

    返回值：
    - ->void
    
* void manager.addMoney(player,money)
    *给玩家加上money金钱*
    参数解释：
    - player->Player 被操作的玩家
    - money->double 增加的金钱数量

    返回值：
    - ->void
    
* void manager.setMoney(player,money)
    *设置玩家的金钱为money*
    参数解释：
    - player->Player 被操作的对象
    - money->double 要设置的金钱数量

    返回值：
    - ->void
    
* Array manager.getAllKeyInConfig(config)
    *获取config配置文件的所有键*
    参数解释：
    - config->Config 要获取键的配置文件对象

    返回值：
    - ->Array 键名组成的字符串数组
    
* void manager.putEasy(string,val)
    *存入临时存储->键string,值为泛型val*
    参数解释：
    - string->String 存入临时存储的键名
    - val->\<E\> 随便的不限类型的变量

    返回值：
    - ->void
    
* \<E\> manager.getEasy\<E\>(string)
    *获取临时存储->键string*
    参数解释：
    - string->String 键名

    返回值：
    - ->\<E\> 你存储的变量
    
* void manager.setPrivateCall(event,callname)
   *~~将event事件回调在本插件映射到callname函数~~*
    该函数将在未来版本删除，已经无任何意义，只是为了向前兼容
    参数解释：
    - event->String 被映射的源事件
    - callname->String 映射的目标函数

    返回值：
    - ->void
    
* boolean manager.PlayerIsOP(player)
    *获取player是否是op*
    参数解释：
    - player->Player 要检测op的玩家

    返回值：
    - ->boolean 玩家是否为op
    
* int manager.getPlayerGameMode(player)
    *获取玩家的游戏模式id(0-生存 1-创造 2-冒险 3-观察者)*
    参数解释：
    - player->Player 要获取游戏模式的玩家

    返回值：
    - ->int 玩家的游戏模式整数值，与gamemode指令相同
    
* void manager.kickPlayer(player,reason)
    *踢出玩家player并发送踢出原因reason*
    参数解释：
    - player->Player 要被踢出的玩家
    - reason->String 踢出时玩家屏幕上显示的踢出原因

    返回值：
    - ->void
    
* void manager.setHTMLPlaceholder(key,value)
    *设置速建官网功能的自定义placeholder*
    参数解释：
    - key->String 被替换的内容
    - value->String 替换的目标内容

    返回值：
    - ->void
    
* String manager.getPlayerArea(player)
    *获取玩家的地理位置字符串*
    参数解释：
    - player->Player 要获取地理位置的玩家

    返回值：
    - ->String 玩家的地理位置，精确到城市
    
* String manager.checkIsBear(player)
    *使用BlackBE云黑检查玩家是否为熊孩子*
    参数解释：
    - player->Player 要通过云黑检测的玩家

    返回值：
    - ->String blackbe系统的返回值，非"0"字符串即为云黑
    
* Vector3 manager.buildvec3(x,y,z)
    *从xyz构建三维向量*
    参数解释：
    - x->double 向量的x轴分量长度
    - y->double 向量的y轴分量长度
    - z->double 向量的z轴分量长度

    返回值：
    - ->Vector3 你所构建的向量
    
* String manager.httpRequest(method,url,data)
    *发送method(GET/POST)类型的http请求并获取返回值*
    参数解释：
    - method->String 请求方法，为字符串GET或POST
    - url->String 请求的url，不包括？数据
    - data->String 请求的数据字符串，get将被连在url?后，post将被放在请求体中

    返回值：
    - ->String 请求的返回响应值
    
* \<E\> manager.callFunction(fun,args...)
    *调用函数名为fun的函数(直接写函数名调用所有插件中同名的函数,可以在开头加入xxx.js::函数名这样指定调用xxx.js下面的函数),注入参数为args,args参数不限类型,不限数量(0-1024),但是需要保证和被调用的函数参数一致*
    参数解释：
    - fun->String 调用的函数的名字（可以实现js与py的跨语言互调）
    - args...->\<E+\> 一堆参数，数量不限

    返回值：
    - ->\<E\> 被调用函数的返回值
    
* String manager.readFile(path)
    *以文本格式自适应编码读取path路径的文件返回字符串内容*
    参数解释：
    - path->String 文件路径，相对路径从nukkit内核开始

    返回值：
    - ->String 文件的内容文本
    
* void manager.writeFile(path,text)
    *向path路径的文件(不存在自动创建)以utf8编码写入text*
    参数解释：
    - path->String 文件路径，相对路径从nukkit内核开始
    - text->String 将以utf-8格式写入的文本

    返回值：
    - ->void
    
* boolean manager.isFileSame(p1,p2)
    *比较p1路径和p2路径的文件是否相同*
    参数解释：
    - p1->String 第一个文件的路径，相对路径从nukkit内核开始
    - p2->String 第二个文件的路径，相对路径从nukkit内核开始

    返回值：
    - ->boolean 两个路径指代的文件是否相同
    
* String manager.JSONtoYAML(json)
    *将json字符串转为yaml字符串*
    参数解释：
    - json->String 要转换到yaml的json字符串

    返回值：
    - ->String 转换出来的yaml字符串
    
* String manager.YAMLtoJSON(yaml)
    *将yaml字符串转为json字符串*
    参数解释：
    - yaml->String 要转换到json的yaml字符串

    返回值：
    - ->String 转换出来的json字符串
    
* void manager.newCommand(name,String,Function)
    *~~创建一个名称为name，描述为des，处理函数为fun的命令，fun是一个函数，有名函数的函数名(无需字符串)或一个匿名函数~~*
    **为了跨平台兼容性，该函数即将被删除**
    参数解释：
    - name->String
    - String->
    - Function->

    返回值：
    - ->void
    
* void manager.newCommand(name,String,Function,String)
    *~~同上，但仅限有per权限的玩家使用~~*
    **为了跨平台兼容性，该函数即将被删除**
    参数解释：
    - name->String
    - String->
    - Function->
    - String->

    返回值：
    - ->void
    
* int manager.setTimeout(fun,delay,args)
    *同浏览器上面的用法，但无法执行字符串，注册延时调用，返回任务id*
    **仅JavaScript**
    参数解释：
    - fun->Function 函数对象，可以为匿名函数
    - delay->int 延迟的tick
    - args-><E+>... 调用时注入的参数

    返回值：
    - ->int 此延迟调用任务的任务id
    
* void manager.clearTimeout(id)
    *取消任务ID为id的延时调用*
    参数解释：
    - id->int 要取消的延时调用的任务id

    返回值：
    - ->void
    
* int manager.setInterval(fun,delay,args)
    *同浏览器上面的用法，但无法执行字符串，注册循环调用，返回任务id*
    参数解释：
    - fun->Function 函数对象，可以为匿名函数
    - delay->int 循环调用的间隔tick
    - args-><E+>... 调用时注入的参数

    返回值：
    - ->int 此循环调用的任务id
    
* void manager.clearInterval(id)
    *取消任务ID为id的循环调用*
    参数解释：
    - id->int 要取消的循环调用的任务id

    返回值：
    - ->void
    
* boolean manager.isWindows(void)
    *获取当前运行环境是否是Windows系统*
    参数解释：
    - void->void

    返回值：
    - ->boolean 返回这个系统是不是司马的Windows
    
* void manager.createPermission(per,description,defaultper)
    *创建一个权限，名称为per，描述为description，默认授予组为defaultper(OP/ALL/NONE 管理员/全体/控制台)*
    参数解释：
    - per->String 权限节点名称，仅支持英文
    - description->String 权限节点描述，支持Unicode
    - defaultper->String 默认授予给(OP/ALL/NONE 管理员/全体/控制台)

    返回值：
    - ->void
    
* void manager.removePermission(per)
    *删除一个权限*
    参数解释：
    - per->String 权限节点的名称

    返回值：
    - ->void
    
* boolean manager.checkPlayerPermission(per,player)
    *检查一个玩家是否有per权限*
    参数解释：
    - per->String 要检测的权限节点名称
    - player->Player 要检测的玩家

    返回值：
    - ->boolean 玩家是否拥有权限节点
    
* String manager.MD5Encryption(str)
    *将字符串进行md5加密*
    参数解释：
    - str->String 要被md5加密的字符串

    返回值：
    - ->String 加密过后的字符串
    
* String manager.SHA1Encryption(str)
    *将字符串进行sha1加密*
    参数解释：
    - str->String 要被sha1加密的字符串

    返回值：
    - ->String 加密过后的字符串
    
* void manager.loadJar(path)
    *加载path路径的jar包作为依赖*
    参数解释：
    - path->String jar包路径，相对路径从nukkit内核开始

    返回值：
    - ->void

* void bStats(pluginName,pluginVer,authorName,pluginid)
    *使用bstats统计，参数请填写你在bstats的申请内容*
    参数解释：
    - pluginName->String 插件名称，填写你在bstats注册的插件名称
    - pluginVer->String 插件版本
    - authorName->String 作者名称，填写你的bstats用户名
    - pluginid->填写你在bstats注册的插件id

    返回值：
    - ->void
* void manager.getServerMotd(host,port,callback)
    *根据服务器IP和端口获取在线人数信息*
    参数解释：
    - host->String 要获取motd的服务器ip
    - port->int 端口
    - callback->String 回调函数

    返回值：
    - ->void
    
* \<E\> manager.getVariableFrom(scriptName,varName)
    *获取scriptname插件varName变量的值*
    参数解释：
    - scriptName->String 要从哪个插件获取变量
    - varName->String 要获取变量的变量名

    返回值：
    - ->\<E\> 获取到的变量
    
* void manager.putVariableTo(scriptName,varName,var)
    *在scriptname插件中声明varName变量，值为var*
    参数解释：
    - scriptName->String 要在哪个插件声明变量
    - varName->String 要声明的变量的变量名
    - var-><E> 变量的值

    返回值：
    - ->void
    
* double manager.getCPULoad(void)
    *获取服务器的cpu负载*
    参数解释：
    - void->void

    返回值：
    - ->double cpu负载信息，-1为获取失败
    
* int manager.getCPUCores(void)
    *获取服务器核心数量*
    参数解释：
    - void->void

    返回值：
    - ->int 服务器有几个核心
    
* double manager.getMemoryTotalSizeMB(void)
    *获取服务器总内存*
    参数解释：
    - void->void

    返回值：
    - ->double 服务器内存MB
    
* double manager.getMemoryUsedSizeMB(void)
    *获取服务器已用内存*
    参数解释：
    - void->void

    返回值：
    - ->double 服务器已用内存MB
    
* void manager.forceDisconnect(player)
    *立即让服务器停止响应player的数据，玩家会以为自己网卡了*
    参数解释：
    - player->Player 要停止响应的玩家

    返回值：
    - ->void
    
* Array\<String\> manager.getEventFunctions(event)
    *获取event事件可用的成员函数名称*
    参数解释：
    - event->Event 要获取成员函数的事件

    返回值：
    - ->Array\<String\> 所有成员函数函数名组成的数组
    

    
