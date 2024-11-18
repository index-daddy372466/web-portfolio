const express = require("express");
const app = express();
const port = 9945;
const path = require("path");
const crypto = require("crypto");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const authQueries = []
ejs.delimiter = "?"; // Means instead use __webpack_nonce__ = '<?=nonce?>'
const cookieSession = require('cookie-session')
const users = []

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname,'../client/dist'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(cookieParser());
// create nonce and store
app.use((req, res, next) => {
  const newBytes = returnNewBytes()
  res.locals.nonce = crypto.createHash("sha256", newBytes).update(newBytes).digest("hex");
  next();
});
app.use(cookieSession({
  name:'sesh',
  keys:[process.env.SEC,process.env.CES],
  maxAge:(1800000), // 30 minutes
  // maxAge:10000, // 10 seconds
  httpOnly:false,
  signed:false,
}))
// create session object
app.use((req, res, next) => {
  const newBytes = returnNewBytes();
  const userid = crypto.createHash("sha256", newBytes).update(newBytes).digest("hex")
  if(req.session){
    req.session['id'] = userid;
  }
  next();
});
app.use(function(req, res, next) {
  let keys = Object.keys(req.query);
  let authorizedQueries = keys.filter(k=>authQueries.includes(k)).length > 0

  if(/(put|delete|patch|post)/i.test(req.method)){
    res.status(403).send('<h1 style="text-align:center;width:100%;">Unauthorized action...</h1><br> <h2 style="text-align:center;width:100%;">Return <a href="/">Home</a></h2>');
  }
  else {
    // if get request
    if(keys.length > 0){
      if(!authorizedQueries){
      res.status(403).send('<h1 style="text-align:center;width:100%;">Unauthorized action...</h1><br> <h2 style="text-align:center;width:100%;">Return <a href="/">Home</a></h2>');
    }
    }
  }
  next();
})

// routes
app.route("/").get((req, res) => {
  let reqvisits = false;
  res.locals.ver = {verification:'valid page'}
  isNaN(req.session['visit']) ? req.session['visit'] = 0 : req.session['visit']+=1
  console.log(req.session)
  // let currAge = req.maxAge - new Date.now()
  if(req.session['visit'] > 1){
    reqvisits = true
  }
  res.render(("index.ejs"), {
    nonce: res.locals.nonce,
    visit: reqvisits
  });
});

app.route('/about-me').get((req,res)=>{
    res.render(("aboutme.ejs"), {
      nonce: res.locals.nonce,
    })
})

app.listen(port, () => {
  console.log("connection on " + port);
});

app.use(function(req, res, next) {
  res.status(404).send('<h1 style="text-align:center;width:100%;">Nothing to see here...</h1><br> <h2 style="text-align:center;width:100%;">Return <a href="/">Home</a></h2>');
  next();
});


function returnNewBytes(){
  const bytes = crypto.randomBytes(32)
  const salt = crypto.randomBytes(16).toString('hex')
  const hashed = crypto.scryptSync(bytes,salt,64).toString('hex')
  const newBytes = `${salt}:${hashed}`
  return newBytes;
  // const bytes = crypto.randomBytes(32)
  // const salt = crypto.randomBytes(16).toString('hex')
  // const hashed = crypto.scryptSync(bytes,salt,64).toString('hex')
  // const newBytes = `${salt}:${hashed}`

  // res.locals.nonce = crypto
  //   .createHash("sha256", newBytes)
  //   .update(newBytes)
  //   .digest("hex");
  // next();
}