const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true,
                                url: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }]
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "url-loader?name=[path][name].[hash:6].[ext]&limit=1"
                }
            },
            {
                test: /\.(png|jpg|svg|gif|ico)$/,
                use: {
                    loader: "url-loader?name=[path][name].[hash:6].[ext]&limit=4096"
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './style.bundle.css',
            allChunks: true,
        })
    ]/*,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }*/
};
