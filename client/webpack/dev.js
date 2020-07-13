const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve('./build/bundles/'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
}
