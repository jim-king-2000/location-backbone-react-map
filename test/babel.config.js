
module.exports = {
  presets: [
    'next/babel'
  ],
  plugins: [
    '@babel/plugin-proposal-private-methods',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
};