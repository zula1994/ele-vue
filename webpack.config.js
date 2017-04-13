const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const RT_PATH = path.resolve(__dirname);

const config = {
    entry: path.resolve(RT_PATH, 'src/app.js'),
    output: {
        path: path.resolve(RT_PATH),
        filename: 'assets/js/[name].min.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
			'src': path.resolve(RT_PATH, 'src')
		}
    },
    module: {
        loaders: [
            {
                test:/\.vue$/,
                loader: 'vue'
            },{
                test: /\.js$/,
                exclude: /^node_modules$/,
                loader: 'babel?presets=es2015'
            }, {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            }, {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=8096&name=[name].[ext]' //base64
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('css/[name].min.css'),
        new HtmlWebpackPlugin({
            filename: path.resolve(RT_PATH, 'index.html')
        })
    ]
}
