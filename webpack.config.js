// basic vars

const path = require('path');
const webpack = require('webpack');

// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let isProduction = (process.env.NODE_ENV === 'production');

// module settings
module.exports = {
  context: path.resolve(__dirname, 'source'),

  entry: {
    app: [
      './scripts/app.js',
      './styles/style.scss'
    ]
  },

  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '../'
  },

  devServer: {
    contentBase: './app/'
  },

  devtool: (isProduction) ? '' : 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin(
        'css/[name].css'
    ),
    new CleanWebpackPlugin(['build'])
  ]
};

//production

if (isProduction) {
  module.exports.plugins.push(
      new UglifyJSPlugin({
        sourceMap: true
      })
  );

  module.exports.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
  );
}
