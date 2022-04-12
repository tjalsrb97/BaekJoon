const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
let memo = new Array(N+1).fill(0)
memo[1] = 1
memo[2] = 1

for(let i=3;i<N+1;i++){
    memo[i] = BigInt(memo[i-1]) + BigInt(memo[i-2])
}
console.log(String(memo[N]))
