var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./entry.js",
    output: {
        path: "../script/",
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|docs)/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
