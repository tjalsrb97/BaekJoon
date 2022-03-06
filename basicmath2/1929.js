const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let M = +input[0]
let N = +input[1]
let primenums = []
for(let i=M;i<=N;i++){
    if(isPrimeNum(i)){
        primenums.push(i)
    }
}

console.log(primenums.join('\n'))

function isPrimeNum(num) {
    if(num === 1) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0) return false
    }
    return true
}