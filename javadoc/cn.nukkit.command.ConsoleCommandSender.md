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
<td class="colOne"><code><span class="memberNameLink"><a >ConsoleCommandSender</a></span>()</code> </td>
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
<td class="colFirst"><code><a  title="class in cn.nukkit.permission">PermissionAttachment</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addAttachment</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.permission">PermissionAttachment</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addAttachment</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
             <a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.permission">PermissionAttachment</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addAttachment</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
             <a  title="class or interface in java.lang">String</a> name,
             <a  title="class or interface in java.lang">Boolean</a> value)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">PermissionAttachmentInfo</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getEffectivePermissions</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code>
<div class="block">返回命令发送者的名称。<br/>
 Returns the name of the command sender.</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit">Server</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getServer</a></span>()</code>
<div class="block">返回命令发送者所在的服务器。<br/>
 Returns the server of the command sender.</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >hasPermission</a></span>(<a  title="class in cn.nukkit.permission">Permission</a> permission)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >hasPermission</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isOp</a></span>()</code>
<div class="block">返回这个对象是不是服务器管理员。<br/>
 Returns if this object is an operator.</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isPermissionSet</a></span>(<a  title="class in cn.nukkit.permission">Permission</a> permission)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isPermissionSet</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isPlayer</a></span>()</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >recalculatePermissions</a></span>()</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >removeAttachment</a></span>(<a  title="class in cn.nukkit.permission">PermissionAttachment</a> attachment)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendMessage</a></span>(<a  title="class or interface in java.lang">String</a> message)</code>
<div class="block">给命令发送者返回信息。<br/>
 Sends a message to the command sender.</div>
</td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendMessage</a></span>(<a  title="class in cn.nukkit.lang">TextContainer</a> message)</code>
<div class="block">给命令发送者返回信息。<br/>
 Sends a message to the command sender.</div>
</td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setOp</a></span>(boolean value)</code>
<div class="block">把这个对象设置成服务器管理员。<br/>
 Sets this object to be an operator or not to be.</div>
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
