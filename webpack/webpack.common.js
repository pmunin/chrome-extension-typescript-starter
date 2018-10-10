/**
 * @typedef {import('webpack').Configuration} WebPackConfiguration
 */
//const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const path = require('path');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

const webpack = require("webpack");

/** 
 * @typedef {import('webpack').Configuration} WebPackConfiguration
 **/

/** @type {WebPackConfiguration} */
module.exports = {
    entry: {
        popup: path.join(__dirname, '../src/popup.ts'),
        options: path.join(__dirname, '../src/options.ts'),
        background: path.join(__dirname, '../src/background.ts'),
        content_script: path.join(__dirname, '../src/content_script.ts')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [{
                test: /\.(tsx?)|(jsx?)$/,
                use: {
                    /**
                     * See here:
                     * https://stackoverflow.com/a/52323181/508797
                     * https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/ 
                     */
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-react"],
                            ["@babel/typescript"]
                        ],
                        "plugins": [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread"
                        ]
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CleanWebPackPlugin("../dist",{
            allowExternal:true
        }),
        new CopyWebPackPlugin([{from:"src/assets/*", to:"./", flatten:true}],{
            debug:"debug"
        })

    ]
};
//console.log("RESOLVE:::::",path.resolve(__dirname, '../dist'));