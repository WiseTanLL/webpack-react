/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:44:22
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:53:23
 * @Description: 开发模式配置文件
 */
const path = require('path')
const merge = require('webpack-merge') // webpack合并方法
const common = require('./webpack.common.js')
const webpack = require('webpack')
const baseConfig = require('../src/loader/base.config.js')

let mergeedConfig = merge(common, {
    mode: 'development', // 开发模式
    devtool: 'inline-source-map', // sourceMap用于跟踪源代码中警告和错误
    devServer: {
        contentBase: path.join(__dirname, '../dist'), // 告诉服务器从哪里获取内容
        inline: true, // 需要实现重载的脚本插入到boundle中
        compress: true, // 压缩
        host: baseConfig.devHost, // 服务器host
        port: baseConfig.devPort, // 服务器端口
        hot: true, // 热更新
        historyApiFallback: true // 任意的404直接替换为index.html
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 方便查看修补的依耐
        new webpack.HotModuleReplacementPlugin()
    ]
})

if (!baseConfig.isPc) {
    mergeedConfig = merge(mergeedConfig, {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/, // 匹配sass，scss，css文件
                    exclude: /node_modules/, // 文件筛选避免node_modules
                    use: [ // 处理style由下至上
                        'style-loader', 
                        'css-loader', 
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')('last 100 versions'),
                                    require('postcss-plugin-px2rem')({remUnit: 75, mediaQuery: true, rootValue: 75, propList: ['*', '!border*']})
                                ] // 自动添加前缀
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    })
}else{
    mergeedConfig = merge(mergeedConfig, {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/, // 匹配sass，scss，css文件
                    exclude: /node_modules/, // 文件筛选避免node_modules
                    use: [ // 处理style由下至上
                        'style-loader', 
                        'css-loader', 
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')('last 100 versions')] // 自动添加前缀
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
    })
}

module.exports = mergeedConfig;