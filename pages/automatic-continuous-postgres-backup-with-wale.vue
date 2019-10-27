<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Automatic Continuous PostgreSQL Backup with Wal-e"
      published="04 Apr 2018"
    />

    <div class="content" itemprop="articleBody">
      <h3>Create AWS S3 IAM user and a bucket</h3>
      <ol>
        <li>
          Create IAM User with with Programmatic Access [<a
            href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"
            target="_blank"
            rel="noopener noreferrer"
            >AWS Doc</a
          >]
        </li>
        <li>
          Create new group with
          <span class="hl">AmazonS3FullAccess</span> policy for the user
        </li>
        <li>
          Obtain Access Key and Secret for the user [<a
            href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"
            target="_blank"
            rel="noopener noreferrer"
            >AWS Doc</a
          >]
        </li>
        <li>
          Create a Bucket [<a
            href="https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html"
            target="_blank"
            rel="noopener noreferrer"
            >AWS Doc</a
          >]
        </li>
      </ol>

      <div class="block">
        <ul>
          <form id="django-form">
            <div class="right btn small" @click="download">
              Download form data
            </div>
            <li>
              S3 Bucket Name:
              <input name="s3_bucket_name" v-model="bucket_name" />
            </li>
            <li>AWS Region: <input name="aws_region" v-model="region" /></li>
            <li>
              AWS Access Key ID :
              <input name="aws_access_key_id" v-model="access_id" />
            </li>
            <li>
              AWS Access Secret Key :
              <input name="aws_access_secret_key" v-model="access_key" />
            </li>
            <li>
              PostgreSQL Version :
              <input name="postgresql_version" v-model="version" />
            </li>
          </form>
        </ul>
      </div>

      <h3>Install <code>wal-e</code> on server</h3>

      <div class="block">
        Note: wal-e doesn't work with Python 3.6 as of now. [<a
          href="https://github.com/wal-e/wal-e/issues/322"
          target="_blank"
          rel="noopener noreferrer"
          >Issue</a
        >]
      </div>

      Install <code>pip</code> if necessary.
      <pre
        class="language-bash"
      ><code class="prefix">wget https://bootstrap.pypa.io/get-pip.py</code>
<code class="prefix">sudo python3 get-pip.py</code></pre>

      Install wal-e
      <pre
        class="language-bash"
      ><code class="prefix">sudo apt install daemontools lzop pv</code>
<code class="prefix">sudo pip3 install 'wal-e[aws]'</code></pre>

      <h3>Configure backing up of WAL segments</h3>
      <pre class="language-bash"><code class="prefix">sudo mkdir -p /etc/wal-e.d/env</code>
<code class="prefix">echo 's3://{{bucket_name}}/' | sudo tee /etc/wal-e.d/env/WALE_S3_PREFIX</code>
<code class="prefix">echo '{{region}}' | sudo tee /etc/wal-e.d/env/AWS_REGION</code>
<code class="prefix">echo '{{access_id}}' | sudo tee /etc/wal-e.d/env/AWS_ACCESS_KEY_ID</code>
<code class="prefix">echo '{{access_key}}' | sudo tee /etc/wal-e.d/env/AWS_SECRET_ACCESS_KEY</code></pre>

      <h3>Configure base backup</h3>
      <pre class="language-bash"><code class="prefix">POSTGRES_VERSION={{version}}</code>
<code class="prefix">echo -e "\n# Backup settings for WAL-E" | sudo tee -a /etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf</code>
<code class="prefix">echo -e "wal_level = replica" | sudo tee -a /etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf</code>
<code class="prefix">echo -e "archive_mode = on" | sudo tee -a /etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf</code>
<code class="prefix">echo -e "archive_command = 'envdir /etc/wal-e.d/env /usr/local/bin/wal-e wal-push %p'" | sudo tee -a /etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf</code>
<code class="prefix">echo -e "archive_timeout = 60" | sudo tee -a /etc/postgresql/${POSTGRES_VERSION}/main/postgresql.conf</code></pre>

      Add cronjob for nightly base backup
      <pre class="language-bash"><code class="prefix">crontab -l | { cat; echo "0 0 * * * /usr/bin/envdir /etc/wal-e.d/env /usr/local/bin/wal-e backup-push /var/lib/postgresql/{{version}}/main"; } | crontab -</code></pre>

      <h3>Restoring from backup</h3>
      <pre class="language-bash"><code class="prefix">POSTGRES_VERSION={{version}}</code>
<code class="prefix">sudo systemctl stop postgresql</code>
<code class="prefix">sudo mv /var/lib/postgresql/${POSTGRES_VERSION}/main /var/lib/postgresql/${POSTGRES_VERSION}/main_old</code>

<code class="prefix">su postgres</code>
<code class="prefix">POSTGRES_VERSION={{version}}</code>
<code class="prefix">envdir /etc/wal-e.d/env /usr/local/bin/wal-e backup-fetch /var/lib/postgresql/${POSTGRES_VERSION}/main LATEST</code>

<code class="prefix">vi /var/lib/postgresql/${POSTGRES_VERSION}/main/recovery.conf</code>
<code class="prefix">restore_command = 'envdir /etc/wal-e.d/env /usr/local/bin/wal-e wal-fetch "%f" "%p"'</code>
<code class="prefix">#Optionally add recovery point in time</code>
<code class="prefix">#recovery_target_time = '2017-04-01 03:07:00'</code>

<code class="prefix">exit</code>

<code class="prefix">sudo systemctl start potgresql</code></pre>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

// https://codepen.io/gabrieleromanato/pen/LpLVeQ
function toJSONString(form) {
  let obj = {};
  let elements = form.querySelectorAll("input, select, textarea");
  for (let i = 0; i < elements.length; ++i) {
    let element = elements[i];
    let name = element.name;
    let value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

export default {
  mixins: [BlogTitle],
  components: { BlogTitle },
  data() {
    return {
      bucket_name: "bucket_name",
      region: "ap-south-1",
      access_id: "aws_access_key_id",
      access_key: "aws_secret_access_key",
      version: "9.6"
    };
  },
  methods: {
    // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
    download() {
      const element = document.createElement("a");
      let content = toJSONString(document.getElementById("django-form"));
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(content)
      );
      element.setAttribute("download", this.bucket_name + ".json");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
};
</script>