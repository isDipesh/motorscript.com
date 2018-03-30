<template>
    <div>
        <BlogTitle title="" published=""/>

        <div class="content" itemprop="articleBody">
        </div>
    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>