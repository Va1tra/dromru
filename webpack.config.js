let path = require('path');
let webpack = require('webpack');
let WebpackConfig = require('webpack-config').Config;

module.exports = new WebpackConfig().merge({
    devtool: 'sourcemap',
    context: path.join(__dirname, 'src/js'),
    entry: {
        "AutoComplete": './AutoComplete.js'
    },
    externals: {
        // jquery: 'jQuery'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src/js'),
            'node_modules'
        ],
        alias: {},
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: ('/dist/'),
        filename: '[name].js',
        library: '[name]',
        // libraryTarget: 'umd',
        libraryTarget: 'window'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }}
        // ),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            }
        ]
    }
});