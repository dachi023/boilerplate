const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const rucksack = require('rucksack-css')
const webpack = require('webpack')

const scripts = {
  context: path.join(__dirname, './client'),
  entry: {
    html: './index.html',
    jsx: './index.js',
    vendor: ['react', 'react-dom', 'flux']
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
}

const styles = {
  context: path.join(__dirname, './client'),
  entry: {
    style: './styles/main.js'
  },
  output: {
    path: path.join(__dirname, './static/styles'),
    filename: 'main.css',
  },
  module: {
    loaders: [
      {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      }
    ]
  },
  postcss: () => {
    return [autoprefixer({ browsers: ['last 2 versions'] }), rucksack(), cssnano({ autoprefixer: false })]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = [scripts, styles]
