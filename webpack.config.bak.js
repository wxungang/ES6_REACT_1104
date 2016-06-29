
var path = require('path');
var webpack = require('webpack');
var fs=require('fs');

var entryPath='./myDemos/webPage/jsx';
var entris = fs.readdirSync(entryPath).reduce(function (o, filename) {
        !/\./.test(filename) &&
        (o[filename] = './' + path.join(entryPath, filename, filename + '.jsx'));
        return o;
    }, {}
);
console.log(entris);

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        "app":"./myDemos/test/app.jsx",
        "index":"./myDemos/webPage/index.jsx"
    },
    output: {
        path: __dirname + "/myDemos/build",
        filename: "[name].bundle.js"
    },
    externals: {'react': 'React', 'react-dom': 'ReactDOM'},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel','babel-loader'], include: [
                path.resolve(__dirname, 'myDemos')
            ] ,exclude: /node_modules/},
            { test: /\.(css|less)$/, loader: 'style-loader!css-loader?localIdentName=[hash:base64:8]!less-loader' },
            { test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]' },
            { test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx','.es6']
    }
};
