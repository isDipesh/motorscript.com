<template>

<div itemscope itemtype="http://schema.org/Person" id="dipesh-acharya" class="pl-1">
    <a itemprop="url" href="https://motorscript.com">
        <h1 itemprop="name">Dipesh Acharya</h1>
    </a>
    <div itemprop="jobTitle">Software Architect</div>
    <div itemprop="nationality">Nepal</div>

    <div itemscope itemprop="owns" itemtype="http://schema.org/Organization" class="company">
            <img itemprop="logo" src="https://awecode.com/img/logo.svg" />
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">COO</span>
            </div>
            <span itemprop="name">Awecode</span>
            <div itemprop="url">https://awecode.com</div>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">410/28 Suvarna Marga</span>,
                    <span itemprop="addressLocality">Buddhanagar, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Buddhanagar, Kathmandu" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
                    <meta itemprop="postOfficeBoxNumber" content="1491" />
            </div>
        </div>
    </div>

    <!-- <div itemscope itemprop="owns" itemtype="http://schema.org/Organization" class="company">
            <img itemprop="logo" src="https://awecode.com/img/logo.svg" />
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">COO</span>
            </div>
            <span itemprop="name">Awecode</span>
            <div itemprop="url">https://awecode.com</div>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">410/28 Suvarna Marga</span>,
                    <span itemprop="addressLocality">Buddhanagar, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Buddhanagar, Kathmandu" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
                    <meta itemprop="postOfficeBoxNumber" content="1491" />
            </div>
        </div>
    </div> -->

    
</div>

</template>

<script>
export default {
  layout: "index",
  head: {
    link: [{ rel: "canonical", href: "https://motorscript.com" }]
  }
};
</script>