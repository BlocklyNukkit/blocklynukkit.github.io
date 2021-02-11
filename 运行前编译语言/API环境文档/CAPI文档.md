# C API文档  
********************************************************  
> CAPI函数均位于`<blocklynukkit.h>`  
## implementJFunction  
|名称|返回值|参数|
|-|-|-|
|implementJFunction|void|char\* as, char\* use|
- 通知java虚拟机，此程序实现了某个java方法  
- java调用wasm导出函数时，所有参数都是int类型的java堆栈索引  
- as -> 实现的java方法的字符串  
- use -> 用来实现的函数的导出名字符串指针  
## getJString  
|名称|返回值|参数|
|-|-|-|
|getJString|void|int jStackIndex, char\* to|
- 获取java堆栈上指定对象的字符串形式  
- jStackIndex-> java对象的索引  
- to-> 获取字符串后写入的指针  
## getJInt  
|名称|返回值|参数|
|-|-|-|
|getJInt|int|int jStackIndex|
- 获取java堆栈上指定的int  
- jStackIndex -> java对象的索引  
- 返回 -> 指定java堆栈的int  
## getJLong  
|名称|返回值|参数|
|-|-|-|
|getJLong|I64|int jStackIndex|
- 获取java堆栈上指定的long long int  
- jStackIndex -> java对象的索引  
- 返回 -> 指定java堆栈的long long int  
## getJFloat  
|名称|返回值|参数|
|-|-|-|
|getJFloat|F32|int jStackIndex|
- 获取java堆栈上指定的float  
- jStackIndex -> java对象的索引  
- 返回 -> 指定java堆栈的float  
## getJDouble  
|名称|返回值|参数|
|-|-|-|
|getJDouble|F64|int jStackIndex|
- 获取java堆栈上指定的double  
- jStackIndex -> java对象的索引  
- 返回 -> 指定java堆栈的double  
## getJIntArray  
|名称|返回值|参数|
|-|-|-|
|getJIntArray|void|int jStackIndex, int\* to|
- 获取java堆栈上指定的int数组  
- jStackIndex -> java对象的索引  
- to -> 获取数组后写入的指针  
## getJLongArray  
|名称|返回值|参数|
|-|-|-|
|getJLongArray|void|int jStackIndex, long long int\* to|
- 获取java堆栈上指定的long long int数组  
- jStackIndex -> java对象的索引  
- to -> 获取数组后写入的指针  
## getJFloatArray  
|名称|返回值|参数|
|-|-|-|
|getJFloatArray|void|int jStackIndex, float\* to|
- 获取java堆栈上指定的float数组  
- jStackIndex -> java对象的索引  
- to -> 获取数组后写入的指针  
## getJDoubleArray  
|名称|返回值|参数|
|-|-|-|
|getJDoubleArray|void|int jStackIndex, double\* to|
- 获取java堆栈上指定的double数组  
- jStackIndex -> java对象的索引  
- to -> 获取数组后写入的指针  
## getJMethod  
|名称|返回值|参数|
|-|-|-|
|getJMethod|int|int jStackIndex, char\* name, char\* parameter|
- 获取java堆栈上对象的某个成员函数，获取到的成员函数对象将被推入java堆栈中  
- jStackIndex -> 要获取成员函数的java对象的索引  
- name -> 成员函数名称字符串指针  
- parameter -> java成员函数的签名(方法签名)  
- 返回 -> 成员函数对象的java堆栈索引  
## getJStaticMethod  
|名称|返回值|参数|
|-|-|-|
|getJStaticMethod|int|char\* className, char\* name, char\* parameter|
- 获取java堆栈上对象的某个类的静态函数，获取到的成员函数对象将被推入java堆栈中  
- className -> 要获取静态函数的java对象的类名字符串指针  
- name -> 成员函数名称字符串指针  
- parameter -> java成员函数的签名(方法签名)  
- 返回 -> 成员函数对象的java堆栈索引  
## invokeJMethod  
|名称|返回值|参数|
|-|-|-|
|invokeJMethod|int|int jStackIndex,int jStackObjIndex, int len, int\* args|
- 执行java堆栈上成员函数对象，函数的返回值将被推入java堆栈中  
- jStackIndex -> java成员函数对象的堆栈索引  
- jStackObjIndex -> 执行成员函数的对象的堆栈索引，索引负数视为静态函数  
- len -> 参数个数  
- args -> 所有参数的java堆栈索引  
- 返回 -> 函数返回值的java堆栈索引  
## pushIntToJavaStack  
|名称|返回值|参数|
|-|-|-|
|pushIntToJavaStack|int|int toPush|
- 把一个int放入java堆栈中  
- toPush -> 要放入java堆栈的I32整数  
- 返回 -> 放入的int整数的java堆栈索引  
## pushLongToJavaStack  
|名称|返回值|参数|
|-|-|-|
|pushLongToJavaStack|int|long long int toPush|
- 把一个long long int放入java堆栈中  
- toPush -> 要放入java堆栈的I64整数  
- 返回 -> 放入的long long int整数的java堆栈索引  
## pushFloatToJavaStack  
|名称|返回值|参数|
|-|-|-|
|pushFloatToJavaStack|int|float toPush|
- 把一个float放入java堆栈中  
- toPush -> 要放入java堆栈的F32浮点数  
- 返回 -> 放入的float浮点数的java堆栈索引  
## pushDoubleToJavaStack  
|名称|返回值|参数|
|-|-|-|
|pushDoubleToJavaStack|int|double toPush|
- 把一个double放入java堆栈中  
- toPush -> 要放入java堆栈的F64浮点数  
- 返回 -> 放入的double浮点数的java堆栈索引  
## pushStringToJavaStack  
|名称|返回值|参数|
|-|-|-|
|pushStringToJavaStack|int|char\* toPush|
- 把一个字符串放入java堆栈中  
- toPush -> 要放入java堆栈的字符串指针  
- 返回 -> 放入的字符串对象的java堆栈索引  
## newJObject  
|名称|返回值|参数|
|-|-|-|
|newJObject|int|char\* className, int len, int\* args|
- 新建一个java对象并放入堆栈  
- className -> 新建对象的类名字符串的指针  
- len -> 构造函数参数数量  
- args -> 构造函数参数java堆栈索引数组  
- 返回 -> 新建对象的java堆栈索引，-1表示创建失败  
## getJIndexByKey  
|名称|返回值|参数|
|-|-|-|
|newJObject|int|char\* key|
- 通过key字符串获取java引擎信息  
- key -> key字符串的指针  
- 返回 -> 对应的java字符串索引，-1为获取失败  
## castJObject  
|名称|返回值|参数|
|-|-|-|
|castJObject|void|int jStackIndex, char\* toCast|
- 转换java堆栈上指定索引的对象的类  
- jStackIndex -> java堆栈对象索引  
- toCast -> 要转换到的类的类名字符串指针  
## deleteJObject  
|名称|返回值|参数|
|-|-|-|
|deleteJObject|void|int jStackIndex|
- 清除java堆栈上的某个对象  
- jStackIndex -> 要清除对象的java堆栈索引  
## logf  
|名称|返回值|参数|
|-|-|-|
|logf|void|char\* format, ...|
- 通过nk日志模块进行在控制台输出信息，用法用标准库printf  
- format -> 要输出的格式化字符串指针  
- ... -> 格式化的参数  
## warnf  
|名称|返回值|参数|
|-|-|-|
|warnf|void|char\* format, ...|
- 通过nk日志模块进行在控制台输出警告，用法用标准库printf  
- format -> 要输出的格式化字符串指针  
- ... -> 格式化的参数  
## newJArray  
|名称|返回值|参数|
|-|-|-|
|newJObject|int|char\* className, int len|
- 创建一个新的java数组并放入堆栈  
- className -> 新建数组类名字符串指针  
- len -> 数组长度  
- 返回 -> 新建java数组的堆栈索引，失败返回-1  
## setJObjectKey  
|名称|返回值|参数|
|-|-|-|
|setJObjectKey|void|int jStackIndex, char\* key|
- 为java堆栈上的指定对象设置字符串key以被外部调用  
- jStackIndex -> java堆栈索引  
- key -> key字符串指针  
## getJObjectFromJArray  
|名称|返回值|参数|
|-|-|-|
|getJObjectFromJArray|int|int jStackIndex, int index|
- 从java堆栈上指定的java数组中按下标获取对象  
- jStackIndex -> 数组的java堆栈索引  
- index -> 数组的下标  
- 返回 -> 从数组中获取到的java对象的索引  
## isJObjectEqualsNull  
|名称|返回值|参数|
|-|-|-|
|isJObjectEqualsNull|I32|int jStackIndex|
- 判断java堆栈上指定对象是否为null  
- jStackIndex -> java对象的堆栈索引  
- 返回 -> 若是null，返回1，否则0  
## setJArrayByIndex  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|setJArrayByIndex|void|int jStackIndex, int jObjStackIndex, int index|
- 根据索引设置一个java数组对象的指定项目的值  
- jStackIndex -> 数组对象的java堆栈索引  
- jObjStackIndex -> 要设置进去的java对象的堆栈索引  
- index -> 数组下标  
## getJObjectField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectField|int|int jStackIndex, char\* fieldName|
- 获取一个java对象的成员变量  
- jStackIndex-> 要获取成员变量的java对象的堆栈索引  
- fieldName-> 成员变量名称字符串指针  
- 返回 -> 成员变量值的java堆栈索引  
## getJClassField  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJClassField|int|char\* className, char\* fieldName|
- 获取一个java类的静态成员变量  
- className -> java类的类名字符串指针  
- fieldName-> 成员变量名称字符串指针  
- 返回 -> 成员变量值的java字符串索引  
## getJObjectArray  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJObjectArray|void|int jStackIndex, int* to|
- 获取java堆栈上指定的java对象数组  
- jStackIndex -> java对象数组的索引  
- to -> 获取数组后写入的数组指针，请确保已经分配了足够内存空间  
## getJArrayLength  
|命名空间|名称|返回值|参数|
|-|-|-|-|
|env|getJArrayLength|int|int jStackIndex|
- 获取java堆栈上指定的java数组的长度  
-  jStackIndex -> java数组的索引  
- 返回 -> 指定java数组的长度