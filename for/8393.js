const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = Number(input)
let answer = 0;
for(let i=1;i<=num;i++){
    answer=answer+i
}
console.log(answer)