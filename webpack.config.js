const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
//
const isDevelopment = process.env.NODE_ENV === 'development';

let cssModule = [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64]',
        }
    }
}, 'sass-loader', 'postcss-loader'];


let config = {
    devtool: isDevelopment ? 'source-map' : 'hidden-source-map',
    mode: isDevelopment ? 'development' : 'production',
    entry: isDevelopment ? { app: ['webpack-hot-middleware/client', './public/src/app'] } : { app: ['./public/src/app'] },
    output: {
        path: isDevelopment ? path.resolve(__dirname, 'dist/') : path.resolve(__dirname, 'public', 'dist/'),
        filename: isDevelopment ? 'bundle.js' : 'bundle.min.js',
        publicPath: '/dist/',
        chunkFilename: isDevelopment ? 'chunk.[name].js' : 'chunk.[chunkhash].min.js'
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
            test: /\.(sa|sc|c)ss$/i,
            use: cssModule
        }
        ],
    },
};

let dev = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html'
        })
    ]
};

let prod = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                   compress: {
                       drop_console: true,
                   },
        		}
            })
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/tmpl.html',
        }),
        new MiniCssExtractPlugin(),
        // new PreloadWebpackPlugin()
    ]
};

let obj = isDevelopment ? dev : prod;
module.exports = { ...config, ...obj };
