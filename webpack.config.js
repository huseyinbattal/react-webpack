const path = require("path");
const EsLintPlugin=require("eslint-webpack-plugin")

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: "url-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      Helper: path.resolve(__dirname, "app/src/helper/"),
      Components: path.resolve(__dirname, "app/src/components/"),
      Base: path.resolve(__dirname, "app/src/"),
    },
  },
  plugins: [
    new EsLintPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack App 1",
      minify: true,
      template: "./app/index.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    onBeforeSetupMiddleware: (devServer) => {
      console.log("devserver", devServer);
    },
  },
};
