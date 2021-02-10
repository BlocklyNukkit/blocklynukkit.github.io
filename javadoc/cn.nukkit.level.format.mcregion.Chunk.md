<div class="summary">
<ul class="blockList">
<li class="blockList">

<li class="blockList"><a name="field.summary">
<!--   -->
</a>
<h3>成员变量一览</h3>
<ul class="blockList">
<li class="blockList"><a name="fields.inherited.from.class.cn.nukkit.level.format.generic.BaseFullChunk">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.level.format.generic.<a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></h3>
<code><a >biomes</a>, <a >blockLight</a>, <a >blocks</a>, <a >changes</a>, <a >chunkPacket</a>, <a >data</a>, <a >entities</a>, <a >extraData</a>, <a >heightMap</a>, <a >isInit</a>, <a >NBTentities</a>, <a >NBTtiles</a>, <a >provider</a>, <a >providerClass</a>, <a >skyLight</a>, <a >tileList</a>, <a >tiles</a></code></li>
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
<td class="colOne"><code><span class="memberNameLink"><a >Chunk</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="interface in cn.nukkit.level.format">LevelProvider</a>&gt; providerClass)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >Chunk</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="interface in cn.nukkit.level.format">LevelProvider</a>&gt; providerClass,
     <a  title="class in cn.nukkit.nbt.tag">CompoundTag</a> nbt)</code> </td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >Chunk</a></span>(<a  title="interface in cn.nukkit.level.format">LevelProvider</a> level)</code> </td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >Chunk</a></span>(<a  title="interface in cn.nukkit.level.format">LevelProvider</a> level,
     <a  title="class in cn.nukkit.nbt.tag">CompoundTag</a> nbt)</code> </td>
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
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromBinary</a></span>(byte[] data)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromBinary</a></span>(byte[] data,
          <a  title="interface in cn.nukkit.level.format">LevelProvider</a> provider)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromFastBinary</a></span>(byte[] data)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fromFastBinary</a></span>(byte[] data,
              <a  title="interface in cn.nukkit.level.format">LevelProvider</a> provider)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.block">Block</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAndSetBlock</a></span>(int x,
              int y,
              int z,
              <a  title="class in cn.nukkit.block">Block</a> block)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBlockData</a></span>(int x,
            int y,
            int z)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBlockId</a></span>(int x,
          int y,
          int z)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBlockLight</a></span>(int x,
             int y,
             int z)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBlockSkyLight</a></span>(int x,
                int y,
                int z)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getEmptyChunk</a></span>(int chunkX,
             int chunkZ)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>static <a  title="class in cn.nukkit.level.format.mcregion">Chunk</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getEmptyChunk</a></span>(int chunkX,
             int chunkZ,
             <a  title="interface in cn.nukkit.level.format">LevelProvider</a> provider)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getFullBlock</a></span>(int x,
            int y,
            int z)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.nbt.tag">CompoundTag</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getNBT</a></span>()</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isGenerated</a></span>()</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isLightPopulated</a></span>()</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isPopulated</a></span>()</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlock</a></span>(int x,
        int y,
        int z,
        int blockId)</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlock</a></span>(int x,
        int y,
        int z,
        int blockId,
        int meta)</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlockData</a></span>(int x,
            int y,
            int z,
            int data)</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlockId</a></span>(int x,
          int y,
          int z,
          int id)</code> </td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlockLight</a></span>(int x,
             int y,
             int z,
             int level)</code> </td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setBlockSkyLight</a></span>(int x,
                int y,
                int z,
                int level)</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setGenerated</a></span>()</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setGenerated</a></span>(boolean value)</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setLightPopulated</a></span>()</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setLightPopulated</a></span>(boolean value)</code> </td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setPopulated</a></span>()</code> </td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >setPopulated</a></span>(boolean value)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code>byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >toBinary</a></span>()</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code>byte[]</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >toFastBinary</a></span>()</code> </td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.level.format.generic.BaseFullChunk">
<!--   -->
</a>
<h3>继承自类 cn.nukkit.level.format.generic.<a  title="class in cn.nukkit.level.format.generic">BaseFullChunk</a></h3>
<code><a >addBlockEntity</a>, <a >addEntity</a>, <a >clone</a>, <a >compress</a>, <a >getBiomeId</a>, <a >getBiomeIdArray</a>, <a >getBlockDataArray</a>, <a >getBlockDataAt</a>, <a >getBlockEntities</a>, <a >getBlockExtraData</a>, <a >getBlockExtraDataArray</a>, <a >getBlockIdArray</a>, <a >getBlockIdAt</a>, <a >getBlockLightArray</a>, <a >getBlockSkyLightArray</a>, <a >getChanges</a>, <a >getChunk</a>, <a >getChunkPacket</a>, <a >getEntities</a>, <a >getHeightMap</a>, <a >getHeightMapArray</a>, <a >getHighestBlockAt</a>, <a >getHighestBlockAt</a>, <a >getIndex</a>, <a >getProvider</a>, <a >getSeed</a>, <a >getTile</a>, <a >getX</a>, <a >getZ</a>, <a >hasChanged</a>, <a >initChunk</a>, <a >isLoaded</a>, <a >load</a>, <a >load</a>, <a >populateSkyLight</a>, <a >recalculateHeightMap</a>, <a >removeBlockEntity</a>, <a >removeEntity</a>, <a >setBiomeId</a>, <a >setBlockAt</a>, <a >setBlockDataAt</a>, <a >setBlockExtraData</a>, <a >setBlockFullIdAt</a>, <a >setBlockIdAt</a>, <a >setChanged</a>, <a >setChanged</a>, <a >setChunk</a>, <a >setChunk</a>, <a >setChunkPacket</a>, <a >setHeightMap</a>, <a >setPosition</a>, <a >setProvider</a>, <a >setX</a>, <a >setZ</a>, <a >unload</a>, <a >unload</a>, <a >unload</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">equals</a>, <a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">hashCode</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">toString</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.level.format.FullChunk">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.level.format.<a  title="interface in cn.nukkit.level.format">FullChunk</a></h3>
<code><a >setBiome</a>, <a >setBiomeId</a>, <a >setFullBlockId</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.cn.nukkit.level.ChunkManager">
<!--   -->
</a>
<h3>继承自接口 cn.nukkit.level.<a  title="interface in cn.nukkit.level">ChunkManager</a></h3>
<code><a >setBlockAt</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
