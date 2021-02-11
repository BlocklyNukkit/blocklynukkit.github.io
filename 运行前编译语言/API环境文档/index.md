# API环境文档  
>[danger]  此文档中描述的API仍在未被确定，它们有可能被随时更改  
> 请前往本项目[github仓库](https://github.com/Superice666/BlocklyNukkit)或qq群953752196以确认状态或提出建议  
>[warning] 未经bn开发组允许，请不要随意修改此文档  
## 概述  
### 设计对象  
所有实现了WASI标准的webassembly语言  
### 设计目标  
此API设计目标如下：  
- 与java进行良好的、高效的、程序员友好的交互  
- 快速地调用解释性语言运行时中的bn函数  
- 一次编译，随处运行  
- 为解释性语言提供良好的，基于互操作的高性能代码实现方案  
## API内容  
### webassembly层  
说明：  
- webassembly层的所有函数均定义在env命名空间  
- 所有指针类型均为 I32  
- webassembly基本类型到其他语言基本类型的约定如下  
|webassembly|java|c/c++|rust|
|-|-|-|-|
|I32|int|int|i32|
|I64|long|long long int|i64|
|F32|float|float|f32|
|F64|double|double|f64|
- java堆栈是一个hashstack，索引从0开始，元素索引唯一且不变  
#### implementJFunction  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|implementJFunction|void|I32, I32|
- 通知java虚拟机，此程序实现了某个java方法  
- java调用wasm导出函数时，所有参数都是I32类型的java堆栈索引  
- I32 -> 实现的java方法的字符串指针  
- I32 -> 用来实现的函数的导出名字符串指针  
#### getJString  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJString|void|I32, I32|
- 获取java堆栈上指定对象的字符串形式  
- I32 -> java对象的索引  
- I32 -> 获取字符串后写入的指针  
#### getJInt  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJInt|I32|I32|
- 获取java堆栈上指定的32位整数  
- I32 -> java对象的索引  
- 返回 -> 指定java堆栈的32位整数  
#### getJLong  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJLong|I64|I32|
- 获取java堆栈上指定的64位整数  
- I32 -> java对象的索引  
- 返回 -> 指定java堆栈的64位整数  
#### getJFloat  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJFloat|F32|I32|
- 获取java堆栈上指定的32位浮点数  
- I32 -> java对象的索引  
- 返回 -> 指定java堆栈的32位浮点数  
#### getJDouble  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJDouble|F64|I32|
- 获取java堆栈上指定的64位整数  
- I32 -> java对象的索引  
- 返回 -> 指定java堆栈的64位整数  
#### getJIntArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJIntArray|void|I32, I32|
- 获取java堆栈上指定的I32数组  
- I32 -> java对象的索引  
- I32 -> 获取数组后写入的指针  
#### getJLongArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJLongArray|void|I32, I32|
- 获取java堆栈上指定的I64数组  
- I32 -> java对象的索引  
- I32 -> 获取数组后写入的指针  
#### getJFloatArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJFloatArray|void|I32, I32|
- 获取java堆栈上指定的F32数组  
- I32 -> java对象的索引  
- I32 -> 获取数组后写入的指针  
#### getJDoubleArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJDoubleArray|void|I32, I32|
- 获取java堆栈上指定的F64数组  
- I32 -> java对象的索引  
- I32 -> 获取数组后写入的指针  
#### getJMethod  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJMethod|I32|I32, I32, I32|
- 获取java堆栈上对象的某个成员函数，获取到的成员函数对象将被推入java堆栈中  
- I32 -> 要获取成员函数的java对象的索引  
- I32 -> 成员函数名称字符串指针  
- I32 -> 成员函数参数java类名用`;`连接后的字符串指针  
- 返回 -> 成员函数对象的java堆栈索引  
#### getJStaticMethod  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJStaticMethod|I32|I32, I32, I32|
- 获取java堆栈上对象的某个类的静态函数，获取到的成员函数对象将被推入java堆栈中  
- I32 -> 要获取静态函数的java对象的类名字符串指针  
- I32 -> 成员函数名称字符串指针  
- I32 -> 成员函数参数java类名用`;`连接后的字符串指针  
- 返回 -> 成员函数对象的java堆栈索引  
#### invokeJMethod  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|invokeJMethod|I32|I32, I32, I32, I32|
- 执行java堆栈上成员函数对象，函数的返回值将被推入java堆栈中  
- I32 -> java成员函数对象的堆栈索引  
- I32 -> 执行成员函数的对象的堆栈索引，索引负数视为静态函数  
- I32 -> 参数个数  
- I32 -> 所有参数的java堆栈索引  
- 返回 -> 函数返回值的java堆栈索引  
#### pushIntToJavaStack  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|pushIntToJavaStack|I32|I32|
- 把一个I32放入java堆栈中  
- I32 -> 要放入java堆栈的I32整数  
- 返回 -> 放入的I32整数的java堆栈索引  
#### pushLongToJavaStack  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|pushLongToJavaStack|I32|I64|
- 把一个I64放入java堆栈中  
- I64 -> 要放入java堆栈的I64整数  
- 返回 -> 放入的I64整数的java堆栈索引  
#### pushFloatToJavaStack  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|pushFloatToJavaStack|I32|F32|
- 把一个F32放入java堆栈中  
- F32 -> 要放入java堆栈的F32浮点数  
- 返回 -> 放入的F32浮点数的java堆栈索引  
#### pushDoubleToJavaStack  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|pushDoubleToJavaStack|I32|F64|
- 把一个F64放入java堆栈中  
- F64 -> 要放入java堆栈的F64浮点数  
- 返回 -> 放入的F64浮点的java堆栈索引  
#### pushStringToJavaStack  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|pushStringToJavaStack|I32|I32|
- 把一个字符串放入java堆栈中  
- I32 -> 要放入java堆栈的字符串指针  
- 返回 -> 放入的字符串对象的java堆栈索引  
#### newJObject  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|newJObject|I32|I32, I32, I32|
- 新建一个java对象并放入堆栈  
- I32 -> 新建对象的类名字符串的指针  
- I32 -> 构造函数参数数量  
- I32 -> 构造函数参数java堆栈索引数组  
- 返回 -> 新建对象的java堆栈索引，-1表示创建失败  
#### getJIndexByKey  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|newJObject|I32|I32|
- 通过key字符串获取java引擎信息  
- I32 -> key字符串的指针  
- 返回 -> 对应的java字符串索引，-1为获取失败  
#### castJObject  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|castJObject|void|I32, I32|
- 转换java堆栈上指定索引的对象的类  
- I32 -> java堆栈对象索引  
- I32 -> 要转换到的类的类名字符串指针  
#### deleteJObject  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|deleteJObject|void|I32|
- 清除java堆栈上的某个对象  
- I32 -> 要清除对象的java堆栈索引  
#### logInfo  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|logInfo|void|I32|
- 通过nk日志模块进行在控制台输出信息  
- I32 -> 要输出的字符串指针  
#### logWarning  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|logWarning|void|I32|
- 通过nk日志模块进行在控制台输出警告  
- I32 -> 要输出的字符串指针  
#### newJArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|newJObject|I32|I32, I32|
- 创建一个新的java数组并放入堆栈  
- I32 -> 新建数组类名字符串指针  
- I32 -> 数组长度  
- 返回 -> 新建java数组的堆栈索引，失败返回-1  
#### setJObjectKey  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|setJObjectKey|void|I32, I32|
- 为java堆栈上的指定对象设置字符串key以被外部调用  
- I32 -> java堆栈索引  
- I32 -> key字符串指针  
#### getJObjectFromJArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectFromJArray|I32|I32, I32|
- 从java堆栈上指定的java数组中按下标获取对象  
- I32 -> 数组的java堆栈索引  
- I32 -> 数组的下标  
- 返回 -> 从数组中获取到的java对象的索引  
#### isJObjectEqualsNull  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|isJObjectEqualsNull|I32|I32|
- 判断java堆栈上指定对象是否为null  
- I32 -> java对象的堆栈索引  
- 返回 -> 若是null，返回1，否则0  
#### setJArrayByIndex  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|setJArrayByIndex|void|I32, I32, I32|
- 根据索引设置一个java数组对象的指定项目的值  
- I32 -> 数组对象的java堆栈索引  
- I32 -> 要设置进去的java对象的堆栈索引  
- I32 -> 数组下标  
#### getJObjectField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectField|I32|I32, I32|
- 获取一个java对象的成员变量  
- I32 -> 要获取成员变量的java对象的堆栈索引  
- I32 -> 成员变量名称字符串指针  
- 返回 -> 成员变量值的java堆栈索引  
#### getJClassField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJClassField|I32|I32, I32|
- 获取一个java类的静态成员变量  
- I32 -> java类的类名字符串指针  
- I32 -> 成员变量名称字符串指针  
- 返回 -> 成员变量值的java字符串索引  
#### getJObjectArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectArray|void|I32, I32|
- 获取java堆栈上指定的java对象数组  
- I32 -> java对象数组的索引  
- I32 -> 获取数组后写入的指针，写入的将会是I32类型的java堆栈索引  
#### getJArrayLength  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJArrayLength|I32|I32|
- 获取java堆栈上指定的java数组的长度  
- I32 -> java数组的索引  
- 返回 -> 指定java数组的长度