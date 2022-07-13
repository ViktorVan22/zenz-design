const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    library: "zenz-design",
    libraryTarget: "umd",
  },
  // 添加 eslint-webpack-plugin 插件实例
  plugins: [
    new ESLintPlugin({ extensions: [".ts", ".js", ".tsx", ".jsx"] }),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      title: "Zenz Design",
      template: "index.html",
    }),
  ],
  module: {
    // module属性用于声明模块处理规则
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          //   process.env.NODE_ENV === "development"
          //     ? "style-loader"
          //     : MiniCssExtractPlugin,
          //   ,
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
