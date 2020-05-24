const merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');
const { port, host, getConfigNpmOrYarn } = require('./server.config');
const chalk = require('chalk');

const devConfig = {
    mode: 'development',
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running at\n\n    - Local:${chalk.green(`http://localhost:${port}`)}/\n    - Network:${chalk.green(`http://${host}:${port}/`)}`],
                notes: [`Note that the development build is not optimized.\n    To create a production build, run ${chalk.green(`${getConfigNpmOrYarn()} build`)}`]
            }
        })
    ],
    devServer: {
        contentBase: './dist',
        port: '8080',
        hot: true,
        overlay: {
            error: true
        },
        quiet: true,
    },
    devtool: 'source-map'
}

module.exports = merge(BaseConfig, devConfig);

