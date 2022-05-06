const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "/build"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      assert: require.resolve("assert"),
      buffer: require.resolve("buffer"),
      console: require.resolve("console-browserify"),
      constants: require.resolve("constants-browserify"),
      crypto: require.resolve("crypto-browserify"),
      domain: require.resolve("domain-browser"),
      events: require.resolve("events"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      punycode: require.resolve("punycode"),
      process: require.resolve("process/browser"),
      querystring: require.resolve("querystring-es3"),
      stream: require.resolve("stream-browserify"),
      string_decoder: require.resolve("string_decoder"),
      sys: require.resolve("util"),
      timers: require.resolve("timers-browserify"),
      tty: require.resolve("tty-browserify"),
      url: require.resolve("url"),
      util: require.resolve("util"),
      vm: require.resolve("vm-browserify"),
      zlib: require.resolve("browserify-zlib"),
      fs: false,
      tls: false,
      net: false,
      dns: false,
      child_process: false,
    },
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3000,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpe?g|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HandyHome",
      filename: "index.html",
      template: "src/index.html",
    }),
    new NodePolyfillPlugin(),
  ],
};
