const path = require('path');
const webpack = require('webpack');
const babelLoader = require('./babelLoader');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = {
    mode: "development",
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: "app.bundle.js",
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true
    },
    plugins: [
        new CleanWebpackPlugin(['app/dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = function () {
    return merge(baseConfig, babelLoader);
};
