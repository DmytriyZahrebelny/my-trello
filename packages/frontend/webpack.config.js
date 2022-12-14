const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

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
    new ESLintPlugin({ extensions: ["ts", "tsx"], emitWarning: false }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
  ],
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core"),
      "@views": path.resolve(__dirname, "src/views")
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}
