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
<td class="colLast"><code><span class="memberNameLink"><a >WORKERS</a></span></code> </td>
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
<td class="colOne"><code><span class="memberNameLink"><a >ServerScheduler</a></span>()</code> </td>
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
<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a >Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a >Concrete Methods</a></span><span class="tabEnd"> </span></span><span id="t6" class="tableTab"><span><a >Deprecated Methods</a></span><span class="tabEnd"> </span></span></caption>
<tr>
<th>修饰符和类</th>
<th>成员函数描述</th>
</tr>
<tr id="i0" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >cancelAllTasks</a></span>()</code> </td>
</tr>
<tr id="i1" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >cancelTask</a></span>(int taskId)</code> </td>
</tr>
<tr id="i2" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >cancelTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin)</code> </td>
</tr>
<tr id="i3" class="rowColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getAsyncTaskPoolSize</a></span>()</code> </td>
</tr>
<tr id="i4" class="altColor">
<td class="colFirst"><code>int</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >getQueueSize</a></span>()</code> </td>
</tr>
<tr id="i5" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >increaseAsyncTaskPoolSize</a></span>(int newSize)</code> </td>
</tr>
<tr id="i6" class="altColor">
<td class="colFirst"><code>boolean</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >isQueued</a></span>(int taskId)</code> </td>
</tr>
<tr id="i7" class="rowColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >mainThreadHeartbeat</a></span>(int currentTick)</code> </td>
</tr>
<tr id="i8" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleAsyncTask</a></span>(<a  title="class in cn.nukkit.scheduler">AsyncTask</a> task)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleAsyncTask(Plugin, AsyncTask)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i9" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleAsyncTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                 <a  title="class in cn.nukkit.scheduler">AsyncTask</a> task)</code> </td>
</tr>
<tr id="i10" class="altColor">
<td class="colFirst"><code>void</code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleAsyncTaskToWorker</a></span>(<a  title="class in cn.nukkit.scheduler">AsyncTask</a> task,
                         int worker)</code>
<div class="block"><strong>此函数已弃用</strong> </div>
</td>
</tr>
<tr id="i11" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                            <a  title="class or interface in java.lang">Runnable</a> task,
                            int delay,
                            int period)</code> </td>
</tr>
<tr id="i12" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                            <a  title="class or interface in java.lang">Runnable</a> task,
                            int delay,
                            int period,
                            boolean asynchronous)</code> </td>
</tr>
<tr id="i13" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                            int delay,
                            int period)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleDelayedRepeatingTask(Plugin, Runnable, int, int)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i14" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                            int delay,
                            int period,
                            boolean asynchronous)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleDelayedRepeatingTask(Plugin, Runnable, int, int, boolean)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i15" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                            int delay,
                            int period)</code> </td>
</tr>
<tr id="i16" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedRepeatingTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                            int delay,
                            int period,
                            boolean asynchronous)</code> </td>
</tr>
<tr id="i17" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                   <a  title="class or interface in java.lang">Runnable</a> task,
                   int delay)</code> </td>
</tr>
<tr id="i18" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                   <a  title="class or interface in java.lang">Runnable</a> task,
                   int delay,
                   boolean asynchronous)</code> </td>
</tr>
<tr id="i19" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                   int delay)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleDelayedTask(Plugin, Runnable, int)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i20" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                   int delay,
                   boolean asynchronous)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleDelayedTask(Plugin, Runnable, int, boolean)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i21" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                   int delay)</code> </td>
</tr>
<tr id="i22" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleDelayedTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                   int delay,
                   boolean asynchronous)</code> </td>
</tr>
<tr id="i23" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                     <a  title="class or interface in java.lang">Runnable</a> task,
                     int period)</code> </td>
</tr>
<tr id="i24" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
                     <a  title="class or interface in java.lang">Runnable</a> task,
                     int period,
                     boolean asynchronous)</code> </td>
</tr>
<tr id="i25" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                     int period)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleRepeatingTask(Plugin, Runnable, int)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i26" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
                     int period,
                     boolean asynchronous)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleRepeatingTask(Plugin, Runnable, int, boolean)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i27" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                     int period)</code> </td>
</tr>
<tr id="i28" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleRepeatingTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task,
                     int period,
                     boolean asynchronous)</code> </td>
</tr>
<tr id="i29" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
            <a  title="class or interface in java.lang">Runnable</a> task)</code> </td>
</tr>
<tr id="i30" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleTask</a></span>(<a  title="interface in cn.nukkit.plugin">Plugin</a> plugin,
            <a  title="class or interface in java.lang">Runnable</a> task,
            boolean asynchronous)</code> </td>
</tr>
<tr id="i31" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleTask(Plugin, Runnable)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i32" class="altColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleTask</a></span>(<a  title="class or interface in java.lang">Runnable</a> task,
            boolean asynchronous)</code>
<div class="block"><strong>此函数已弃用</strong>  
<div class="block"><span class="deprecationComment">Use <a ><code>scheduleTask(Plugin, Runnable, boolean)</code></a></span></div>
</div>
</td>
</tr>
<tr id="i33" class="rowColor">
<td class="colFirst"><code><a  title="class in cn.nukkit.scheduler">TaskHandler</a></code></td>
<td class="colLast"><code><span class="memberNameLink"><a >scheduleTask</a></span>(<a  title="class in cn.nukkit.scheduler">Task</a> task)</code> </td>
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
