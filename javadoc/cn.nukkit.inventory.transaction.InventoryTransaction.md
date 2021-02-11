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
<td class="colFirst"><code>protected <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >actions</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >hasExecuted</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.inventory">Inventory</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >inventories</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class in cn.nukkit">Player</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >source</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >InventoryTransaction</a></span>(<a  title="class in cn.nukkit">Player</a> source,
                    <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt; actions)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >InventoryTransaction</a></span>(<a  title="class in cn.nukkit">Player</a> source,
                    <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt; actions,
                    boolean init)</code> </td>
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
<td class="colLast"><code><span class="memberNameLink"><a >addAction</a></span>(<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a> action)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >addInventory</a></span>(<a  title="interface in cn.nukkit.inventory">Inventory</a> inventory)</code>
<div class="block">This method should not be used by plugins, it's used to add tracked inventories for InventoryActions
 involving inventories.</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>protected boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >callExecuteEvent</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >canExecute</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >execute</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getActionList</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getActions</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCreationTime</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.inventory">Inventory</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getInventories</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit">Player</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSource</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >hasExecuted</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>protected void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >init</a></span>(<a  title="class in cn.nukkit">Player</a> source,
    <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.inventory.transaction.action">InventoryAction</a>&gt; actions)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>protected boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >matchItems</a></span>(<a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; needItems,
          <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; haveItems)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>protected void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >sendInventories</a></span>()</code> </td>
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
