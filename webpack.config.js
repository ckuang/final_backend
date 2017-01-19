//config to use react-hot-loader
const webpack = require('webpack');
module.exports = {
    entry: "./views/app.js",
    output: {
        path: "./views/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ["", ".js", ".jsx" ]
    }
};
