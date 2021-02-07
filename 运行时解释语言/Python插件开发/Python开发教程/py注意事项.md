---
layout: default
toc: true
---
# 注意事项
[TOC]
>[warning] **请注意，以下内容适用于本节所有文章！不要再在评论区问这些问题啦！**
### 代码保存位置问题
请注意，以后本系列教程出现的所有代码全部保存在服务器的./plugins/BlocklyNukkit文件夹，不要再在评论区询问保存位置
### 头代码问题
如果你发现程序运行不了(或运行时没效果)，请在程序开头加上这几行代码：
```python
#! /usr/bin/env python
#coding:utf-8
#pragma python
```
#### 代码还是运行不了？
有些教程的代码是连贯的(譬如下面"自定义物品"这一章)，所以你得把全部的代码片段保存在一个文件里才有用
### 为什么有些字符串输入中文就会乱码？为什么有些字符串是`u'xxx'`
你肯定是个python3.x开发者。在python2中，字符串是有很多版本的。python3把它全部合成到str中了。以前是有一个叫unicode的东西，因为曾今的str默认会用操作平台默认的编码方式(这在windows上会使用GBK)，但是有些地方(比如Nukkit)又不支持这种编码方式，于是unicode string就应运而生。顾名思义，Unicode string 就是用unicode编码的字符串。除了最前面多了个u之外，没什么特殊的。
因为nukkit需要用Unicode/ASCII版本的字符串，所以如果其中有非ASCII字符，必须要在前面加个u