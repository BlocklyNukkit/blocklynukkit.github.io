<div class="summary">
<ul class="blockList">
<li class="blockList">
<!-- ========== METHOD SUMMARY =========== -->
<ul class="blockList">
<li class="blockList"><a name="method.summary">
<!--   -->
</a>
<h3>成员函数一览</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a >Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.utils">Config</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getConfig</a></span>()</code>
<div class="block">返回这个Nukkit插件配置文件的<a  title="class in cn.nukkit.utils"><code>Config</code></a>对象。<br/>
 The config file this Nukkit plugin as a <a  title="class in cn.nukkit.utils"><code>Config</code></a> object.</div>
</td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.io">File</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDataFolder</a></span>()</code>
<div class="block">返回这个Nukkit插件的数据文件夹。<br/>
 The data folder of this Nukkit plugin.</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.plugin">PluginDescription</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDescription</a></span>()</code>
<div class="block">返回描述这个Nukkit插件的<a  title="class in cn.nukkit.plugin"><code>PluginDescription</code></a>对象。<br/>
 The description this Nukkit plugin as a <a  title="class in cn.nukkit.plugin"><code>PluginDescription</code></a> object.</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.plugin">PluginLogger</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLogger</a></span>()</code>
<div class="block">返回这个插件的日志记录器为<a  title="class in cn.nukkit.plugin"><code>PluginLogger</code></a>对象。<br/>
 Returns the logger of this plugin as a <a  title="class in cn.nukkit.plugin"><code>PluginLogger</code></a> object.</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code>
<div class="block">返回这个插件的名字。<br/>
 Returns the name of this plugin.</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">PluginLoader</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPluginLoader</a></span>()</code>
<div class="block">返回这个插件的加载器为<a  title="interface in cn.nukkit.plugin"><code>PluginLoader</code></a>对象。<br/>
 Returns the loader of this plugin as a <a  title="interface in cn.nukkit.plugin"><code>PluginLoader</code></a> object.</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.io">InputStream</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getResource</a></span>(<a  title="class or interface in java.lang">String</a> filename)</code>
<div class="block">读取这个插件特定的资源文件，并返回为<code>InputStream</code>对象。<br/>
 Reads a resource of this plugin, and returns as an <code>InputStream</code> object.</div>
</td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit">Server</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getServer</a></span>()</code>
<div class="block">返回运行这个插件的服务器的<a  title="class in cn.nukkit"><code>Server</code></a>对象。<br/>
 Gets the server which is running this plugin, and returns as a <a  title="class in cn.nukkit"><code>Server</code></a> object.</div>
</td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isDisabled</a></span>()</code>
<div class="block">返回这个Nukkit插件是否已停用。<br/>
 Whether this Nukkit plugin is disabled.</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isEnabled</a></span>()</code>
<div class="block">返回这个Nukkit插件是否已启用。<br/>
 Whether this Nukkit plugin is enabled.</div>
</td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onDisable</a></span>()</code>
<div class="block">在一个Nukkit插件被停用时调用的方法。<br/>
 Called when a Nukkit plugin is disabled.</div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onEnable</a></span>()</code>
<div class="block">在一个Nukkit插件被启用时调用的方法。<br/>
 Called when a Nukkit plugin is enabled.</div>
</td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onLoad</a></span>()</code>
<div class="block">在一个Nukkit插件被加载时调用的方法。这个方法会在<a ><code>onEnable()</code></a>之前调用。<br/>
 Called when a Nukkit plugin is loaded, before <a ><code>onEnable()</code></a> .</div>
</td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >reloadConfig</a></span>()</code>
<div class="block">重新读取这个Nukkit插件的默认配置文件。<br/>
 Reloads the plugin config.</div>
</td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveConfig</a></span>()</code>
<div class="block">保存这个Nukkit插件的配置文件。<br/>
 Saves the plugin config.</div>
</td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveDefaultConfig</a></span>()</code>
<div class="block">保存这个Nukkit插件的默认配置文件。<br/>
 Saves the DEFAULT plugin config.</div>
</td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveResource</a></span>(<a  title="class or interface in java.lang">String</a> filename)</code>
<div class="block">保存这个Nukkit插件的资源。<br/>
 Saves the resource of this plugin.</div>
</td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveResource</a></span>(<a  title="class or interface in java.lang">String</a> filename,
            boolean replace)</code>
<div class="block">保存或替换这个Nukkit插件的资源。<br/>
 Saves or replaces the resource of this plugin.</div>
</td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveResource</a></span>(<a  title="class or interface in java.lang">String</a> filename,
            <a  title="class or interface in java.lang">String</a> outputName,
            boolean replace)</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.command.CommandExecutor">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.command.<a  title="interface in cn.nukkit.command">CommandExecutor</a></h3>
<code><a >onCommand</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
