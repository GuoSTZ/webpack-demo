// webpack.prod.js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // webpack5自带，无需安装
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //优化、压缩 CSS
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = merge(common, {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:8].js",
    clean: true, // 编译前清除目录
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, "src/common/styles"), /node_modules/],
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    // js压缩
    minimizer: [
      new TerserPlugin({
        parallel: 4, // 使用多进程并发运行压缩以提高构建速度。
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
});

