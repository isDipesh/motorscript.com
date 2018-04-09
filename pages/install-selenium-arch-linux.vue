<template>
    <div>
        <BlogTitle title="Installing Selenium Standalone Server on Arch Linux" published="09 Apr 2018"/>

        <div class="content" itemprop="articleBody">

            <ol>

                <li>
                    Install Selenium Server from AUR
                    <pre><span class="prefix">pacaur -S selenium-server-standalone</span></pre>
                </li>
                
                <li>
                    Install Gecko and Chrome Webdrivers
                    <pre><span class="prefix">pacaur -S geckodriver</span>
                    <span class="prefix">pacaur -S chromedriver</span></pre>
                </li>

                <li>
                    Change Java environment to Java 8
                    <pre><span class="su">archlinux-java set java-8-openjdk/jre</span></pre>
                </li>

                <li>
                    Install as a service
                    <pre><span class="su"> cat &lt;&lt;EOT &gt;&gt; /etc/systemd/system/selenium.service
[Unit]
Description=Selenium Standalone Server
[Service]
Environment=DISPLAY=:44
Type=simple
ExecStart=/usr/bin/java -jar /usr/share/selenium-server/selenium-server-standalone.jar
KillMode=process
User=nobody
[Install]
WantedBy=multi-user.target
EOT</span>
                    
<span class="su">systemctl --system daemon-reload</span>
<span class="su">systemctl enable selenium</span>
<span class="su">systemctl start selenium</span></pre>
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
    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>