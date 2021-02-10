<div class="summary">
<ul class="blockList">
<li class="blockList">

<li class="blockList"><a name="field.summary">
<!--   -->
</a>
<h3>成员变量一览</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
<caption><span>成员变量</span><span class="tabEnd"> </span></caption>
<tr>
<th>修饰符和类</th>
<th>成员变量描述</th>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class in cn.nukkit.command.data">CommandData</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >commandData</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.command.data">CommandParameter</a>[]&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >commandParameters</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >description</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code><a  title="class in co.aikar.timings">Timing</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >timing</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >usageMessage</a></span></code> </td>
</tr>
</table>
</li>
</ul>
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
<td class="colOne"><code><span class="memberNameLink"><a >Command</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >Command</a></span>(<a  title="class or interface in java.lang">String</a> name,
       <a  title="class or interface in java.lang">String</a> description)</code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >Command</a></span>(<a  title="class or interface in java.lang">String</a> name,
       <a  title="class or interface in java.lang">String</a> description,
       <a  title="class or interface in java.lang">String</a> usageMessage)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >Command</a></span>(<a  title="class or interface in java.lang">String</a> name,
       <a  title="class or interface in java.lang">String</a> description,
       <a  title="class or interface in java.lang">String</a> usageMessage,
       <a  title="class or interface in java.lang">String</a>[] aliases)</code> </td>
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a >Static Methods</a></span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a >Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addCommandParameters</a></span>(<a  title="class or interface in java.lang">String</a> key,
                    <a  title="class in cn.nukkit.command.data">CommandParameter</a>[] parameters)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >allowChangesFrom</a></span>(<a  title="interface in cn.nukkit.command">CommandMap</a> commandMap)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >broadcastCommandMessage</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> source,
                       <a  title="class or interface in java.lang">String</a> message)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >broadcastCommandMessage</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> source,
                       <a  title="class or interface in java.lang">String</a> message,
                       boolean sendToSource)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >broadcastCommandMessage</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> source,
                       <a  title="class in cn.nukkit.lang">TextContainer</a> message)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >broadcastCommandMessage</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> source,
                       <a  title="class in cn.nukkit.lang">TextContainer</a> message,
                       boolean sendToSource)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>abstract boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >execute</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> sender,
       <a  title="class or interface in java.lang">String</a> commandLabel,
       <a  title="class or interface in java.lang">String</a>[] args)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.command.data">CommandDataVersions</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >generateCustomCommandData</a></span>(<a  title="class in cn.nukkit">Player</a> player)</code>
<div class="block">Generates modified command data for the specified player
 for AvailableCommandsPacket.</div>
</td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.command.data">CommandData</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >generateDefaultData</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAliases</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.command.data">CommandParameter</a>[]&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCommandParameters</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.command.data">CommandParameter</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCommandParameters</a></span>(<a  title="class or interface in java.lang">String</a> key)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.command.data">CommandData</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDefaultCommandData</a></span>()</code>
<div class="block">Returns an CommandData containing command data</div>
</td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDescription</a></span>()</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLabel</a></span>()</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.command.data">CommandOverload</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getOverloads</a></span>()</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermission</a></span>()</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermissionMessage</a></span>()</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getUsage</a></span>()</code> </td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isRegistered</a></span>()</code> </td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >register</a></span>(<a  title="interface in cn.nukkit.command">CommandMap</a> commandMap)</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setAliases</a></span>(<a  title="class or interface in java.lang">String</a>[] aliases)</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setCommandParameters</a></span>(<a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.command.data">CommandParameter</a>[]&gt; commandParameters)</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setDescription</a></span>(<a  title="class or interface in java.lang">String</a> description)</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setLabel</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setPermission</a></span>(<a  title="class or interface in java.lang">String</a> permission)</code> </td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setPermissionMessage</a></span>(<a  title="class or interface in java.lang">String</a> permissionMessage)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setUsage</a></span>(<a  title="class or interface in java.lang">String</a> usageMessage)</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >testPermission</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> target)</code> </td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >testPermissionSilent</a></span>(<a  title="interface in cn.nukkit.command">CommandSender</a> target)</code> </td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >toString</a></span>()</code> </td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unregister</a></span>(<a  title="interface in cn.nukkit.command">CommandMap</a> commandMap)</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">clone</a>, <a  title="class or interface in java.lang">equals</a>, <a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">hashCode</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
