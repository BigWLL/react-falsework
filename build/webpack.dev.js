/**
 * Created by xiaohe on 2018/5/7.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const project = require('../config/project.config.json');
const webpack = require('webpack');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //主要用于压缩、去重
/**
 * autoprefixer  添加前缀，兼容不同浏览器
 * cssnano  css优化处理器/压缩
*/
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../src/'),
        historyApiFallback: true,
        compress: true,
        inline: true,
        host:project.devUrl,
        hot: true,
        port: project.devPort,
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        //如果为生产模式，就进行css分离
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
                        options: {
                            camelCase: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')(), // 添加前缀，兼容不同浏览器
                                require('cssnano')({
                                    zindex: false, 
                                    reduceIdents: false, // reduceIdents 选项，是用于去掉 css 中 “用户自定义字符串标识符” 的 postcss 插件，禁用此功能可以防止 像@keyframes 的属性名被更改，从而避免动画冲突
                                })
                            ]
                        }
                    }, {
                        loader: 'sass-loader'
                    }],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});