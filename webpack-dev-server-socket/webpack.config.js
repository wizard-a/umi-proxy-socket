const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        // 打包输出目录
        path: resolve(__dirname, 'dist'),
        // 入口 js 的打包输出文件名
        filename: 'index.js'
    },
    devServer: {
        port: '8080',
        proxy: { // proxy URLs to backend development server
          '/socket.io': {
            ws: true,
            target: 'http://www.jiechud.site:3000'
          }
        }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          },
    
          {
            // 匹配 html 文件
            test: /\.html$/,
            use: 'html-loader'
          },
    
          {
            // 匹配 css 文件
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
    
          {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
              }
            ]
          }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          chunksSortMode: 'none'
        })
    ]
}