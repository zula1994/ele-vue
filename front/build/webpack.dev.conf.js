var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('../config')
var utils = require('./utils')

var baseWebpackConfig = require('./webpack.base.conf')
var platConfig = require('./webpack.' + process.argv[2] + '.conf')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(platConfig.entry).forEach(function (name) {
  platConfig.entry[name] = ['./build/dev-client'].concat(platConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, platConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new FriendlyErrorsPlugin()
  ]
})
