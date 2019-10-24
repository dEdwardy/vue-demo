const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  //Vue-ECharts 默认在 webpack 环境下会引入未编译的源码版本，
  //如果你正在使用官方的 Vue CLI3+来创建项目，可能会遇到默认配置把 node_modules 中的文件排除在 Babel 转译范围以外的问题
  //添加transpileDependencies: [
  //   'vue-echarts',
  //   'resize-detector'
  // ]
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  chainWebpack:(config) => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('view',resolve('src/view'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
