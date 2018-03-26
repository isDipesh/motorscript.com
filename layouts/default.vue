<template>
        <div class="container">
            <header>
                <h1>
                    <router-link to="/">motorscript.com</router-link>
                </h1>
            </header>
            <section class="body">
                <nuxt/>
            </section>
            <footer>
                <div class="center">
                    Dipesh Acharya's cheat-blog
                </div>
                <div class="center">
                    Powered by <a target="_blank" href="https://nuxtjs.org" rel="noreferrer noopener">Nuxt.js</a> |
                    Hosted on <a target="_blank" href="https://pages.github.com/" rel="noreferrer noopener">Github</a>
                </div>
            </footer>
        </div>
</template>

<style>
    .body {
        padding: 2rem;
    }
</style>
