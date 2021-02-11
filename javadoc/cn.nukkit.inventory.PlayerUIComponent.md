<div class="summary">
<ul class="blockList">
<li class="blockList">  
<li class="blockList"><a name="field.summary">
<!--   -->
</a>
<h3>成员变量一览</h3>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.inventory.BaseInventory">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.inventory.<a  title="class in cn.nukkit.inventory">BaseInventory</a></h3>
<code><a >holder</a>, <a >maxStackSize</a>, <a >name</a>, <a >slots</a>, <a >title</a>, <a >type</a>, <a >viewers</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.inventory.Inventory">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.inventory.<a  title="interface in cn.nukkit.inventory">Inventory</a></h3>
<code><a >MAX_STACK</a></code></li>
</ul>
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
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getContents</a></span>()</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.item">Item</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getItem</a></span>(int index)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getMaxStackSize</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSize</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getTitle</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.inventory">InventoryType</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getType</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="class in cn.nukkit">Player</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getViewers</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onClose</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onOpen</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onSlotChange</a></span>(int index,
            <a  title="class in cn.nukkit.item">Item</a> before,
            boolean send)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >open</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendContents</a></span>(<a  title="class in cn.nukkit">Player</a>... players)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendSlot</a></span>(int index,
        <a  title="class in cn.nukkit">Player</a>... players)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setItem</a></span>(int index,
       <a  title="class in cn.nukkit.item">Item</a> item,
       boolean send)</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setMaxStackSize</a></span>(int size)</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.inventory.BaseInventory">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.inventory.<a  title="class in cn.nukkit.inventory">BaseInventory</a></h3>
<code><a >addItem</a>, <a >all</a>, <a >canAddItem</a>, <a >clear</a>, <a >clearAll</a>, <a >contains</a>, <a >decreaseCount</a>, <a >first</a>, <a >firstEmpty</a>, <a >getFreeSpace</a>, <a >getHolder</a>, <a >getName</a>, <a >isEmpty</a>, <a >isFull</a>, <a >remove</a>, <a >removeItem</a>, <a >sendContents</a>, <a >sendContents</a>, <a >sendSlot</a>, <a >sendSlot</a>, <a >setContents</a>, <a >setSize</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">clone</a>, <a  title="class or interface in java.lang">equals</a>, <a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">hashCode</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">toString</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.inventory.Inventory">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.inventory.<a  title="interface in cn.nukkit.inventory">Inventory</a></h3>
<code><a >clear</a>, <a >first</a>, <a >setItem</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
