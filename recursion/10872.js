const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = +input
console.log(factorial(N))

function factorial(n){
    if(n===0) return 1
    return factorial(n-1)*n
}