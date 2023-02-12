const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    static: { directory: path.join(__dirname, "dist") },
    port: process.env.PORT || 3000,
    historyApiFallback: true,
  },
  externals: [{ window: "window" }],
});
