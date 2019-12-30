/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:44:34
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:53:35
 * @Description: 产品模式配置文件
 */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('../src/loader/base.config.js')

let mergeedConfig = merge(common, {
    mode: 'production', // 开发模式
    output: {
        publicPath: '../dist/' // 作为静态资源处理
    },
    plugins: [
        new MiniCssExtractPlugin({ // 压缩
            filename: './style/[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css'
        })
    ]
})

if (!baseConfig.isPc) {
    mergeedConfig = merge(mergeedConfig, {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/, // 匹配sass，scss，css文件
                    exclude: /node_modules/, // 规避node_modules文件夹
                    use: [ // 执行loader从下至上
                        MiniCssExtractPlugin.loader, // 压缩文件
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
                    exclude: /node_modules/, // 规避node_modules文件夹
                    use: [ // 执行loader从下至上
                        MiniCssExtractPlugin.loader, // 压缩文件
                        'css-loader', 
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')('last 100 versions')]
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