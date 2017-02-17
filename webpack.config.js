var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'app/components/')
    ],
    alias: {
      applicationStyles$: path.join(__dirname, 'app/styles/app.scss'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: "sass-loader",
        test: /\.scss$/,
        options: {
          includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss/')]
        }
      }

    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
