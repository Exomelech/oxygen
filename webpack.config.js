const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    hot: true
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'sass-loader',
            options: { 
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              }
            }
          }
        ]
      }, {
        test: /\.ttf$/,
        loader: "file-loader",
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    }),
  ]
};