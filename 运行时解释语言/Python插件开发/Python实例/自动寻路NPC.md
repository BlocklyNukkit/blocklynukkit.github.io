# 自动寻路NPC

[TOC]

```python
# -*- coding: UTF-8 -*-
import cn.nukkit.Server as nk #从java导入nk的服务器类
import random #导入python的随机数类

logger.info(u"blocklynukkit NPC示例模组加载完成") #发出加载完成提示
#注意字符串要使用Unicode字符串，否则乱码
manager.createPermission("bnnpc.example.create",u"bnnpc实例模组创建命令权限","OP")
#创建权限节点bnnpc.example.create，授予所有op
manager.createCommand('pynpc','pynpc','npccallback','bnnpc.example.create')
#创建pynpc命令，并且将npccallback函数作为命令的回调函数，权限为bnnpc.example.create

def npccallback(sender,args): #pynpc命令回调函数，sender是发送者对象，args是参数列表
    name = sender.getName()
    player = server.getPlayer(name)
    #以上获取发送的玩家，这里没有做控制台判断是不严谨的，但是我就是懒，你管不着[滑稽]
    npc = entity.buildNPC(player.getPosition(),u'测试NPC',args[0],2,u'pynpctick')
    #生成构建一个npc对象，记得字符串带中文都要使用Unicode，这里把pynpctick设为这个npc的回调函数，并每2tick回调一次
    npc.setEnableAttack(True)
    npc.setEnableHurt(True)
    npc.setEnableGravity(True)
    npc.setEnableKnockBack(True)
    #设置npc接受攻击，显示受伤动画，收到重力，会被击退
    npc.setKnockBase(1.9)
    #设置npc的击退扩距比为1.9
    npc.turnRound(random.randint(1,89))
    #设置npc的朝向为1，89度随机
    npc.start()
    #然后启动这个npc，这样才能被玩家看见

def pynpctick(e,tick): #npc实体内部回调函数，e为npc实体，tick为当前的刻的时间戳
    tmp = e.getNearestPlayer()
    #获取最近的玩家
    if tmp != None:#判空操作，避免服务器没有玩家还去看玩家引发报错
        e.lookAt(tmp.getPosition())
        #让npc看最近的玩家的位置
        roll = tick%60
        if roll == 0:
            e.jump()
            #每60刻跳跃一次
        if roll == 20 or roll == 40:
            e.setSneak()
            #每隔40刻做一个蹲起，蹲和起之间间隔20刻
        if tick%101 == 0:
            can = e.findAndMove(tmp.getPosition())
            #每101刻尝试走到玩家的位置，can返回值是是否能走到，如果可以走到就会开始行走
            if can:#输出是否可以走到玩家的位置
                logger.info(u"可以")
            else:
                logger.info(u"不")
```