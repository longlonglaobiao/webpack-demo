const path = require("path");
module.exports = {
  mode: "development",
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
              importLoaders: 1
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
      }
    ]
  }
};
