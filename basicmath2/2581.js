const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let M = +input[0]
let N = +input[1]

let sum = 0
let primenums = []
for(let i=M;i<=N;i++){
    if(isPrimeNum(i)){
        sum+=i
        primenums.push(i)
    }
}
if(primenums.length === 0){
    console.log(-1)
}
else{
    console.log(sum)
    console.log(Math.min(...primenums))
}

function isPrimeNum(num) {
    if(num === 1) return false
    for(let i=2;i<num;i++){
        if(num%i === 0) return false
    }
    return true
}