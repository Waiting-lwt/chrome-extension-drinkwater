import { resolve } from 'path'

export default {
  npmClient: "npm",
  hash: true,
  history: {
    type:'hash'
  },
  publicPath: './',
  alias: {
    '@': resolve(__dirname, './src'),
    base: resolve(__dirname, './')
  },
  copy: [
    {
      from: "manifest.json",
      to: "dist/manifest.json",
    },
    {
      from: "src/background.js",
      to: "dist/background.js",
    },
    {
      from: "src/assets/manifest",
      to: "dist/static",
    }
  ],
};
