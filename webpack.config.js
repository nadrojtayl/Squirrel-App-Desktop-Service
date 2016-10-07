var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/',
  },
    node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    publicPath: 'http://localhost:8080/built/',
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
  ],

  target: 'node',
};

module.exports = config;