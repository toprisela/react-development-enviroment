const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

var PUBLIC_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'src');

var ENTRY_FILE_PATH = path.resolve(SRC_DIR, 'js', 'index.js');

const config = {
    entry: ENTRY_FILE_PATH,
    output: {
        path: PUBLIC_DIR,
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'], exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: "./public",
        hot: true
    },
	devtool: 'source-map',
    //plugins: [
        //new webpack.optimize.UglifyJsPlugin({ mangle: false }),
   // ]
}

module.exports = config;
