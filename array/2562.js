const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let max = Math.max(...input)
let index = 0;
for(let i=0;i<input.length;i++){
    if(Number(input[i]) === max){
        index = i+1;
        break;
    }
}
console.log(max, index)