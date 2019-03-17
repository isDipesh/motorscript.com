<template>
  <div>
    <h1>Archived Posts</h1>
    <ul class="posts">
      <li>
        <router-link to="mpeg-jpeg-compression">
          MPEG and JPEG Compression
        </router-link>
      </li>

      <li>
        <router-link
          to="git-pre-commit-hook-python-code-quality-flake8-virtualenv"
        >
          Git pre-commit hook for checking python code quality using flake8
          inside virtualenv
        </router-link>
      </li>

      <li>
        <router-link to="install-preeti-font-linux">
          Install Preeti Font in Linux (Fedora)
        </router-link>
      </li>

      <li>
        <router-link to="git-cheat-sheet">
          git Cheat-sheet
        </router-link>
      </li>

      <li>
        <router-link to="installing-sublime-text-3-linux">
          Installing Sublime Text 3 in Linux
        </router-link>
      </li>

      <li>
        <router-link to="menu-management-for-yii-framework">
          Menu Management for Yii Framework
        </router-link>
      </li>

      <li>
        <router-link to="mythtv-without-tv-tuner-card">
          Configuring MythTV to run without a TV Tuner/Card
        </router-link>
      </li>

      <li>
        <router-link to="awegen-code-generator-for-yii">
          awegen - Code generator for Yii
        </router-link>
      </li>

      <li>
        <router-link to="crop-to-selection-keyboard-shortcut-gimp">
          'Crop to Selection' keyboard shortcut for GIMP
        </router-link>
      </li>

      <li>
        <router-link to="e-mail-this-file-option-in-right-clickcontext-menu">
          Nautilus: 'E-mail this file' option in right-click/context menu
        </router-link>
      </li>

      <li>
        <router-link to="creating-a-multi-boot-disc">
          Creating a multi-boot disc with ISOLINUX
        </router-link>
      </li>

      <li>
        <router-link to="compiling-vlc-for-root-users">
          Compiling VLC for root users
        </router-link>
      </li>
    </ul>
    <router-link to="/">
      View Recent Posts
    </router-link>
  </div>
</template>

<script>
export default {
  layout: "index",
  head: {
    link: [{ rel: "canonical", href: "https://motorscript.com/archive" }]
  }
};
</script>