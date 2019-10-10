<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Lazy Loading Google Maps" published="04 May 2018"/>

        <div class="content" itemprop="articleBody" v-highlight>

            I created a really lean page and then I had to embed Google Maps which made multiple requests and made the page slower.
            Not all users reach to the viewport with the map and very few of the ones who reach there use it interactively.
            So, this is how I implemented lazy-loading of the maps.

            <ol>
                <li>Do not load anything if the user isn't going to view it.</li>
                <li>Show users a static map (image) if they reach the viewport.</li>
                <li>Load a dynamic map only if they want to interact (i.e. click on the static map).</li>
            </ol>

            Following is a sample implementation in Vue.js. Lazy-loading of image is done via <a
                href="https://github.com/verlok/lazyload" target="_blank" rel="noreferrer noopener">LazyLoad</a>
            which reads the <span class="hl">data-src</span> attribute and writes <span class="hl">src</span> attribute lazily.

            <pre class="language-html"><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;div v-if=&quot;isStatic&quot; class=&quot;has-text-centered&quot; id=&quot;static-map-wrapper&quot;&gt;
            &lt;img :data-src=&quot;staticUrl&quot; alt=&quot;Map&quot; title=&quot;Click to browse&quot; @click=&quot;loadDynamic&quot;/&gt;
        &lt;/div&gt;
        &lt;div v-else class=&quot;g-map&quot; id=&quot;g-map&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
</code>
<code class="language-javascript">
  export default {
    props: {
      'lat': {}, 'lng': {}, 'zoom': {default: 14}
    },
    data() {
      return {
        isStatic: true,
        staticWidth: 640,
        staticHeight: 400,
        key: config.googleMapKey,
      }
    },
    computed: {
      staticUrl() {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lng}&amp;zoom=${this.zoom}&amp;maptype=roadmap
&amp;markers=${this.lat},${this.lng}&amp;key=${this.key}&amp;size=${this.staticWidth}x${this.staticHeight}`;
      }
    },
    mounted() {
      window.initMap = () =&gt; {
        const el = document.getElementById('g-map');
        const latLng = new google.maps.LatLng(this.lat, this.lng);
        const options = {
          zoom: this.zoom,
          center: latLng
        };
        const map = new google.maps.Map(el, options);
        const marker = new google.maps.Marker({
          position: latLng,
        });
        marker.setMap(map);
      };

    },
    methods: {
      loadDynamic() {
        this.isStatic = false;
        if (window.google &amp;&amp; google.maps) {
          window.initMap();
        } else {
          ClientUtils.loadScript(`https://maps.googleapis.com/maps/api/js?key=${this.key}&amp;v=3&amp;callback=initMap`);
        }
      }
    }
  };
</code>
<code class="language-html">
&lt;/script&gt;

&lt;style scoped&gt;
</code>
<code class="language-css">
    .g-map {
        height: 400px;
        margin: 0 auto;
        background: #ebe8de;
    }
</code>
<code class="language-html">
&lt;/style&gt;
</code>
</pre>

            Example usage of the component:
            <pre class="language-html"><code>
&lt;GMap lat=&quot;27.6861537&quot; lng=&quot;85.3295763&quot;/&gt;
</code></pre>


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