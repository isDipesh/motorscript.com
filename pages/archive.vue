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
        <router-link to="comments-module-for-yii">
          yii-comments : Comments Module for Yii
        </router-link>
      </li>

      <li>
        <router-link to="guake-patch-to-fix-focus-on-gnome">
          Guake patch to fix focus issue on GNOME 3.4
        </router-link>
      </li>

      <li>
        <router-link to="my-fedora-post-installation-cheatsheet">
          Fedora post-installation customization cheatsheet
        </router-link>
      </li>

      <li>
        <router-link to="vbulletin-to-smf-301-permanent-url-redirects">
          Vbulletin to SMF 301 Permanent URL Redirects
        </router-link>
      </li>

      <li>
        <router-link to="last-fm-widget">
          Last.fm widget for websites
        </router-link>
      </li>

      <li>
        <router-link
          to="hacking-tweetdeck-for-chrome-to-show-tweet-source-client"
        >
          Hacking TweetDeck for Chrome to show tweet source/client
        </router-link>
      </li>

      <li>
        <router-link to="emailspy">
          Emailspy
        </router-link>
      </li>

      <li>
        <router-link to="gnome-shell-extension-force-quit">
          Gnome Shell Extension: Force Quit
        </router-link>
      </li>

      <li>
        <router-link to="gnome-shell-extension-screen-turn-off-button">
          Gnome Shell Extension: Screen Off
        </router-link>
      </li>

      <li>
        <router-link to="gnome-shell-extension-firefox-profiles">
          Gnome Shell Extension: Firefox Profiles
        </router-link>
      </li>

      <li>
        <router-link to="customizing-gnome-shell">
          Customizing Gnome Shell
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