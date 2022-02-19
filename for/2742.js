const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
let answer = ''
for(let i=N;i>=1;i--){
    answer += i + "\n"
}
console.log(answer)