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
<td class="colFirst"><code>byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >array</a></span></code>
<div class="block">The array backing the output stream.</div>
</td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >DEFAULT_INITIAL_CAPACITY</a></span></code>
<div class="block">The array backing the output stream.</div>
</td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >length</a></span></code>
<div class="block">The number of valid bytes in <a ><code>array</code></a>.</div>
</td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>static long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >ONEOVERPHI</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >FastByteArrayOutputStream</a></span>()</code>
<div class="block">Creates a new array output stream with an initial capacity of <a ><code>DEFAULT_INITIAL_CAPACITY</code></a> bytes.</div>
</td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >FastByteArrayOutputStream</a></span>(byte[] a)</code>
<div class="block">Creates a new array output stream wrapping a given byte array.</div>
</td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >FastByteArrayOutputStream</a></span>(int initialCapacity)</code>
<div class="block">Creates a new array output stream with a given initial capacity.</div>
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
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >ensureOffsetLength</a></span>(int arrayLength,
                  int offset,
                  int length)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>static byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >grow</a></span>(byte[] array,
    int length)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >grow</a></span>(byte[] array,
    int length,
    int preserve)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >length</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >position</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >position</a></span>(long newPosition)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.nbt.stream">FastByteArrayOutputStream</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >reset</a></span>()</code>
<div class="block">Marks this array output stream as empty.</div>
</td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >toByteArray</a></span>()</code> </td>
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
<li class="blockList"><a name="methods.inherited.from.class.java.io.OutputStream">
<!--   -->
</a>
<h3>继承自类 java.io.<a  title="class or interface in java.io">OutputStream</a></h3>
<code><a  title="class or interface in java.io">close</a>, <a  title="class or interface in java.io">flush</a>, <a  title="class or interface in java.io">write</a></code></li>
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
