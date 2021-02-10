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
<td class="colFirst"><code>static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >VERSION</a></span></code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.level.format.generic.BaseLevelProvider">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.level.format.generic.<a  title="class in cn.nukkit.level.format.generic">BaseLevelProvider</a></h3>
<code><a >chunks</a>, <a >lastRegion</a>, <a >level</a>, <a >levelData</a>, <a >path</a>, <a >regions</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.level.format.LevelProvider">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.level.format.<a  title="interface in cn.nukkit.level.format">LevelProvider</a></h3>
<code><a >ORDER_YZX</a>, <a >ORDER_ZXY</a></code></li>
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
<td class="colOne"><code><span class="memberNameLink"><a >Anvil</a></span>(<a  title="class in cn.nukkit.level">Level</a> level,
     <a  title="class or interface in java.lang">String</a> path)</code> </td>
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
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.anvil">ChunkSection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >createChunkSection</a></span>(int y)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >doGarbageCollection</a></span>(long time)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >generate</a></span>(<a  title="class or interface in java.lang">String</a> path,
        <a  title="class or interface in java.lang">String</a> name,
        long seed,
        <a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="class in cn.nukkit.level.generator">Generator</a>&gt; generator)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>static void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >generate</a></span>(<a  title="class or interface in java.lang">String</a> path,
        <a  title="class or interface in java.lang">String</a> name,
        long seed,
        <a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="class in cn.nukkit.level.generator">Generator</a>&gt; generator,
        <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">String</a>&gt; options)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.anvil">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getEmptyChunk</a></span>(int chunkX,
             int chunkZ)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>static <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getProviderName</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>static byte</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getProviderOrder</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>static boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isValid</a></span>(<a  title="class or interface in java.lang">String</a> path)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadChunk</a></span>(long index,
         int chunkX,
         int chunkZ,
         boolean create)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>protected <a  title="class in cn.nukkit.level.format.generic">BaseRegionLoader</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadRegion</a></span>(int x,
          int z)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">AsyncTask</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >requestChunkTask</a></span>(int x,
                int z)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveChunk</a></span>(int X,
         int Z)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveChunk</a></span>(int x,
         int z,
         <a  title="interface in cn.nukkit.level.format">FullChunk</a> chunk)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>static boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >usesChunkSection</a></span>()</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.level.format.generic.BaseLevelProvider">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.level.format.generic.<a  title="class in cn.nukkit.level.format.generic">BaseLevelProvider</a></h3>
<code><a >close</a>, <a >doGarbageCollection</a>, <a >getChunk</a>, <a >getChunk</a>, <a >getCurrentTick</a>, <a >getGamerules</a>, <a >getGenerator</a>, <a >getGeneratorOptions</a>, <a >getLevel</a>, <a >getLevelData</a>, <a >getLoadedChunk</a>, <a >getLoadedChunk</a>, <a >getLoadedChunks</a>, <a >getName</a>, <a >getPath</a>, <a >getRainTime</a>, <a >getRegion</a>, <a >getRegionIndexX</a>, <a >getRegionIndexZ</a>, <a >getSeed</a>, <a >getServer</a>, <a >getSpawn</a>, <a >getThunderTime</a>, <a >getTime</a>, <a >isChunkGenerated</a>, <a >isChunkLoaded</a>, <a >isChunkLoaded</a>, <a >isChunkPopulated</a>, <a >isRaining</a>, <a >isThundering</a>, <a >loadChunk</a>, <a >loadChunk</a>, <a >putChunk</a>, <a >saveChunks</a>, <a >saveLevelData</a>, <a >setChunk</a>, <a >setCurrentTick</a>, <a >setGameRules</a>, <a >setRaining</a>, <a >setRainTime</a>, <a >setSeed</a>, <a >setSpawn</a>, <a >setThundering</a>, <a >setThunderTime</a>, <a >setTime</a>, <a >size</a>, <a >unloadChunk</a>, <a >unloadChunk</a>, <a >unloadChunks</a>, <a >updateLevelName</a></code></li>
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
