const path = require("path");

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
    extensions:[".js",".jsx",".json"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
    hot:true,
  },
};

