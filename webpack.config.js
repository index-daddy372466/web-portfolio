// webpack configuration
require('dotenv').config()
const path = require("path");
const HtmlPlug = require("html-webpack-plugin");
const CssPlug = require("mini-css-extract-plugin");


module.exports = {
  // mode
  mode: (!process.env.TYPE || process.env.TYPE!='production') ? 'development' : process.env._TYPE_,
  // entry
  entry: [
    path.resolve(__dirname, "src/londonTower.js"),
    path.resolve(__dirname, "src/goldenGate.js"),
  ],
  devtool: "inline-source-map",
  // module/rules
  module: {
    rules: [
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [CssPlug.loader, "css-loader","postcss-loader"],
      },
      {
        test: /\.(webp|jp(e)?g)$/,
        exclude:/node_modules/,
        loader: 'file-loader',
        options:{
          name:"/media/[name].[ext]"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlPlug({
      filename: "index.ejs",
      template: "src/muban/tenpureto.ejs",
      inject: false,
    }),
    new HtmlPlug({
      filename: "partials/modals/beiseu.ejs",
      template: "src/muban/modaru.ejs",
      inject: false,
    }),
    new HtmlPlug({
      filename: "partials/common/navboton.ejs",
      template: "src/muban/navboton.ejs",
      inject: false,
    }),
    new CssPlug({
      insert: function (linkTag) {
        var reference = document.querySelector("#css-target");
        if (reference) {
          reference.parentNode.insertBefore(linkTag, reference);
        }
      },
      filename: "[name].css",
    }),
  ],
  // devserver not needed
  
  // exit/output
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
