const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
const assetsPath = path.join(__dirname, "dist");
module.exports = {
  devtool: "source-map", // 构建方式，eval 构建速度最快，不支持生产环境
  // 程序入口文件，多页面构建
  entry: {
    app: [
      "babel-polyfill",
      "./src/main" // 入口文件
    ]
  },
  // 解析路径
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  // 文件打包结果
  output: {
    path: assetsPath, // 打包好的资源位置
    filename: "[name].[chunkhash].js", // 这里的 name 对应入口文件里的值
    chunkFilename: "[name].[chunkhash].chunk.js", // 这里 name 对应 为出现在入口文件的打包文件，如异步加载的子路由
    publicPath: "/" // 使用url-loader 加载资源的前缀 .比如图片的前缀使用cdn
  },
  plugins: [
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new InlineManifestWebpackPlugin({
      name: "webpackManifest"
    }),
    new CleanPlugin([assetsPath]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new webpack.DefinePlugin({
      "process.env.MODLE": JSON.stringify(process.env.MODLE) 
    }),
    new ExtractTextPlugin({
      filename: "[name].[chunkhash].css",
      disable: false,
      allChunks: true
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./dll/vendor-manifest.json")
    }),
    new CopyWebpackPlugin([
      {
        from: __dirname + "/dll",
        to: assetsPath + "/dll",
        ignore: ["*.json", "*.html"]
      }
    ]),
    // 这里需要手动添加 <%=htmlWebpackPlugin.files.webpackManifest%> 到index.html 模板页面
    new webpack.optimize.CommonsChunkPlugin({
      names: ["commons", "webpackManifest"],
      minChunks: 3
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      output: {
        comments: false // 去掉所有注释
      },
      compress: {
        warnings: false // 去掉所有警告
      }
    }),
    new HtmlWebpackPlugin({
      // 根据模板插入css/js等生成最终HTML
      favicon: "./public/favicon.ico", // favicon路径
      filename: "./index.html", // 生成的html存放路径，相对于 path
      template: "./index.html", // html模板路径
      inject: true, // 允许插件修改哪些内容，包括head与body
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      },
      hash: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/, // 用正则表达式匹配文件格式
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "pxrem-loader",
              options: {
                root: 37.5,
                fixed: 6,
                filter: /^border/,
                keepPx: false,
                commentFilter: "no"
              }
            },
            "less-loader"
          ]
        })
        // 多进程打包
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
