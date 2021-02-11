# C++ API文档  
*******************************************  
> C++ API所有函数与变量均位于`<blocklynukkit>`中  
> **所有的CAPI函数都在C++API中可用！**  
## string2CharPtr  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|string2CharPtr|char\*|std::string str|
- 将std::string对象转为c风格字符串  
- str -> C++风格字符串对象  
- 返回 -> C风格字符串指针  
## charPtr2String  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|charPtr2String|std::string|char\* str|
- 将C风格字符串转为std::string字符串对象  
- str -> C风格字符串指针  
- 返回 -> C++风格字符串对象  
## implementJFunction  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|implementJFunction|void|std::string as, std::string use|
- 通知java虚拟机，此程序实现了某个java方法  
- java调用wasm导出函数时，所有参数都是int类型的java堆栈索引  
- as -> 实现的java方法的字符串  
- use -> 用来实现的函数的导出名字符串  
## getJString  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|getJString|std::string|int jStackIndex|
- 获取java堆栈上指定对象的字符串形式  
- jStackIndex-> java对象的索引  
- 返回 -> 获取的std::string字符串对象  
## getJStaticMethod  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|getJStaticMethod|int|std::string className, std::string name, std::string parameter|
- 获取java堆栈上对象的某个类的静态函数，获取到的成员函数对象将被推入java堆栈中  
- className -> 要获取静态函数的java对象的类名字符串  
- name -> 成员函数名称字符串  
- parameter -> java成员函数的签名(方法签名)  
- 返回 -> 成员函数对象的java堆栈索引  
## getJMethod  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|getJString|int|int jStackIndex, std::string name, std::string parameter|
- 获取java堆栈上对象的某个成员函数，获取到的成员函数对象将被推入java堆栈中  
- jStackIndex -> 要获取成员函数的java对象的索引  
- name -> 成员函数名称字符串  
- parameter -> java成员函数的签名(方法签名)  
- 返回 -> 成员函数对象的java堆栈索引  
## castJObject  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|castJObject|void|int jStackIndex, std::string toCast|
- 转换java堆栈上指定索引的对象的类  
- jStackIndex -> java堆栈对象索引  
- toCast -> 要转换到的类的类名字符串  
## setJObjectKey  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|BlocklyNukkit|setJObjectKey|void|int jStackIndex, std::string key|
- 为java堆栈上的指定对象设置字符串key以被外部调用  
- jStackIndex -> java堆栈索引  
- key -> key字符串  
## getJObjectField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectField|int|int jStackIndex, std::string fieldName|
- 获取一个java对象的成员变量  
- jStackIndex-> 要获取成员变量的java对象的堆栈索引  
- fieldName-> 成员变量名称字符串  
- 返回 -> 成员变量值的java堆栈索引  
## getJClassField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJClassField|int|std::string className, std::string fieldName|
- 获取一个java类的静态成员变量  
- className -> java类的类名字符串  
- fieldName-> 成员变量名称字符串  
- 返回 -> 成员变量值的java字符串索引  
## logger  
|命名空间|名称|C++类名|
|-|-|-|
|BlocklyNukkit|logger|BNLogStream|
### 子变量  
- BlocklyNukkit::endl 输出logger中的内容并换行，清空缓冲区  
- BlocklyNukkit::flush 清空logger中的内容并换行，清空缓冲区  
- BlocklyNukkit::infoMode 设置logger输出模式为`info`信息模式  
- BlocklyNukkit::warningMode 设置logger输出模式为`warning`警告模式  
- BlocklyNukkit::BLACK 即 "§0" 字符串黑色  
- BlocklyNukkit::DARK_BLUE 即 "§1" 字符串深蓝色  
- BlocklyNukkit::DARK_GREEN 即 "§2" 字符串深绿色  
- BlocklyNukkit::DRAK_AQUA 即 "§3" 字符串深天青色  
- BlocklyNukkit::DARK_RED 即 "§4" 字符串深红色  
- BlocklyNukkit::DARK_PURPLE 即 "§5" 字符串深紫色  
- BlocklyNukkit::GOLD 即 "§6" 字符串金色  
- BlocklyNukkit::GRAY 即 "§7" 字符串灰色  
- BlocklyNukkit::DARK_GRAY 即 "§8" 字符串深灰色  
- BlocklyNukkit::BLUE 即 "§9" 字符串蓝色  
- BlocklyNukkit::GREEN 即 "§a" 字符串绿色  
- BlocklyNukkit::AQUA 即 "§b" 字符串天青色  
- BlocklyNukkit::RED 即 "§c" 字符串红色  
- BlocklyNukkit::LIGHT_PURPLE 即 "§d" 字符串亮紫色  
- BlocklyNukkit::YELLOW 即 "§e" 字符串黄色  
- BlocklyNukkit::WHITE 即 "§f" 字符串白色  
- BlocklyNukkit::MINECOIN_GOLD 即 "§g" 字符串暗金色  
- BlocklyNukkit::OBFUSCATED 即 "§k" 字符串乱码  
- BlocklyNukkit::BOLD 即 "§l" 字符串粗体  
- BlocklyNukkit::STRIKETHROUGH 即 "§m" 字符串删除线  
- BlocklyNukkit::UNDERLINE 即 "§n" 字符串下划线  
- BlocklyNukkit::ITALIC 即 "§o" 字符串斜体  
- BlocklyNukkit::RESET 即 "§r" 字符串样式重置  
### 子函数  
- 构造函数() 构造一个新的BNLogStream  
- 构造函数(int mode) 同上，构造时设置输出模式，0-info，1-warning  
- 运算符<< 向log流中输入信息  
