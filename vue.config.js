module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 输出文件目录
    outputDir: 'dist',
    // 静态资源目录
    assetsDir: 'static',
    // eslint-loader 是否保存时检查
    lintOnSave: true,
    // webpack配置：参考：https://cli.vuejs.org/zh/config/#chainwebpack
    // 链式
    chainWebpack: () => {
    },
    // 简单操作
    configureWebpack: (config) => {
        // if (process.env.NODE_ENV === 'production') {
        //     // 为生产环境修改配置...
        //     config.mode = 'production';
        // } else {
        //     // 为开发环境修改配置...
        //     config.mode = 'development';
        // }
        // Object.assign(config, {
        //     // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@': path.resolve(__dirname, './src'),
        //         }
        //     }
        // });
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false, 
    // css 配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 css source maps
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 为每个css引入公共样式
            // sass:{
            //     data:`@import "@/assets/public.scss"`
            // }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1, 
    // webpack-dev-server 相关配置
    devServer: {
        open: true, // 配置自动启动浏览器
        port: 8080,
        https: false,
        hotOnly: false, 
        // 设置代理
        // proxy: {
        //  '/api': {
        //      target: 'http://baidu.com:8080', //真实请求的目标地址
        //      changeOrigin: true,
        //      pathRewrite: {
        //          '^/api': ''
        //      }
        //  }
        // },
        before: app => {
        }
    },
    // 第三方插件配置
    pluginOptions: {}
}