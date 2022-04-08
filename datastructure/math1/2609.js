const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const [num1, num2] = input[0].split(' ').map(Number)
let i = num1;
let j = num2;

while(i % j !== 0){
    let n = i % j
    if(n !== 0){
        i = j;
        j = n;
    }
}
console.log(j)
console.log(num1*num2/j)