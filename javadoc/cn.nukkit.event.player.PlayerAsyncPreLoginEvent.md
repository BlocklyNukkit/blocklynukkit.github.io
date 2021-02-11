<div class="summary">
<ul class="blockList">
<li class="blockList">
<!-- ======== NESTED CLASS SUMMARY ======== -->
<ul class="blockList">
<li class="blockList"><a name="nested.class.summary">
<!--   -->
</a>
<h3>Nested Class Summary</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Nested Class Summary table, listing nested classes, and an explanation">
<caption><span>Nested Classes</span><span class="tabEnd"> </span></caption>
<tr>
<th>修饰符和类</th>
<th class="colLast" scope="col">Class and Description</th>
</tr>
<tr class="altColor">
<td class="colFirst"><code>static class </code></td>
<td class="colLast"><code><span class="memberNameLink"><a  title="enum in cn.nukkit.event.player">PlayerAsyncPreLoginEvent.LoginResult</a></span></code> </td>
</tr>
</table>
</li>
</ul>  
<li class="blockList"><a name="field.summary">
<!--   -->
</a>
<h3>成员变量一览</h3>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.event.player.PlayerEvent">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.event.player.<a  title="class in cn.nukkit.event.player">PlayerEvent</a></h3>
<code><a >player</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.event.Event">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.event.<a  title="class in cn.nukkit.event">Event</a></h3>
<code><a >eventName</a></code></li>
</ul>
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
<td class="colOne"><code><span class="memberNameLink"><a >PlayerAsyncPreLoginEvent</a></span>(<a  title="class or interface in java.lang">String</a> name,
                        <a  title="class or interface in java.util">UUID</a> uuid,
                        <a  title="interface in cn.nukkit.utils">LoginChainData</a> chainData,
                        <a  title="class in cn.nukkit.entity.data">Skin</a> skin,
                        <a  title="class or interface in java.lang">String</a> address,
                        int port)</code> </td>
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a >Static Methods</a></span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >allow</a></span>()</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >disAllow</a></span>(<a  title="class or interface in java.lang">String</a> message)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAddress</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.event">HandlerList</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getHandlers</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getKickMessage</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.event.player">PlayerAsyncPreLoginEvent.LoginResult</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLoginResult</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPort</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.util.function">Consumer</a>&lt;<a  title="class in cn.nukkit">Server</a>&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getScheduledActions</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.entity.data">Skin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSkin</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">UUID</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getUuid</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getXuid</a></span>()</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleSyncAction</a></span>(<a  title="class or interface in java.util.function">Consumer</a>&lt;<a  title="class in cn.nukkit">Server</a>&gt; action)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setKickMessage</a></span>(<a  title="class or interface in java.lang">String</a> kickMessage)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setLoginResult</a></span>(<a  title="enum in cn.nukkit.event.player">PlayerAsyncPreLoginEvent.LoginResult</a> loginResult)</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setSkin</a></span>(<a  title="class in cn.nukkit.entity.data">Skin</a> skin)</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.event.player.PlayerEvent">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.event.player.<a  title="class in cn.nukkit.event.player">PlayerEvent</a></h3>
<code><a >getPlayer</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.event.Event">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.event.<a  title="class in cn.nukkit.event">Event</a></h3>
<code><a >getEventName</a>, <a >isCancelled</a>, <a >setCancelled</a>, <a >setCancelled</a></code></li>
</ul>
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
