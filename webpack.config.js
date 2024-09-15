// webpack configuration
const path = require("path");
const HtmlPlug = require("html-webpack-plugin");
const CssPlug = require("mini-css-extract-plugin");
const crypto = require('crypto');
const nonse = crypto.randomBytes(16).toString('base64');
const ascii = [...new Array(127)].map((_,k)=> (String.fromCharCode(k + 160)))
console.log(ascii)
console.log(nonse)

// module.exports = {
//   // mode
//   mode: "development",
//  // entry
//   entry: [
//     path.resolve(__dirname, "src/londonTower.js"),
//     path.resolve(__dirname, "src/goldenGate.js"),
//   ],
//   devtool:'inline-source-map',
//   // module/rules
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
//         exclude: /node_modules/,
//         use: [CssPlug(), "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   // plugins
//   plugins: [
//     new HtmlPlug({
//       filename: "index.html",
//       template: "src/muban/tenpureto.html",
//       inject: "body",
//       nonce:
//     }),
//   ],
// exit/output
    // output: {
    //     path: path.resolve(__dirname, "client/dist"),
    //     filename: "[name].bundle.js",
    //     clean: true,
    // },
// };
