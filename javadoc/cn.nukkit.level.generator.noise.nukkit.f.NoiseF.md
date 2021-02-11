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
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >expansion</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >octaves</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >offsetX</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >offsetY</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >offsetZ</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected int[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >perm</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >persistence</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >NoiseF</a></span>()</code> </td>
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
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >bilinearLerp</a></span>(float x,
            float y,
            float q00,
            float q01,
            float q10,
            float q11,
            float x1,
            float x2,
            float y1,
            float y2)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fade</a></span>(float x)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >floor</a></span>(float x)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>abstract float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getNoise2D</a></span>(float x,
          float z)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>abstract float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getNoise3D</a></span>(float x,
          float y,
          float z)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >grad</a></span>(int hash,
    float x,
    float y,
    float z)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >lerp</a></span>(float x,
    float y,
    float z)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >linearLerp</a></span>(float x,
          float x1,
          float x2,
          float q0,
          float q1)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >noise2D</a></span>(float x,
       float z)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >noise2D</a></span>(float x,
       float z,
       boolean normalized)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >noise3D</a></span>(float x,
       float y,
       float z)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >noise3D</a></span>(float x,
       float y,
       float z,
       boolean normalized)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setOffset</a></span>(float x,
         float y,
         float z)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>static float</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >trilinearLerp</a></span>(float x,
             float y,
             float z,
             float q000,
             float q001,
             float q010,
             float q011,
             float q100,
             float q101,
             float q110,
             float q111,
             float x1,
             float x2,
             float y1,
             float y2,
             float z1,
             float z2)</code> </td>
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
