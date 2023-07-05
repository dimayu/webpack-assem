const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  target,
  mode,
  devtool,
  
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  
  entry: {
    main: path.resolve(__dirname, '/js/index.js'),
  },
  
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]',
  },
  
  module: {
    rules: [
      {
        test: /\.(html|njk)$/i,
        use: [
            'html-loader',
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                require('posthtml-include')({
                  root: path.resolve(__dirname, 'src')
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif)$/i,
        exclude: /node_modules/,
        use: devMode
          ? []
          : [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '/index.html'),
      filename: "index.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '/home.html'),
      filename: "home.html",
    }),
  
    new StylelintPlugin(),
  
    new FaviconsWebpackPlugin({
      logo: './favicon/icon.png',
      cache: true,
      publicPath: 'favicon',
      outputPath: 'favicon',
      prefix: '',
      inject: true,
    }),
    
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  
    new ImageminWebpWebpackPlugin(),
    
    new CleanWebpackPlugin(),
  ],
};
