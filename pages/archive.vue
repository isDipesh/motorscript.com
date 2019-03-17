<template>
  <div>
    <h1>Archived Posts</h1>
    <ul class="posts">

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