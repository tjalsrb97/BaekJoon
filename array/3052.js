const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n').map(Number)

let arr = []
for(let i=0;i<10;i++){
    arr.push(input[i] % 42)
}

const set = new Set(arr)
const answer = [...set]
console.log(answer.length)