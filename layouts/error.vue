<template>
    <div class="container">
        <h1>A strange error occurred.</h1>
        <div class="block">
            <h4>Our developer is looking into it.</h4>

<!--<pre>-->
 <!--/\     /\-->
<!--{  `-&#45;&#45;'  }-->
<!--{  O   O  }-->
<!--~~&gt;  V  &lt;~~-->
 <!--\  \|/  /-->
  <!--`-&#45;&#45;&#45;&#45;'____-->
  <!--/     \    \_-->
 <!--{       }\  )_\_   _-->
 <!--|  \_/  |/ /  \_\_/ )-->
  <!--\__/  /(_/     \__/-->
    <!--(__/-->
<!--</pre>-->
            <img src="/error.jpg" alt="Error" height="500"/>
        </div>
        <h3 v-if="error.statusCode === 404">Turns out the page does not exist. [4🐱4]</h3>
        <ul>
            <li>
                <nuxt-link to="/">Visit Homepage</nuxt-link>
            </li>
            <li>
                <a :href="'https://twitter.com/intent/tweet?text=@xtranophilist%20Error%20at%20'+pageUrl" target="_blank"
                   rel="noreferrer noopener">
                    Let me know about the error.</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'index',
    head() {
      return {
        title: 'Error'
      }
    },
    data() {
      return {
        pageUrl: 'https://motorscript.com'
      }
    },
    mounted() {
      this.pageUrl = document.location.href;
    }
  }
</script>

<style scoped>
    .container {
        margin: 0 2rem;
    }
    pre{
        background: none;
        padding: 0;
        margin: 0;
    }
</style>