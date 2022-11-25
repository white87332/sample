const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
    mode: 'production',
    entry:
    {
        app: [
            './public/src/app'
        ]
    },
    output:
    {
        path: path.resolve(__dirname, 'public', 'dist/'),
        filename: 'bundle.min.js',
        publicPath: '/dist/',
        chunkFilename: 'chunk.[chunkhash].min.js'
    },
    module:
    {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'public'),
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url?limit=8192&name=./asset/img/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['sass-loader'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html',
            hash: true,
            minify: true
        }),
        new PreloadWebpackPlugin()
    ]
};
