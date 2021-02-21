<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Installing Sublime Text 3 in Linux"
      published="12 Nov 2014"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        The following scripts install Sublime Text 3 Build 3065 in Linux x64 and
        x32 systems. The scripts have been tested okay in Fedora 20. All you
        need to do is to execute one of the following commands. This will also
        remove any existing version of Sublime Text from
        <code>/opt/sublime_text</code>.
      </p>

      For Linux x64:
      <pre class="language-bash command-line" data-prompt="$"><code>wget -O install-sublime.sh https://gist.github.com/xtranophilist/5932634/raw/sublime-text-3-x64.sh && sudo sh install-sublime.sh; rm -rf install-sublime.sh</code></pre>

        For Linux x32:
      <pre class="language-bash command-line" data-prompt="$"><code>wget -O install-sublime.sh https://gist.github.com/xtranophilist/5932634/raw/sublime-text-3-x32.sh && sudo sh install-sublime.sh; rm -rf install-sublime.sh</code></pre>

        <h2>Content of the scripts:</h2>

        <h3>Linux x64</h3>

        <pre class="language-bash"><code>#!/bin/sh
 
if [ ! -f sublime_text_3.tar.bz2 ]; then
    curl -L "http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_3083_x64.tar.bz2" -o "sublime_text_3.tar.bz2"
fi

tar -xvjf sublime_text_3.tar.bz2
sudo cp -fr "sublime_text_3/sublime_text.desktop" "/usr/share/applications/sublime_text.desktop"
sudo sed -i 's/Icon=sublime-text/Icon=\/opt\/sublime_text\/Icon\/128x128\/sublime-text.png/g' /usr/share/applications/sublime_text.desktop
rm -rf /opt/sublime_text
sudo mv "sublime_text_3" "/opt/sublime_text"
ln -s /opt/sublime_text/sublime_text /usr/bin/subl
 
echo "Finished!"
        </code></pre>

        <h3>Linux x32</h3>

        <pre class="language-bash"><code>#!/bin/sh
 
if [ ! -f sublime_text_3.tar.bz2 ]; then
    curl -L "http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_3083_x32.tar.bz2" -o "sublime_text_3.tar.bz2"
fi

tar -xvjf sublime_text_3.tar.bz2
sudo cp -fr "sublime_text_3/sublime_text.desktop" "/usr/share/applications/sublime_text.desktop"
sudo sed -i 's/Icon=sublime-text/Icon=\/opt\/sublime_text\/Icon\/128x128\/sublime-text.png/g' /usr/share/applications/sublime_text.desktop
rm -rf /opt/sublime_text
sudo mv "sublime_text_3" "/opt/sublime_text"
ln -s /opt/sublime_text/sublime_text /usr/bin/subl
 
echo "Finished!"
        </code></pre>


    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
};
</script>