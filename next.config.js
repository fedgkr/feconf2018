const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const typescript = require('@zeit/next-typescript');
const isProd = process.env.NODE_ENV === 'production'
module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: isProd ? '[hash:base64:5]' : '[local]-[hash:base64:5]'
    },
    sassLoaderOptions: {
      includePaths: [
        'node_modules',
        'src/styles'
      ]
    }
  }],
  [typescript],
], {
  distDir: '../.next',
  assetPrefix: './',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    config.node = {fs: "empty"};
    return config;
  },
});
