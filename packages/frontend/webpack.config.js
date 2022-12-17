const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  node: {
    global: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dist"] }),
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}
