<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="HTTPS for Zoho Mail Custom Domain" published="04 Apr 2018"/>

        <div class="content" itemprop="articleBody" v-highlight>

            <div class="block">NOTE: You need a server with nginx setup to proxy your custom domain to Zoho.</div>

            <ol>

                <li>
                    <h3>Point your custom domain to the server with nginx installed using DNS A Record</h3>
                    <pre class="language-js"><code>A         mail         [your-ip-address]</code></pre>
                </li>

                <li>
                    <h3>Configure nginx to proxy pass to Zoho</h3>
                    <pre class="language-nginx"><code>server {
    listen 80;
    server_name mail.your-domain.com;
    location / {
	proxy_pass https://mail.zoho.com/biz/customlogin?rd=your-domain.com;
}</code></pre>
                </li>

                <li>
                    <h3>Obtain SSL certificate with Certbot</h3>
                    <pre class="language-bash command-line" data-prompt="#"><code>apt-get install software-properties-common
add-apt-repository ppa:certbot/certbot
apt-get update
apt-get install python-certbot-nginx
apt-get install python-certbot-nginx
certbot --nginx
nginx -t
systemctl restart nginx</code></pre>
                </li>
                
                <li>
                    <h3>Wait for DNS changes to propagate.</h3>
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
    data() {
      return {
        project_dir: 'app',
        user: 'user',
        remote: 'awecode.com',
        ssh_port: '22'
      }
    }
  }
</script>