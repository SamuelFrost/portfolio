if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"24ed3330.js",revision:"ceb14fbc9d121f438f742cc88ec960cf"},{url:"267206f4.js",revision:"c832c0b713bc9c8af373f2758308a820"},{url:"4b396d7b.js",revision:"d4b724c0637f921207522a860adfec30"},{url:"99fbdb36.js",revision:"aae3c54588b095c41540a91c251f1b46"},{url:"a5ea8c5d.js",revision:"5ada0ed0bed0a4a388380d354a3fa01f"},{url:"b13a6c4d.js",revision:"ffab56475e33badff1b411406448ec61"},{url:"b8256be6.js",revision:"36f1450951542d28e413586745eeac72"},{url:"index.html",revision:"fa7eb7a62defec802a7d94c23dbf3a47"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
