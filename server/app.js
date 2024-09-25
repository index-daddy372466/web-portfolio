const express = require("express");
const app = express();
const port = 9945;
const path = require("path");
const crypto = require("crypto");
const base = crypto.randomBytes(16).toString("base64");
const ascii = [...new Array(127)].map((_, k) => String.fromCharCode(k + 160));
const generateRandomAscii = require("./lib/generation.js");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const readMedia = require('./lib/fetchMedia.js')
const authQueries = ['test','test2']
let pages = [];
ejs.delimiter = "?"; // Means instead use __webpack_nonce__ = '<?=nonce?>'

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(cookieParser());
// store nonce
app.use((req, res, next) => {
  res.locals.nonce = crypto
    .createHash("md5", generateRandomAscii(ascii).join``)
    .update(generateRandomAscii(ascii).join`` + base)
    .digest("base64");
  next();
});
app.use(function(req, res, next) {
  if(/(put|delete|patch|post)/i.test(req.method)){
    res.status(403).send('<h1>Unauthorized action...</h1><br> <h2>Return <a style="text-decir" href="/">Home</a></h2>');
  }
  next();
})

// routes

// nonce
app.route("/").get((req, res) => {
  res.render(path.resolve(__dirname, "../client/dist/index.ejs"), {
    nonce: res.locals.nonce,
  });
});
app.route("/api/media").get((req,res)=>{
  try{
    let media = [...readMedia()]
    res.json({media:media})
  }
  catch(err){
    throw new Error(err)
  }
})

app.listen(port, () => {
  console.log("connection on " + port);
});

app.use(function(req, res, next) {
  res.status(404).send('<h1>Nothing to see here...</h1><br> <h2>Return <a style="text-decir" href="/">Home</a></h2>');
  next();
});
