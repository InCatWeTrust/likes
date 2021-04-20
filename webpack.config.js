const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },

    module: {
    
        rules: [

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
            
        ]
    
    }

}