const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: ['./src/js/index.js', './src/html/index.html'],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    hot: true
  },
  devtool: 'eval-source-map'
}