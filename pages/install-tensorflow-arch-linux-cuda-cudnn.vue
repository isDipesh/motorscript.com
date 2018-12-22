<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Installing TensorFlow for Python on Arch Linux (with CUDA 9 and CUDNN 7)" published="15 Dec 2018"/>

        <div class="content" itemprop="articleBody">
            <ol>
                <li>
                    Installing CUDA 9 requires installation of gcc6. (This first step may take couple of hours.)
                    <pre><span class="prefix">yaourt -S gcc6</span></pre>
                </li>
                
                <li>
                    Remove any existing installations of CUDA
                    <pre><span class="prefix">sudo pacman -R cuda</span>
<span class="prefix">pacaur -S chromedriver</span></pre>
                </li>

                <li>
                    Download CUDA 9 package from Arch Linux archives
                    <pre><span class="prefix">wget https://archive.archlinux.org/packages/c/cuda/cuda-9.0.176-4-x86_64.pkg.tar.xz</span></pre>
                </li>

                <li>
                    Install CUDA 9 from local package (Requires Step 1 to be complete)
                    <pre><span class="prefix">sudo pacman -U cuda-9.0.176-4-x86_64.pkg.tar.xz</span></pre>
                </li>

                <li>
                    Prevent CUDA from upgrading to version 10.
                    <pre><span class="prefix">sudo vim /etc/pacman.conf</span></pre>
                    Uncomment the IgnorePKG line to add cuda to make the line
                    <pre><span>IgnorePKg = cuda</span></pre>
                </li>

                <li>
                    Download and install CUDNN 7.0.4-2
                    <pre><span class="prefix">wget https://archive.archlinux.org/packages/c/cudnn/cudnn-7.0.4-2-x86_64.pkg.tar.xz</span>
<span class="prefix">sudo pacman -U cudnn-7.0.4-2-x86_64.pkg.tar.xz</span></pre>
                </li>

                <li>
                    Install TensorFlow in your virtual environment
                    <pre><span class="prefix">pip install tensorflow-gpu</span></pre>
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