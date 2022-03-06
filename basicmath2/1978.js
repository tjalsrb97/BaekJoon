const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testcase = +input[0]
let numbers = input[1].split(' ').map(Number)
let answer = 0
for(let i=0;i<testcase;i++){
    if(isPrimeNum(numbers[i])){
        answer++;
    }
}
console.log(answer)

function isPrimeNum(num) {
    if(num === 1) return false
    for(let i=2;i<num;i++){
        if(num%i === 0) return false
    }
    return true
}