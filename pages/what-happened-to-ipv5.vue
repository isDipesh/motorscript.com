<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="What happened to IPv5?" published="27 Oct 2011"/>

        <div class="content" itemprop="articleBody">
            <p>IP version numbers 0, 1, 2, and 3 were the development versions for IPv4 used between 1977 and 1979. IPv4 was officially described for the first time in January 1980. It is the most popular version of the internet protocol. The deployment of the next generation IP.
                – IPv6 has already been initiated. But, very few people know if the intermediate version IPv5 does even exist.
            </p>
            <p>
                IPv4 was globally accepted. It posed many limitations though. Engineers started working on another protocol. It was called Internet Stream(ST). It provided <strong>Q</strong>uality <strong>o</strong>f <strong>S</strong>ervices for streaming services and provided guaranteed and predictable communication characteristics to the network and was envisioned to succeed to IPv4. Its development led to ST2 by 1990s. Big companies like Apple Computer, IBM, Sun Microsystems and NeXT implemented this protocol. In RFC 1819 specification by IETF, ST2
                was described with its packets with its own newer version of Internet Protocol which was called IP
                version 5 regardless of its popularity. On the other hand, the ideas of Internet Protocol next generation(IPng) were already gaining popularity. ST2
                was realized not be a suitable protocol for the future as it was just not a replacement for IPv4 but just a complement. IPng could eliminate the limitations of IPv4. IPng used 128-bit address structures and so vastly increased the available address space and was realized as a compulsory adoption in future as IPv4 addresses were running out. The vast address space allowed easier and better hierarchical addressing models. IETF
                decided to standardize this new Internet Protocol. Although, being a successor to IPv4, IPng was called IPv6 because a different thing was already known as IP version 5 then.</p>
            <p><a href="https://web.archive.org/web/20170905024848/http://tools.ietf.org/html/rfc1819"
                  title="Internet Stream Protocol Version 2 (ST2) Protocol Specification - Version ST2+"> RFC 1819</a> mentions IP version 5 was reserved for the experimental protocol ST2, which was just a streaming complement to IPv4, never even released for public usage but was an inspiration for some components in IPv6. Like IPv4 uses 0100 (4 in binary) for IP version field (the first four bytes of every IP
                packet) and IPv6 uses 0110 (6), ST2 uses 0101 (5) for IP
                version field.</p>
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