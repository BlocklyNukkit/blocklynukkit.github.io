# algorithm基对象详解
[toc]
## algorithm基对象
algorithm基对象是bn封装的算法，用于简化开发流程提升效率
## algorithm方法一览
|方法名|参数|返回值|解释|
|-----|-----|-----|----|
|buildPositionfromPlayer|Player-J p|Position-J|获取玩家p的位置|
|buildPositionfromBlock|Block-J b|Position-J|获取方块b的位置|
|buildPositionfromEntity|Entity-J e|Position-J|获取实体e的位置|
|forEachBlockInArea|Position-J a, Position-J b,boolean isair,String callback|void|为位置a到位置b的每一个isair包括空气的方块回调函数名callback函数(注入参数一个:Block-J b,当前方块)|
|forLinkedBlock|Position-J a,String callback|void|对于位置a相邻的所有同种方块的位置调用函数名callback函数(注入参数一个:Position-J p,当前位置)|
## 方法详解
* Position algorithm.buildPositionfromPlayer(p)
    *获取玩家p的位置*
    参数解释：
    - p->Player 要获取位置的玩家

    返回值：
    - ->Position 玩家的位置
    
* Position algorithm.buildPositionfromBlock(b)
    *获取方块b的位置*
    参数解释：
    - b->Block 要获取位置的方块

    返回值：
    - ->Position 方块的位置
    
* Position algorithm.buildPositionfromEntity(e)
    *获取实体e的位置*
    参数解释：
    - e->Entity 要获取位置的实体

    返回值：
    - ->Position 实体的位置
    
* void algorithm.forEachBlockInArea(a,b,isair,callback)
    *为位置a到位置b的每一个isair包括空气的方块回调函数名callback函数(注入参数一个:Block b,当前方块)*
    参数解释：
    - a->Position 起点位置
    - b->Position 终点位置，需要与起点在同一世界
    - isair->boolean 是否空气也要回调callback
    - callback->String 回调函数的名字，将会为回调函数注入1个参数：Block类型的方块对象，a和b选中的区域内有多少方块就执行多少次回调

    返回值：
    - ->void
    
* void algorithm.forLinkedBlock(a,callback)
    *对于位置a相邻的所有同种方块的位置调用函数名callback函数(注入参数一个:Position p,当前位置)*
    参数解释：
    - a->Position 选中的位置
    - callback->String 回调函数的名字，将会为回调函数注入1个参数：Position类型的位置对象，代表每一个相邻同id方块的位置，有多少同id方块与a相连或者通过其他同id方块与a相连就调用几次回调

    返回值：
    - ->void
    
