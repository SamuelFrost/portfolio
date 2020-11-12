import json from '@rollup/plugin-json';
import { rollupAdapter } from "@web/dev-server-rollup";



export default {
  open: true,
  nodeResolve: true,
  appIndex: "index.html",
  // in a monorepo you need to set set the root dir to resolve modules
  // rootDir: 'src',
  mimeTypes: {
    // serve all json files as js
    "**/*.json": "js",
    // serve .module.css files as js
    "**/*.module.css": "js",
  },
  plugins: [rollupAdapter(json())],
};