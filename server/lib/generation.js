module.exports = generateRandomAscii = (table) => {
  let a = [],
    len = 5,
    givetake = [0, 1, 2, 3, -1, -2, -3],
    additional = givetake[Math.floor(Math.random() * givetake.length)],
    target = len + additional,
    genRandomChar = () => table[Math.floor(Math.random() * table.length)],
    track;
  while (target > 0) {
    track = genRandomChar()
    let aMatches = a.includes(track)
    if(aMatches == true){
        track = genRandomChar()
    }
    a.push(track)
    target--
  }
  return a;
};