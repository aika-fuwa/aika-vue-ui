const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: resolve('../src/index.ts'),
    output: {
        path: resolve('../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        'less': [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ],
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                    }
                },
                exclude: /node_modules\/(?!(autotrack|dom-utils))|vendor\.dll\.js/
            },
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory=true',
                exclude: /node_modules/,
                
            },
            {
                test: /\.less$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'image/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name]_[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.js', 'ts', 'vue', '.json', '.scss'],
        alias: {
            '@': resolve('../src'),
        },
        modules: [
            'node_modules',
            resolve('../src'),
        ]
    },
};

