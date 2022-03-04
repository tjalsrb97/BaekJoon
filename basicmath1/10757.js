const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

const A = BigInt(input[0])
const B = BigInt(input[1])

const answer = (A+B).toString()
console.log(answer)