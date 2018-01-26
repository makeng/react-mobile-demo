const webpack = require("webpack");
const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

const dllPath = path.join(__dirname, "dll");
module.exports = {
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-router-dom",
      "moment",
    ]
  },
  devtool: "source-map",
  output: {
    filename: "[name].[hash].dll.js",
    path: path.resolve(__dirname, "./dll"),
    library: "[name]_[hash]",
    publicPath: "/dll" // 使用url-loader 加载资源的前缀
  },
  plugins: [
    new WebpackMd5Hash(),
    new CleanPlugin([dllPath]),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      // 根据模板插入css/js等生成最终HTML
      filename: "../index.html", // 生成的html存放路径，相对于 path
      template: "./public/index.html", // html模板路径
      inject: true // 允许插件修改哪些内容，包括head与body
    }),
    new InlineManifestWebpackPlugin({
      name: "webpackManifest"
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "./dll/[name]-manifest.json"),
      name: "[name]_[hash]"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      output: {
        comments: false // 去掉所有注释
      },
      compress: {
        warnings: false // 去掉所有警告
      }
    })
  ]
};
