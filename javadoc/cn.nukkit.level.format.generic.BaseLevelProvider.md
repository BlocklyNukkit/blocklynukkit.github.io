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
<td class="colFirst"><code>protected it.unimi.dsi.fastutil.longs.Long2ObjectMap&lt;<a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >chunks</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util.concurrent.atomic">AtomicReference</a>&lt;<a  title="class in cn.nukkit.level.format.generic">BaseRegionLoader</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >lastRegion</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class in cn.nukkit.level">Level</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >level</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class in cn.nukkit.nbt.tag">CompoundTag</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >levelData</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >path</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected it.unimi.dsi.fastutil.longs.Long2ObjectMap&lt;<a  title="class in cn.nukkit.level.format.generic">BaseRegionLoader</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >regions</a></span></code> </td>
</tr>
</table>
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
<td class="colOne"><code><span class="memberNameLink"><a >BaseLevelProvider</a></span>(<a  title="class in cn.nukkit.level">Level</a> level,
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a >Static Methods</a></span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a >Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
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
<td class="colLast"><code><span class="memberNameLink"><a >doGarbageCollection</a></span>()</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getChunk</a></span>(int chunkX,
        int chunkZ)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getChunk</a></span>(int chunkX,
        int chunkZ,
        boolean create)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCurrentTick</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level">GameRules</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getGamerules</a></span>()</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getGenerator</a></span>()</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">Object</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getGeneratorOptions</a></span>()</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level">Level</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLevel</a></span>()</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.nbt.tag">CompoundTag</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLevelData</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLoadedChunk</a></span>(int chunkX,
              int chunkZ)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLoadedChunk</a></span>(long hash)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">Long</a>,<a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLoadedChunks</a></span>()</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getName</a></span>()</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPath</a></span>()</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRainTime</a></span>()</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.level.format.generic">BaseRegionLoader</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRegion</a></span>(int x,
         int z)</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code>protected static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRegionIndexX</a></span>(int chunkX)</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code>protected static int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRegionIndexZ</a></span>(int chunkZ)</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSeed</a></span>()</code> </td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit">Server</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getServer</a></span>()</code> </td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.math">Vector3</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSpawn</a></span>()</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getThunderTime</a></span>()</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getTime</a></span>()</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isChunkGenerated</a></span>(int chunkX,
                int chunkZ)</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isChunkLoaded</a></span>(int X,
             int Z)</code> </td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isChunkLoaded</a></span>(long hash)</code> </td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isChunkPopulated</a></span>(int chunkX,
                int chunkZ)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isRaining</a></span>()</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isThundering</a></span>()</code> </td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadChunk</a></span>(int chunkX,
         int chunkZ)</code> </td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadChunk</a></span>(int chunkX,
         int chunkZ,
         boolean create)</code> </td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code>abstract <a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadChunk</a></span>(long index,
         int chunkX,
         int chunkZ,
         boolean create)</code> </td>
</tr>
<tr id="i33" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >putChunk</a></span>(long index,
        <a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a> chunk)</code> </td>
</tr>
<tr id="i34" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveChunks</a></span>()</code> </td>
</tr>
<tr id="i35" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >saveLevelData</a></span>()</code> </td>
</tr>
<tr id="i36" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setChunk</a></span>(int chunkX,
        int chunkZ,
        <a  title="interface in cn.nukkit.level.format">FullChunk</a> chunk)</code> </td>
</tr>
<tr id="i37" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setCurrentTick</a></span>(long currentTick)</code> </td>
</tr>
<tr id="i38" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setGameRules</a></span>(<a  title="class in cn.nukkit.level">GameRules</a> rules)</code> </td>
</tr>
<tr id="i39" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setRaining</a></span>(boolean raining)</code> </td>
</tr>
<tr id="i40" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setRainTime</a></span>(int rainTime)</code> </td>
</tr>
<tr id="i41" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setSeed</a></span>(long value)</code> </td>
</tr>
<tr id="i42" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setSpawn</a></span>(<a  title="class in cn.nukkit.math">Vector3</a> pos)</code> </td>
</tr>
<tr id="i43" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setThundering</a></span>(boolean thundering)</code> </td>
</tr>
<tr id="i44" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setThunderTime</a></span>(int thunderTime)</code> </td>
</tr>
<tr id="i45" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setTime</a></span>(long value)</code> </td>
</tr>
<tr id="i46" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >size</a></span>()</code> </td>
</tr>
<tr id="i47" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unloadChunk</a></span>(int X,
           int Z)</code> </td>
</tr>
<tr id="i48" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unloadChunk</a></span>(int X,
           int Z,
           boolean safe)</code> </td>
</tr>
<tr id="i49" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unloadChunks</a></span>()</code> </td>
</tr>
<tr id="i50" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >updateLevelName</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
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
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.level.format.LevelProvider">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.level.format.<a  title="interface in cn.nukkit.level.format">LevelProvider</a></h3>
<code><a >doGarbageCollection</a>, <a >getEmptyChunk</a>, <a >requestChunkTask</a>, <a >saveChunk</a>, <a >saveChunk</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
