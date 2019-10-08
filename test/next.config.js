const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    'location-backbone-react-map'
  ]
});