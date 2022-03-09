const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = +input
console.log(Fibonachi(N))

function Fibonachi(N){
    if(N===0) return 0
    if(N <= 2) return 1
    return Fibonachi(N-1) + Fibonachi(N-2)
}