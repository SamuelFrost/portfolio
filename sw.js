if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=c(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cf7d47d81cc6ad1bdd13b5919422158d"},{url:"404.js",revision:"606c7eb22191e030bfd2790c9b7191b5"},{url:"application.js",revision:"28a1f2ecd871fb127889dc2328afa2d3"},{url:"application2.js",revision:"c658d2dcfde902ea8e026b97968c4322"},{url:"application3.js",revision:"18f3af349e158a0e63b9a512362e698b"},{url:"error_404.js",revision:"34e707589d0f4f7dcbdbb3f4162ec881"},{url:"index.html",revision:"c353e9653310c522c92c2fd14d9ecfdc"},{url:"index.js",revision:"c8ffb6feb763139acd41b02878938fa4"},{url:"index2.js",revision:"0fa575134416d1e1c96ad00f98aea697"},{url:"locale.js",revision:"5cd3bf17bb2bef1ca9ad07b1d4eb44d8"},{url:"portfolio-application.js",revision:"a13651ef6772357f02eb3d978c2bcba3"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
