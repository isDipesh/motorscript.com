<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Enabling Persisted Storage for your web app on Chrome" published="09 Apr 2018"/>

        <div class="content" itemprop="articleBody">
            According to Google Developer Docs, Chrome grants persistent storage permissions if any of these are satisfied:
            <ul>
                <li>The site is bookmarked (and the user has 5 or less bookmarks)</li>
                <li>The site has high site engagement</li>
                <li>The site has been added to home screen</li>
                <li>The site has push notifications enabled</li>
            </ul>

            We will use the last two options to get the permission.


            <ol>

                <li>
                    <h2>Adding our app to home screen.</h2>
                    <ul>
                        <li>To enable adding our site to homescreen, first add a manifest file - <span class="hl">manifest.json</span> to the root.
                        <pre>
{
    "short_name": "OCR GT",
    "name": "OCR GT",
    "icons": [
      {
        "src": "favicon.png",
        "type": "image/png",
        "sizes": "64x64"
      },
      {
        "src": "awecode-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": "/",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6"
}
  </pre>
                    Change the values as per your requirement.
                    Link the manifest file from your index.html. Add the following within the <span class="hl">head</span> tag.
                    <pre>&lt;link rel="manifest" href="manifest.json"&gt;</pre>
                        </li>

                        <li>
                            Add a service worker with the file <span class="hl">sw.js</span> (following sample from <a href="https://googlechrome.github.io/samples/service-worker/basic/" target="_blank" rel="noreferer noopener nofollow">Google Chrome's Github</a>)
                            <pre>const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
                            </pre>
                        Register the service worker from your app:
                        <pre>if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}</pre>
                        </li>
                        <li>
                            Now, open your app in Chrome, open <span class="hl">Dev Tools</span> -> <span class="hl">Application</span> tab  -> <span class="hl">Manifest</span>, click on <span class="hl">Add to homescreen</span>.
                            <img src="https://developers.google.com/web/tools/chrome-devtools/images/manifest.png" alt="DevTools Add to Homescreen">
                            <div><small><em>Image Courtesy: Google</em></small></div>
                        </li>

            </ul>

        </li>
        <li>
            <h2>Enable push notifications</h2>
            <ul>
                <li>Click on the info icon or the Secure lock icon before the URL in the address bar. Then click on the <span class="hl">Site Settings</span>.
                <img src="https://i.imgur.com/xZayWdc.png" alt="Chrome Site Settings" title="Chrome Site Settings"/>
                </li>

                <li>And allow push notifications.
                    <div>
                <img src="https://i.imgur.com/71ld1Yl.png" alt="Chrome Allow Push Notifications" title="Chrome Allow Push Notifications"/></div>
                </li>
            </ul>
        </li>
        <li>
            <h2>Ask Chrome for the persisted storage permissions.</h2>
            <pre>if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(granted => {
    if (granted)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });</pre>
        </li>
            </ol>
Now, your web app should print "Storage will not be cleared except by explicit user action" on the console.

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