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
      { test: /\.js$/, loader: 'babel?stage=1', excludes: [/node_modules/] }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
