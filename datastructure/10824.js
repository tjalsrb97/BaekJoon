const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
// console.log(input)
const [A, B, C, D] = input[0].split(' ')
console.log(Number(A+B) + Number(C+D))