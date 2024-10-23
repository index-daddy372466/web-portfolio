const express = require("express");
const app = express();
const port = 9945;
const path = require("path");
const crypto = require("crypto");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const authQueries = ['test','test2']
let pages = [];
ejs.delimiter = "?"; // Means instead use __webpack_nonce__ = '<?=nonce?>'

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname,'../client/dist'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(cookieParser());
// store nonce
app.use((req, res, next) => {
  const bytes = crypto.randomBytes(32)
  const salt = crypto.randomBytes(16).toString('hex')
  console.log('bytes')
  // console.log(bytes)
  // console.log(bytes.toString('hex'))
  const hashed = crypto.scryptSync(bytes,salt,64).toString('hex')
  const newBytes = `${salt}:${hashed}`
  console.log(hashed)
  console.log(newBytes)

  res.locals.nonce = crypto
    .createHash("sha256", newBytes)
    .update(newBytes)
    .digest("hex");
    console.log("")
    console.log('local nonce')
    console.log(res.locals.nonce)
  next();
});
app.use(function(req, res, next) {
  let keys = Object.keys(req.query);
  let authorizedQueries = keys.filter(k=>authQueries.includes(k)).length > 0

  if(/(put|delete|patch|post)/i.test(req.method)){
    res.status(403).send('<h1>Unauthorized action...</h1><br> <h2>Return <a style="text-decir" href="/">Home</a></h2>');
  }
  else {
    if(keys.length > 0){
      if(!authorizedQueries){
      res.status(403).send('<h1>Unauthorized action...</h1><br> <h2>Return <a style="text-decir" href="/">Home</a></h2>');
    }
    }
  }
  next();
})

// routes

// nonce
app.route("/").get((req, res) => {
  res.render(("index.ejs"), {
    nonce: res.locals.nonce,
  });
});

app.listen(port, () => {
  console.log("connection on " + port);
});

app.use(function(req, res, next) {
  res.status(404).send('<h1>Nothing to see here...</h1><br> <h2>Return <a style="text-decir" href="/">Home</a></h2>');
  next();
});
