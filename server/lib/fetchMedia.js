const fs = require('fs')
const path = require('path')
// server provides direction for chosen media
module.exports = readMedia = () => {
    let media = fs.readdirSync(path.resolve(__dirname,'../../client/dist/media'))
    // console.log(media) // array of media
    return media// return media
}