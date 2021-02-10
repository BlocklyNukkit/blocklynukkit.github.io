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
<td class="colOne"><code><span class="memberNameLink"><a >ShapelessRecipe</a></span>(<a  title="class in cn.nukkit.item">Item</a> result,
               <a  title="class or interface in java.util">Collection</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; ingredients)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >ShapelessRecipe</a></span>(<a  title="class or interface in java.lang">String</a> recipeId,
               int priority,
               <a  title="class in cn.nukkit.item">Item</a> result,
               <a  title="class or interface in java.util">Collection</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; ingredients)</code> </td>
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
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAllResults</a></span>()</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getExtraResults</a></span>()</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">UUID</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getId</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getIngredientCount</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getIngredientList</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getIngredientsAggregate</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPriority</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRecipeId</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.item">Item</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getResult</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.inventory">RecipeType</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getType</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >matchItems</a></span>(<a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; inputList,
          <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; extraOutputList)</code>
<div class="block">Returns whether the specified list of crafting grid inputs and outputs matches this recipe.</div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >matchItems</a></span>(<a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; inputList,
          <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.item">Item</a>&gt; extraOutputList,
          int multiplier)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >registerToCraftingManager</a></span>(<a  title="class in cn.nukkit.inventory">CraftingManager</a> manager)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >requiresCraftingTable</a></span>()</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setId</a></span>(<a  title="class or interface in java.util">UUID</a> uuid)</code> </td>
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
