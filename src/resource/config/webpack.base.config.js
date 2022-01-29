const path = require('path');
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry : {
    'popup/popup' : './src/popup/' 
  } ,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        // https://stackoverflow.com/questions/50805384/module-not-found-error-cant-resolve-vue-path-not-correct
        vue: 'vue/dist/vue.esm-bundler.js',
        // https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
        process: 'process/browser',
        //'@': path.resolve(__dirname, 'src'),
    },
  },
  output : {
    path : path.resolve(__dirname, '../../bundle') ,
    filename : '[name].js'
  },
  module : {
    rules : [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      
      {
        test : /\.js$/ ,
        exclude : [ /node_modules(?!(\/|\\?\\)(translation\.js|selection-widget|connect\.io|chrome-env)\1)/ ] ,
        loader : 'babel-loader'
      } ,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test : /\.(scss)$/ ,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins : [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/resource/image", to: "resource/image" },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      filename: 'popup/popup.html',
      template: 'src/popup/index.html'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
};

