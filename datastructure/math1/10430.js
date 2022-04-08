const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const [A, B, C] = input[0].split(' ').map(Number)
console.log((A+B)%C)
console.log(((A%C) + (B%C))%C )
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)