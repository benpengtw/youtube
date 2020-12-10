const compressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
module.exports = {
  productionSourceMap: false,

  lintOnSave: true,

  // css相关配置
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [require("autoprefixer")],
      },
    },
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/style/common.less")],
    },
  },
  configureWebpack: (config) => {
    // 生产环境去除console.log debugger
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        "console.log",
      ];
      return {
        plugins: [
          new webpack.ContextReplacementPlugin(/moment[/\\]locale$/)]
      }
    }
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件以減少帶寬消耗
    config.plugins.delete("prefetch");
    if (process.env.NODE_ENV == "production") {
      config.plugin("compressionPlugin").use(
        new compressionPlugin({
          test: /\.js$|\.html$|\.css$|\.ttf$|\.woff$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
        }),
      );
    }
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) =>
        Object.assign(options, {
          limit: 7000, //bytes
        }),
      )
      .end();
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: "all",
    });
  },
  // vuex数据持久化
  transpileDependencies: ['vuex-persist']
};
