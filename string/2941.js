const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);