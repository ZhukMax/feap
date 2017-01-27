'use strict';

const NODE_ENV           = 'development';
const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
var fileName             = 'url?name=[path][name].[ext]?[hash]';

module.exports = {
    context: __dirname + '/src',
    entry:   {
        index: "./index",
        auth:  "./auth"
    },

    output: {
        path:       __dirname + "/public/assets/feap/js",
        publicPath: "/assets/feap/js/",
        filename:   "[name].js",
        library:    "[name]"
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:   "feap-common",
            chunks: ["index", "auth"]
        }),
        new ExtractTextPlugin('style.css', {allChunks: true, disable: true})
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates:    ['*-loader', '*'],
        extensions:         ['', '.js']
    },

    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: [/node_modules/, /public/],
                loader:  'babel'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test:   /\.(png|jpg|svg|gif)$/,
                loader: fileName + '&limit=4096'
            },
            {
                test:   /\.(ttf|eot|woff|woff2)$/,
                loader: fileName + '&limit=1'
            }
        ]
    },

    devtool: 'cheap-source-map',

    devServer: {
        host:        '193.70.90.72',
        contentBase: __dirname + '/public'
    }
};
