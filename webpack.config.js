var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'app/components/'),
      path.join(__dirname, 'app/api/')
    ],
    alias: {
      app: path.join(__dirname, 'app/'),
      applicationStyles$: path.join(__dirname, 'app/styles/app.scss'),
      actions$: path.join(__dirname, 'app/actions/actions.jsx'),
      reducers$: path.join(__dirname, 'app/reducers/reducers.jsx'),
      configureStore$: path.join(__dirname, 'app/store/configureStore.jsx')
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
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
