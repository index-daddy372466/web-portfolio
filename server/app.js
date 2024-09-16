const express = require('express')
const app = express();
const port = 9945
const path = require('path')
const crypto = require("crypto");
const base = crypto.randomBytes(16).toString("base64");
const ascii = [...new Array(127)].map((_, k) => String.fromCharCode(k + 160));
const generateRandomAscii = require("./lib/generation.js");
const ejs = require('ejs');
ejs.delimiter = '?'; // Means instead use __webpack_nonce__ = '<?=nonce?>'

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'../client/dist')))
app.use((req,res,next)=>{
    res.locals.nonce = crypto
    .createHash("md5", generateRandomAscii(ascii).join``)
    .update(generateRandomAscii(ascii).join`` + base)
    .digest("base64");
    next();
})

// routes

// nonce
app.route('/').get((req,res)=>{
    console.log(res.locals.nonce)
    res.render(path.resolve(__dirname,'../client/dist/index.ejs'),{ nonce: res.locals.nonce })
})


app.listen(port,()=>{
    console.log('connection on ' + port)
})