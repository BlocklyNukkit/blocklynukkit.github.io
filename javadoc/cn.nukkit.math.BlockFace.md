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
<td class="colLast"><code><span class="memberNameLink"><a  title="enum in cn.nukkit.math">BlockFace.Axis</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>static class </code></td>
<td class="colLast"><code><span class="memberNameLink"><a  title="enum in cn.nukkit.math">BlockFace.AxisDirection</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>static class </code></td>
<td class="colLast"><code><span class="memberNameLink"><a  title="enum in cn.nukkit.math">BlockFace.Plane</a></span></code> </td>
</tr>
</table>
</li>
</ul>
<!-- =========== ENUM CONSTANT SUMMARY =========== -->
<ul class="blockList">
<li class="blockList"><a name="enum.constant.summary">
<!--   -->
</a>
<h3>Enum Constant Summary</h3>
<table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Enum Constant Summary table, listing enum constants, and an explanation">
<caption><span>Enum Constants</span><span class="tabEnd"> </span></caption>
<tr>
<th class="colOne" scope="col">Enum Constant and Description</th>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >DOWN</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >EAST</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >NORTH</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >SOUTH</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >UP</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >WEST</a></span></code> </td>
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
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromAxis</a></span>(<a  title="enum in cn.nukkit.math">BlockFace.AxisDirection</a> axisDirection,
        <a  title="enum in cn.nukkit.math">BlockFace.Axis</a> axis)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromHorizontalAngle</a></span>(double angle)</code>
<div class="block">Get the BlockFace corresponding to the given angle (0-360).</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromHorizontalIndex</a></span>(int index)</code>
<div class="block">Get a BlockFace by it's horizontal index (0-3).</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromIndex</a></span>(int index)</code>
<div class="block">Get a BlockFace by it's index (0-5).</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.math">BlockFace.Axis</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAxis</a></span>()</code>
<div class="block">Get the Axis of this BlockFace</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.math">BlockFace.AxisDirection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAxisDirection</a></span>()</code>
<div class="block">Get the AxisDirection of this BlockFace</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getHorizontalAngle</a></span>()</code>
<div class="block">Get the angle of this BlockFace (0-360)</div>
</td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getHorizontalIndex</a></span>()</code>
<div class="block">Get the horizontal index of this BlockFace (0-3).</div>
</td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getIndex</a></span>()</code>
<div class="block">Get the index of this BlockFace (0-5).</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code>
<div class="block">Get the name of this BlockFace (up, down, north, etc.)</div>
</td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getOpposite</a></span>()</code>
<div class="block">Get the opposite BlockFace (e.g.</div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.math">Vector3</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getUnitVector</a></span>()</code>
<div class="block">Get the unit vector of this BlockFace</div>
</td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getXOffset</a></span>()</code>
<div class="block">Returns an offset that addresses the block in front of this BlockFace</div>
</td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getYOffset</a></span>()</code>
<div class="block">Returns an offset that addresses the block in front of this BlockFace</div>
</td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getZOffset</a></span>()</code>
<div class="block">Returns an offset that addresses the block in front of this BlockFace</div>
</td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >random</a></span>(<a  title="class or interface in java.util">Random</a> rand)</code>
<div class="block">Choose a random BlockFace using the given Random</div>
</td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >rotateY</a></span>()</code>
<div class="block">Rotate this BlockFace around the Y axis clockwise (NORTH =&gt; EAST =&gt; SOUTH =&gt; WEST =&gt; NORTH)</div>
</td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >rotateYCCW</a></span>()</code>
<div class="block">Rotate this BlockFace around the Y axis counter-clockwise (NORTH =&gt; WEST =&gt; SOUTH =&gt; EAST =&gt; NORTH)</div>
</td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >toString</a></span>()</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >valueOf</a></span>(<a  title="class or interface in java.lang">String</a> name)</code>
<div class="block">Returns the enum constant of this type with the specified name.</div>
</td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code>static <a  title="enum in cn.nukkit.math">BlockFace</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >values</a></span>()</code>
<div class="block">Returns an array containing the constants of this enum type, in
the order they are declared.</div>
</td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Enum">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Enum</a></h3>
<code><a  title="class or interface in java.lang">clone</a>, <a  title="class or interface in java.lang">compareTo</a>, <a  title="class or interface in java.lang">equals</a>, <a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getDeclaringClass</a>, <a  title="class or interface in java.lang">hashCode</a>, <a  title="class or interface in java.lang">name</a>, <a  title="class or interface in java.lang">ordinal</a>, <a  title="class or interface in java.lang">valueOf</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
