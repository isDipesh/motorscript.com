<template>
    <div class="container">
        <BlogHeader/>
        <section class="main">
            <nuxt/>
        </section>
        <BlogFooter/>
    </div>
</template>


<script>
  import BlogHeader from "./BlogHeader.vue"
  import BlogFooter from "./BlogFooter.vue"

  export default {
    data() {
      return {
        title: 'Recent Posts',
      }
    },
    components: {
      BlogHeader, BlogFooter
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'description', content: 'Dipesh Acharya\'s technical blog.'}
        ]
      }
    }
  }
</script>