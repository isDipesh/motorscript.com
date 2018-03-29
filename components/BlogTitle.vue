<template>
    <div>
        <h1 class="title" itemprop="name headline">{{title}}</h1>
        <time itemprop="datePublished">{{published}}</time>
    </div>
</template>


<script>
  export default {
    props: ['title', 'published'],
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>