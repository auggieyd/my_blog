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
    "revision": "10984915e56e65b65a1c5f9175aabd69"
  },
  {
    "url": "about/index.html",
    "revision": "1ccd479d62f5809c434bf904fb31828d"
  },
  {
    "url": "assets/css/0.styles.61ddf30d.css",
    "revision": "6266525940633be454427cf9c858b0b6"
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
    "url": "assets/js/1.29be797d.js",
    "revision": "0734fcdcfd90ddc12eb5b349565a5f6a"
  },
  {
    "url": "assets/js/10.7d13dd93.js",
    "revision": "233929ab26d5dab268ad734e5c79f288"
  },
  {
    "url": "assets/js/11.b523078a.js",
    "revision": "bac204e416abea532cab6ee3c7c1862d"
  },
  {
    "url": "assets/js/14.100a11f9.js",
    "revision": "9401f0fea5566056d2233dfa5f026e55"
  },
  {
    "url": "assets/js/15.e42eaf5f.js",
    "revision": "29f230e593cbdca86813764ef4f206f9"
  },
  {
    "url": "assets/js/16.86a863c2.js",
    "revision": "2634fc340df144ebf835deacdf77eeb6"
  },
  {
    "url": "assets/js/17.fcff0e16.js",
    "revision": "f035c52586e5e26831ce4150ed1cf418"
  },
  {
    "url": "assets/js/18.f74fe707.js",
    "revision": "511d2bb50219bfdf3a08ae272cbfad48"
  },
  {
    "url": "assets/js/19.ae0ae052.js",
    "revision": "017ccb1b954c569576d5c5ad0536f64f"
  },
  {
    "url": "assets/js/2.faf1ac31.js",
    "revision": "dc53cd91064d22165cc96385df1e7836"
  },
  {
    "url": "assets/js/20.e24a94cb.js",
    "revision": "a6b9672eb1857351a24f749e1feda005"
  },
  {
    "url": "assets/js/21.0c4049cc.js",
    "revision": "7512080611684f295a7ff61104646e23"
  },
  {
    "url": "assets/js/22.abd51cda.js",
    "revision": "bedd264ab6d4d29ff330112682d2afa4"
  },
  {
    "url": "assets/js/23.9d5da15e.js",
    "revision": "90a2a3e4684db8b1bd2c66443ece9b25"
  },
  {
    "url": "assets/js/24.9c027acc.js",
    "revision": "a1cd2fa7592c2d7457f22ac33ea3734e"
  },
  {
    "url": "assets/js/25.356294d9.js",
    "revision": "b056a133318a02c5edd5857c3d69adca"
  },
  {
    "url": "assets/js/26.87ee138c.js",
    "revision": "7351d601679c02b419b42d80832f1101"
  },
  {
    "url": "assets/js/27.bb8a47c8.js",
    "revision": "a0f75730025850118a6084a48b353f4f"
  },
  {
    "url": "assets/js/28.a6ac42ed.js",
    "revision": "23028ec668b79d72d9ef4001f4eab43a"
  },
  {
    "url": "assets/js/29.c59fac2e.js",
    "revision": "9f45bdf73e5009c5ae319850c5248c32"
  },
  {
    "url": "assets/js/3.002e90ac.js",
    "revision": "43520ca3c4eba33150df0bcf29d4b8c6"
  },
  {
    "url": "assets/js/30.d764a2af.js",
    "revision": "bd3f3aa6c67eaac718263292a30013a6"
  },
  {
    "url": "assets/js/31.e158dfb2.js",
    "revision": "e4ec761f4f6abe175c2f5ca01cfaed64"
  },
  {
    "url": "assets/js/32.c1b26797.js",
    "revision": "52e8770754346592d534341947f83b47"
  },
  {
    "url": "assets/js/33.fb85fc61.js",
    "revision": "8cedefaf2ebfa9ad1898c9a1918cc8ea"
  },
  {
    "url": "assets/js/34.23a5bd75.js",
    "revision": "49e26cdebef5c733ee623a214beece50"
  },
  {
    "url": "assets/js/35.7b5910ea.js",
    "revision": "6539be66e21b98b3a772f783ee56bd31"
  },
  {
    "url": "assets/js/36.d6cf5ee8.js",
    "revision": "240eb6c36711b0487a94d2448b75e01a"
  },
  {
    "url": "assets/js/37.099d0cbd.js",
    "revision": "ee28acc7f1b42238fa950330d7c16d4c"
  },
  {
    "url": "assets/js/38.e6038c05.js",
    "revision": "5bbffaad6d02f2919bc60f62a4f891ce"
  },
  {
    "url": "assets/js/39.956ec2c0.js",
    "revision": "28ee899a33b3361243a0f778423636c5"
  },
  {
    "url": "assets/js/4.07581322.js",
    "revision": "caa9a63e9323e85e9ed4ccc881177544"
  },
  {
    "url": "assets/js/40.8c81b9b6.js",
    "revision": "dd83de18e90eb9db4e956ef7ed55b0ac"
  },
  {
    "url": "assets/js/41.51e976b6.js",
    "revision": "c942576aa0971fbb60232281e3e1bd1f"
  },
  {
    "url": "assets/js/42.00fc57e8.js",
    "revision": "72b6b08a449b5474061cc40ae3caaf07"
  },
  {
    "url": "assets/js/43.5ecde2a7.js",
    "revision": "2fa8a633fe70d305e44b6dfc6b98ca0b"
  },
  {
    "url": "assets/js/44.0f5faaf7.js",
    "revision": "3ef5bb82c6e6c34d898c839f247df7c6"
  },
  {
    "url": "assets/js/45.1ad5aa63.js",
    "revision": "1b8cf3bafef32a380ee25ff485740d74"
  },
  {
    "url": "assets/js/46.a1b96ee1.js",
    "revision": "fbf052d3dcf849c2a067673c5028e979"
  },
  {
    "url": "assets/js/47.4151e4fb.js",
    "revision": "f45048204fe228274af10a63ad293a1d"
  },
  {
    "url": "assets/js/48.75cadc38.js",
    "revision": "245b3805d89402db12015ab619c27924"
  },
  {
    "url": "assets/js/49.ada63e37.js",
    "revision": "3ee9ffc7807226687de6153ffaec56ee"
  },
  {
    "url": "assets/js/5.7affdd3e.js",
    "revision": "6af23adb2d49a59bcdaec1517386f596"
  },
  {
    "url": "assets/js/50.d7ca490c.js",
    "revision": "c4e64204e6614c397f2cfd9f5ce2e1cd"
  },
  {
    "url": "assets/js/51.18d14b94.js",
    "revision": "45d239fb5d8885d20a6ded29f866984b"
  },
  {
    "url": "assets/js/6.025db5c5.js",
    "revision": "e0c4032624a3f0630095c2f8883f4ee7"
  },
  {
    "url": "assets/js/7.5cbb8236.js",
    "revision": "a07dd50aed2b30f5e1a6e5a4d3dff2fb"
  },
  {
    "url": "assets/js/8.ec6fe958.js",
    "revision": "150b3383e8e1f1bb6a7d3b299f953c7a"
  },
  {
    "url": "assets/js/9.93311571.js",
    "revision": "4faf6411cc431b27b82281ea86e6172b"
  },
  {
    "url": "assets/js/app.36d547f0.js",
    "revision": "a6d803dd65fe01e64c31b817652a6305"
  },
  {
    "url": "assets/js/vendors~docsearch.a58d6195.js",
    "revision": "8d2bfb1019f270c5388dd90dbd846f89"
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
    "revision": "e9463cabbc952c28082072b4d5b144af"
  },
  {
    "url": "categories/mood/index.html",
    "revision": "92a02711f16752735c7d8dc22ef7c02c"
  },
  {
    "url": "categories/share/index.html",
    "revision": "2966c875b3b3a17e3860eceeef783812"
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
    "revision": "dacdf577b78727e40d3ca1c309e8aae4"
  },
  {
    "url": "mood/230224.html",
    "revision": "4f01c13e1493fa61f920a7f645fca923"
  },
  {
    "url": "mood/230225.html",
    "revision": "e20ccea90cf3b5ffbca2c42f576bf7bc"
  },
  {
    "url": "note/index.html",
    "revision": "cb02a8d374dd8ed02cb7a99d70390977"
  },
  {
    "url": "other/230410.html",
    "revision": "1713c152407c46cf2cb807d37ea8015f"
  },
  {
    "url": "other/progress.html",
    "revision": "541d6b019747cf67eef3eaf5f2ce862d"
  },
  {
    "url": "share/220924.html",
    "revision": "dd7cbff66d5a8faa0edf6bee68116b56"
  },
  {
    "url": "share/230304.html",
    "revision": "2054d080e5ddc579f6a471318ee6f227"
  },
  {
    "url": "share/230630.html",
    "revision": "311f615fe99225e46faabd498780bd7d"
  },
  {
    "url": "share/240325.html",
    "revision": "ad966eba35215e2c59b5402360fd76fa"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "e3e9fdb103d3080e8bdf1540ff79fbb2"
  },
  {
    "url": "tag/保研/index.html",
    "revision": "15acb8906024775cc9fd45f15a9e9dc8"
  },
  {
    "url": "tag/杂想/index.html",
    "revision": "f54cbf6727d056d13f9e5d99a510bcae"
  },
  {
    "url": "tag/胡说/index.html",
    "revision": "2782f123b09a38d3a0b583f6bb951bb1"
  },
  {
    "url": "tag/记录/index.html",
    "revision": "073d5529b394491f80db20173621e7e1"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6c7b64182bd5afbfa7dd27453f88df6"
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
