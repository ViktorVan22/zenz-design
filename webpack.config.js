const path = require("path");

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
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
