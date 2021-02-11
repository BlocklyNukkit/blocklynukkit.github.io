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
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >defaultPerms</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >defaultPermsOp</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.permission">Permissible</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >defSubs</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.permission">Permissible</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >defSubsOp</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">PluginLoader</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >fileAssociations</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >permissions</a></span></code> </td>
</tr>
<tr class="altColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.permission">Permissible</a>&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >permSubs</a></span></code> </td>
</tr>
<tr class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >plugins</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >PluginManager</a></span>(<a  title="class in cn.nukkit">Server</a> server,
             <a  title="class in cn.nukkit.command">SimpleCommandMap</a> commandMap)</code> </td>
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
<td class="colLast"><code><span class="memberNameLink"><a >addPermission</a></span>(<a  title="class in cn.nukkit.permission">Permission</a> permission)</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >callEvent</a></span>(<a  title="class in cn.nukkit.event">Event</a> event)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >clearPlugins</a></span>()</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >disablePlugin</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >disablePlugins</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >enablePlugin</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDefaultPermissions</a></span>(boolean op)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.permission">Permissible</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getDefaultPermSubscriptions</a></span>(boolean op)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.permission">Permission</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermission</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="class in cn.nukkit.permission">Permission</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermissions</a></span>()</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Set</a>&lt;<a  title="interface in cn.nukkit.permission">Permissible</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPermissionSubscriptions</a></span>(<a  title="class or interface in java.lang">String</a> permission)</code> </td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPlugin</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getPlugins</a></span>()</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isPluginEnabled</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.io">File</a> file)</code> </td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.io">File</a> file,
          <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">PluginLoader</a>&gt; loaders)</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.lang">String</a> path)</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="interface in cn.nukkit.plugin">Plugin</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugin</a></span>(<a  title="class or interface in java.lang">String</a> path,
          <a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">PluginLoader</a>&gt; loaders)</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugins</a></span>(<a  title="class or interface in java.io">File</a> dictionary)</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugins</a></span>(<a  title="class or interface in java.io">File</a> dictionary,
           <a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt; newLoaders)</code> </td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugins</a></span>(<a  title="class or interface in java.io">File</a> dictionary,
           <a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt; newLoaders,
           boolean includeDir)</code> </td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugins</a></span>(<a  title="class or interface in java.lang">String</a> dictionary)</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">Map</a>&lt;<a  title="class or interface in java.lang">String</a>,<a  title="interface in cn.nukkit.plugin">Plugin</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >loadPlugins</a></span>(<a  title="class or interface in java.lang">String</a> dictionary,
           <a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">String</a>&gt; newLoaders)</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code>protected <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.command">PluginCommand</a>&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >parseYamlCommands</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >recalculatePermissionDefaults</a></span>(<a  title="class in cn.nukkit.permission">Permission</a> permission)</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >registerEvent</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="class in cn.nukkit.event">Event</a>&gt; event,
             <a  title="interface in cn.nukkit.event">Listener</a> listener,
             <a  title="enum in cn.nukkit.event">EventPriority</a> priority,
             <a  title="interface in cn.nukkit.plugin">EventExecutor</a> executor,
             <a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >registerEvent</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="class in cn.nukkit.event">Event</a>&gt; event,
             <a  title="interface in cn.nukkit.event">Listener</a> listener,
             <a  title="enum in cn.nukkit.event">EventPriority</a> priority,
             <a  title="interface in cn.nukkit.plugin">EventExecutor</a> executor,
             <a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
             boolean ignoreCancelled)</code> </td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >registerEvents</a></span>(<a  title="interface in cn.nukkit.event">Listener</a> listener,
              <a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >registerInterface</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;? extends <a  title="interface in cn.nukkit.plugin">PluginLoader</a>&gt; loaderClass)</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >removePermission</a></span>(<a  title="class in cn.nukkit.permission">Permission</a> permission)</code> </td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >removePermission</a></span>(<a  title="class or interface in java.lang">String</a> name)</code> </td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >subscribeToDefaultPerms</a></span>(boolean op,
                       <a  title="interface in cn.nukkit.permission">Permissible</a> permissible)</code> </td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >subscribeToPermission</a></span>(<a  title="class or interface in java.lang">String</a> permission,
                     <a  title="interface in cn.nukkit.permission">Permissible</a> permissible)</code> </td>
</tr>
<tr id="i33" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unsubscribeFromDefaultPerms</a></span>(boolean op,
                           <a  title="interface in cn.nukkit.permission">Permissible</a> permissible)</code> </td>
</tr>
<tr id="i34" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >unsubscribeFromPermission</a></span>(<a  title="class or interface in java.lang">String</a> permission,
                         <a  title="interface in cn.nukkit.permission">Permissible</a> permissible)</code> </td>
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
