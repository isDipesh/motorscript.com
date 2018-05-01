<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Smooth-scroll for Nuxt.js" published="30 Apr 2018"/>

        <div class="content" itemprop="articleBody">

            <h3>Create <span class="hl">plugins/smoothScroll.js</span></h3>
            <pre>// Source: http://jsfiddle.net/00uw1Lq9/4/
let smoothScroll = (function (root) {
  let targetElement;
  root.addEventListener('transitionend', function (e) {
    root.style['transition'] = '';
    root.style['transform'] = '';
    targetElement.scrollIntoView();
  });
  return function (element, time) {
    if (element) {                
        let offset = element.offsetTop - (window.scrollY || document.documentElement.scrollTop || root.scrollTop);
        offset = Math.min(offset, root.offsetHeight - document.documentElement.clientHeight);
        targetElement = element;
        root.style['transition'] = 'transform ' + time;
        root.style['transform'] = 'translateY(' + offset * -1 + 'px)';
    }
  }
}(document.body));

[].slice.call(document.getElementsByTagName('a')).forEach(
  function (link) {
    link.addEventListener('click', function (e) {
      let targetElement = document.getElementById(e.target.href.replace(/[^#]*#/, ''));
      smoothScroll(targetElement, '500ms');
      e.preventDefault();
    })
  });</pre>
            
            <h3>Update <span class="hl">nuxt.config.js</span> to use the plugin</h3>
            <pre>...
plugins: [
    ...
    {src: '~/plugins/smoothScroll.js', ssr: false},
],</pre>


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