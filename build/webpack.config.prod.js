const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const prodConfig = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        
    ],
    optimization: {
        splitChunks: {
          chunks: 'initial'
        }
      }
}

module.exports = merge(baseConfig, prodConfig);


