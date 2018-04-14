<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Hiding header and footer only in certain pages with LibreOffice Writer" published="04 Feb 2014"/>

        <div class="content" itemprop="articleBody">

            <p><strong>If it is the first page of the document</strong>,</p>
            <ul>
                <li>Press F11 to open <span class="hl">Styles and Formatting</span>.</li>
                <li>Click on the fourth icon on the top called <span class="hl">Page Styles</span>.</li>
                <li>Double-click <span class="hl">First Page</span>
                    from the list to apply the first page style where the headers and footers are hidden.
                </li>
            </ul>
            <p>
                This method works only for the first page of the document. However a little more work makes it work for any page.</p>
            <p><strong>For pages other than the first,</strong></p>
            <ul>
                <li>Go to the last line of the page that precedes the page where you want to hide headers and footers.
                    (Go to last line of page 3, if you want headers and footers not to be shown in page 4).
                </li>
                <li>From the menu bar, select <span class="hl">Insert -&gt; Manual Break</span></li>
                <li>In the dialog, select <span class="hl">Page Break</span> check-box from <span class="hl">Type</span> and <span
                        class="hl">First Page</span> from <span class="hl">Style</span> pull-down list.
                </li>
            </ul>
            <p>The headers and footers are then hidden for the page that follows the manually inserted page break.</p>

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