/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'css!style!stylus' },
      // TODO: create loader for .js filest ransfroming from ES2015 to ES5
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
