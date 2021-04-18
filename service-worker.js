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
    "revision": "4f7a8885e36dd34e0e3e1e4af4b488ec"
  },
  {
    "url": "about/index.html",
    "revision": "0ae2f441cbed6df3cc1012db5c715d45"
  },
  {
    "url": "archive/index.html",
    "revision": "20aacdce640cbd3fd933593635fc5f43"
  },
  {
    "url": "assets/css/0.styles.a7a5ffb3.css",
    "revision": "e7c9e1d375ec4985ceb9f7ddfc462a10"
  },
  {
    "url": "assets/fonts/fa-brands-400.099a9556.woff",
    "revision": "099a9556e1a63ece24f8a99859c94c7d"
  },
  {
    "url": "assets/fonts/fa-brands-400.30cc681d.eot",
    "revision": "30cc681d4487d2f561035ba24a68c629"
  },
  {
    "url": "assets/fonts/fa-brands-400.3b89dd10.ttf",
    "revision": "3b89dd103490708d19a95adcae52210e"
  },
  {
    "url": "assets/fonts/fa-brands-400.f7307680.woff2",
    "revision": "f7307680c7fe85959f3ecf122493ea7d"
  },
  {
    "url": "assets/fonts/fa-regular-400.1f77739c.ttf",
    "revision": "1f77739ca9ff2188b539c36f30ffa2be"
  },
  {
    "url": "assets/fonts/fa-regular-400.7124eb50.woff",
    "revision": "7124eb50fc8227c78269f2d995637ff5"
  },
  {
    "url": "assets/fonts/fa-regular-400.7630483d.eot",
    "revision": "7630483dd4b0c48639d2ac54a894b450"
  },
  {
    "url": "assets/fonts/fa-regular-400.f0f82301.woff2",
    "revision": "f0f8230116992e521526097a28f54066"
  },
  {
    "url": "assets/fonts/fa-solid-900.1042e8ca.eot",
    "revision": "1042e8ca1ce821518a2d3e7055410839"
  },
  {
    "url": "assets/fonts/fa-solid-900.605ed792.ttf",
    "revision": "605ed7926cf39a2ad5ec2d1f9d391d3d"
  },
  {
    "url": "assets/fonts/fa-solid-900.9fe5a17c.woff",
    "revision": "9fe5a17c8ab036d20e6c5ba3fd2ac511"
  },
  {
    "url": "assets/fonts/fa-solid-900.e8a427e1.woff2",
    "revision": "e8a427e15cc502bef99cfd722b37ea98"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/ad.png",
    "revision": "f83672204fdc9dc1363f01e3fb7145fb"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.44903107.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/background.png",
    "revision": "b52da4f7c0e1bc5424245b8a0b1e79fd"
  },
  {
    "url": "assets/img/brand.a6838b12.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/brand.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/by-nc-sa.03dda63e.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/empty.png",
    "revision": "596be35cb3b05083be5a8d7c4177c669"
  },
  {
    "url": "assets/img/fa-brands-400.ba7ed552.svg",
    "revision": "ba7ed552362f64d30f6d844974d89114"
  },
  {
    "url": "assets/img/fa-regular-400.0bb42845.svg",
    "revision": "0bb428459c8ecfa61b22a03def1706e6"
  },
  {
    "url": "assets/img/fa-solid-900.376c1f97.svg",
    "revision": "376c1f97f6553dea1ca9b3f9081889bd"
  },
  {
    "url": "assets/img/hitokoto.left.7d59b2d0.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.left.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.right.d80507e4.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/hitokoto.right.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/qq.png",
    "revision": "b2fcc67452f144ad13bd6c347400fbb2"
  },
  {
    "url": "assets/img/records.2ade8ac9.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/records.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "d7aaeb7652a86820babdf501c01621a2"
  },
  {
    "url": "assets/js/10.4e703af7.js",
    "revision": "e407e1cf7dd6b0b16bbac87136ef4986"
  },
  {
    "url": "assets/js/11.7fbebba5.js",
    "revision": "f032d340169b4845406e0dd728f9abc2"
  },
  {
    "url": "assets/js/12.1153c514.js",
    "revision": "192d9de817a937ef35307657eae46e59"
  },
  {
    "url": "assets/js/13.431f4376.js",
    "revision": "5288aee827c2b4ef710649f12f672e03"
  },
  {
    "url": "assets/js/14.67802fce.js",
    "revision": "2748a9fe55ca776dc9ef13995149f090"
  },
  {
    "url": "assets/js/15.81486e67.js",
    "revision": "4ad1eed431e22f4377b5aac67f43cf13"
  },
  {
    "url": "assets/js/16.a00417ee.js",
    "revision": "dfeea0bf66a9da5f0635b57a3e15194c"
  },
  {
    "url": "assets/js/17.b2b42cdc.js",
    "revision": "58515cb10a917f6585cf2c2437fe27dd"
  },
  {
    "url": "assets/js/18.178007b0.js",
    "revision": "011a0ceddcc758002ffa5a103f81bbb0"
  },
  {
    "url": "assets/js/19.a5ea0502.js",
    "revision": "34a39b099f8461d1bbd30ae7066fedbc"
  },
  {
    "url": "assets/js/20.7721c23f.js",
    "revision": "aaddd46ea7b130cbf3ffe3a62495523d"
  },
  {
    "url": "assets/js/21.882cb20b.js",
    "revision": "169f3b1fcc107798caa22ec6af2cc897"
  },
  {
    "url": "assets/js/22.02b65dad.js",
    "revision": "efac03eb91f7cc901f0eccd1dc261775"
  },
  {
    "url": "assets/js/23.8a2ee7ba.js",
    "revision": "e76472541c8a81576bfe23bd2b0037fe"
  },
  {
    "url": "assets/js/24.9615ece1.js",
    "revision": "43ed24ba091643e526a6b4466c410f57"
  },
  {
    "url": "assets/js/25.e8aefabe.js",
    "revision": "d559c9a17d5d526aa908cfbb574d3d2a"
  },
  {
    "url": "assets/js/26.e1c80f58.js",
    "revision": "74cafc4356b47ae1851a131b54f029df"
  },
  {
    "url": "assets/js/27.0b8c7966.js",
    "revision": "0e13452d75afc3dfaef1689f9ccc2d59"
  },
  {
    "url": "assets/js/28.f8cb5680.js",
    "revision": "2c8d641e955ed243738d89fb651e9e35"
  },
  {
    "url": "assets/js/29.8c84a290.js",
    "revision": "35f82db0a00cb7a36cb7bf3c120a0ab3"
  },
  {
    "url": "assets/js/3.30cd915c.js",
    "revision": "949ef0a6424d776e4c8914b6bb4d3d0e"
  },
  {
    "url": "assets/js/30.af6dd8d3.js",
    "revision": "b30d768c2c53f29ce36ab5b516fb6c11"
  },
  {
    "url": "assets/js/31.dacb6782.js",
    "revision": "2d77ecb5fc58c3115125da8c09a95ccd"
  },
  {
    "url": "assets/js/32.2a8ca38f.js",
    "revision": "aff3b1538822c7f0c97fce57507cfbd0"
  },
  {
    "url": "assets/js/33.9ca2b71c.js",
    "revision": "f3f78e9258417df29bffe5d74dcc2e6c"
  },
  {
    "url": "assets/js/4.bb3505fc.js",
    "revision": "53a2d7c6a273b9a5459d21ce9ea95053"
  },
  {
    "url": "assets/js/5.8f03a21b.js",
    "revision": "078c9b59be15c6d490b1d89cb3031327"
  },
  {
    "url": "assets/js/6.345ac3da.js",
    "revision": "ba595c7105086112329697f0bff30570"
  },
  {
    "url": "assets/js/7.a4756390.js",
    "revision": "54bdecff5abc2e52b9c60151f2b0cfc3"
  },
  {
    "url": "assets/js/8.eec476d6.js",
    "revision": "a23814ac9215152fab9718b3461cb3cf"
  },
  {
    "url": "assets/js/9.efcfe850.js",
    "revision": "70c2c2ea606f8b6f98cb0a4850b3e8c6"
  },
  {
    "url": "assets/js/app.5514714f.js",
    "revision": "7b6e6aee131e8943460adce7c306946a"
  },
  {
    "url": "assets/js/vuejs-paginate.472882b3.js",
    "revision": "758222f48bf4534e6f6dda34c0ca556c"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "2221ab8963e69d5e5aa3bf0a42fb52be"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "cab8fd55575e6c020c5314269bff91c9"
  },
  {
    "url": "category/index.html",
    "revision": "5e525bcd97189856dfa33d8952cbb9fa"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "435f0bef573ce1bf073476a24a34653b"
  },
  {
    "url": "category/Note/index.html",
    "revision": "b5abe8559eddd78ec341aeebc45b436b"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "f61174f4cf7821fcf208d1ff55b0fed2"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "a963d92533100f83104247690e061c59"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "ba289bb95a32dc25f1da7e34ac76af23"
  },
  {
    "url": "category/网络/index.html",
    "revision": "126bad701580c4d70d5811a21100ee8b"
  },
  {
    "url": "codes/index.html",
    "revision": "fccb7d337793ae795b69e98fc0c3af6b"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQ1583444636773.png",
    "revision": "a25a8ffa90c5b10c42e4e6992e1bc2f0"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/index.html",
    "revision": "29bc447f31f93409e90716e0f2fef3a9"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "icons/index.html",
    "revision": "60ee720d8b6b24b43874a9d447106e02"
  },
  {
    "url": "index.html",
    "revision": "0f5efdbf0e4827a816a36f19477d63df"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "d14f1b3daa01b34c5d22c2b2fabe1dee"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "a7ae40fdfe745aafb453cc8da749c640"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "091ea055f9350c0833c7b924ae485002"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "74a13fe8ac5170f6fc3242adecec419e"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "860beaea04bc6b2928dd5c9a2d048e89"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "c839b9a39bc49b90502883392b329073"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "f857b79de606f70802a30e9983b45444"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "154117e1add55ae05b37e4deaa52732d"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "5a9b07dc5921c7942a759240383002ff"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "10aa7ec115a89fa2a36e9abb480835e5"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "98bba4da6528b04e817a2f47b280ed5f"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "22fa5df7c7a6474c6d04a02d37151031"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "01688ccd01d9f3b25473f57fbd38bd35"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "469bcaf8c73024b9f3c0bce5f2065e84"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "0e23addbbaaac58c620d18ffcb51b6b6"
  },
  {
    "url": "records/index.html",
    "revision": "6d3dde846916f5634295397684a0e116"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "a2cfa223da24bcd2be6b45017bdd533e"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "31921681b0b0c27b7c6371572b374654"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "9a2556a6579398e04c8ac34960d4f760"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "0d6c40a18a67407ae61cc3785462fed0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e24bfcbe5034ad051494021589a681b9"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "4d25a3c47b14ced61f4b45bd51076747"
  },
  {
    "url": "tag/index.html",
    "revision": "0dd5dba47bc3a35eeb176fdc40bca5ee"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "129b79c4307f048e2bef8e644a6d5670"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "69074ecbec3a02c548a2d74360bf43f6"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1c7fd3d8d152b0ed5ed6d3b7bb3ea1cb"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "41501fa16f15e277e4ff5e601d6e2860"
  },
  {
    "url": "tag/List/index.html",
    "revision": "f2066b7218b804fafecff385096be226"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "923a76ba52735457edd6c46650c2e8b1"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "cefe26dd6d3d19d006aaf0b7b8bfecea"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "9793a60bb94141167730e77ae921b1d5"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "9dc1b12a902697c4eb93be18103c42f5"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "88e09d6d32060c6b0e9d42cce1188b90"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "b0802aa194c601d2d0396386ed4b18fc"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "ae6898f1d786904133ac9da8c1e86140"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "a7516a97ad915c3952c80ab2db287f5b"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "bea8546cbfc6bf678b69c7edce02850e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6f599413f945cd78df55a0ffed1a2ae0"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "d1072c6e06a51874ae5d114a80b84b74"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "b0253fb0977b3d96aa452b5a31e459df"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "3d1511985cdfd0527734f298c393c430"
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
