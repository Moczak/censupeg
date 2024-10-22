'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "601ec3589de6b823e7622bd72c488731",
".git/config": "27a28f41ffa21f02e6133b749840caa6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "79b896848801d78e4f7307a7edec2958",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0e6c083a948d015c9ab293b41dd65d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "252be9790ea9a217b78e25d76f28f9c2",
".git/logs/refs/heads/main": "252be9790ea9a217b78e25d76f28f9c2",
".git/logs/refs/remotes/origin/main": "96a41b06d05663de84e3a0f4308c1b35",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/09/f5bfbae8a418c5904c81df874db8575b88c90d": "57e29d3a2d67095cbc869341beb79f76",
".git/objects/0f/99c0bbb7c4530eaed8de9c2023709e8a0e790e": "b8e069fab184143ec34a0543b3d9f438",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/6f9a3fb70186643506e9de32cc9bb206d39817": "f41faf62ba7be7382e947d2b42a61172",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/207814fdb367ae4c8c827fbb93058beb2c83aa": "019cc25ccfc26afb4e88a95738828140",
".git/objects/21/2b01b275d6831f736575ced0dc67c850a24a60": "0ec928ddd51d69a1fd6c48380de68ee3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/db460a392d4f1b10d350c88e2968f7fd0c7695": "fc9593785434ae9b7c5aeaa253ec0262",
".git/objects/29/fee5720e9165e2db32a6bb51f1ffa8b377eb46": "3a9e06f9fc0359e04357722c8b943559",
".git/objects/2b/ad633818810b358ec74fe7177414f46cb993d6": "9f88ffe6230f472448d445b30aec2bc8",
".git/objects/2d/2648c5c4f9375ac33d374fb87437e30f4d66f6": "4f2d7ceb35f12e0b6ac3b7d73e7fea00",
".git/objects/30/5c936338fbdb24a0d1d3902b3e52e82f922b98": "e10de9f5514a99c43d5cc82c744cd198",
".git/objects/3a/a1acd0facc9fe2e2fa271af58e04b9eb9be8fd": "d172a837a6ebd6c4814c2c06a0741f4a",
".git/objects/47/6c5b5befd5a77a027207007f382832d80e5c48": "fb4736b43b351c816ade1a3263d82e0a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/cbbdb163dbfac1d6dd90c08e7094a6ed0c30c2": "12ccdb06250afbe62d016bc9a3683f51",
".git/objects/49/ea9fcc924ffdc196b230cda7e11f134f9997cd": "6ae7b1a61aba24974112a5a9dda04cbc",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/5d93421d8df52e286df90da5baac6640a7e97e": "e087e67c6d6d874d6b0c3baee2ec40f1",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d6e39f2af9b819b045e68710a1e4911e51d4d2": "b62030c1b8e1851100f442089d305ab3",
".git/objects/5c/bca45813a79d6c7e2edc0ae9b279c94a72930c": "0533ad76fda062e841bef9a8fe292125",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/2c63a667ec2e3575c65b41cc78a7e80a4fa00b": "656b620fd6506d42c2cf7e69ba123226",
".git/objects/78/f71eebf84ccf4ccc5e6cef1bf0eef6f323414e": "38e275d57d37eebb9cc6ad0e500b3be4",
".git/objects/7b/fbf306d06836a2c266911054a5f002bf722c53": "ee7ce46459ed551cab8468fed6d2b158",
".git/objects/7e/bdfa1ad380a915527b157818f035f8bcd1cd6c": "d29b45f0b185617e61239c3f43772dd4",
".git/objects/80/0be6bfbc2aee0995f1ff81cc2ae69454fdade2": "dca382c120508160a16e6d92f7e8c6cc",
".git/objects/80/f362545d5b5d6bf95e69d5083035310919b9b1": "ab8d3a67ca2566a91e8e70c9dd767b45",
".git/objects/84/a083f8120ba3261357c1e1d0e9a84b192b90ee": "9681cdef44a644ac7e9f524ee8b416c8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9e/5278a4c2433b09ff7deeacdf6beb3fd1e789d5": "f576ad301abde64c016476a39f93f91a",
".git/objects/9e/ee359e35d290c920a991d15e083c5712f86d30": "bca7cbe59fe499776049427eca7de9eb",
".git/objects/a0/0d652a695513ad346f753c5a1261bd16c1422d": "dc0e6075cab0268d2e79b39c898ad2a8",
".git/objects/a5/64a9af728ea4a10e51f9193cf4626d9eb3d8df": "8cf03703a25fef7cf6f48b50b924db70",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b8/5fe2af835b78dd48153f50eda70123a18bac1d": "7b77a019543e570bc4cf7eb6f83b2bb1",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/a395bc9f999ce2b4a0cf3e7307fe7b04d9d78b": "c401b216f262b1d1e9f6902793688fb0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/e5841fa4dddf0d1fb14d56a0f66cbf52ebae04": "7044fd9cb21b3b0ad65dbfcb1f1374b0",
".git/objects/df/e3a7f8b8fc114b9fe1d7283cb23c68a960262a": "24fe51579ea8489a5f495ca37eb4aea8",
".git/objects/e5/1f0f56cf03becd3aeb772c1387944a4f27750d": "bd074c06ca272527bb17927e168b4f17",
".git/objects/e8/d929004604ec4ff8aa4a8e7101032992c56661": "3891dca602f5013b050d8266b684a43c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bbfdf14daad4b6fbde35b06dcdd457ec979a60": "15511216fb0c11f4b8f8a72967e707d8",
".git/ORIG_HEAD": "0579c78050646b3f493127d9573f0e24",
".git/refs/heads/main": "0579c78050646b3f493127d9573f0e24",
".git/refs/remotes/origin/main": "0579c78050646b3f493127d9573f0e24",
"assets/AssetManifest.bin": "758ef80db1ac4d6a12d0b60e46efdbd4",
"assets/AssetManifest.bin.json": "308e5eb221ccb8e65eff6ff6e5585d74",
"assets/AssetManifest.json": "a01a9f416164ffe9fee4d99d6143c1b4",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/logocensupegia.png": "1b47f6d3c2c9f8cd39b1f04a12a8478d",
"assets/assets/images/pasta.png": "8b3360b46aed9b82f55a590f0d12f376",
"assets/assets/images/pdf.png": "afd8f140f743d4a3bff08539dcd772d4",
"assets/assets/images/Screenshot_20241021-210828.png": "f70c9406a3736c43bb24f2db1a04ae32",
"assets/assets/jsons/download.json": "50612ef2c092ff84403e930584536ddd",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/ia.json": "4babad1d9b6386a593cd85e0cdadcc78",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f2f0228a3a3cc8f2c1cde269c926c001",
"assets/NOTICES": "210f8bfbbea9ec6ea51109d2aaa5d58b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6ef829b329eeaba27bdd706381ad7a61",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "bc853bdbe6308489ad027d2fe0bfa89c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4ed0ea05f3b07c25398a5415106fd215",
"icons/Icon-192.png": "03669f365379ac144bca568cada51761",
"icons/Icon-512.png": "80cc3c1233b4227201fc907389481d60",
"index.html": "b2b561a9462caeedeb21deaf32bb1b5c",
"/": "b2b561a9462caeedeb21deaf32bb1b5c",
"main.dart.js": "cd1bed1517d10b2028634978c456f30e",
"version.json": "223943718aa0b7769eb64a1abdfd15cd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
