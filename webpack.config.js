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
    path: path.resolve(__dirname, "./dist"),
    library: "zenz-design",
    libraryTarget: "umd",
  },
  devServer: {
    compress: true,
    hot: true,
    host: "127.0.0.1",
    port: 7001,
  },
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
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      "@button": path.resolve(__dirname, "src/button"),
      "@icon": path.resolve(__dirname, "src/icon"),
    },
  },
};
