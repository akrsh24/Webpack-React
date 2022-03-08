const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // indicate the entry file from where the application starts and where dependency graph will start from
  entry: "./src/index.js",

  // indicate the output file path and file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname + "/public"),
    filename: "bundle.js",
  },

  // Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  // Setup plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
