import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import packageJson from './package.json';

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  outputDir: process.env.OUTPUTDIR,

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  // developmentMode: process.env.ROLLUP_WATCH === 'true',
  developmentMode: true,
  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
  // workbox: {
  //   swDest: "./service-worker.js",
  // },

  html: {
    transform: [
      // inject lang attribute
      (html) => html.replace("<html>", '<html lang="en-US">'),
      // inject app version
      (html) =>
        html.replace(
          "</body>",
          `<script>window.APP_VERSION = "${packageJson.version}"</script></body>`
        ),
      // inject base route (for subdomain hosting like gh-pages)
      (html) =>
        html.replace(
          '<base href="/">',
          `<base href="/${process.env.BASEDIR}">`
        ),
      (html) =>
        html.replace(
          '<link rel="icon" href="/favicon.ico" type="image/ico">',
          `<link rel="icon" href="/${process.env.BASEDIR}favicon.ico" type="image/ico">`
        ),
      (html) =>
        html.replace(
          '<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">',
          `<link rel="shortcut icon" href="/${process.env.BASEDIR}favicon.ico" type="image/x-icon">`
        ),
    ],
    // publicPath: process.env.BASEDIR
  },
});

export default merge(baseConfig, {
  // export default{
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  // input: './portfolio-application.js',
  input: "index.html",
  plugins: [
    copy({
      targets: [
        { src: "src/favicon.ico", dest: process.env.OUTPUTDIR },
        { src: "src/404.html", dest: process.env.OUTPUTDIR },
      ],
    }),
    json(),
    dynamicImportVars({
      // options
    }),
  ],
  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
  // };
});