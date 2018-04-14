<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Selectize.js binding for Knockout.js" published="04 Feb 2015"/>

        <div class="content" itemprop="articleBody">
            <p>This is a custom binding for using Selectize.js with your Knockout.js powered application.</p>
            <p>Selectize is an HTML select alternative (like Select2, Chosen). Knockout is an MVVM framework for Javascript.</p>

            <p>
                This custom binding wraps the built-in <span class="hl">options</span>
                binding of Knockout.js. So, additional parameters
                like <span class="hl">optionsValue</span>, <span class="hl">optionsText</span>, <span
                    class="hl">optionsCaption</span>,
                etc. can be used with this binding.

                See <a href="http://knockoutjs.com/documentation/options-binding.html" target="_blank"
                       rel="noreferrer noopener nofollow">official
                documentation</a> for further
                details. By default, the <span class="hl">selectize</span> binding uses <span class="hl">id</span> for <span
                    class="hl">optionsValue</span>
                and <span class="hl">name</span> for <span class="hl">optionsText</span>.</p>

            <p>By default, the text <span class="hl">Choose...</span> is used as <span class="hl">optionsCaption</span>. You can use
                <span class="hl">optionsCaption: null</span> for no captions (first item is selected by default).</p>

            <p>The custom binding is available from
                <a href="https://gist.githubusercontent.com/xtranophilist/8001624/raw/ko_selectize.js" target="_blank"
                   rel="noreferrer noopener nofollow">https://gist.githubusercontent.com/xtranophilist/8001624/raw/ko_selectize.js</a>
            </p>
            

            <p>Example files are also available from
                <a href="https://gist.github.com/xtranophilist/8001624" target="_blank" rel="noreferrer noopener nofollow">https://gist.github.com/xtranophilist/8001624</a>
            </p>

            <p>Warning: This binding wraps the built-in <span class="hl">options</span> binding of Knockout.js and doesn't provide
                the whole object to Selectize and therefore options like <span class="hl">searchField</span>
                do not work out of the box.
            </p>

            <h3>1. Using selectize with plain select tag, with values built in view.</h3>

            <pre>
&lt;select data-bind="selectize: {}"&gt;
    &lt;option value="1"&gt;Val 1&lt;/option&gt;
    &lt;option value="2"&gt;Val 2&lt;/option&gt;
&lt;/select&gt;</pre>


            <h3>2. Using values from observable array.</h3>

            <p>The dropdown is created with all objects from <span class="hl">items</span> observable array. The value of
                <span class="hl">id</span> or attribute set in <span class="hl">optionsValue</span> binding is set to <span
                        class="hl">item_id</span>.
            </p>
            <pre>&lt;select data-bind="selectize: items, value: item_id"&gt;&lt;/select&gt;</pre>

            <h3>3. Getting selected item as an object</h3>

            <p>The <span class="hl">selectize</span> binding provides optional <span class="hl">object</span> parameter. While the
                observable provided with <span class="hl">value</span> parameter (like <span class="hl">item_id</span>
                in our example)
                holds the <span class="hl">id</span> (or whatever property <span class="hl">optionsValue</span>
                defines), the observable
                provided with <span class="hl">object</span> parameter holds the whole item itself.</p>

            <pre>
&lt;select data-bind="selectize: items, value: my_item_id, object: my_item"&gt;&lt;/select&gt;</pre>

            <h3>4. Using with multiselect</h3>

            <pre>
&lt;select data-bind="selectize: items, value: selected_items" multiple&gt;&lt;/select&gt;</pre>

            <h3>5. Passing additional options</h3>

            <p>See <a href="https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md" target="_blank">
                official Selectize.js
                usage documentation</a> for all available options.</p>

            <pre>
&lt;select data-bind="selectize: items, value: selected_items2, options: {plugins: ['remove_button']}"
        multiple&gt;&lt;/select&gt;</pre>
        </div>
    </article>

</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>