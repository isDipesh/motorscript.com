<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Installing TensorFlow for Python on Arch Linux (with CUDA 9 and CUDNN 7)" published="15 Dec 2018"/>

        <div class="content" itemprop="articleBody">
            <ol>
                <li>
                    Installing CUDA 9 requires installation of gcc6. (This first step may take couple of hours.)
                    <pre class="language-bash"><code class="prefix">yaourt -S gcc6</code></pre>
                </li>
                
                <li>
                    Remove any existing installations of CUDA
                    <pre class="language-bash"><code class="prefix">sudo pacman -R cuda</code>
<code class="prefix">pacaur -S chromedriver</code></pre>
                </li>

                <li>
                    Download CUDA 9 package from Arch Linux archives
                    <pre class="language-bash"><code class="prefix">wget https://archive.archlinux.org/packages/c/cuda/cuda-9.0.176-4-x86_64.pkg.tar.xz</code></pre>
                </li>

                <li>
                    Install CUDA 9 from local package (Requires Step 1 to be complete)
                    <pre class="language-bash"><code class="prefix">sudo pacman -U cuda-9.0.176-4-x86_64.pkg.tar.xz</code></pre>
                </li>

                <li>
                    Prevent CUDA from upgrading to version 10.
                    <pre class="language-bash"><code class="prefix">sudo vim /etc/pacman.conf</code></pre>
                    Uncomment the IgnorePKG line to add cuda to make the line
                    <pre class="language-ini"><code>IgnorePKg = cuda</code></pre>
                </li>

                <li>
                    Download and install CUDNN 7.0.4-2
                    <pre class="language-bash"><code class="prefix">https://archive.archlinux.org/packages/c/cudnn/cudnn-7.1.4-1-x86_64.pkg.tar.xz</code>
<code class="prefix">sudo pacman -U cudnn-7.1.4-1-x86_64.pkg.tar.xz</code></pre>
                </li>

                <li>
                    Install TensorFlow in your virtual environment
                    <pre class="language-bash"><code class="prefix">pip install tensorflow-gpu</code></pre>
                </li>

                <li>
                    Rejoice!
                </li>

            </ol>

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