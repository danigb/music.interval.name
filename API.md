# music.interval.name


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="name"><span class="type-signature"></span>name<span class="signature">(interval)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert from <a href="https://github.com/danigb/music.array.notation">array interval notation</a>
to <a href="https://en.wikipedia.org/wiki/Interval_(music">shorthand interval notation</a>#Shorthand_notation)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval in array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.interval.short-name/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.interval.short-name/blob/master/index.js#L10">lineno 10</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the interval string or null if not valid interval</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>interval.name([1, 0, 0]) // => '2M'
interval.name([1, 0, 1]) // => '9M'</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->