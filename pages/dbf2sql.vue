<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="dbf2sql – dbf to sql converter" published="03 Nov 2011"/>

        <div class="content" itemprop="articleBody">

            <div><i class="hl">dbf2sql</i> converts dBase files to sql scriptsfor importing into MySQL Database.</div>

            <h4>Usage:</h4>

            <div>Extract files from the dbf2sql package. <i class="hl">dbf2sql.php</i> and <i class="hl">dbf_class.php</i>
                are the required files.
            </div>
            <div class="block">
                <pre><span class="prefix">php dbf2sql.php input.dbf tablename output.sql</span></pre>
                <div>where <span class="hl">input.dbf</span> is the dbf file to be converted; <span class="hl">tablename</span>
                    is the name of the table that the generated SQL script should insert rows into; <span
                            class="hl">output.sql</span>
                    is the output SQL script to be&nbsp;generated.
                </div>
            </div>

            <p>
                Only the input file argument is mandatory. The script is able to predict the table name and the output filename.</p>
            <h4>Examples:</h4>

            <div class="block">
                <pre><span class="prefix">php dbf2sql.php input.dbf myData</span></pre>
                <div>Since output file name isn’t given, <i class="hl">myData.sql</i> will be generated.</div>
            </div>

            <div class="block">
                <pre><span class="prefix">php dbf2sql.php data.dbf</span></pre>
                <div>This will create <i class="hl">data.sql</i> script that would create a table named <i class="hl">data</i>
                </div>
            </div>

            <div class="block">
                <pre><span class="prefix">php dbf2sql.php --bulk` OR `php dbf2sql.php --all</span></pre>
                <div>Converts all dbf files on current directory to sql scripts.</div>
            </div>

            <div>
                <strong>Repo:</strong>&nbsp;
                <a href="https://github.com/xtranophilist/dbf2sql/">https://github.com/xtranophilist/dbf2sql/</a>
            </div>
            <div>
                <strong>Download:</strong>&nbsp;
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