---     
toc: true     
---     
# JSON存储     
~~~     
// 写入JSON为YML文件 -Start     
     
var  config;     
// 声明一个名为config的变量     
config = {"a": 520, "b": 1314, "c": "Mcayear"};     
// 赋值config为指定Object对象     
config = JSON.stringify(config);     
// 转换对象为字符串     
config = manager.JSONtoYAML(config);     
// 转换JSON格式字符串为YAML格式     
manager.writeFile('./plugins/YourPluginName/config.yml', config);     
// 将config数据写入文件     
     
// 写入JSON为YML文件 -End     
       
     
     
// 读取YML配置文件 - Start     
     
config = manager.readFile('./plugins/YourPluginName/config.yml');     
// 读取文件     
config = manager.YAMLtoJSON(config);     
// 转换YAML格式为JSON字符串     
config = JSON.parse(config);     
// 把JSON字符串转换为JSON对象     
     
// 读取YML配置文件 - End     
     
logger.info(config.a);// 打印结果为 520     
logger.info(config.b);// 打印结果为 1314     
logger.info(config.c);// 打印结果为 Mcayear     
~~~