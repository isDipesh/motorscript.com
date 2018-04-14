<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="" published="01 Apr 2018"/>

        <div class="content" itemprop="articleBody">
        </div>
    </article>
</template>

<script>
  import BlogTitle from './components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>