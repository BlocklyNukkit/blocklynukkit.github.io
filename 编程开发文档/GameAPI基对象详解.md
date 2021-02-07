---
layout: default
toc: true
---
# GameAPI基对象详解
## GameAPI基对象
GameAPI是一个用于快速开发小游戏的库
## 创建一个游戏
方法 `GameBase newGame(name,useTeam,startGameCallBack,endGameCallBack,mainLoopCallBack,deathCallBack,teamSize,maxPlayers,gameLength)`
参数解释
- name -> String 游戏名字
- useTeam -> boolean 是否使用队伍
- startGameCallBack -> String 开始游戏回调
- endGameCallBack -> String 结束游戏回调
- mainLoopCallBack -> String 主循环回调
- deathCallBack -> String 死亡回调
- teamSize -> int 队伍大小（仅使用队伍时有效，不使用时可设为0）
- maxPlayers -> int 最大玩家人数
- gameLength -> int 游戏时长（秒）

示例
```javascript
var game = gameapi.newGame("Example",false,'start','end','mainloop','death',0,10,60);

function start(){
    //亿些代码
}
function end(){
    //亿些代码
}
function mainloop(){
    //亿些代码
}
function death(deathevent){
    //亿些代码
}
```
## 实用工具
### Menu
Menu是一个帮助你快速创建表单或将物品栏转换成菜单的工具
方法
- InventoryMenu createInventoryMenu(inventoryType,title)
参数解释
    - inventoryType -> String 物品栏的类型，一般直接填CHEST
    - title -> String 物品栏标题
- addMenuItem(menu, slot, item, inventoryCallback)
参数解释
    - menu -> InventoryMenu 实例
    - slot -> int 物品在物品栏内的位置
    - item -> Item 物品实例
    - inventoryCallback -> String 物品栏回调

示例
```javascript
var menu = gameapi.createInventoryMenu("CHEST","我是标题");
gameapi.addMenuItem(menu,1,item,"inv");
function inv(){
    //亿些代码
}
```
方法
- FormMenu createFormMenu(title,content)
参数解释
    - title -> String 表单标题
    - content -> String 表单副标题
- addMenuButton(menu,buttonText,imageData,formCallback)
参数解释
    - menu -> FormMenu 实例
    - buttonText -> String 按钮名称
    - imageData -> String 图像数据
    - formCallback -> String 表单回调

示例
```javascript
var menu = gameapi.createFormMenu("我是标题","我是副标题");
gameapi.addMenuButton(menu,"一个按钮","","form");
function form(){
    //亿些代码
}
```
### 计分板
GameAPI提供的计分板是面向个体玩家的，每个玩家将有一个独立的计分板实例
方法
- Scoreboard getScoreboard(Player player)
- void setObjective(scoreboard,objectiveName, displayName)
参数解释
    - scoreboard -> Scoreboard 计分板实例
    - objectiveName -> String 计分项名
    - displayname -> String 计分项显示名
示例
```javascript
var scoreboard = gameapi.getScoreboard(player);
gameapi.setObjective(scoreboard,"计分项名","显示");
scoreboard.setLine("一行文字", 0);
```
## 示例
我们现在要实际从零开始制作一个小游戏
欧皇大乱斗
游戏有大致以下思路:
1. 每过10s随机死一个人
2. 每回合不被杀死就能免于死亡
3. 活到最后的人胜利
```javascript
var game = gameapi.newGame("ChampionLuck",false,"start","end","mainloop",0,10,100);
//游戏名=ChampionLuck
//使用队伍=false
//开始游戏回调="start"
//结束游戏回调="end"
//主循环回调="mainloop"
//最大人数=10
//游戏时间=100秒
var ArrayList = Java.type('java.util.ArrayList');
var Random = Java.type('java.util.Random');
var list = new ArrayList();

function start(){    //开始游戏回调
    game.getPlayers().forEach(function(el){
        el.sendMessage("Game Over!");//群发游戏结束消息
    }
}
function end(){    //结束游戏回调
    game.getMessagePlayers().forEach(function(el){
        player.getInventory().setItem(0,blockitem.buildItem(267,0,1)); //给予一些装备
        player.getInventory().setItem(1,blockitem.buildItem(322,0,3));
        player.getInventory().seLeggings(blockitem.buildItem(304,0,1));
        player.getInventory().setBoots(blockitem.buildItem(305,0,1));
    }
    var winner= game.getPlayers().get(0);//找到最后剩余玩家
    winner.sendMessage("You Win!");//发送胜利消息
    manager.addMoney(winner,100.0);//赠送一百大洋作为奖励
}
function mainloop(){ //主循环回调
    //判断结束条件
    if(game.this.getPlayerAmount() == 1){
        game.restart();
    }
    if(game.getCounter%10==0){ //判断10秒
        game.leave(game.getPlayers().get((new Random()).nextInt(game.getPlayerAmount())),true); //玩家失败，将玩家变为旁观者
        list.clear(); //清除待死列表
    }
}
function death(player,killer,items){ //死亡回调
    list.add(player); //添加到待死列表
    player.getInventory().setItem(0,blockitem.buildItem(267,0,1)); //给予一些装备
    player.getInventory().setItem(1,blockitem.buildItem(322,0,3));
    player.getInventory().seLeggings(blockitem.buildItem(304,0,1));
    player.getInventory().setBoots(blockitem.buildItem(305,0,1));
}
```
## GameBase对象可用方法
### 玩家与队伍
- `List<Player> getPlayers();`
    *获取game的玩家*
    返回值：
    - ->List<Player> 玩家列表
- `List<Player> getAllPlayers();`
    *获取game的所有玩家(包括已死亡的旁观者玩家)*
    返回值：
    - ->List<Player> 玩家列表
- `boolean containsPlayer();`
    *检查游戏是否包含玩家*
    返回值：
    - ->boolean 检查结果
- `Player getKiller(player);`
    *获取杀死该玩家的玩家*
    参数解释：
    - player->Player 玩家
    返回值：
    - ->Player 玩家
- `int getStartPlayers();`
    *获取自动开始游戏所需人数*
    返回值：
    - ->int 人数
- `int getPlayerAmount();`
    *获取游戏当前玩家数量*
    返回值：
    - ->int 人数
- `void createTeam(id,name,color);`
    *创建game的队伍（使用队伍的游戏一定要在创建对象后调用此方法创建队伍）*
    参数解释：
    - id->int 队伍id（0-n）
    - name->String 队伍名称
    - color->TextFormat 队伍颜色
- `int teamsLeft();`
    *获取剩余队伍数量*
    返回值：
    - ->int 队伍数量
- `Team getTeam(id);`
    *根据id获取队伍*
    参数解释：
    - id->int 队伍id
    返回值：
    - ->Team 队伍
- `Team getTeam(player);`
    *根据玩家获取队伍*
    参数解释：
    - player->Player 玩家
    返回值：
    - ->Team 队伍
- `Team getTeam(name);`
    *根据名称获取队伍*
    参数解释：
    - name->String 玩家
    返回值：
    - ->Team 队伍
- `List<Team> getTeams();`
    *获取game的队伍*
    返回值：
    - ->List<Teams> 队伍列表
### 游戏参数
- `void setDeathCounter(counter);`
    *设置死亡重生倒计时（在游戏对象创建后调用此方法设置）*
    参数解释：
    - counter-> int 时间（秒）
- `int getMax();`
    *获取游戏最大玩家数量*
    返回值：
    - ->int 人数
- `String getName();`
    *获取游戏名称*
    返回值：
    - ->String 名称
- `String getFullName()`
    *获取游戏全名 （游戏名-id）*
    返回值：
    - ->String 名称
- `int getId();`
    *获取游戏id*
    返回值：
    - ->int id
### 游戏状态
- `boolean isFull();`
    *检查游戏是否已满*
    返回值：
    - ->boolean 检查结果
- `boolean isRunning();`
    *检查游戏是否在运行阶段*
    返回值：
    - ->boolean 检查结果
- `boolean isRestarting();`
    *检查游戏是否在重启阶段*
    返回值：
    - ->boolean 检查结果
- `boolean isLobby();`
    *检查游戏是否在等待玩家阶段*
    返回值：
    - ->boolean 检查结果
关于游戏状态的解释
GameBase实质上是一种DSM（有限状态机）
游戏将在3个状态切换
RUNNING->RESTARTING->LOBBY->RUNNING->...
游戏运行->游戏重启->等待玩家->游戏运行->...
