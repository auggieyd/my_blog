/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fdfbaf902a2d37d68dd3d64944daa04e"
  },
  {
    "url": "about/index.html",
    "revision": "4415585f94b35394dff9ab3d0471c014"
  },
  {
    "url": "assets/css/0.styles.a1997505.css",
    "revision": "d5470d58413452a5ccfbab3f0f8a3b71"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/03051.68b4fe81.jpg",
    "revision": "68b4fe8108edbf08be6157e5ee29a689"
  },
  {
    "url": "assets/img/03052.5d9395a5.jpg",
    "revision": "5d9395a5734873a15bd4f89902e9ea31"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d4588b42.js",
    "revision": "d6fe070730a481e161c2ed2a6e15c5b5"
  },
  {
    "url": "assets/js/10.ed4a3d6f.js",
    "revision": "63ed70a160fc4fc925c023a59933ebfb"
  },
  {
    "url": "assets/js/11.d4322ea3.js",
    "revision": "4e3352d706c229091153db3be855aa00"
  },
  {
    "url": "assets/js/12.0be8b916.js",
    "revision": "d6ac80c2dc9b1bf668cb9308d45ac652"
  },
  {
    "url": "assets/js/13.79d2946a.js",
    "revision": "cd1442e4a32a41c216a7215cd86cea91"
  },
  {
    "url": "assets/js/14.e5843b8e.js",
    "revision": "0f88f52b2729c2e0f42b2cb77ef8ab20"
  },
  {
    "url": "assets/js/15.a6d339a0.js",
    "revision": "15332655df049b8c9baf1cf02778b547"
  },
  {
    "url": "assets/js/16.d1b3eaf3.js",
    "revision": "596672d1a5e591c997d712a8724144da"
  },
  {
    "url": "assets/js/17.849baac7.js",
    "revision": "4ab00403fa3b27dd50657e8e79eabf8f"
  },
  {
    "url": "assets/js/18.9da62b92.js",
    "revision": "63bdf49100348a94ebeb4e98d9cf940e"
  },
  {
    "url": "assets/js/19.76dcc61b.js",
    "revision": "79500c48a02b082dda8cc380defe6ce8"
  },
  {
    "url": "assets/js/3.f7c31d13.js",
    "revision": "d5e85bc196a052f3cb52a63e124de21d"
  },
  {
    "url": "assets/js/4.ddc62527.js",
    "revision": "cf4b47c17fbcff4bd256f78a89d5c84c"
  },
  {
    "url": "assets/js/5.2ef6a860.js",
    "revision": "5df7689b4ab39329afb81c27dad5eb39"
  },
  {
    "url": "assets/js/6.f81ca6b6.js",
    "revision": "c1c0bf55b0b7b081871a3687535ced3b"
  },
  {
    "url": "assets/js/7.951a7ccf.js",
    "revision": "0a046ce14a5cf854d82ba8b39044b743"
  },
  {
    "url": "assets/js/8.d7153750.js",
    "revision": "db5f8fd166ce5455469a1c6925195ffc"
  },
  {
    "url": "assets/js/9.b0e218da.js",
    "revision": "f72c44cb4dbd8425f006eff3fb151d7c"
  },
  {
    "url": "assets/js/app.961d8ed4.js",
    "revision": "5c58c5983c6907b1469aab6431d57fd5"
  },
  {
    "url": "author.jpg",
    "revision": "936904db8684b7242dcef4e82fe93b78"
  },
  {
    "url": "bg.jpg",
    "revision": "a46c2b7dd8f7288488667047e60aa7e2"
  },
  {
    "url": "categories/index.html",
    "revision": "6abdb8df399090367d8c407bc5bbb069"
  },
  {
    "url": "categories/mood/index.html",
    "revision": "4525e3be7cc5faa7dca4f4234411d0f8"
  },
  {
    "url": "categories/share/index.html",
    "revision": "05d937d9ba220c6bab94ca7a9d936520"
  },
  {
    "url": "demo.png",
    "revision": "69a66907d17347fc620cce912ad8b857"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "d774b80f530d52eb47439178c314343b"
  },
  {
    "url": "mood/230224.html",
    "revision": "fb17cbd577e6c20a9538477169b8d8dd"
  },
  {
    "url": "mood/230225.html",
    "revision": "178397377285130dfb3fc96a1939d491"
  },
  {
    "url": "note/index.html",
    "revision": "c29a6d1215cdd3ddba1b8b9382104ecf"
  },
  {
    "url": "share/220924.html",
    "revision": "447f879a2d80b2b6b19c3f73768b946e"
  },
  {
    "url": "share/230304.html",
    "revision": "27a03c83718744bf0c6a537aadd6248b"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "c2cef9b9b65775d94144aadd0a74a633"
  },
  {
    "url": "tag/保研/index.html",
    "revision": "955a6bf9af788015b09a86a45fbadce1"
  },
  {
    "url": "tag/杂想/index.html",
    "revision": "449c55489929a89991f704577ed720a9"
  },
  {
    "url": "tag/胡说/index.html",
    "revision": "9ee232188814f436a757a18bc7fc90ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "cfd3037a8e9424a99d86d1a391771604"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
