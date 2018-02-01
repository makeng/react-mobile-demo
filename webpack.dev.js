const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
module.exports = {
  context: path.join(__dirname, "/"),

  devtool: "eval", // 构建方式，eval 构建速度最快，不支持生产环境
  // 程序入口文件，多页面构建
  entry: {
    app: [
      // 开启 React 代码的模块热替换(HMR)
      "babel-polyfill",
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:3000", //dev 代码热替换
      "webpack/hot/only-dev-server", //dev 代码热替换
      "./src/main" // 入口文件
    ]
  },

  // 解析路径
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  // 文件打包结果
  output: {
    path: path.join(__dirname, "/"), // 打包好的资源位置
    filename: "[name].js", // 这里的 name 对应入口文件里的值
    chunkFilename: "[name].chunk.js", // 这里 name 对应 为出现在入口文件的打包文件，如异步加载的子路由
    publicPath: "/" // 使用url-loader 加载资源的前缀 .比如图片的前缀使用cdn
  },
  devServer: {
    hot: true,
    // 开启服务器的模块热替换(HMR)
    port: 3000,
    contentBase: path.join(__dirname, "/"),
    // 输出文件的路径
    historyApiFallback: true,
    publicPath: "/"
    // 和上文 output 的“publicPath”值保持一致
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换(HMR)

    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"'
    }),
    new OpenBrowserPlugin({ url: "http://localhost:3000" }),
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "[name].chunk.js"
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./dll/vendor-manifest.json")
    }),
    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      favicon: "./public/favicon.ico", //favicon路径
      filename: "./index.html", //生成的html存放路径，相对于 path
      template: "./index.html", //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // 用正则表达式匹配文件格式
        use: ["react-hot-loader/webpack", "babel-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "pxrem-loader",
            options: {
              root: 37.5,
              fixed: 6,
              filter: /^border$/,
              keepPx: false,
              commentFilter: "no"
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg)$/,
        use: "url-loader?limit=10000"
      }
    ]
  }
};
