<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Configuring MythTV to run without a TV Tuner/Card"
      published="15 Aug 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This post is a straight forward set of instructions on how you can
        configure MythTV to run without a TV tuner or
        capture card.
      </p>
      <p>
        My current ADSTech TV tuner isn’t supported by
        MythTV due to driver issues. So, I have ordered a Hauppauge
        TV tuner which I am getting very soon.
        Although I had no plans of using MythTV just for local music and video
        playback, I couldn’t wait to try and see why it is so popular.
        Configuring MythTV to run without any identified
        TV capture card wasn’t that straight-forward
        and I thought sharing it would help someone else besides serving as a
        cheatsheet for myself.
      </p>
      <h2>Installing MythTV</h2>
      <p>
        On Fedora, CentOS, RHEL and other rpm based
        distros:<br />
        <pre class="language-bash command-line"><code class="prefix">sudo yum -y install mythtv</code></pre>
      </p>
      <p>
        For Ubuntu:<br />
        <pre class="language-bash command-line"><code class="prefix">sudo apt-get install mythtv</code></pre>
      </p>
      <h2>Setup</h2>
      <p>Launch setup with <code>mythtv-setup</code>.</p>
      <p>
        Navigate to <code>2. Capture Cards</code><br />
        Select <code>(New Capture Card)</code><br />
        For <code>Card Type</code>, select <code>Demo test recorder</code> and
        leave <code>File path</code> field empty. Hit <code>Finish</code>.
      </p>
      <p>
        Use <code>Esc</code> key whenever you need to go one level back.
        Pressing <code>Esc</code>now takes us to the main menu.
      </p>
      <p>
        From the setup main menu, navigate to
        <code>4\. Video sources</code>.<br />
        Select <code>(New Video Source)</code><br />
        Fill in <code>Video source name</code> with <code>Empty</code>.
      </p>
      <p>
        Select <code>No grabber</code> for <code>Listings Grabber</code>.<br />
        Hit <code>Finish</code>.
      </p>
      <p>
        Now that we have created card and source, we need to connect them.<br />
        From the main menu, navigate to
        <code>5\. Input connections</code>.<br />
        The <code>Demo</code> capture device is currently attached to none.<br />
        Press <code>Enter</code> key to edit this connection and select
        <code>Empty</code> from the pulldown.<br />
        Hit <code>Next</code> and then <code>Finish</code> to save
        this connection.
      </p>
      <p>
        From the main menu, select<code>6\. Channel Editor</code> and then click
        <code>Add New Channel</code>.<br />
        Give a name for <code>Channel Name</code> and select empty from
        <code>Video Source</code> pulldown.<br />
        Hit <code>Next</code> and then <code>Finish</code> to save
        this channel.
      </p>
      <p>We can now exit the setup.</p>
      <h2>Running MythTV</h2>
      <p>
        Start MythTV backend service with <code>mythbackend &amp;</code>.<br />
        The <span class="amp">&amp;</span> after a process name pushes it
        to background.
      </p>
      <p>Launch <code>mythfrontend</code>.</p>
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