<div class="summary">
<ul class="blockList">
<li class="blockList">
<!-- ======== NESTED CLASS SUMMARY ======== -->
<ul class="blockList">
<li class="blockList"><a name="nested.class.summary">
<!--   -->
</a>
<h3>Nested Class Summary</h3>
<ul class="blockList">
<li class="blockList"><a name="nested.classes.inherited.from.class.java.util.AbstractMap">
<!--   -->
</a>
<h3>Nested classes/interfaces inherited from class java.util.<a  title="class or interface in java.util">AbstractMap</a></h3>
<code><a  title="class or interface in java.util">AbstractMap.SimpleEntry</a>&lt;<a  title="class or interface in java.util">K</a>,<a  title="class or interface in java.util">V</a>&gt;, <a  title="class or interface in java.util">AbstractMap.SimpleImmutableEntry</a>&lt;<a  title="class or interface in java.util">K</a>,<a  title="class or interface in java.util">V</a>&gt;</code></li>
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
<td class="colOne"><code><span class="memberNameLink"><a >ConfigSection</a></span>()</code>
<div class="block">Empty ConfigSection constructor</div>
</td>
</tr>
<tr class="rowColor">
<td class="colOne"><code><span class="memberNameLink"><a >ConfigSection</a></span>(<a  title="class or interface in java.util">LinkedHashMap</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">Object</a>&gt; map)</code>
<div class="block">Constructor of ConfigSection, based on values stored in map.</div>
</td>
</tr>
<tr class="altColor">
<td class="colOne"><code><span class="memberNameLink"><a >ConfigSection</a></span>(<a  title="class or interface in java.lang">String</a> key,
             <a  title="class or interface in java.lang">Object</a> value)</code>
<div class="block">Constructor of ConfigSection that contains initial key/value data</div>
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >exists</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check existence of config section element</div>
</td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >exists</a></span>(<a  title="class or interface in java.lang">String</a> key,
      boolean ignoreCase)</code>
<div class="block">Check existence of config section element</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">Object</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >get</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get object by key.</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>&lt;T&gt; T</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >get</a></span>(<a  title="class or interface in java.lang">String</a> key,
   T defaultValue)</code>
<div class="block">Get object by key.</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.utils">ConfigSection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAll</a></span>()</code>
<div class="block">Get new instance of config section</div>
</td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.lang">Object</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAllMap</a></span>()</code>
<div class="block">Get root section as LinkedHashMap</div>
</td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBoolean</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get boolean value of config section element</div>
</td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBoolean</a></span>(<a  title="class or interface in java.lang">String</a> key,
          boolean defaultValue)</code>
<div class="block">Get boolean value of config section element</div>
</td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Boolean</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getBooleanList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Boolean List value of config section element</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Byte</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getByteList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Byte List value of config section element</div>
</td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Character</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getCharacterList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Character List value of config section element</div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code>double</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDouble</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get double value of config section element</div>
</td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code>double</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDouble</a></span>(<a  title="class or interface in java.lang">String</a> key,
         double defaultValue)</code>
<div class="block">Get double value of config section element</div>
</td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Double</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDoubleList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Double List value of config section element</div>
</td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Float</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getFloatList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Float List value of config section element</div>
</td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getInt</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get int value of config section element</div>
</td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getInt</a></span>(<a  title="class or interface in java.lang">String</a> key,
      int defaultValue)</code>
<div class="block">Get int value of config section element</div>
</td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Integer</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getIntegerList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Integer List value of config section element</div>
</td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getKeys</a></span>()</code>
<div class="block">Get all keys</div>
</td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getKeys</a></span>(boolean child)</code>
<div class="block">Get all keys</div>
</td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get List value of config section element</div>
</td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getList</a></span>(<a  title="class or interface in java.lang">String</a> key,
       <a  title="class or interface in java.util">List</a> defaultList)</code>
<div class="block">Get List value of config section element</div>
</td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLong</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get long value of config section element</div>
</td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>long</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLong</a></span>(<a  title="class or interface in java.lang">String</a> key,
       long defaultValue)</code>
<div class="block">Get long value of config section element</div>
</td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Long</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getLongList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Long List value of config section element</div>
</td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.util">Map</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getMapList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Map List value of config section element</div>
</td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.utils">ConfigSection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSection</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get config section element defined by key</div>
</td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.utils">ConfigSection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSections</a></span>()</code>
<div class="block">Get all ConfigSections in root path.</div>
</td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.utils">ConfigSection</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getSections</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get sections (and only sections) from provided path</div>
</td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Short</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getShortList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get Short List value of config section element</div>
</td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getString</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get String value of config section element</div>
</td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.lang">String</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getString</a></span>(<a  title="class or interface in java.lang">String</a> key,
         <a  title="class or interface in java.lang">String</a> defaultValue)</code>
<div class="block">Get String value of config section element</div>
</td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getStringList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Get String List value of config section element</div>
</td>
</tr>
<tr id="i33" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isBoolean</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i34" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isDouble</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i35" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isInt</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i36" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isList</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i37" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isLong</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i38" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isSection</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i39" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isString</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Check type of section element defined by key.</div>
</td>
</tr>
<tr id="i40" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >remove</a></span>(<a  title="class or interface in java.lang">String</a> key)</code>
<div class="block">Remove config section element</div>
</td>
</tr>
<tr id="i41" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >set</a></span>(<a  title="class or interface in java.lang">String</a> key,
   <a  title="class or interface in java.lang">Object</a> value)</code>
<div class="block">Store value into config section</div>
</td>
</tr>
</table>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.util.LinkedHashMap">
<!--   -->
</a>
<h3>继承自类 java.util.<a  title="class or interface in java.util">LinkedHashMap</a></h3>
<code><a  title="class or interface in java.util">clear</a>, <a  title="class or interface in java.util">containsValue</a>, <a  title="class or interface in java.util">entrySet</a>, <a  title="class or interface in java.util">forEach</a>, <a  title="class or interface in java.util">get</a>, <a  title="class or interface in java.util">getOrDefault</a>, <a  title="class or interface in java.util">keySet</a>, <a  title="class or interface in java.util">removeEldestEntry</a>, <a  title="class or interface in java.util">replaceAll</a>, <a  title="class or interface in java.util">values</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.util.HashMap">
<!--   -->
</a>
<h3>继承自类 java.util.<a  title="class or interface in java.util">HashMap</a></h3>
<code><a  title="class or interface in java.util">clone</a>, <a  title="class or interface in java.util">compute</a>, <a  title="class or interface in java.util">computeIfAbsent</a>, <a  title="class or interface in java.util">computeIfPresent</a>, <a  title="class or interface in java.util">containsKey</a>, <a  title="class or interface in java.util">isEmpty</a>, <a  title="class or interface in java.util">merge</a>, <a  title="class or interface in java.util">put</a>, <a  title="class or interface in java.util">putAll</a>, <a  title="class or interface in java.util">putIfAbsent</a>, <a  title="class or interface in java.util">remove</a>, <a  title="class or interface in java.util">remove</a>, <a  title="class or interface in java.util">replace</a>, <a  title="class or interface in java.util">replace</a>, <a  title="class or interface in java.util">size</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.util.AbstractMap">
<!--   -->
</a>
<h3>继承自类 java.util.<a  title="class or interface in java.util">AbstractMap</a></h3>
<code><a  title="class or interface in java.util">equals</a>, <a  title="class or interface in java.util">hashCode</a>, <a  title="class or interface in java.util">toString</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
<!--   -->
</a>
<h3>继承自类 java.lang.<a  title="class or interface in java.lang">Object</a></h3>
<code><a  title="class or interface in java.lang">finalize</a>, <a  title="class or interface in java.lang">getClass</a>, <a  title="class or interface in java.lang">notify</a>, <a  title="class or interface in java.lang">notifyAll</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a>, <a  title="class or interface in java.lang">wait</a></code></li>
</ul>
<ul class="blockList">
<li class="blockList"><a name="methods.inherited.from.class.java.util.Map">
<!--   -->
</a>
<h3>继承自接口 java.util.<a  title="class or interface in java.util">Map</a></h3>
<code><a  title="class or interface in java.util">compute</a>, <a  title="class or interface in java.util">computeIfAbsent</a>, <a  title="class or interface in java.util">computeIfPresent</a>, <a  title="class or interface in java.util">containsKey</a>, <a  title="class or interface in java.util">equals</a>, <a  title="class or interface in java.util">hashCode</a>, <a  title="class or interface in java.util">isEmpty</a>, <a  title="class or interface in java.util">merge</a>, <a  title="class or interface in java.util">put</a>, <a  title="class or interface in java.util">putAll</a>, <a  title="class or interface in java.util">putIfAbsent</a>, <a  title="class or interface in java.util">remove</a>, <a  title="class or interface in java.util">remove</a>, <a  title="class or interface in java.util">replace</a>, <a  title="class or interface in java.util">replace</a>, <a  title="class or interface in java.util">size</a></code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
