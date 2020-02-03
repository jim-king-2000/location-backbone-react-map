const withTM = require('next-transpile-modules')([
  'location-backbone-react-map'
]);
const withPlugins = require('next-compose-plugins');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
  require.extensions['.css'] = () => {};
 }
 
const withCSS = require('@zeit/next-css')
module.exports = withTM({
  transpileModules: [
    'location-backbone-react-map'
  ]
});
module.exports = withPlugins([
  [withCSS()],
  [withTM],
])