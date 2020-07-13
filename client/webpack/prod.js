const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const { postcssPlugins } = require('./common')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('./build/bundles/'),
    filename: '[name].[hash].bundle.js'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          sourceMap: false,
          output: {
            comments: /@license/i
          }
        },
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: 'LICENSES.js'
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunckFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve('./src/styles/'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postcssPlugins,
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
                sourceMap: false
              }
            }
          }
        ]
      }
    ]
  }

}
