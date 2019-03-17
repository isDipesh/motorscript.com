<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Git pre-commit hook for checking python code quality using flake8 inside virtualenv"
      published="16 Oct 2014"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        This git pre-commit hook checks your Python code quality and prevents bad code from checking it into your git repo.
      </p>
      <p>Install this hook directly using the following commands, from your git repo:</p>

      <pre class="language-bash"><code>
pip install flake8
wget https://gist.github.com/xtranophilist/eca5acae1a33b0baad33/raw/pre-commit.py -O .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
</code></pre>
      
      Content of the hook:
<pre class="language-python"><code>
  #!/usr/bin/env python

import glob
import os
import sys

# git usurbs your bin path for hooks and will always run system python
site_packages = glob.glob('%s/lib/*/site-packages' % os.environ['VIRTUAL_ENV'])[0]
sys.path.insert(0, site_packages)

from flake8.run import git_hook

COMPLEXITY = os.getenv('FLAKE8_COMPLEXITY', 10)
STRICT = os.getenv('FLAKE8_STRICT', True)
IGNORE = os.getenv('FLAKE8_IGNORE', 'E501')
LAZY = os.getenv('FLAKE8_LAZY', False)


if __name__ == '__main__':
    sys.exit(git_hook(
        complexity=COMPLEXITY,
        strict=STRICT,
        ignore=IGNORE,
        lazy=LAZY,
        ))
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