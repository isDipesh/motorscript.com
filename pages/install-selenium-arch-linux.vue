<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Installing Selenium Standalone Server on Arch Linux" published="09 Apr 2018"/>

        <div class="content" itemprop="articleBody" v-highlight>

            <ol>

                <li>
                    Install Selenium Server from AUR
                    <pre class="language-bash command-line" data-prompt="$"><code>pacaur -S selenium-server-standalone</code></pre>
                </li>
                
                <li>
                    Install Gecko and Chrome Webdrivers
                    <pre class="language-bash command-line" data-prompt="$"><code>pacaur -S geckodriver
pacaur -S chromedriver</code></pre>
                </li>

                <li>
                    Change Java environment to Java 8
                    <pre class="language-bash command-line" data-prompt="#"><code>archlinux-java set java-8-openjdk/jre</code></pre>
                </li>

                <li>
                    Install as a service
                    <pre class="language-bash command-line" data-prompt="#"><code>cat &lt;&lt;EOT &gt;&gt; /etc/systemd/system/selenium.service</code></pre>
                    <pre class="language-ini code-content"><code>[Unit]
Description=Selenium Standalone Server
[Service]
Environment=DISPLAY=:44
Type=simple
ExecStart=/usr/bin/java -jar /usr/share/selenium-server/selenium-server-standalone.jar
KillMode=process
User=nobody
[Install]
WantedBy=multi-user.target
EOT</code></pre>
                    
<pre class="language-bash command-line" data-prompt="#">
<code>systemctl --system daemon-reload
systemctl enable selenium
systemctl start selenium</code></pre>
                </li>
                
                <li>
                    Obey the Goat!
                    <pre class="ascii">
                (\\
             .--,\\\__
              `-.    a`-.__
                |         ')
               / \ _.-'-,`;
              /     |   { /
    ..-"``~"-'      ;    )
                   ;'    `
                  ;'
                ;'
        ,    /;'|
     ,;';\   |\ |
          \  || |
           | )| )
           | || |
     jgs   | \| \
           `##`##</pre>
                    
                </li>

            </ol>

        </div>
    </article>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>