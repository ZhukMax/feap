const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "devSrc/index.html",
            filename: "./index.html"
        })
    ]
};
