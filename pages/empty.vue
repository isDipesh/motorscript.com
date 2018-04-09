<template>
    <div>
        <BlogTitle title="" published="01 Apr 2018"/>

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