const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const BundleTracker = require('webpack-bundle-tracker')
const CommonsChunk = require('webpack/lib/optimize/CommonsChunkPlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extSass = new ExtractTextPlugin({
  filename: '[name].[hash].css'
})

const tracker = new BundleTracker({
  path: path.resolve('./build/'),
  filename: 'webpack-stats.json',
  indent: 4
})

const commons = new CommonsChunk({
  name: 'commons',
  filename: 'commons-[hash].js',
  chunks: ['app']
})

const postcssPlugins = () => {
  return [ autoprefixer({browsers: ['last 2 versions', 'ie >= 8', 'and_chr >= 2.3', 'edge >= 14']}) ]
}

module.exports = {
  context: __dirname,

  entry: {
    polyfills: path.resolve('./src/scripts/polyfills/index.js'),
    'app_style': path.resolve('./src/styles/main.js'),
    'app': path.resolve('./src/scripts/app/index.js')
  },

  output: {
    path: path.resolve('./build/bundles/'),
    filename: '[name]-[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/styles/'),
        use: extSass.extract([
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: { plugins: postcssPlugins, sourceMap: true }}
        ])
      },
      {
        test: /\.scss$/,
        include: path.resolve('./src/styles/'),
        use: extSass.extract([
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: { plugins: postcssPlugins, sourceMap: true }},
          {loader: 'sass-loader', options: {outputStyle: 'expanded', sourceMap: true}}
        ])
      },
      {
        test: /\.sass$/,
        include: path.resolve('./src/styles/'),
        use: extSass.extract([
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: { plugins: postcssPlugins, sourceMap: true }},
          {loader: 'sass-loader', options: {outputStyle: 'expanded', sourceMap: true}}
        ])
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{loader: 'file-loader', options: {name: '[name]-[hash].[ext]'}}]
      }
    ]
  },

  plugins: [
    extSass,
    tracker,
    commons
  ]
}
