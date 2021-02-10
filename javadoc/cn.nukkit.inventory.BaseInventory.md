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
<td class="colFirst"><code>protected <a  title="interface in cn.nukkit.inventory">InventoryHolder</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >holder</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >maxStackSize</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >name</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >size</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >slots</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >title</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="enum in cn.nukkit.inventory">InventoryType</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >type</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Set</a>&lt;<a  title="class in cn.nukkit">Player</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >viewers</a></span></code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.inventory.Inventory">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.inventory.<a  title="interface in cn.nukkit.inventory">Inventory</a></h3>
<code><a >MAX_STACK</a></code></li>
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
<td class="colOne"><code><span class="memberNameLink"><a >BaseInventory</a></span>(<a  title="interface in cn.nukkit.inventory">InventoryHolder</a> holder,
             <a  title="enum in cn.nukkit.inventory">InventoryType</a> type)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >BaseInventory</a></span>(<a  title="interface in cn.nukkit.inventory">InventoryHolder</a> holder,
             <a  title="enum in cn.nukkit.inventory">InventoryType</a> type,
             <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt; items)</code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >BaseInventory</a></span>(<a  title="interface in cn.nukkit.inventory">InventoryHolder</a> holder,
             <a  title="enum in cn.nukkit.inventory">InventoryType</a> type,
             <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt; items,
             <a  title="class or interface in java.lang">Integer</a> overrideSize)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >BaseInventory</a></span>(<a  title="interface in cn.nukkit.inventory">InventoryHolder</a> holder,
             <a  title="enum in cn.nukkit.inventory">InventoryType</a> type,
             <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt; items,
             <a  title="class or interface in java.lang">Integer</a> overrideSize,
             <a  title="class or interface in java.lang">String</a> overrideTitle)</code> </td>
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
<td class="colFirst"><code><a  title="class in cn.nukkit.item">Item</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addItem</a></span>(<a  title="class in cn.nukkit.item">Item</a>... slots)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >all</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >canAddItem</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >clear</a></span>(int index,
     boolean send)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >clearAll</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >contains</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >decreaseCount</a></span>(int slot)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >first</a></span>(<a  title="class in cn.nukkit.item">Item</a> item,
     boolean exact)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >firstEmpty</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getContents</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getFreeSpace</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.inventory">InventoryHolder</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getHolder</a></span>()</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.item">Item</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getItem</a></span>(int index)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getMaxStackSize</a></span>()</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSize</a></span>()</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getTitle</a></span>()</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.inventory">InventoryType</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getType</a></span>()</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="class in cn.nukkit">Player</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getViewers</a></span>()</code> </td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isEmpty</a></span>()</code> </td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isFull</a></span>()</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onClose</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onOpen</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >onSlotChange</a></span>(int index,
            <a  title="class in cn.nukkit.item">Item</a> before,
            boolean send)</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >open</a></span>(<a  title="class in cn.nukkit">Player</a> who)</code> </td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >remove</a></span>(<a  title="class in cn.nukkit.item">Item</a> item)</code> </td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.item">Item</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >removeItem</a></span>(<a  title="class in cn.nukkit.item">Item</a>... slots)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendContents</a></span>(<a  title="class or interface in java.util">Collection</a>&lt;<a  title="class in cn.nukkit">Player</a>&gt; players)</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendContents</a></span>(<a  title="class in cn.nukkit">Player</a>... players)</code> </td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendContents</a></span>(<a  title="class in cn.nukkit">Player</a> player)</code> </td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendSlot</a></span>(int index,
        <a  title="class or interface in java.util">Collection</a>&lt;<a  title="class in cn.nukkit">Player</a>&gt; players)</code> </td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendSlot</a></span>(int index,
        <a  title="class in cn.nukkit">Player</a>... players)</code> </td>
</tr>
<tr id="i33" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendSlot</a></span>(int index,
        <a  title="class in cn.nukkit">Player</a> player)</code> </td>
</tr>
<tr id="i34" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setContents</a></span>(<a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class in cn.nukkit.item">Item</a>&gt; items)</code> </td>
</tr>
<tr id="i35" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setItem</a></span>(int index,
       <a  title="class in cn.nukkit.item">Item</a> item,
       boolean send)</code> </td>
</tr>
<tr id="i36" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setMaxStackSize</a></span>(int maxStackSize)</code> </td>
</tr>
<tr id="i37" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setSize</a></span>(int size)</code> </td>
</tr>
</table>
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
