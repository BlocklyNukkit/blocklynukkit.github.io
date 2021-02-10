<div class="summary">
<ul class="blockList">
<li class="blockList">

<li class="blockList"><a name="field.summary">
<!--   -->
</a>
<h3>成员变量一览</h3>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.java.io.FilterOutputStream">
<!--   -->
</a>
<h3>继承自类 java.io.<a  title="class or interface in java.io">FilterOutputStream</a></h3>
<code><a  title="class or interface in java.io">out</a></code></li>
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
<td class="colOne"><code><span class="memberNameLink"><a >PGZIPOutputStream</a></span>(<a  title="class or interface in java.io">OutputStream</a> out)</code>
<div class="block">Creates a PGZIPOutputStream
 using <a ><code>getSharedThreadPool()</code></a>
 and <a  title="class or interface in java.lang"><code>Runtime.availableProcessors()</code></a>.</div>
</td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >PGZIPOutputStream</a></span>(<a  title="class or interface in java.io">OutputStream</a> out,
                 <a  title="class or interface in java.util.concurrent">ExecutorService</a> executor,
                 int nthreads)</code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >PGZIPOutputStream</a></span>(<a  title="class or interface in java.io">OutputStream</a> out,
                 int nthreads)</code>
<div class="block">Creates a PGZIPOutputStream
 using <a ><code>getSharedThreadPool()</code></a>.</div>
</td>
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
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>()</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >flush</a></span>()</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static <a  title="class or interface in java.util.concurrent">ExecutorService</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSharedThreadPool</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util.zip">Deflater</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >newDeflater</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>protected static <a  title="class or interface in java.util.zip">DeflaterOutputStream</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >newDeflaterOutputStream</a></span>(<a  title="class or interface in java.io">OutputStream</a> out,
                       <a  title="class or interface in java.util.zip">Deflater</a> deflater)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setLevel</a></span>(int level)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setStrategy</a></span>(int strategy)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >write</a></span>(byte[] b)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >write</a></span>(byte[] b,
     int off,
     int len)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >write</a></span>(int b)</code> </td>
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
