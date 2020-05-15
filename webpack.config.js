const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: ['./bin/client/index.js']
  },
  output: {
    path: path.resolve(__dirname,'dist','js'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      { test: /\.(png|jpg|gif)$/i, use: [ { loader: 'url-loader', options: { limit: 8192 } } ] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      chunks: ['main'],
      template: './bin/templates/index.html'
    })
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'bin/client')
    }
  },
  watch: false
}
