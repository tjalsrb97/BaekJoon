const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let arr = input[1].split(' ')

let max = Math.max(...arr)
let min = Math.min(...arr)
console.log(min, max)