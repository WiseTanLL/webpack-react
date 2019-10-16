/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:44:34
 * @LastEditors: tanjun
 * @LastEditTime: 2019-07-29 17:19:19
 * @Description: 产品模式配置文件
 */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production', // 开发模式
    output: {
        publicPath: '../dist/' // 作为静态资源处理
    },
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
    plugins: [
        new MiniCssExtractPlugin({ // 压缩
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css'
        })
    ]
})