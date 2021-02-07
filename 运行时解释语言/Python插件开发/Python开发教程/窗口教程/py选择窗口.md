---
layout: default
toc: true
---
# 选择窗口
[TOC]

代码
----
~~~
manager.createCommand('test','test','test')
def test(sender,args):
    tst = window.getModalWindowBuilder('Test','Select')
    tst.setButton1('A')
    tst.setButton2('B')
    tst.showToPlayer(sender,'Isb')
def Isb(sb):
    sb.getPlayer().sendMessage(window.getEventResponseModal(sb))
~~~
FAQ
----
本章节没有FAQ
~~实际上，你只需要会用Google翻译（百度也行），你大概都能猜出他在干嘛的，所以我就不写了~~