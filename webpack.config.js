'use strict';

const NODE_ENV         = process.env.NODE_ENV || 'development';
var webpack            = require('webpack');
// var ExtractTextPlugin  = require('extract-text-webpack-plugin');
// var cssName            = NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';

module.exports = {
    context: __dirname + '/src',
    entry:   {
        index: "./index",
        auth: "./auth"
    },

    output: {
        path:       __dirname + "/public/assets/feap/js",
        publicPath: "/assets/js/",
        filename:   "[name].js",
        library:    "[name]"
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })
        // new ExtractTextPlugin(cssName)
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
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            // },
            {
                test:    /\.js$/,
                exclude: [/node_modules/, /public/],
                loader:  'babel',
                query: {
                    presets: [
                        "es2015",
                        "react",
                        "stage-0"
                    ],
                    plugins: [
                        "transform-decorators-legacy"
                    ]
                }
            // },
            // { test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/] },
            // {
            //     test: /\.json$/,
            //     loader: 'json'
            // },
            // {
            //     test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            //     loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    devtool: NODE_ENV == 'development' ? 'cheap-source-map' : null

    // devServer: {
    //     headers: { 'Access-Control-Allow-Origin': '*' }
    // }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}
