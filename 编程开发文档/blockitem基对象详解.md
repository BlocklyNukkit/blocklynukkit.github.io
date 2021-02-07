---
layout: default
toc: true
---
# blockitem基对象详解

## blockitem基对象
blockitem基对象是用来操作方块，环境，物品与合成的模块

## blockitem方法一览
*与编程开发文档同步与2020/8/12*
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|makeSound|Position-J pos,String s|void|在位置pos播放s对应的声音(跟原版命令类似)|
|makeExpBall|Position-J pos,int exp|void|在位置pos生成包含exp点经验值的经验球|
|makeDropItem|Position-J pos,Item-J i|void|在位置pos生成与i相同的物品堆|
|getBlock|Position-J pos|Block-J|获取位置pos的方块|
|getLevelEntities|Position-J pos|Array|获取位置所在世界的实体列表|
|getLevelPlayers|Position-J pos|Array|获取位置所在世界的玩家列表|
|getIsSunny|Position-J pos|boolean|获取位置所在世界是否为晴天|
|setLevelWeather|Position-J p,String m|void|设置p所在世界天气为m("clear","thunder","rain")|
|isDay|Position-J pos|boolean|获取pos所在世界是否为白天|
|setBlock|Position-J p,Block-J b,boolean par|void|设置p处方块为b,par指定是否生成破坏粒子|
|getItemInHand|Player-J p|Item-J|获取玩家p手中的物品堆|
|setItemInHand|Player-J p,Item-J i|void|设置玩家p手上的物品为i|
|addItemToPlayer|Player-J p,Item-J i|void|向玩家p背包添加物品i|
|hasItemToPlayer|Player-J p,Item-J i|boolean|检查玩家p是否有物品i|
|removeItemToPlayer|Player-J p,Item-J i|void|移除玩家p背包里的物品i|
|getDropItems|Position-J pos|Array|获取pos所在世界的掉落物实体数组|
|getLevelName|Level-J l|String|获取世界l的的名称|
|buildBlock|int id,int data|Block-J|构建ID为id，数据值data的方块|
|buildItem|int id,int data,int count|Item-J|构建ID为id，数据值为data，数量为count的物品堆|
|buildItemFromBlock|Block-J block|Item-J|将方块转为物品|
|getItemLore|Item-J item|String|获取物品item的lore(多行lore用";"连接)|
|addToCreativeBar|Item-J item|void|把物品堆添加到创造物品栏|
|setItemLore|Item-J item,String str|void|设置物品item的lore为str(多行lore用";"连接)|
|addShapelessCraft|Array\<Item-J> i,Item-J o|void|添加无序合成,原料列表i,产物o|
|addFurnaceCraft|Item-J i,Item-J o|void|添加熔炉配方,原料i,产物o|
|addShapedCraft|Array\<String> shape,Item-J output,Array\<Item-J> append|void|添加有序合成(详见图形编辑器)|
|addItemEnchant|Item-J item,int i,int l|void|给item添加ID为i,等级为l的附魔(可去wiki查找id)|
|isSame|Item i1,Item i2,boolean d,boolean n|boolean|检测i1和i2是否相同(d是否毕竟数据值,n是否比较nbt,数量不会比较)|
|addBNCraft|String t,String d,Arryat\<Item-J> i,Array\<Item-J> o,int de,double p|void|添加一个种类为t,描述为d,原材料为i,产物为o,合成用时de,成功率p(0-1)的bn高级合成|
|openBNCraftForPlayer|String type, Player-J player|void|给玩家打开种类的type的合成高级合成ui|
|PositionMove|Position pos,double x,double y,double z|void|让pos偏移xyz|
|getNBTString|Item-J item|String|获取物品堆item的nbt字符串|
|putinNBTString|Item-J item,String nbt|void|向item注入NBT字符串nbt|
|getItemEnchant|Item-J item|Array\<Enchantment-J>|获取item的附魔列表|
|getEnchantID|Enchantment-J enc|int|获取附魔对象enc的附魔id|
|getEnchantLevel|Enchantment-J enc|int|获取附魔对象enc的附魔等级|
|setItemColor|Item-J item,int r,int g,int b|void|设置物品item的自定义颜色|
|setItemUnbreakable|Item item,boolean unbreakable|void|设置物品item是否不可破坏|

## 方法详解
* void blockitem.makeSound(pos,s)
    *在位置pos播放s对应的声音(跟原版命令类似)*
    参数解释：
    - pos->Position 播放声音的位置
    - s->String 播放的声音名称

    返回值：
    - ->void
    
* void blockitem.makeExpBall(pos,exp)
    *在位置pos生成包含exp点经验值的经验球*
    参数解释：
    - pos->Position 生成经验球的位置
    - exp->int 经验球包含的经验

    返回值：
    - ->void
    
* void blockitem.makeDropItem(pos,i)
    *在位置pos生成与i相同的物品堆*
    参数解释：
    - pos->Position 生成物品堆的位置
    - i->Item 要生成的物品堆

    返回值：
    - ->void
    
* Block blockitem.getBlock(pos)
    *获取位置pos的方块*
    参数解释：
    - pos->Position 要获取方块的位置，注意必须设置上世界

    返回值：
    - ->Block 获取到的方块
    
* Array blockitem.getLevelEntities(pos)
    *获取位置所在世界的实体列表*
    参数解释：
    - pos->Position 位置，只要有世界即可

    返回值：
    - ->Array 该世界所有实体组成的数组
    
* Array blockitem.getLevelPlayers(pos)
    *获取位置所在世界的玩家列表*
    参数解释：
    - pos->Position 位置，只要有世界即可

    返回值：
    - ->Array 该世界所有玩家组成的数组
    
* boolean blockitem.getIsSunny(pos)
    *获取位置所在世界是否为晴天*
    参数解释：
    - pos->Position 位置，只要有世界即可

    返回值：
    - ->boolean 是否为晴天
    
* void blockitem.setLevelWeather(p,m)
    *设置p所在世界天气为m("clear","thunder","rain")*
    参数解释：
    - p->Position 位置，只要有世界即可
    - m->String 天气字符串,clear晴天,thunder雷天,rain雨天

    返回值：
    - ->void
    
* boolean blockitem.isDay(pos)
    *获取pos所在世界是否为白天*
    参数解释：
    - pos->Position 位置，只要有世界即可

    返回值：
    - ->boolean 是否是白天
    
* void blockitem.setBlock(p,b,par)
    *设置p处方块为b,par指定是否生成破坏粒子*
    参数解释：
    - p->Position 要设置方块的位置
    - b->Block 要设置为的方块
    - par->boolean 是否显示方块被破坏的粒子

    返回值：
    - ->void
    
* Item blockitem.getItemInHand(p)
    *获取玩家p手中的物品堆*
    参数解释：
    - p->Player 要获取物品堆的玩家

    返回值：
    - ->Item 获取到的物品堆
    
* void blockitem.setItemInHand(p,i)
    *设置玩家p手上的物品为i*
    参数解释：
    - p->Player 要设置物品堆的玩家
    - i->Item 要设置到玩家手上的物品堆

    返回值：
    - ->void
    
* void blockitem.addItemToPlayer(p,i)
    *向玩家p背包添加物品i*
    参数解释：
    - p->Player 要添加背包物品的玩家
    - i->Item 被添加到玩家背包的物品堆

    返回值：
    - ->void
    
* boolean blockitem.hasItemToPlayer(p,i)
    *检查玩家p是否有物品i*
    参数解释：
    - p->Player 要被检查的玩家
    - i->Item 要检查的物品

    返回值：
    - ->boolean 玩家是否有物品堆
    
* void blockitem.removeItemToPlayer(p,i)
    *移除玩家p背包里的物品i*
    参数解释：
    - p->Player 要移除背包物品的玩家
    - i->Item 要被移除的物品堆

    返回值：
    - ->void 
    
* Array blockitem.getDropItems(pos)
    *获取pos所在世界的掉落物实体数组*
    参数解释：
    - pos->Position 位置，只要有世界即可

    返回值：
    - ->Array 该世界所有掉落物实体组成的数组
    
* String blockitem.getLevelName(l)
    *获取世界l的的名称*
    参数解释：
    - l->Level 世界对象，可以通过 位置对象.getLevel()获取

    返回值：
    - ->String 世界的名称
    
* Block blockitem.buildBlock(id,data)
    *构建ID为id，数据值data的方块*
    参数解释：
    - id->int 方块的id
    - data->int 方块的数据值

    返回值：
    - ->Block 构建的方块对象
    
* Item blockitem.buildItem(id,data,count)
    *构建ID为id，数据值为data，数量为count的物品堆*
    参数解释：
    - id->int 物品的id
    - data->int 物品的数据值
    - count->int 物品的数量

    返回值：
    - ->Item 构建的物品堆对象
    
* Item blockitem.buildItemFromBlock(block)
    *将方块转为物品*
    参数解释：
    - block->Block 被转换的方块对象，此对象不会因转换消失

    返回值：
    - ->Item 转换后的物品堆对象
    
* String blockitem.getItemLore(item)
    *获取物品item的lore(多行lore用";"连接)*
    参数解释：
    - item->Item 要获取lore的物品

    返回值：
    - ->String 物品的lore
    
* void blockitem.addToCreativeBar(item)
    *把物品堆添加到创造物品栏*
    参数解释：
    - item->Item 要添加到创造物品栏的物品

    返回值：
    - ->void 
    
* void blockitem.setItemLore(item,str)
    *设置物品item的lore为str(多行lore用";"连接)*
    参数解释：
    - item->Item 要被设置lore的物品堆对象
    - str->String 要设置上去的lore

    返回值：
    - ->void
    
* void blockitem.addShapelessCraft(i,o)
    *添加无序合成,原料列表i,产物o*
    参数解释：
    - i->Array\<Item\> 原料物品堆列表，数量要求都是1 
    - o->Item 产物物品堆对象，无数量要求

    返回值：
    - ->void
    
* void blockitem.addFurnaceCraft(i,o)
    *添加熔炉配方,原料i,产物o*
    参数解释：
    - i->Item 原料物品堆
    - o->Item 产物物品堆

    返回值：
    - ->void
    
* void blockitem.addShapedCraft(shape,output,append)
    *添加有序合成(详见图形编辑器)*
    参数解释：
    - shape->Array<String> 形状数组，是一个java数组，请用图形编辑器生成的代码作为参考
    - output->Item 产物物品堆
    - append->Array<Item> 追加的产物物品堆列表（比如蛋糕合成反桶）

    返回值：
    - ->void
	
	示例：
	```javascript
	var redstone = blockitem.buildItem(331,0,1);
	var coal = blockitem.buildItem(263,0,1);
	var flint = blockitem.buildItem(318,0,1);
	var gunpower = blockitem.buildItem(289,0,1);
	manager.putEasy('A',redstone);
	manager.putEasy('d',coal);
	blockitem.addShapedCraft(Java.to(['AAA','AdA','AAA'],'java.lang.String[]'),flint,Java.to([gunpower],'cn.nukkit.item.Item[]'));
	```
	该示例添加一个工作台合成表，中间放一个煤炭，旁边围绕8个红石粉，合成一个燧石，额外返还一个火药
    
* void blockitem.addItemEnchant(item,i,l)
    *给item添加ID为i,等级为l的附魔(可去wiki查找id)*
    参数解释：
    - item->Item 要被添加附魔的物品
    - i->int 附魔的id
    - l->int 附魔的等级

    返回值：
    - ->void
    
* boolean blockitem.isSame(i1,i2,d,n)
    *检测i1和i2是否相同(d是否毕竟数据值,n是否比较nbt,数量不会比较)*
    参数解释：
    - i1->Item 第一个物品堆对象
    - i2->Item 第二个物品堆对象
    - d->boolean 是否比较它们的数据值
    - n->boolean 是否比较他们的nbt

    返回值：
    - ->boolean 按照设置的比较规则这两个物品堆是否相等
    
* void blockitem.addBNCraft(t,d,i,o,de,p)
    *添加一个种类为t,描述为d,原材料为i,产物为o,合成用时de,成功率p(0-1)的bn高级合成*
    参数解释：
    - t->String 高级合成的种类id
    - d->String 这一个高级合成的描述
    - i->Arryat<Item> 原材料物品堆列表
    - o->Array<Item> 产物物品堆列表
    - de->int 合成耗时tick
    - p->double 合成的成功率(0-1)

    返回值：
    - ->void
    
* void blockitem.openBNCraftForPlayer(type,player)
    *给玩家打开种类的type的合成高级合成ui*
    参数解释：
    - type->String 打开的bn高级合成ui显示哪一类合成
    - player->Player 给谁打开ui

    返回值：
    - ->void
    
* void blockitem.PositionMove(pos,x,y,z)
    *让pos偏移xyz*
    参数解释：
    - pos->Position 要操作的位置对象
    - x->double x轴偏移量
    - y->double y轴偏移量
    - z->double z轴偏移量

    返回值：
    - ->void
    
* String blockitem.getNBTString(item)
    *获取物品堆item的nbt字符串*
    参数解释：
    - item->Item 要获取nbt字符串的物品堆对象

    返回值：
    - ->String 物品堆对象的nbt字符串
    
* void blockitem.putinNBTString(item,nbt)
    *向item注入NBT字符串nbt*
    参数解释：
    - item->Item 要注入nbt字符串的物品堆对象
    - nbt->String 注入的nbt字符串

    返回值：
    - ->void
    
* Array<Enchantment> blockitem.getItemEnchant(item)
    *获取item的附魔列表*
    参数解释：
    - item->Item 要获取附魔列表的物品堆对象

    返回值：
    - ->Array<Enchantment> 这个物品堆对象所有的附魔对象构成的列表
    
* int blockitem.getEnchantID(enc)
    *获取附魔对象enc的附魔id*
    参数解释：
    - enc->Enchantment 要获取附魔id的附魔对象

    返回值：
    - ->int 附魔对象的附魔id
    
* int blockitem.getEnchantLevel(enc)
    *获取附魔对象enc的附魔等级*
    参数解释：
    - enc->Enchantment 要获取附魔等级的附魔对象

    返回值：
    - ->int 附魔对象的附魔等级

* void manager.setItemColor(item,r,g,b)
    *设置物品item的自定义颜色*
    参数解释：
    - item->Item 要设置颜色的物品
    - r->int rgb颜色模型的红色值，0-255
    - g->int rgb颜色模型的绿色值，0-255
    - b->int rgb颜色模型的蓝色值，0-255

    返回值：
    - ->void
    
* void manager.setItemUnbreakable(item,unbreakable)
    *设置物品item是否不可破坏*
    参数解释：
    - item->Item 要设置不可破坏的物品
    - unbreakable->boolean 是否不可破坏

    返回值：
    - ->void
    

    
