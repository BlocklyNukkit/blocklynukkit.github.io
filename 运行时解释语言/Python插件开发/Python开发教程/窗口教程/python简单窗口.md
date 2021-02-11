---  
toc: true  
---  
# 简单窗口  
代码：  
-----  
~~~~python  
manager.createCommand('pa','pa','pa')  
def pa(sender,args):  
    mmp = window.getSimpleWindowBuilder('Pa',u'选择一个玩家')  
    #载入按钮,把每个玩家的名字载入窗口中  
    for elem in server.getOnlinePlayers().values():  
        mmp.buildButton(elem.getName(),'')  
    #把窗口显示给玩家，下面有更详细的说明  
    mmp.showToPlayer(sender,'Invoke_Mum')  
def Invoke_Mum(player):  
    server.getPlayer(window.getEventResponseText(player).sendMessage(u'SSBB'))  
~~~~  
解释  
----  
Q：一定只能把函数命名为pa吗？我能不能命名为SC呢？  
A:不一定，这得看你第一行代码传给call参数的名字是什么了？如果你想改名为sb，那么你可以把第一行代码改成`manager.createCommand('pa','pa','sb')`。其它参数也类似  
