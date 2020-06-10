<template>

<div itemscope itemtype="http://schema.org/Person" id="dipesh-acharya" class="pl-1">
    <router-link to="about-me" itemprop="url">
          <h1 itemprop="name">Dipesh Acharya</h1>
    </router-link>
    <div itemprop="jobTitle">Software Architect</div>
    <div itemprop="nationality">Nepal</div>

    <div itemscope itemprop="owns" itemtype="http://schema.org/Organization" class="company">
        <a href="https://awecode.com" target="_blank" itemprop="url">
            <img itemprop="logo" class="larger" src="/media/companies/awecode.svg" />
        </a>
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">COO</span>
            </div>
            <span itemprop="name">Awecode</span>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="410/28 Suvarna Marga"/>
                    <span itemprop="addressLocality">Buddhanagar, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Bagmati" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
                    <meta itemprop="postOfficeBoxNumber" content="1491" />
            </div>
        </div>
    </div>

    <div itemscope itemprop="owns" itemtype="http://schema.org/Organization" class="company">
        <a href="https://edusanjal.com" target="_blank" itemprop="url">
            <img itemprop="logo" src="/media/companies/edusanjal.svg" />
        </a>
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">CTO</span>
            </div>
            <span itemprop="name">Edusanjal</span>
            
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="Danphe Marga 134, Babarmahal"/>
                    <span itemprop="addressLocality">Babarmahal, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Bagmati" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
            </div>
        </div>
    </div>

    <div itemscope itemprop="owns" itemtype="http://schema.org/Organization" class="company">
        <a href="https://thuprai.com" target="_blank" itemprop="url">
            <img itemprop="logo" src="/media/companies/thuprai.svg" />
        </a>
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">CTO</span>
            </div>
            <span itemprop="name">Thuprai</span>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="410/28 Suvarna Marga"/>
                    <span itemprop="addressLocality">Buddhanagar, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Bagmati" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
            </div>
        </div>
    </div>

    <div itemscope itemprop="worksFor" itemtype="http://schema.org/Organization" class="company">
        <a href="https://merojob.com" target="_blank" itemprop="url">
            <img itemprop="logo" src="/media/companies/merojob.svg" />
        </a>
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">System Architect</span>
            </div>
            <span itemprop="name">merojob.com</span>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="Ganapati Bhawan"/>
                    <span itemprop="addressLocality">Min Bhawan, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Bagmati" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
            </div>
        </div>
    </div>

    <!-- <div itemscope itemprop="worksFor" itemtype="http://schema.org/Organization" class="company">
        <a href="http://nepa-laya.com" target="_blank" itemprop="url">
            <img itemprop="logo" src="/media/companies/nepalaya.svg" />
        </a>
        <div>
            <div itemscope itemprop="employee" itemref="dipesh-acharya" itemtype="http://schema.org/Person">
                <span itemprop="jobTitle">Digital Manager</span>
            </div>
            <span itemprop="name">nepa~laya</span>
            <div itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="streetAddress" content="162/102 Kalika Marg"/>
                    <span itemprop="addressLocality">Kalikastan, Kathmandu</span>
                    <meta itemprop="addressRegion" content="Bagmati" />
                    <meta itemprop="addressCountry" content="Nepal" />
                    <meta itemprop="postalCode" content="44600" />
                    <meta itemprop="postOfficeBoxNumber" content="8975" />
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