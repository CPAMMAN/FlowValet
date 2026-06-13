// CP Amman Issue Tracker — Service Worker v3
const CACHE = 'cp-issues-v3';
const SHELL = [
  './login.html','./management.html','./department.html',
  './cp_logo.png','./manifest.json','./config.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('supabase')||e.request.url.includes('imgbb')||e.request.url.includes('api.')) return;
  e.respondWith(fetch(e.request).then(res=>{caches.open(CACHE).then(c=>c.put(e.request,res.clone()));return res;}).catch(()=>caches.match(e.request)));
});
// Push notifications
self.addEventListener('push',e=>{
  var data=e.data?e.data.json():{title:'CP Issue Tracker',body:'New update'};
  self.registration.showNotification(data.title,{body:data.body,icon:'./icons/icon-192x192.png',badge:'./icons/icon-72x72.png',vibrate:[200,100,200]});
});
