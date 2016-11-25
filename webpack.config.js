var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './src/app/main.js'),
    path.join(__dirname, './src/app/stylesheets/main.scss')
  ],
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './src/app/',
    inline: true,
    port: 3333,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }
    ]
  }
};
