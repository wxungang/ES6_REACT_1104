var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './myDemos/test/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'myDemos'),
        filename: 'build/index.js',
        publicPath: '/'
    },
    externals: {'react': 'React', 'react-dom': 'ReactDOM'},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], include: [
                path.resolve(__dirname, 'myDemos')
            ] },
            { test: /\.(css|less)$/, loader: 'style-loader!css-loader?localIdentName=[hash:base64:8]!less-loader' },
            { test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]' },
            { test: /\.json$/, loader: 'file-loader?name=./json/[name].json' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]' }
        ]
    }
};
