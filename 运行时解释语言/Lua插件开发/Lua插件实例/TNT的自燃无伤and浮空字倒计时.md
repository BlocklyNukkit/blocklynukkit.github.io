---     
toc: true     
---     
# **TNT的自燃无伤and浮空字倒计时**     
## **概述**     
Lua开发实例，TNT的自燃无伤and浮空字倒计时     
## **代码**     
由于注释已经很详细了，笔者在这里就不再赘述了。     
~~~lua     
local ent  --变量ent       
local block  --变量block       
local position  --变量position       
       
function BlockPlaceEvent(ent)      
--(function)函数      
--(BlockPlaceEvent)方块放置(ent)       
  block = ent:getBlock()     
  --(block)变量 (ent)变量:(getBlock)获取方块()       
  if block:getId() == 46 then ent:setCancelled()  --整体解释：如果获取方块的id为46，那么就取消放下的这个方块  (if)为如果，(then)为那么       
     local tnt = entity:spawnEntity('PrimedTnt', block:add(0.5, 0, 0.5))      
     --接上面的解释，取消后替换为，PrimedTnt，的生物，位置为在取消方块的那个位置增加x+0.5,z+0,y+0.5  (entity:spawnEntity)获取某位置id为"id"的方块 (add)为增加     
--注：在nukkit当中是不存在基岩版的燃烧TNT的id的，应该使用java版的PrimedTnt     
     local ft = entity:buildFloatingText((tnt:getDataPropertyInt(55)\*0.05).."",tnt:add(0,1,0),2,"timeCountDown")  --(entity:buildFloatingText)构建文字为text位置为pos的浮空字实体,并每tick刻回调一次callback函数,注入参数entity(浮空字实体)  (tnt:add(0,1,0),2,)在生成的燃烧TNT的地方增加x+0,z+1,y+0，并生成浮空字，并每2tick执行一次回调函数(nk里面的计时单位是tick，1tick=0.05秒)  (timeCountDown)启动下面功能的函数       
     entity:startDisplayFloatingText(ft)  --启动ft这个浮空字       
  end      
  --结束if的函数       
end      
--结束function BlockPlaceEvent(ent)的函数       
        
        
function EntityDamageByBlockEvent(event) --(EntityDamageByBlockEvent)实体被方块伤害事件，(event)引用此函数       
   if event:getCause() == luajava.bindClass("cn.nukkit.event.entity.EntityDamageEvent$DamageCause").BLOCK\_EXPLOSION then       
       event:setCancelled()       
       --取消事件       
   end       
end       
     
--整体解释，如果实体被方块伤害了，则取消此伤害，下面的也是一样的，如果实体被实体伤害了，则取消此伤害       
       
function EntityDamageByEntityEvent(event)       
   if event:getCause() == luajava.bindClass("cn.nukkit.event.entity.EntityDamageEvent$DamageCause").ENTITY\_EXPLOSION then       
       event:setCancelled()       
   end       
end       
       
function timeCountDown(floatingtext)       
   times = tonumber(entity:getEntityName(floatingtext))     
   --获取这个名为floatingtext的浮空字       
   times = times - 0.1      
   --因每次回调函数都要=0.05≈0.1刻，所以这里每次回调都减0.1       
   if times > 0 then       
   --整体解释，如果times > 0那么执行下面的代码       
      entity:setEntityName(floatingtext,times.."")  --获取floatingtext实体的名字，并设置成times转成字符串       
   else       
   --否则       
      entity:removeEntity(floatingtext)  --删除这个浮空字       
   end       
end      
--结束     
~~~     
## **心得**     
等一下写