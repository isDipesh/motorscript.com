<template>
    <div>
        <h1 class="title" itemprop="name headline">{{title}}</h1>
        <div class="time">Published: <time itemprop="datePublished">{{published}}</time></div>
        <div v-if="updated" class="time">Updated: <time itemprop="dateModified">{{updated}}</time></div>
        <div class="block" v-if="archived">Note: This is an archived post. Information may not be relevant now.</div>
    </div>
</template>


<script>
  export default {
    props: ['title', 'published', 'updated', 'archived'],
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>