const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './public/src/app'
        ]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist/'),
        chunkFilename: 'chunk.[name].js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'public'),
            exclude: /node_modules/,
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'url?limit=8192&name=./asset/img/[name].[ext]'
        },
        {
            test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
            loader: 'file',
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ]
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['sass-loader'],
        }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html'
        })
    ]
};
