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
<td class="colFirst"><code>static byte</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >COMPRESSION_GZIP</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >COMPRESSION_LEVEL</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>static byte</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >COMPRESSION_ZLIB</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >lastSector</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >lastUsed</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="interface in cn.nukkit.level.format">LevelProvider</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >levelProvider</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Integer</a>,<a  title="class or interface in java.lang">Integer</a>[]&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >locationTable</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >MAX_SECTOR_LENGTH</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >VERSION</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >x</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >z</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >BaseRegionLoader</a></span>(<a  title="interface in cn.nukkit.level.format">LevelProvider</a> level,
                int regionX,
                int regionZ,
                <a  title="class or interface in java.lang">String</a> ext)</code> </td>
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a >Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code>abstract boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >chunkExists</a></span>(int x,
           int z)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >close</a></span>()</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >compress</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>protected abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >createBlank</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>abstract int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >doSlowCleanUp</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">Integer</a>[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLocationIndexes</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.io">RandomAccessFile</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRandomAccessFile</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>abstract int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getX</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>abstract int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getZ</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>protected abstract boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isChunkGenerated</a></span>(int index)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>protected abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadLocationTable</a></span>()</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>abstract <a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >readChunk</a></span>(int x,
         int z)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >removeChunk</a></span>(int x,
           int z)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>protected abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveChunk</a></span>(int x,
         int z,
         byte[] chunkData)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>protected abstract <a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unserializeChunk</a></span>(byte[] data)</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >writeChunk</a></span>(<a  title="interface in cn.nukkit.level.format">FullChunk</a> chunk)</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>protected abstract void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >writeLocationIndex</a></span>(int index)</code> </td>
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
