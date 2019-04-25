var path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
    },
    { test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  resolve: {
      modules: [ path.join(__dirname, "src"),   "node_modules"]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8080
  }
};
