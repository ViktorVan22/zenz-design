const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    library: "zenz-design",
    libraryTarget: "umd",
  },
  module: {},
};
