const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let answer = input[0].split('').map(Number).sort((a, b) => b-a).join('')
console.log(Number(answer))

