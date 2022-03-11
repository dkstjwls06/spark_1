const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');


module.exports = {
    entry: { // 파일 시작점 지정
        index: './src/index.ts',
    },
    devtool: 'inline-source-map',
    mode:'development',
    module: {//convert ts to js
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader', // -> 모듈
                exclude: /node_modules/,
                //js로 일단 바꾼뒤 동작!
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[contenthash].[ext]'
                }
            }
            // {
            //     test: /\.(scss|css)$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 publicPath: ''
            //             }
            //         },
            //         "css-loader", 
            //         "sass-loader"
            //     ]
            // }
        ],
    },
    // optimization: {//최적화
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    resolve: { // 확장자 확인
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: { // 이곳에 맞추어 결과물 생성
        filename: '[name].js', // 확장자
        path: path.resolve(__dirname, 'dist'), // 경로
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename: './index.html',
            chunks:['index']
        }),
    ],
    devServer:{
        contentBase:`${__dirname}/dist`,
        inline:true,
        
        hot:true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4000',
                changeOrigin: true,
                secure: false
            },
            '/socket.io' : {
                target: 'http://127.0.0.1:4000',
                ws: true,
                changeOrigin: true,
                secure: false
            }
        },
        host: '127.0.0.1',
        port: 4500
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.webpack_cache')
    },
};