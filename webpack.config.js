var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
var config = {
  module: {}
};
module.sorceEnable = false;

returnAll = watchFile => {
  var allPages = Object.assign({}, config, {
    entry: ["@babel/polyfill","./javascript/app.js"],
    watch: watchFile,
    output: {
      path: __dirname,
      filename: "theme/assets/build.js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: __dirname
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "theme/assets/build.css"
      })
    ]
  });
  var reactApp = Object.assign({}, config, {
    context: __dirname,
    entry: ["@babel/polyfill", "./src/index.js"],
    watch: watchFile,
    output: {
      path: __dirname,
      filename: "theme/assets/simply-react.js"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env",'@babel/preset-react'],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: 'file-loader'
       },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: __dirname
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
      ]
    }
  });
  return [
    allPages,
    reactApp,
  ];
}
// Return Array of Configurations
module.exports = (env, argv) => {
  let watchFile = false;
  if (argv.mode === "development") {
    watchFile = true;
  }
  return returnAll(watchFile);

};
