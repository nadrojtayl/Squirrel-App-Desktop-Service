var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        loader : 'babel',
        include : APP_DIR,
        query: {
          presets: ['react', 'es2015'],
        },
        exclude: [nodeModulesPath]
      },
      { test: /\.css$/, 
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/, 
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  target: 'node',
};

module.exports = config;