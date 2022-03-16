const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')


input.shift()
input.sort((a, b) => a - b)
console.log(input.join('\n'))