<template>
    <ul class="posts">
        <li>
            <router-link to="/what-happened-to-ipv5/">What happened to IPv5?</router-link>
        </li>
        <li>
            <router-link to="/hiding-header-and-footer-only-in-certain-pages-with-libreoffice-writer/">
                Hiding header and footer only in certain pages with LibreOffice Writer
            </router-link>

        </li>
        <li><router-link to="/setting-remote-git-repo-website-deployment/">Using git to deploy to server</router-link></li>
        <li><router-link to="/selectize-js-binding-knockout-js/">Selectize.js binding for Knockout.js</router-link></li>
    </ul>
</template>

<script>
  export default {
    layout: 'index',
  }
</script>