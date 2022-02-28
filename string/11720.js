const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let array = []
for(let i=0;i<input.length;i++){
    let answer = 0;
    let numarr = input[i].split('').map(Number)
    for(let j=0;j<numarr.length;j++){
        answer+=numarr[j]
    }
    array.push(answer)
}

console.log(Math.max(...array))
