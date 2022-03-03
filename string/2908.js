const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

const [A, B] = input.split(' ')
const Aarr = A.split('')
Aarr.reverse()
const reverseA = Number(Aarr.join(''))

const Barr = B.split('')
Barr.reverse()
const reverseB = Number(Barr.join(''))
console.log(Math.max(reverseA, reverseB))