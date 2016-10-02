var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'client', 'app', 'appContainer.jsx');

var config = {
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        loader : 'babel',
        query: {
          presets: ['react'],
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