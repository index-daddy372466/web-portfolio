// webpack configuration
const path = require("path");
const HtmlPlug = require("html-webpack-plugin");
const CssPlug = require("mini-css-extract-plugin");


module.exports = {
  // mode
  mode: "development",
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
        use: [CssPlug.loader, "css-loader"],
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
