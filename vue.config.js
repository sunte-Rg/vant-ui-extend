const env = process.env.NODE_ENV || 'production';
module.exports = {
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  // outputDir = process.env.VUE_APP_CURRENTMODE,
  pluginOptions: {
    // 第三方插件配置
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: [".van"],// 要忽略的选择器并保留为px。
            propList: ["*"], //可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
  // 打包时不生成.map文件 避免看到源码 ，false将提高构建速度
  productionSourceMap: false
};
