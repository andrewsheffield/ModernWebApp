const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }, 'extract-loader', 'html-loader']
      }
    ]
  }
};