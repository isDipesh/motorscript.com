<template>
  <div>
    <ul class="posts">
      <li>
        <router-link to="security-hardening-ubuntu-server"
          >Security: Hardening Ubuntu Server</router-link
        >
      </li>
      <li>
        <router-link to="security-hardening-ssh-linux-server"
          >Security: Hardening SSH on Linux Server</router-link
        >
      </li>

      <li>
        <router-link to="cleanup-ubuntu-server"
          >Cleaning Up Ubuntu Server</router-link
        >
      </li>
      <li>
        <router-link to="using-ckeditor5-with-nuxtjs"
          >Using CKEditor 5 with Nuxt.js</router-link
        >
      </li>
      <li>
        <router-link to="enabling-persisted-storage-for-chrome"
          >Enabling Persisted Storage for your web app on Chrome</router-link
        >
      </li>
      <li>
        <router-link to="install-tensorflow-arch-linux-cuda-cudnn"
          >Installing TensorFlow for Python on Arch Linux (with CUDA 9 and CUDNN
          7)</router-link
        >
      </li>
      <li>
        <router-link
          to="using-google-cloud-vision-to-build-ml-training-dataset/"
          >Using Google Cloud Vision to Build ML Training Dataset</router-link
        >
      </li>
      <li>
        <router-link to="lazy-loading-google-maps/"
          >Lazy Loading Google Maps</router-link
        >
      </li>
      <li>
        <router-link to="install-selenium-arch-linux/"
          >Installing Selenium Standalone Server on Arch Linux
        </router-link>
      </li>
      <li>
        <router-link to="automatic-continuous-postgres-backup-with-wale/"
          >Automatic Continuous PostgreSQL Backup with Wal-e
        </router-link>
      </li>
      <li>
        <router-link to="https-for-zoho-mail-custom-domain/"
          >HTTPS for Zoho Mail Custom Domain</router-link
        >
      </li>
      <li>
        <router-link to="django-deployment-cheatsheet/"
          >Simple Django Deployment Cheat-sheet</router-link
        >
      </li>
      <li>
        <router-link to="selectize-js-binding-knockout-js/"
          >Selectize.js binding for Knockout.js</router-link
        >
      </li>
      <li>
        <router-link to="setting-remote-git-repo-website-deployment/"
          >Using git to deploy to server</router-link
        >
      </li>
      <li>
        <router-link
          to="hiding-header-and-footer-only-in-certain-pages-with-libreoffice-writer/"
        >
          Hiding header and footer only in certain pages with LibreOffice Writer
        </router-link>
      </li>
      <li>
        <router-link to="django-froala-editor/"
          >Django package for Froala WYSIWYG Editor</router-link
        >
      </li>
      <li>
        <router-link to="dbf2sql/">dbf2sql – dbf to sql converter</router-link>
      </li>
      <li>
        <router-link to="what-happened-to-ipv5/"
          >What happened to IPv5?</router-link
        >
      </li>
      <li>
        <router-link to="gnome-shell-extension-sensors/"
          >Gnome Shell Extension : Sensors</router-link
        >
      </li>
    </ul>
    <router-link to="archive" class="pl-2">
      View Archived Posts
    </router-link>
  </div>
</template>

<script>
export default {
  layout: "index",
  head: {
    link: [{ rel: "canonical", href: "https://motorscript.com" }]
  }
};
</script>
