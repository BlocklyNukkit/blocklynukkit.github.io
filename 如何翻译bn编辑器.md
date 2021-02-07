# 如何翻译bn编辑器
## 如何翻译
bn图形编辑器的前端文字都是存储在语言文件中的，所以您只需要一个语言文件就可以添加新的翻译
语言文件可以修改bn工具栏的文字、类别、方块上面的文字等等几乎你能见到的全部文字
## 语言文件
语言文件是js格式的，您直接修改自带的中文语言文件里面的中文即可
最新版bn中文语言文件：[点击下载](https://github.com/Superice666/BlocklyNukkit/blob/master/js/custom/language.js)
## 翻译拼图块上面的文字
只要您将语言文件里的中文字符串修改即可，其中的" %1 "等不能去掉，他们标注了应该在哪里渲染一个空槽位来链接其他拼图块
## 翻译左侧工具栏的文字
这是用过xml翻译函数完成的：
```
function translateToolBox(xml){
	return xml;//return the xml string of toolbox without translate
}
```
其中xml是工具栏的xml属性代码，您只需要将其中的中文通过replace函数替换即可
## 翻译其他文字
如工具菜单的文字，我们通过html翻译函数完成
```
function translateHTMLtoken(str){
	return str;//return the Chinese without translate
}
```
其中str是整个网页中每一个包含中文的短语和句子中的一个，对于每一个都调用一次，返回值将被显示在网页上面。