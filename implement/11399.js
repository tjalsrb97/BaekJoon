const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let minutes = input[0].split(' ').map(Number)

minutes.sort((a, b) => a - b)

let answer = 0
let walker = 0
for(let i=0;i<N;i++){
    walker += minutes[i]
    answer += walker
}

console.log(answer)