# 将bn插件编译为jar包  
*****  

blocklynukkit为开发者提供了将js、py或lua编译为依赖于blocklynukkit.jar解释器作为依赖库的单独jar包的功能，只需要在在线编译器上提交js、py或lua文件，即可在线转为jar，方便分发  
> 在线编译器 [https://tools.blocklynukkit.com/jar.html](http://tools.blocklynukkit.com/jar.html)  

由于bn支持多编程语言开发，而在线编译器由于某些原因无法直接识别你所使用的开发语言，因此你**必须**在文件第一行插入如下的识别码  

- JS识别码  
```  
//pragma javascript  
```  
- Python识别码  
```  
#pragma python  
```  
- Lua识别码  
```  
-- pragma lua  
```  
- PHP识别码
```
//pragma php
```

代码测试：  

<div id="usual1" class="codetab"> 
	<ul> 
		<li><a href="#tab1">JavaScript</a></li> 
		<li><a href="#tab2">Python</a></li> 
		<li><a href="#tab3">Lua</a></li> 
		<li><a href="#tab4">PHP</a></li> 
	</ul> 
	<div id="tab1">tab 1?.</div> 
	<div id="tab2">tab 2?.</div> 
	<div id="tab3">tab 3?.</div> 
	<div id="tab4">tab 4?.</div> 
	<script markdown="0"> 
	$("#usual1 ul").idTabs(function(id,list,set){$("a",set).removeClass("selected").filter("[href='"+id+"']",set).addClass("selected"); for(i in list){$(list[i]).hide();};$(id).fadeIn(); return false; });
	</script>
</div>

当然你直接在这里使用在线编译器：  
<div markdown="0"><iframe src="https://tools.blocklynukkit.com/jar.html" width="100%" height="800px"></iframe></div>
