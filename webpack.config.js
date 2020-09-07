const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = (env, options) => {
  return {
    entry: './src/App.tsx',
    devtool: 'inline-source-map',
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader',
          ],
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      (options.mode === 'development')? new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath('public/index.html'),
      }) : ()=>{},
      new CleanWebpackPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      publicPath: '/'
    },
  }
};
