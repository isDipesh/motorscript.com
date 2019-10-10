<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Selectize.js binding for Knockout.js"
      published="04 Feb 2015"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This is a custom binding for using Selectize.js with your Knockout.js
        powered application.
      </p>
      <p>
        Selectize is an HTML select alternative (like Select2, Chosen). Knockout
        is an MVVM framework for Javascript.
      </p>

      <p>
        This custom binding wraps the built-in
        <code>options</code> binding of Knockout.js. So, additional parameters
        like <code>optionsValue</code>, <code>optionsText</code>,
        <code>optionsCaption</code>, etc. can be used with this binding. See
        <a
          href="http://knockoutjs.com/documentation/options-binding.html"
          target="_blank"
          rel="noreferrer noopener nofollow"
          >official documentation</a
        >
        for further details. By default, the
        <code>selectize</code> binding uses <code>id</code> for
        <code>optionsValue</code> and <code>name</code> for
        <code>optionsText</code>.
      </p>

      <p>
        By default, the text <code>Choose...</code> is used as
        <code>optionsCaption</code>. You can use
        <code>optionsCaption: null</code> for no captions (first item is
        selected by default).
      </p>

      <p>
        The custom binding is available from
        <a
          href="https://gist.githubusercontent.com/xtranophilist/8001624/raw/ko_selectize.js"
          target="_blank"
          rel="noreferrer noopener nofollow"
          >https://gist.githubusercontent.com/xtranophilist/8001624/raw/ko_selectize.js</a
        >
      </p>

      <p>
        Example files are also available from
        <a
          href="https://gist.github.com/xtranophilist/8001624"
          target="_blank"
          rel="noreferrer noopener nofollow"
          >https://gist.github.com/xtranophilist/8001624</a
        >
      </p>

      <p>
        Warning: This binding wraps the built-in
        <code>options</code> binding of Knockout.js and doesn't provide the
        whole object to Selectize and therefore options like
        <code>searchField</code>
        do not work out of the box.
      </p>

      <h3>
        1. Using selectize with plain select tag, with values built in view.
      </h3>

      <pre class="language-html"><code>
&lt;select data-bind="selectize: {}"&gt;
    &lt;option value="1"&gt;Val 1&lt;/option&gt;
    &lt;option value="2"&gt;Val 2&lt;/option&gt;
&lt;/select&gt;
</code></pre>

      <h3>2. Using values from observable array.</h3>

      <p>
        The dropdown is created with all objects from
        <code>items</code> observable array. The value of <code>id</code> or
        attribute set in <code>optionsValue</code> binding is set to
        <code>item_id</code>.
      </p>
      <pre class="language-html"><code>
&lt;select data-bind="selectize: items, value: item_id"&gt;&lt;/select&gt;</code></pre>

      <h3>3. Getting selected item as an object</h3>

      <p>
        The <code>selectize</code> binding provides optional
        <code>object</code> parameter. While the observable provided with
        <code>value</code> parameter (like <code>item_id</code> in our example)
        holds the <code>id</code> (or whatever property
        <code>optionsValue</code> defines), the observable provided with
        <code>object</code> parameter holds the whole item itself.
      </p>

      <pre class="language-html"><code>
&lt;select data-bind="selectize: items, value: my_item_id, object: my_item"&gt;&lt;/select&gt;</code></pre>

      <h3>4. Using with multiselect</h3>

      <pre class="language-html"><code>
&lt;select data-bind="selectize: items, value: selected_items" multiple&gt;&lt;/select&gt;</code></pre>

      <h3>5. Passing additional options</h3>

      <p>
        See
        <a
          href="https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md"
          target="_blank"
        >
          official Selectize.js usage documentation</a
        >
        for all available options.
      </p>

      <pre class="language-html"><code>
&lt;select data-bind="selectize: items, value: selected_items2, options: {plugins: ['remove_button']}"
        multiple&gt;&lt;/select&gt;</code></pre>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
};
</script>