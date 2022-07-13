module.exports = {
  presets: [
    "@babel/preset-env", // 根据配置的目标浏览器或者运行环境，选择对应的语法包，从而进行代码转换
    "@babel/preset-react", // react语法包，可以使用React ES6 Class Component的写法，支持TSX、JSX语法格式
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
