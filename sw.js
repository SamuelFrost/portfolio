if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return c;case"module":return d;default:return e(r)}})).then(e=>{const r=i(...e);return c.default||(c.default=r),c})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"216acc24.js",revision:"f6260595a0d55dc338305a7969777edc"},{url:"404.html",revision:"cf7d47d81cc6ad1bdd13b5919422158d"},{url:"404.js",revision:"606c7eb22191e030bfd2790c9b7191b5"},{url:"5e726e7c.js",revision:"ad702b99abc959d4f100aa630cf5b0b4"},{url:"9dec3980.js",revision:"b37cbc23e66a61916c8c2d00a94c99c9"},{url:"b7017ca3.js",revision:"5d8a0c2d77c730e217a9085e39924d19"},{url:"bb651ba9.js",revision:"f9764b86e2cc6587b7da8a8e589c1614"},{url:"d58d5d74.js",revision:"2372743fe0c0ad34569d39495df473e6"},{url:"dc869d22.js",revision:"94fb534c14530c0467d9e939fa7e11cd"},{url:"e77ad905.js",revision:"930c121d6def07d3c6f0dc8eaaa365dd"},{url:"f67b468c.js",revision:"fe994b3094aae2ea9ecafbd8d06cbf55"},{url:"fea0e124.js",revision:"43ff633ca480ec64ffcc771280be8ba9"},{url:"index.html",revision:"4c30c578dc19523238a12f45e36a8f4c"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
