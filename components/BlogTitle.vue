<template>
    <div>
        <h1 class="title" itemprop="name headline">{{title}}</h1>
        <div class="time">Published: <time itemprop="datePublished">{{published}}</time></div>
        <div v-if="updated" class="time">Updated: <time itemprop="dateModified">{{updated}}</time></div>
    </div>
</template>


<script>
  export default {
    props: ['title', 'published', 'updated'],
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>