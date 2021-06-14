const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src", "resources"), to: "resources" },
      ],
    }),
  ],
};
