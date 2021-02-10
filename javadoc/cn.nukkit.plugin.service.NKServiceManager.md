<div class="summary">
<ul class="blockList">
<li class="blockList">
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
<td class="colOne"><code><span class="memberNameLink"><a >NKServiceManager</a></span>()</code> </td>
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
<td class="colFirst"><code>&lt;T&gt; <a  title="class in cn.nukkit.plugin.service">RegisteredServiceProvider</a>&lt;T&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >cancel</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service,
      T provider)</code>
<div class="block">Cancel a service's provider.</div>
</td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.plugin.service">RegisteredServiceProvider</a>&lt;?&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >cancel</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code>
<div class="block">Cancel service's provider(s) offered this plugin.</div>
</td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class or interface in java.lang">Class</a>&lt;?&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getKnownService</a></span>()</code>
<div class="block">Return the known service(s).</div>
</td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>&lt;T&gt; <a  title="class in cn.nukkit.plugin.service">RegisteredServiceProvider</a>&lt;T&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getProvider</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service)</code>
<div class="block">Return the service's provider.</div>
</td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>&lt;T&gt; <a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.plugin.service">RegisteredServiceProvider</a>&lt;T&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRegistrations</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service)</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code><a  title="class or interface in java.util">List</a>&lt;<a  title="class in cn.nukkit.plugin.service">RegisteredServiceProvider</a>&lt;?&gt;&gt;</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getRegistrations</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>&lt;T&gt; boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isProvidedFor</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>protected &lt;T&gt; boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >provide</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service,
       T instance,
       <a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
       <a  title="enum in cn.nukkit.plugin.service">ServicePriority</a> priority)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code>&lt;T&gt; boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >register</a></span>(<a  title="class or interface in java.lang">Class</a>&lt;T&gt; service,
        T provider,
        <a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
        <a  title="enum in cn.nukkit.plugin.service">ServicePriority</a> priority)</code>
<div class="block">Register an object as a service's provider.</div>
</td>
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
