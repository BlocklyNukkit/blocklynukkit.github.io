---
layout: default
toc: true
---
# 搭建C/C++开发环境
本节中笔者将带您搭建开发C/C++开发服务器插件的必须环境
## 支持C/C++插件的服务端
默认情况下，nukkit系列服务器仅支持java编写的插件，C/C++插件需要使用**BlocklyNukkit**来植入nukkit服务端中进行运行。
### 1. 安装BlocklyNukkit
BlocklyNukkit从1.2.9.0 beta-r35版本开始正式支持此功能，您可以在此获取[1.2.9.0 beta-r35版本](https://github.com/Superice666/BlocklyNukkit/releases/tag/v1.2.9.0-beta-r35)的blocklynukkit解释器，也可以从官方网站上下载更新的解释器。

下载完成后，请将BlocklyNukkit解释器jar包放入nukkit服务器核心生成的`plugins`文件夹中。
### 2. 安装C/C++运行依赖库
运行C/C++插件时，虽然编译器会进行静态编译(后面会提到)，但是编译出来的输出产物时是web汇编码而不是本地二进制机器码，这样做是为了：
- 真正做到一次编译，处处运行
- 实现快速良好的动态连接
- 让C/C++于java和其他解释型语言制作的bn插件互操作
- 防止恶意的C/C++代码进行恶意操作

所以，BlocklyNukkit解释器需要一套定制的**JIT**来讲web汇编码在启动时转换为目标平台的本地机器码，并将BN的API链接到运行环境中。换言之，如果没有安装此依赖库，C/C++插件无法运行！

要安装此依赖库，请[在此下载](https://tools.blocklynukkit.com/WebassemblyBN.jar)，下载后请将WebassemblyBN.jar放入nukkit服务器核心生成的`plugins`文件夹中。请及时关注此依赖库的更新信息，目前API尚未稳定，可能随时做出更改，最新的版本是在`2021/1/9`发布的，如有更新，请您重新下载，替换掉原来的旧版本。

## 搭建编译环境
BlocklyNukkit提供一条专用的编译工具，基于`clang`修改而来，您可以在下面的链接下载：
- [Windows](https://icesight.lanzous.com/iRTdCkxp1dc) 适用于Windows7及更新版本
- [Linux](https://icesight.lanzous.com/iSYYskxp1mb) 适用于Ubuntu 16.04LTS及更新版本和其他某些发行版
- [MacOS](https://icesight.lanzous.com/izF6gkxp0mf) 适用于MacOS v10.12-Sierra及更新版本

下载完成后，解压您下载的`.7z`安装包，根据其中的使用说明进行编译。

## 更新头文件
下载头文件更新包，解压其中文件，覆盖掉`share`文件夹中的内容即可。
最新的头文件与 **2021/1/14** 更新！请您及时下载更新包，以免编译错误。
[头文件更新包-2021-1-14.zip](https://icesight.lanzous.com/iIwypkei73c)


 