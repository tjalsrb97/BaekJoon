const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let x = +input[0]
let y = +input[1]
let w = +input[2]
let h = +input[3]

let answer = []
answer.push(x, y, h-y, w-x)
console.log(Math.min(...answer))