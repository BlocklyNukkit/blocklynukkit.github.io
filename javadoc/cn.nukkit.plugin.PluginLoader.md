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
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >disablePlugin</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code>
<div class="block">停用一个插件。<br/>
 Disables a plugin.</div>
</td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >enablePlugin</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code>
<div class="block">启用一个插件。<br/>
 Enables a plugin.</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.plugin">PluginDescription</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPluginDescription</a></span>(<a  title="class or interface in java.io">File</a> file)</code>
<div class="block">通过插件的 <code>File</code>对象，来获得描述这个插件的 <code>PluginDescription</code>对象。<br/>
 Gets a <code>PluginDescription</code> object describes the plugin by a <code>File</code> object describes the plugin file.</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.plugin">PluginDescription</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPluginDescription</a></span>(<a  title="class or interface in java.lang">String</a> filename)</code>
<div class="block">通过插件文件名的字符串，来获得描述这个插件的 <code>PluginDescription</code>对象。<br/>
 Gets a <code>PluginDescription</code> object describes the plugin by its file name.</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util.regex">Pattern</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPluginFilters</a></span>()</code>
<div class="block">返回这个插件加载器支持的文件类型。<br/>
 Returns the file types this plugin loader supports.</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.io">File</a> file)</code>
<div class="block">通过插件的 <code>File</code>对象，来加载和初始化一个插件。<br/>
 Loads and initializes a plugin by a <code>File</code> object describes the file.</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.lang">String</a> filename)</code>
<div class="block">通过文件名字的字符串，来加载和初始化一个插件。<br/>
 Loads and initializes a plugin by its file name.</div>
</td>
</tr>
</table>
</li>
</ul>
</li>
</ul>
</div>
