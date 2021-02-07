---
toc: true
---
# YML存储
我们通常会使用yml来存储数据
**在JavaScript中更推荐使用JSON存储**
在使用前，要先创建，并设置参数
~~~
file= manager.createConfig(manager.getFile("test", "player.yml"), 2);
file.set("message",",欢迎~");
file.save();
~~~
然后我们把这个yml和之前的进服欢迎配合起来，把欢迎讯息替换为yml存储
~~~
var file = manager.createConfig(manager.getFile("test", "player.yml"), 2);
file.set("message", ",欢迎~");
file.save();
function PlayerJoinEvent(ent) {
    play = ent.getPlayer();
    manager.createTask("hello", 40);
}
function hello(useless) {
    play.sendMessage(play.getName() + file.get("message"));
}
~~~
*建议：比起固定的变量，更加推荐使用yml，更加方便*
进服之后就可以看到欢迎提示啦~