---       
toc: true       
---       
## 什么是事件       
事件是nukkit服务器发生的动作，当事件触发时，会调用bn中与事件名同名的函数，并且在调用的时候会向函数注入一个事件对象作为参数，这个函数我们称之为事件回调函数，又叫做事件的监听器。简单的说，事件就是nukkit服务器和你的插件沟通的桥梁。       
## 事件的工作方式       
这里我们以玩家聊天事件来举例子       
```[flow]       
st=>start: 玩家在聊天框输入文字并发送        
serverget=>inputoutput: nukkit服务器收到发送聊天文字请求        
hasFun=>condition: bn查找是否       
有与事件同名函数       
e=>end: 按默认方式执行玩家的聊天请求       
spawnEvent=>operation: 生成对应的事件对象       
callFun=>operation: 执行事件回调函数，并将事件对象作为第一个参数       
wait_end=>operation: 等待所有事件回调函数执行完成       
isCancelled=>condition: 检测事件       
是否有被取消       
e2=>end: 不执行聊天请求并结束       
parseEvent=>operation: 解析修改过的事件对象       
e3=>end: 根据解析结果来执行玩家的聊天请求       
       
st->serverget->hasFun       
hasFun(no)->e       
hasFun(yes)->spawnEvent->callFun->wait_end->isCancelled       
isCancelled(true)->e2       
isCancelled(false)->parseEvent->e3       
```       
正如你看到的，玩家聊天事件的执行方式就是这样，其他的事件我们也用十分类似的方式进行。       
## 如何创建一个事件回调函数       
事件回调函数又称事件监听器，只要您创建一个与您希望处理的事件名称相同的函数，也就是说，一个js文件，或者说一个bn插件对于每一个事件只能有一个回调函数。       
例如，创建一个玩家聊天事件的监听器：       
- JS代码       
```       
function PlayerChatEvent(event){       
    let player = event.getPlayer();       
    let name = player.getName();       
    let msg = event.getMessage();       
    event.setMessage(name + " §7说：§r" + msg);       
}       
```       
- Python代码       
```       
def PlayerChatEvent(event):       
    player = event.getPlayer()       
    name = player.getName()       
    msg = event.getMessage()       
    event.setMessage(name + u" §7说：§r" + msg)       
```       
## bn事件所有事件总表       
### PlayerToggleFlightEvent——玩家开始飞行事件       
*玩家开始飞行事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isFlying()       
       
### EntityExplodeEvent——实体爆炸事件       
*实体爆炸事件*       
- boolean isCancelled()       
- Position getPosition()       
- String getEventName()       
- void setCancelled(boolean)       
- void setBlockList(List)       
- Entity getEntity()       
- void setYield(double)       
- List getBlockList()       
- double getYield()       
       
### EntityDamageByBlockEvent——实体被方块伤害事件       
*实体被方块伤害事件*       
- float getDamage(DamageModifier)       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isApplicable(DamageModifier)       
- void setDamage(double)       
- float getFinalDamage()       
- Entity getEntity()       
- DamageCause getCause()       
- int getAttackCooldown()       
- Block getDamager()       
- void setAttackCooldown(int)       
- float getOriginalDamage(DamageModifier)       
       
### PlayerInteractEvent——玩家交互(右键、点地、物理触碰、左键)       
*玩家交互(右键、点地、物理触碰、左键)*       
- Block getBlock()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- Action getAction()       
- BlockFace getFace()       
- Vector3 getTouchVector()       
       
### RightClickBlockEvent——玩家右键点击方块事件       
*玩家右键点击方块事件*       
- Block getBlock()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- BlockFace getFace()       
- Vector3 getTouchVector()       
       
### LeftClickBlockEvent——玩家左键点击方块事件       
*玩家左键点击方块事件*       
- Block getBlock()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- BlockFace getFace()       
- Vector3 getTouchVector()       
       
### ClickOnAirEvent——玩家右键点击空气长按空气事件       
*玩家右键点击空气长按空气事件*       
- Block getBlock()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- BlockFace getFace()       
- Vector3 getTouchVector()       
       
### PhysicalTouchEvent——玩家物理触碰事件(如踩压力板、踩坏耕地)       
*玩家物理触碰事件，比如踩压力板和踩坏耕地*       
- Block getBlock()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- BlockFace getFace()       
- Vector3 getTouchVector()       
       
### PlayerAnimationEvent——玩家动画事件       
*玩家动画事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Action getAnimationType()       
       
### PlayerBlockPickEvent——玩家捡起方块事件       
*玩家捡起方块事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- void setItem(Item)       
- Block getBlockClicked()       
       
### FurnaceSmeltEvent——熔炉烧炼完成事件       
*熔炉烧炼完成事件*       
- Block getBlock()       
- boolean isCancelled()       
- void setResult(Item)       
- Item getSource()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getResult()       
- BlockEntityFurnace getFurnace()       
       
### PlayerToggleSwimEvent——玩家开始游泳事件       
*玩家开始游泳事件*       
- Player getPlayer()       
- boolean isCancelled()       
- boolean isSwimming()       
- String getEventName()       
- void setCancelled(boolean)       
       
### ExplosionPrimeEvent——实体开始爆炸倒计时事件       
*实体开始爆炸倒计时事件*       
- boolean isCancelled()       
- void setForce(double)       
- String getEventName()       
- void setCancelled(boolean)       
- double getForce()       
- boolean isBlockBreaking()       
- Entity getEntity()       
- void setBlockBreaking(boolean)       
       
### ItemFrameDropItemEvent——篝火抛出物品       
*篝火抛出物品*       
- Player getPlayer()       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- BlockEntityItemFrame getItemFrame()       
- Item getItem()       
       
### PlayerToggleSneakEvent——玩家开始潜行事件       
*玩家开始潜行事件*       
- Player getPlayer()       
- boolean isCancelled()       
- boolean isSneaking()       
- String getEventName()       
- void setCancelled(boolean)       
       
### DoorToggleEvent——开关门事件       
*开关门事件*       
- Player getPlayer()       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setPlayer(Player)       
       
### StartBrewEvent——开始酿造事件       
*开始酿造事件*       
- Item getPotion(int)       
- boolean isCancelled()       
- Item getIngredient()       
- BlockEntityBrewingStand getBrewingStand()       
- String getEventName()       
- void setCancelled(boolean)       
- Inventory getInventory()       
- Player[] getViewers()       
- Item[] getPotions()       
       
### EntityBlockChangeEvent——实体改变方块事件       
*实体改变方块事件*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getTo()       
- Entity getEntity()       
- Block getFrom()       
       
### PlayerItemConsumeEvent——玩家使用了一个一次性消耗品事件       
*玩家使用了一个一次性消耗品事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
       
### DataPacketReceiveEvent——服务器收到数据包事件       
*服务器收到数据包事件*       
- Player getPlayer()       
- boolean isCancelled()       
- DataPacket getPacket()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerLocallyInitializedEvent——玩家客户端登录本地初始化完成事件       
*玩家客户端登录本地初始化完成事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
       
### PotionApplyEvent——药水效果添加事件       
*药水效果添加事件*       
- Potion getPotion(int)       
- boolean isCancelled()       
- Effect getApplyEffect()       
- String getEventName()       
- void setCancelled(boolean)       
- void setPotion(Potion)       
- Entity getEntity()       
- void setApplyEffect(Effect)       
       
### EntityVehicleExitEvent——实体离开载具事件       
*实体离开载具事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### PlayerQuitEvent——玩家退出事件       
*玩家退出事件*       
- Player getPlayer()       
- boolean isCancelled()       
- TextContainer getQuitMessage()       
- String getReason()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean getAutoSave()       
- void setQuitMessage(TextContainer)       
- void setAutoSave(boolean)       
       
### PlayerMoveEvent——玩家移动       
*玩家移动*       
- Player getPlayer()       
- boolean isCancelled()       
- void setResetBlocksAround(boolean)       
- void setCancelled(boolean)       
- void setFrom(Location)       
- String getEventName()       
- void setTo(Block)       
- Location getTo()       
- Location getFrom()       
- boolean isResetBlocksAround()       
       
### LevelLoadEvent——世界加载事件       
*世界加载事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerEditBookEvent——玩家编辑书本事件       
*玩家编辑书本事件*       
- Player getPlayer()       
- boolean isCancelled()       
- Item getNewBook()       
- void setNewBook(Item)       
- String getEventName()       
- void setCancelled(boolean)       
- Item getOldBook()       
- Action getAction()       
       
### ServerCommandEvent——服务器执行后台命令事件       
*服务器执行后台命令事件*       
- boolean isCancelled()       
- String getCommand()       
- String getEventName()       
- void setCancelled(boolean)       
- CommandSender getSender()       
- void setCommand(String)       
       
### SignChangeEvent——告示牌文字更改       
*告示牌文字更改*       
- Player getPlayer()       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- String getLine(int)       
- String[] getLines()       
- void setLine(int,String)       
       
### LiquidFlowEvent——液体流动       
*液体流动*       
- Block getBlock()       
- boolean isCancelled()       
- BlockLiquid getSource()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getTo()       
- int getNewFlowDecay()       
       
### BlockFromToEvent——液体流动/龙蛋自己传送的事件       
*液体流动/龙蛋自己传送的事件*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setTo(Block)       
- Block getTo()       
- Block getFrom()       
       
### LevelInitEvent——世界初始化事件       
*世界初始化事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### BlockPistonChangeEvent——活塞臂状态变化事件       
*活塞臂状态变化事件*       
- Block getBlock()       
- boolean isCancelled()       
- int getNewPower()       
- String getEventName()       
- void setCancelled(boolean)       
- int getOldPower()       
       
### VehicleDestroyEvent——载具破坏事件       
*载具破坏事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EntityMotionEvent——实体运动事件       
*实体运动事件*       
- boolean isCancelled()       
- Vector3 getMotion()       
- String getEventName()       
- void setCancelled(boolean)       
- Vector3 getVector()       
- Entity getEntity()       
       
### PlayerBucketEmptyEvent——玩家空桶事件       
*玩家空桶事件*       
- Item getBucket()       
- Player getPlayer()       
- boolean isCancelled()       
- BlockFace getBlockFace()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- void setItem(Item)       
- Block getBlockClicked()       
       
### PlayerBedLeaveEvent——玩家下床       
*玩家下床*       
- Player getPlayer()       
- boolean isCancelled()       
- Block getBed()       
- String getEventName()       
- void setCancelled(boolean)       
       
### InventoryOpenEvent——物品栏打开       
*物品栏打开*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Inventory getInventory()       
- Player[] getViewers()       
       
### EntityCombustByBlockEvent——实体因方块而燃烧事件       
*实体因方块而燃烧事件*       
- void setDuration(int)       
- boolean isCancelled()       
- Block getCombuster()       
- int getDuration()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### ItemDespawnEvent——掉落物消失       
*掉落物消失*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityItem getEntity()       
       
### EntityRegainHealthEvent——实体回血事件       
*实体回血事件*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- int getRegainReason()       
- void setAmount(float)       
- Entity getEntity()       
- float getAmount()       
       
### ProjectileLaunchEvent——投掷物发出       
*投掷物发出*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityProjectile getEntity()       
       
### DataPacketSendEvent——服务器发送数据包事件       
*服务器发送数据包事件*       
- Player getPlayer()       
- boolean isCancelled()       
- DataPacket getPacket()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerGameModeChangeEvent——玩家游戏模式改变事件       
*玩家游戏模式改变事件*       
- Player getPlayer()       
- boolean isCancelled()       
- void setNewAdventureSettings(AdventureSettings)       
- String getEventName()       
- void setCancelled(boolean)       
- AdventureSettings getNewAdventureSettings()       
- int getNewGamemode()       
       
### PlayerKickEvent——玩家被踢出服务器事件       
*玩家被踢出服务器事件*       
- Player getPlayer()       
- boolean isCancelled()       
- TextContainer getQuitMessage()       
- String getReason()       
- String getEventName()       
- void setCancelled(boolean)       
- Reason getReasonEnum()       
- void setQuitMessage(TextContainer)       
       
### BrewEvent——酿造完成事件       
*酿造完成事件*       
- Item getPotion(int)       
- boolean isCancelled()       
- int getFuel()       
- Item getIngredient()       
- BlockEntityBrewingStand getBrewingStand()       
- String getEventName()       
- void setCancelled(boolean)       
- Inventory getInventory()       
- Player[] getViewers()       
- Item[] getPotions()       
       
### ChunkUnloadEvent——区块卸载事件       
*区块卸载事件*       
- Level getLevel()       
- boolean isCancelled()       
- FullChunk getChunk()       
- String getEventName()       
- void setCancelled(boolean)       
       
### InventoryTransactionEvent——物品转移(漏斗)       
*物品转移(漏斗)*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- InventoryTransaction getTransaction()       
       
### CraftItemEvent——物品合成事件       
*物品合成事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Recipe getRecipe()       
- Item[] getInput()       
- CraftingTransaction getTransaction()       
       
### PlayerMouseOverEntityEvent——玩家鼠标在指向实体事件       
*玩家鼠标在指向实体事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### EntityDamageEvent——生物受到伤害       
*生物受到伤害*       
- float getDamage(DamageModifier)       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isApplicable(DamageModifier)       
- void setDamage(double)       
- int getAttackCooldown()       
- float getFinalDamage()       
- Entity getEntity()       
- DamageCause getCause()       
- void setAttackCooldown(int)       
- float getOriginalDamage(DamageModifier)       
       
### PlayerChatEvent——玩家聊天       
*玩家聊天*       
- Player getPlayer()       
- boolean isCancelled()       
- void setFormat(String)       
- String getEventName()       
- void setCancelled(boolean)       
- void setPlayer(Player)       
- String getMessage()       
- String getFormat()       
- void setMessage(String)       
- Set getRecipients()       
- void setRecipients(Set)       
       
### BlockFadeEvent——方块因自然原因消失或衰落事件       
*方块因自然原因消失或衰落事件*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getNewState()       
       
### LightningStrikeEvent——打雷事件       
*打雷事件*       
- Level getLevel()       
- boolean isCancelled()       
- EntityLightningStrike getLightning()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerSettingsRespondedEvent——玩家设置服务器设置事件       
*玩家设置服务器设置事件*       
- int getFormID()       
- Player getPlayer()       
- boolean isCancelled()       
- FormWindow getWindow()       
- void setCancelled(boolean)       
- FormResponse getResponse()       
- String getEventName()       
       
### EntityExitVehicleEvent——实体离开载具事件       
*实体离开载具事件*       
- boolean isPlayer()       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### FurnaceBurnEvent——熔炉燃烧       
*熔炉燃烧*       
- Block getBlock()       
- boolean isCancelled()       
- void setBurnTime(short)       
- Item getFuel()       
- void setBurning(boolean)       
- short getBurnTime()       
- String getEventName()       
- void setCancelled(boolean)       
- BlockEntityFurnace getFurnace()       
- boolean isBurning()       
       
### ProjectileHitEvent——投掷物击中       
*投掷物击中*       
- MovingObjectPosition getMovingObjectPosition()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setMovingObjectPosition(MovingObjectPosition)       
- Entity getEntity()       
       
### BlockBurnEvent——方块起火       
*方块起火*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### LevelUnloadEvent——世界卸载事件       
*世界卸载事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EntityCombustEvent——实体燃烧事件       
*实体燃烧事件*       
- void setDuration(int)       
- boolean isCancelled()       
- int getDuration()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### BlockBreakEvent——方块破坏       
*方块破坏*       
- void setDrops(Item[])       
- Player getPlayer()       
- Block getBlock()       
- boolean isCancelled()       
- boolean getInstaBreak()       
- void setInstaBreak(boolean)       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- void setDropExp(int)       
- BlockFace getFace()       
- int getDropExp()       
- boolean isFastBreak()       
- Item[] getDrops()       
       
### BlockRedstoneEvent——方块接受到的红石信号变化事件       
*方块接受到的红石信号变化事件*       
- Block getBlock()       
- boolean isCancelled()       
- int getNewPower()       
- String getEventName()       
- void setCancelled(boolean)       
- int getOldPower()       
       
### FakeSlotChangeEvent——虚拟物品栏操作事件       
*虚拟物品栏操作事件*       
- boolean isCancelled()       
- Player getPlayer()       
- void setCancelled(boolean)       
- SlotChangeAction getAction()       
- FakeInventory getInventory()       
       
### EntitySpawnEvent——生物生成       
*生物生成*       
- boolean isCreature()       
- boolean isCancelled()       
- Position getPosition()       
- int getType()       
- boolean isVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isItem()       
- boolean isHuman()       
- boolean isProjectile()       
- Entity getEntity()       
       
### SpawnChangeEvent——世界重生点更改事件       
*世界重生点更改事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Position getPreviousSpawn()       
       
### QueryRegenerateEvent——服务器生成远程查询信息事件       
*服务器生成远程查询信息事件*       
- String getWorld()       
- boolean isCancelled()       
- int getMaxPlayerCount()       
- int getPlayerCount()       
- String getEventName()       
- void setCancelled(boolean)       
- Map getExtraData()       
- void setPlayerCount(int)       
- void setPlayerList(Player[])       
- String getServerName()       
- byte[] getShortQuery(byte[])       
- void setTimeout(int)       
- void setMaxPlayerCount(int)       
- int getTimeout()       
- void setExtraData(Map)       
- Plugin[] getPlugins()       
- void setListPlugins(boolean)       
- void setPlugins(Plugin[])       
- void setServerName(String)       
- Player[] getPlayerList()       
- void setWorld(String)       
- byte[] getLongQuery(byte[])       
       
### PluginEnableEvent——插件被启用事件       
*插件被启用事件*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Plugin getPlugin()       
       
### BlockSpreadEvent——方块蔓延事件       
*方块蔓延事件*       
- Block getBlock()       
- boolean isCancelled()       
- Block getSource()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getNewState()       
       
### PlayerAsyncPreLoginEvent——玩家尝试登录服务器事件       
*玩家尝试登录服务器事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getName()       
- String getEventName()       
- void setCancelled(boolean)       
- String getKickMessage()       
- int getPort()       
- void setKickMessage(String)       
- UUID getUuid()       
- void setLoginResult(LoginResult)       
- String getAddress()       
- LoginResult getLoginResult()       
- List getScheduledActions()       
       
### PlayerChangeSkinEvent——玩家切换皮肤事件       
*玩家切换皮肤事件*       
- Player getPlayer()       
- boolean isCancelled()       
- Skin getSkin()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerDropItemEvent——玩家丢物品事件       
*玩家丢物品事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
       
### VehicleUpdateEvent——载具更新事件       
*载具更新事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
       
### CreatureSpawnEvent——使用生成蛋事件       
*使用生成蛋事件*       
- boolean isCancelled()       
- Position getPosition()       
- CompoundTag getCompoundTag()       
- SpawnReason getReason()       
- String getEventName()       
- void setCancelled(boolean)       
- int getEntityNetworkId()       
       
### PluginDisableEvent——插件被关闭事件       
*插件被关闭事件*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Plugin getPlugin()       
       
### ItemSpawnEvent——掉落物生成       
*掉落物生成*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityItem getEntity()       
       
### InventoryPickupItemEvent——捡起物品       
*捡起物品*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityItem getItem()       
- Inventory getInventory()       
- Player[] getViewers()       
       
### PlayerFormRespondedEvent——玩家FormUI操作       
*玩家FormUI操作*       
- int getFormID()       
- Player getPlayer()       
- boolean isCancelled()       
- FormWindow getWindow()       
- FormResponse getResponse()       
- String getEventName()       
- void setCancelled(boolean)       
       
### BlockGrowEvent——方块生长事件       
*方块生长事件*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getNewState()       
       
### PlayerInteractEntityEvent——玩家与实体交互事件       
*玩家与实体交互事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- Entity getEntity()       
- Vector3 getClickedPos()       
       
### PlayerBucketFillEvent——玩家填桶事件       
*玩家填桶事件*       
- Item getBucket()       
- Player getPlayer()       
- boolean isCancelled()       
- BlockFace getBlockFace()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- void setItem(Item)       
- Block getBlockClicked()       
       
### EntityShootBowEvent——实体射箭事件       
*实体射箭事件*       
- void setProjectile(Entity)       
- boolean isCancelled()       
- void setForce(double)       
- String getEventName()       
- void setCancelled(boolean)       
- double getForce()       
- EntityProjectile getProjectile()       
- EntityLiving getEntity()       
- Item getBow()       
       
### EntityInventoryChangeEvent——生物更改物品栏       
*生物更改物品栏*       
- int getSlot()       
- boolean isCancelled()       
- Item getOldItem()       
- void setNewItem(Item)       
- String getEventName()       
- void setCancelled(boolean)       
- Item getNewItem()       
- Entity getEntity()       
       
### PlayerTeleportEvent——玩家进行传送       
*玩家进行传送*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Location getTo()       
- TeleportCause getCause()       
- Location getFrom()       
       
### VehicleCreateEvent——载具创建事件       
*载具创建事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
       
### LeavesDecayEvent——树叶自然消失       
*树叶自然消失*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EntityTeleportEvent——生物瞬移       
*生物瞬移*       
- boolean isCancelled()       
- void setFrom(Location)       
- String getEventName()       
- void setCancelled(boolean)       
- void setTo(Block)       
- Location getTo()       
- Entity getEntity()       
- Location getFrom()       
       
### PlayerJoinEvent——玩家进入       
*玩家进入*       
- TextContainer getJoinMessage()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setJoinMessage(TextContainer)       
       
### InventoryClickEvent——物品栏点击事件       
*物品栏点击事件*       
- int getSlot()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getHeldItem()       
- Item getSourceItem()       
- Inventory getInventory()       
- Player[] getViewers()       
       
### InventoryCloseEvent——玩家关闭物品栏界面事件       
*玩家关闭物品栏界面事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Inventory getInventory()       
- Player[] getViewers()       
       
### EntityDamageByEntityEvent——实体被实体攻击事件       
*实体被实体攻击事件*       
- float getDamage(DamageModifier)       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isApplicable(DamageModifier)       
- float getKnockBack()       
- void setDamage(double)       
- float getFinalDamage()       
- Entity getEntity()       
- DamageCause getCause()       
- void setKnockBack(float)       
- int getAttackCooldown()       
- Entity getDamager()       
- void setAttackCooldown(int)       
- float getOriginalDamage(DamageModifier)       
       
### BlockUpdateEvent——方块更新事件       
*方块更新事件*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EntityLevelChangeEvent——生物切换世界       
*生物切换世界*       
- Level getTarget()       
- boolean isCancelled()       
- Level getOrigin()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### PlayerCreationEvent——玩家创建事件       
*玩家创建事件*       
- SourceInterface getInterface()       
- boolean isCancelled()       
- int getPort()       
- Long getClientId()       
- InetSocketAddress getSocketAddress()       
- String getEventName()       
- void setCancelled(boolean)       
- void setPlayerClass(Class)       
- String getAddress()       
- Class getBaseClass()       
- void setBaseClass(Class)       
- Class getPlayerClass()       
       
### PlayerItemHeldEvent——玩家手持物品切换事件       
*玩家手持物品切换事件*       
- int getSlot()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- int getInventorySlot()       
- Item getItem()       
       
### LevelSaveEvent——世界保存事件       
*世界保存事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PotionCollideEvent——药水效果冲突事件       
*药水效果冲突事件*       
- Potion getPotion(int)       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setPotion(Potion)       
- EntityPotion getThrownPotion()       
       
### SongDestroyingEvent——红石音乐电台被摧毁       
*红石音乐电台被摧毁*       
- boolean isCancelled()       
- void setCancelled(boolean)       
- String getEventName()       
- SongPlayer getSongPlayer()       
       
### PlayerBedEnterEvent——玩家上床       
*玩家上床*       
- Player getPlayer()       
- boolean isCancelled()       
- Block getBed()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerEatFoodEvent——玩家吃东西事件       
*玩家吃东西事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setFood(Food)       
- Food getFood()       
       
### EntityExplosionPrimeEvent——实体爆炸       
*实体爆炸*       
- boolean isCancelled()       
- void setForce(double)       
- String getEventName()       
- void setCancelled(boolean)       
- double getForce()       
- boolean isBlockBreaking()       
- Entity getEntity()       
- void setBlockBreaking(boolean)       
       
### ChunkLoadEvent——区块加载事件       
*区块加载事件*       
- Level getLevel()       
- boolean isCancelled()       
- FullChunk getChunk()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isNewChunk()       
       
### PlayerToggleSprintEvent——玩家开始疾跑事件       
*玩家开始疾跑事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isSprinting()       
       
### PlayerRespawnEvent——玩家重生事件       
*玩家重生事件*       
- Position getRespawnPosition()       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setRespawnPosition(Position)       
- boolean isFirstSpawn()       
       
### ThunderChangeEvent——雷暴天气更改事件       
*雷暴天气更改事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### BlockFormEvent——方块自然生成(下雪等)       
*方块自然生成(下雪等)*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Block getNewState()       
       
### PlayerMapInfoRequestEvent——玩家请求地图数据事件       
*玩家请求地图数据事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getMap()       
       
### EntityEnterVehicleEvent——实体进入载具事件       
*实体进入载具事件*       
- boolean isPlayer()       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### PlayerDeathEvent——玩家死亡       
*玩家死亡*       
- void setDrops(Item[])       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setExperience(int)       
- int getExperience()       
- Player getEntity()       
- TextContainer getDeathMessage()       
- boolean getKeepInventory()       
- Item[] getDrops()       
- void setKeepInventory(boolean)       
- void setDeathMessage(String)       
- boolean getKeepExperience()       
- void setKeepExperience(boolean)       
       
### InventoryMoveItemEvent——非玩家触发格子物品传输事件       
*非玩家触发格子物品传输事件*       
- boolean isCancelled()       
- InventoryHolder getSource()       
- String getEventName()       
- void setCancelled(boolean)       
- Inventory getTargetInventory()       
- Item getItem()       
- Action getAction()       
- Inventory getInventory()       
- Player[] getViewers()       
- void setItem(Item)       
       
### PlayerFoodLevelChangeEvent——玩家饥饿值改变事件       
*玩家饥饿值改变事件*       
- Player getPlayer()       
- boolean isCancelled()       
- void setFoodSaturationLevel(float)       
- String getEventName()       
- void setCancelled(boolean)       
- void setFoodLevel(int)       
- int getFoodLevel()       
- float getFoodSaturationLevel()       
       
### EntityCombustByEntityEvent——实体因其他实体而燃烧事件       
*实体因其他实体而燃烧事件*       
- void setDuration(int)       
- boolean isCancelled()       
- Entity getCombuster()       
- int getDuration()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### ChunkPopulateEvent——新区块生成事件       
*新区块生成事件*       
- Level getLevel()       
- boolean isCancelled()       
- FullChunk getChunk()       
- String getEventName()       
- void setCancelled(boolean)       
       
### VehicleDamageEvent——载具受伤事件       
*载具受伤事件*       
- double getDamage(DamageModifier)       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- void setDamage(double)       
       
### PlayerServerSettingsRequestEvent——玩家请求服务器设置事件       
*玩家请求服务器设置事件*       
- void setSettings(Map)       
- Player getPlayer()       
- boolean isCancelled()       
- Map getSettings()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EnchantItemEvent——给物品附魔事件       
*给物品附魔事件*       
- boolean isCancelled()       
- void setNewItem(Item)       
- String getEventName()       
- void setCancelled(boolean)       
- void setEnchanter(Player)       
- Player getEnchanter()       
- Player[] getViewers()       
- Item getOldItem()       
- Item getNewItem()       
- void setOldItem(Item)       
- void setXpCost(int)       
- Inventory getInventory()       
- int getXpCost()       
       
### SongStoppedEvent——红石音乐电台暂停       
*红石音乐电台暂停*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- SongPlayer getSongPlayer()       
       
### RedstoneUpdateEvent——红石更新       
*红石更新*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### VehicleMoveEvent——载具移动事件       
*载具移动事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- Location getTo()       
- Location getFrom()       
       
### WeatherChangeEvent——天气更改事件       
*天气更改事件*       
- Level getLevel()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### PlayerPreLoginEvent——玩家预登录事件       
*玩家预登录事件*       
- Player getPlayer()       
- boolean isCancelled()       
- void setKickMessage(String)       
- String getEventName()       
- void setCancelled(boolean)       
- String getKickMessage()       
       
### InventoryPickupArrowEvent——捡起箭       
*捡起箭*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityArrow getArrow()       
- Inventory getInventory()       
- Player[] getViewers()       
       
### RemoteServerCommandEvent——远程rcon控制执行命令事件       
*远程rcon控制执行命令事件*       
- boolean isCancelled()       
- String getCommand()       
- String getEventName()       
- void setCancelled(boolean)       
- CommandSender getSender()       
- void setCommand(String)       
       
### BlockFallEvent——方块因重力掉落事件       
*方块因重力掉落事件*       
- Block getBlock()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
       
### EntityDeathEvent——生物死亡(包括玩家)       
*生物死亡(包括玩家)*       
- void setDrops(Item[])       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Item[] getDrops()       
- Entity getEntity()       
       
### BlockPlaceEvent——方块放置       
*方块放置*       
- Player getPlayer()       
- Block getBlock()       
- boolean isCancelled()       
- Block getBlockAgainst()       
- String getEventName()       
- void setCancelled(boolean)       
- Item getItem()       
- Block getBlockReplace()       
       
### EntityDamageByChildEntityEvent——实体被幼年实体伤害事件       
*实体被幼年实体伤害事件*       
- float getDamage(DamageModifier)       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getChild()       
- boolean isApplicable(DamageModifier)       
- float getKnockBack()       
- void setDamage(double)       
- float getFinalDamage()       
- Entity getEntity()       
- DamageCause getCause()       
- void setKnockBack(float)       
- int getAttackCooldown()       
- Entity getDamager()       
- void setAttackCooldown(int)       
- float getOriginalDamage(DamageModifier)       
       
### CreeperPowerEvent——苦力怕被雷劈中事件       
*苦力怕被雷劈中事件*       
- boolean isCancelled()       
- EntityLightningStrike getLightning()       
- String getEventName()       
- void setCancelled(boolean)       
- EntityCreeper getEntity()       
- PowerCause getCause()       
       
### PlayerAchievementAwardedEvent——玩家达成成就事件       
*玩家达成成就事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- String getAchievement()       
       
### PlayerToggleGlideEvent——玩家开始滑翔(鞘翅)事件       
*玩家开始滑翔(鞘翅)事件*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isGliding()       
       
### PlayerCommandPreprocessEvent——玩家使用指令       
*玩家使用指令*       
- Player getPlayer()       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- void setPlayer(Player)       
- String getMessage()       
- void setMessage(String)       
       
### EntityVehicleEnterEvent——实体坐上载具事件       
*实体坐上载具事件*       
- boolean isCancelled()       
- Entity getVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
       
### EntityPortalEnterEvent——实体进入传送门事件       
*实体进入传送门事件*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- PortalType getPortalType()       
- Entity getEntity()       
       
### SongEndEvent——红石音乐电台歌曲播放结束       
*红石音乐电台歌曲播放结束*       
- boolean isCancelled()       
- String getEventName()       
- void setCancelled(boolean)       
- SongPlayer getSongPlayer()       
       
### EntityArmorChangeEvent——实体护甲变化事件       
*实体护甲变化事件*       
- int getSlot()       
- boolean isCancelled()       
- Item getOldItem()       
- void setNewItem(Item)       
- String getEventName()       
- void setCancelled(boolean)       
- Item getNewItem()       
- Entity getEntity()       
       
### BlockIgniteEvent——方块点燃事件       
*方块点燃事件*       
- Block getBlock()       
- boolean isCancelled()       
- Block getSource()       
- String getEventName()       
- void setCancelled(boolean)       
- Entity getEntity()       
- BlockIgniteCause getCause()       
       
### EntityDespawnEvent——生物被清除       
*生物被清除*       
- boolean isCreature()       
- boolean isCancelled()       
- Position getPosition()       
- int getType()       
- boolean isVehicle()       
- String getEventName()       
- void setCancelled(boolean)       
- boolean isItem()       
- boolean isHuman()       
- boolean isProjectile()       
- Entity getEntity()       
       
### PlayerChunkRequestEvent——玩家请求区块事件       
*玩家请求区块事件*       
- Player getPlayer()       
- boolean isCancelled()       
- int getChunkZ()       
- int getChunkX()       
- String getEventName()       
- void setCancelled(boolean)       
       
### StoneSpawnEvent——岩浆遇到水生成石头（圆石、石头、黑曜石）事件       
*岩浆遇到水生成石头（圆石、石头、黑曜石）事件*       
- Position getPosition()       
- Block getBlock()       
- void setCancelled(boolean)       
       
### QQGroupMessageEvent——机器人收到qq群消息事件       
*机器人收到qq群消息事件*       
- String getSelfQQ() --获取收到消息的qq账号       
- String getFromQQ() --获取发送消息的qq账号       
- String getFromGroup() --获取消息事件的qq群号       
- String getMessage() -获取消息       
       
### QQFriendMessageEvent——机器人收到qq好友消息事件       
*机器人收到qq好友消息事件*       
- String getEventId() --获取事件id       
- String getEventSeed() --获取事件中的群消息标识码       
- String getFromQQ() --获取发送消息的qq       
- String getSelfQQ() --获取接受到群消息的qq账号       
- String getMessage() --获取事件的消息       
       
### QQOtherEvent——其他机器人收到的qq事件       
*其他机器人收到的qq事件*       
- String getFromGroup() --获取触发事件的qq群号       
- String getFromQQ() --获取触发事件的qq账号       
- String getSelfQQ() --获取收到事件的qq账号       
- String getSeq() --获取收到事件的标识id       
- int getType() --获取事件类型码       
       
       
