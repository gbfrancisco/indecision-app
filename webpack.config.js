const path = require('path');

const publicDirectoryPath = path.join(__dirname, '/public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: publicDirectoryPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    mode: 'none',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicDirectoryPath
    }
}