---    
toc: true    
---    
# 自定义物品    
## 创建一个木棍    
    
~~~python    
item = blockitem.buildItem(280, 0, 1);    
~~~    
#### FAQ    
----    
Q:blockitem.buildItem()是什么？    
A:    
>[info]    
>*   Item blockitem.buildItem(id,data,count)      
    *构建ID为id，数据值为data，数量为count的物品堆*      
    参数解释：    
    *   id->int 物品的id    
    *   data->int 物品的数据值    
    *   count->int 物品的数量    
    返回值：    
    *   \->Item 构建的物品堆对象    
    
### 设置名字    
    
~~~    
item.setCustomName("棍");    
~~~    
    
### 设置信息,用分号隔开换行    
    
~~~    
blockitem.setItemLore(item, u"第一行;第二行;第三行;第四行");    
    
~~~    
    
### 添加有序合成    
    
    
~~~    
manager.putEasy("G", blockitem.buildItemFromBlock(blockitem.buildBlock(17, 0)));    
blockitem.addShapedCraft(("G  ", "G  ", "G  "), item,[]);    
~~~    
#### FAQ    
----    
Q:第二行在干嘛，我怎么看不懂？    
A:他在增加一个草方块    
    
>[info]    
>void blockitem.addShapedCraft(shape,output,append)      
>*添加有序合成(详见图形编辑器)*      
>参数解释：    
>|参数|类型（python不需要管）|解释|    
>|----|----|----|    
>| shape|Array|形状数组，是一个java数组，请用图形编辑器生成的代码作为参考|    
>|   output|Item |产物物品堆|    
> |append|Array|追加的产物物品堆列表（比如蛋糕合成反桶）|    
>返回值：    
> *   \->void    
    
还不懂？    
说白了，shape参数是一个列表/元组，每个字符串的索引代表了哪一列，而内容则代表哪一行应该放什么东西    
而因为第一行代码，所以字符串中的G都代表草方块    
Q:为何用G代表草方块？能不能是T？    
A:这要看你第一行代码了    
首先我们介绍一下manager.putEasy这个函数:    
>[info]    
>*   void manager.putEasy(string,val)      
>    *存入临时存储->键string,值为泛型val*      
>    参数解释：    
>     
>    |参数|类型（python不用关心）|解释|    
>    |----|----|----|    
>    |string|String|存入临时存储的键名|    
>    |val|\<Any\>|随便的不限类型的变量|    
>        
>    返回值：    
>        
>    *   \->void    
    
什么，你还没看懂？想想字典，再想想这个，你就明白了    
实际上，你可以把manager.putEasy想象成这样的代码    
~~~    
easyStoreMap= {}    
class manager:    
    def putEasy(string,val):    
        easyStoreMap[string] = val    
~~~    
然后每次加载时blockitem.addShapedCraft()都会在这个字典里读取信息，并加载    
Q：blockitem.buildItemFromBlock()又是干嘛的？    
A:    
>[info]    
>*   Item blockitem.buildItemFromBlock(block)      
     *将方块转为物品*      
     参数解释：    
     *   block->Block 被转换的方块对象，此对象不会因转换消失    
     返回值：    
     *   \->Item 转换后的物品堆对象    
    
    
## 创建第二个木棍    
    
~~~    
superItem = blockitem.buildItem(369, 0, 1);    
#设置名称    
superItem.setCustomName(u"Super棍");    
#设置信息    
blockitem.setItemLore($superItem, u"第五行;第六行;第七行;第八行;第九行");    
    
~~~    
Q:第一行代码干吗用的？    
A:上面已经[回答](#FAQ_7)过该问题，这里不再赘述    
### 添加无序合成    
    
参数1就是需要合成的配方，参数2就是合成后的物品    
    
~~~    
blockitem.addShapelessCraft((item, blockitem.buildItemFromBlock(blockitem.buildBlock(41, 0))), superItem)    
~~~    
Q:什么意思？    
A:上面[回答](#FAQ_41)过此问题，这里不再赘述