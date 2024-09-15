// webpack configuration
const path = require("path");
const HtmlPlug = require("html-webpack-plugin");
const CssPlug = require("mini-css-extract-plugin");
const crypto = require("crypto");
const base = crypto.randomBytes(16).toString("base64");
const ascii = [...new Array(127)].map((_, k) => String.fromCharCode(k + 160));
const generateRandomAscii = require("./lib/generation.js");
// nonce
let nonce = crypto
  .createHash("md5", generateRandomAscii(ascii).join``)
  .update(generateRandomAscii(ascii).join`` + base)
  .digest("base64");
  
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
      filename: "index.html",
      template: "src/muban/tenpureto.html",
      nonce: nonce,
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
  // exit/output
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
