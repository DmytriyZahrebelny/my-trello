const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    static: { directory: path.join(__dirname, "build") },
    port: process.env.PORT || 3000,
    historyApiFallback: true,
  },
  externals: [{ window: "window" }],
});
