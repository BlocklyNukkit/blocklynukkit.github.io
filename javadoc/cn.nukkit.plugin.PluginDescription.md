<div class="summary">
<ul class="blockList">
<li class="blockList">
<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<ul class="blockList">
<li class="blockList"><a name="constructor.summary">
<!--   -->
</a>
<h3>构造函数一览</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
<caption><span>构造函数</span><span class="tabEnd"> </span></caption>
<tr>
<th>构造函数描述</th>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >PluginDescription</a></span>(<a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">Object</a>&gt; yamlMap)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >PluginDescription</a></span>(<a  title="class or interface in java.lang">String</a> yamlString)</code> </td>
</tr>
</table>
</li>
</ul>
<!-- ========== METHOD SUMMARY =========== -->
<ul class="blockList">
<li class="blockList"><a name="method.summary">
<!--   -->
</a>
<h3>成员函数一览</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAuthors</a></span>()</code>
<div class="block">返回这个插件的作者列表。<br/>
 Returns all the authors of this plugin.</div>
</td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">Object</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCommands</a></span>()</code>
<div class="block">返回这个插件定义的命令列表。<br/>
 Returns all the defined commands of this plugin.</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCompatibleAPIs</a></span>()</code>
<div class="block">返回这个插件支持的Nukkit API版本列表。<br/>
 Returns all Nukkit API versions this plugin supports.</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDepend</a></span>()</code>
<div class="block">返回这个插件所依赖的插件名字。<br/>
 The names of the plugins what is depended by this plugin.</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDescription</a></span>()</code>
<div class="block">返回这个插件的描述文字。<br/>
 Returns the description text of this plugin.</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getFullName</a></span>()</code>
<div class="block">返回这个插件完整的名字。<br/>
 Returns the full name of this plugin.</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLoadBefore</a></span>()</code>
<div class="block">TODO finish javadoc</div>
</td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getMain</a></span>()</code>
<div class="block">返回这个插件的主类名。<br/>
 Returns the main class name of this plugin.</div>
</td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code>
<div class="block">返回这个插件的名字。<br/>
 Returns the name of this plugin.</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.plugin">PluginLoadOrder</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getOrder</a></span>()</code>
<div class="block">返回这个插件加载的顺序，即插件应该在什么时候加载。<br/>
 Returns the order the plugin loads, or when the plugin is loaded.</div>
</td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermissions</a></span>()</code>
<div class="block">返回这个插件定义的权限列表。<br/>
 Returns all the defined permissions of this plugin.</div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPrefix</a></span>()</code>
<div class="block">返回这个插件的信息前缀。<br/>
 Returns the message title of this plugin.</div>
</td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSoftDepend</a></span>()</code>
<div class="block">TODO finish javadoc</div>
</td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getVersion</a></span>()</code>
<div class="block">返回这个插件的版本号。<br/>
 Returns the version string of this plugin.</div>
</td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getWebsite</a></span>()</code>
<div class="block">返回这个插件的网站。<br/>
 Returns the website of this plugin.</div>
</td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">clone</a>, <a  title="class or interface in java.lang">equals</a>, <a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">hashCode</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">toString</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
