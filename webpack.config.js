const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "clean-module-eval-source-map", // 这个用于查找代码出错的地方（在源文件中找，而不是在生成的文件中）
  devServer: {
    // 开启服务器
    contentBase: "dist", // 服务器的根地址
    hot: true, // 开启热更替
    hotOnly: true, // 表示当热更替失效时，也不要即时刷新页面
    port: 8000
  },
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 // 表示，在应用改 loader 之前，先要应用前面一个模块（避免 .scss 嵌套引用的问题）
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 20480, // 图片大小超过 20k 那么将图片放入 dist 目录，否则以 base64 编码形式写入生成的 js 文件中
            outputPath: "imgs", // 设置图片的存放目录，当然超过 20k 的文件才存放
            name: "[name]-[hash].[ext]" // 设置图片的名称
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/, // 排除该文件夹的转换，因为这些模块大多已经经过了转换
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage", // 在使用到的模块才转换，未使用的高版本语法无需转换
                  targets: {
                    // 在相应的低版本浏览器中才转换，高版本浏览器对高版本语法已经很好的支持，无序转换
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1"
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 在输出目录中自动生成一个 html 文件
      template: "src/index.html" //使用的模板
    }),
    new CleanWebpackPlugin(), // 清除原来生成的内容
    new webpack.HotModuleReplacementPlugin() // 开启热更替
  ]
};
