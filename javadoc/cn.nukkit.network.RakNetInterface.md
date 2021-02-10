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
<td class="colOne"><code><span class="memberNameLink"><a >RakNetInterface</a></span>(<a  title="class in cn.nukkit">Server</a> server)</code> </td>
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
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >blockAddress</a></span>(<a  title="class or interface in java.net">InetAddress</a> address)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >blockAddress</a></span>(<a  title="class or interface in java.net">InetAddress</a> address,
            int timeout)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>(<a  title="class in cn.nukkit">Player</a> player)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>(<a  title="class in cn.nukkit">Player</a> player,
     <a  title="class or interface in java.lang">String</a> reason)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >emergencyShutdown</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getNetworkLatency</a></span>(<a  title="class in cn.nukkit">Player</a> player)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onConnectionRequest</a></span>(<a  title="class or interface in java.net">InetSocketAddress</a> inetSocketAddress)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onQuery</a></span>(<a  title="class or interface in java.net">InetSocketAddress</a> inetSocketAddress)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onSessionCreation</a></span>(com.nukkitx.network.raknet.RakNetServerSession session)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onUnhandledDatagram</a></span>(io.netty.channel.ChannelHandlerContext ctx,
                   io.netty.channel.socket.DatagramPacket datagramPacket)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >process</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">Integer</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >putPacket</a></span>(<a  title="class in cn.nukkit">Player</a> player,
         <a  title="class in cn.nukkit.network.protocol">DataPacket</a> packet)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">Integer</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >putPacket</a></span>(<a  title="class in cn.nukkit">Player</a> player,
         <a  title="class in cn.nukkit.network.protocol">DataPacket</a> packet,
         boolean needACK)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">Integer</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >putPacket</a></span>(<a  title="class in cn.nukkit">Player</a> player,
         <a  title="class in cn.nukkit.network.protocol">DataPacket</a> packet,
         boolean needACK,
         boolean immediate)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendRawPacket</a></span>(<a  title="class or interface in java.net">InetSocketAddress</a> socketAddress,
             io.netty.buffer.ByteBuf payload)</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setName</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setNetwork</a></span>(<a  title="class in cn.nukkit.network">Network</a> network)</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >shutdown</a></span>()</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unblockAddress</a></span>(<a  title="class or interface in java.net">InetAddress</a> address)</code> </td>
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
