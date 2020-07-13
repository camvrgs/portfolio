const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const BundleTracker = require('webpack-bundle-tracker')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const tracker = new BundleTracker({
  path: path.resolve('./build/'),
  filename: 'webpack-stats.json',
  indent: 4
})

// commons supersceded by optimization, splitChunks

const postcssPlugins = () => {
  return [ autoprefixer({
    browsers: ['last 2 versions', 'ie >= 8', 'and_chr >= 2.3', 'edge >= 14']
  }) ]
}

module.exports = {
  context: __dirname,

  entry: {
    polyfills: path.resolve('./src/scripts/polyfills/index.js'),
    'app_style_partials': path.resolve('./src/styles/partials.js'),
    'app_style_vendor': path.resolve('./src/styles/vendor.js'),
    'app': path.resolve('./src/scripts/app/index.js')
  },

  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true,
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: false,
          mangle: false,
          sourceMap: true,
          output: {
            comments: true
          }
        },
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunckFilename: '[id].css'
    }),
    tracker
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/styles/'),
        use: [
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve('./src/styles/'),
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postcssPlugins,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }

}
