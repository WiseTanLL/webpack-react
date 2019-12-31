/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:09:03
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-31 10:34:42
 * @Description: 公共webpack配置文件
 */

const path = require('path') // 引入路径配置
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入htmlwebpackplugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入cleanwebpackplugin
const webpack = require('webpack')

module.exports = {
    cache: true,
    entry: {
        app: [
            'babel-polyfill', 
            'react-hot-loader/patch', // 热更新部分更新
            './src/index.js'] // 入口文件，可添加多个入口文件
    },
    output: {
        path: path.join(__dirname, '../dist'), // 打包出口文件路径
        filename: 'js/[name].[hash:8].js' // 打包出口文件名称 [name]：复制入口文件名称，[hash:8]：随机八位字符
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module:{
        rules: [
            {
                test: /\.(jsx|js)$/, // 匹配jsx文件以及js文件
                exclude: /node_modules/, // 排除掉node_modules，优化打包速度
                include: /src/, // 只转化src目录下的js和jsx
                loader: 'babel-loader',
                query: {
                    "cacheDirectory": true // 缓存转义，加快打包速度
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // 图片处理
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 8,
                            name: 'img/[name].[hash].[ext]',
                            publicpath: './'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|woff|ttf)$/, // 处理文字
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 8,
                            name: "./font/[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.scss'], // 省略前缀
        alias: {
            '@': path.join(__dirname, '../src'),
            'com': path.join(__dirname, '../src/component'),
            'con': path.join(__dirname, '../src/container'),
            'img': path.join(__dirname, '../src/public/img'),
            'style': path.join(__dirname, '../src/public/style')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello webpack', // 标题
            favicon: path.join(__dirname, '../src/favicon.ico'), // 标签图片
            template: path.join(__dirname, '../src/index.html') // 模板页面
        }),
        new CleanWebpackPlugin(), // 添加dist清除plugin
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Component: ['react', 'Component'],
            Axios: 'axios',
            d3: 'd3'
        })
    ]
}