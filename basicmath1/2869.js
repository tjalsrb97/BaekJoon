const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let A = Number(input[0])
let B = Number(input[1])
let V = Number(input[2])

console.log(Math.ceil((V-B)/(A-B)))