if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,c,s)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=s(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dfea4b996783dd51cd1dba26f37d4c8a"},{url:"404.js",revision:"559a215c853a58c696cfca90e238e10a"},{url:"application.js",revision:"6c1574a0a61077b8f095749dd844c67c"},{url:"application2.js",revision:"0b4d550dfb2c0c8ebc0b56add8a3b5ac"},{url:"application3.js",revision:"c3e4b81b1443f2194cd91f907f6aef5e"},{url:"error_404.js",revision:"34e707589d0f4f7dcbdbb3f4162ec881"},{url:"index.html",revision:"c353e9653310c522c92c2fd14d9ecfdc"},{url:"index.js",revision:"c8ffb6feb763139acd41b02878938fa4"},{url:"locale.js",revision:"e779dd60fcc81287c20913767f5bdede"},{url:"portfolio-application.js",revision:"126cb0c07aca5d958e36caa05fdaa549"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
