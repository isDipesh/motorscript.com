<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="dbf2sql – dbf to sql converter" published="03 Nov 2011"/>

        <div class="content" itemprop="articleBody" v-highlight>

            <div><code>dbf2sql</code> converts dBase files to sql scriptsfor importing into MySQL Database.</div>

            <h4>Usage:</h4>

            <div>Extract files from the dbf2sql package. <code>dbf2sql.php</code> and <code>dbf_class.php</code>
                are the required files.
            </div>
            <div class="block">
                <pre class="language-bash command-line" data-prompt="$"><code>php dbf2sql.php input.dbf tablename output.sql</code></pre>
                <div>where <code>input.dbf</code> is the dbf file to be converted; <code>tablename</code>
                    is the name of the table that the generated SQL script should insert rows into; <code>output.sql</code>
                    is the output SQL script to be generated.
                </div>
            </div>

            <p>
                Only the input file argument is mandatory. The script is able to predict the table name and the output filename.</p>
            <h4>Examples:</h4>

            <div class="block">
                <pre class="language-bash command-line" data-prompt="$"><code>php dbf2sql.php input.dbf myData</code></pre>
                <div>Since output file name isn’t given, <code>myData.sql</code> will be generated.</div>
            </div>

            <div class="block">
                <pre class="language-bash command-line" data-prompt="$"><code>php dbf2sql.php data.dbf</code></pre>
                <div>This will create <code>data.sql</code> script that would create a table named <code>data</code>
                </div>
            </div>

            <div class="block">
                <pre class="language-bash command-line" data-prompt="$"><code>php dbf2sql.php --bulk</code></pre>
                OR
                <pre class="language-bash command-line" data-prompt="$"><code>php dbf2sql.php --all</code></pre>
                <div>Converts all dbf files on current directory to sql scripts.</div>
            </div>

            <div>
                <strong>Repo:</strong>
                <a href="https://github.com/xtranophilist/dbf2sql/">https://github.com/xtranophilist/dbf2sql/</a>
            </div>
            <div>
                <strong>Download:</strong>
                <a href="https://github.com/xtranophilist/dbf2sql/zipball/master">https://github.com/xtranophilist/dbf2sql/zipball/master</a>
            </div>
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