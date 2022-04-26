const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
let dp = [0, 3, 7]

for(let i=3;i<=N;i++){
    dp[i] = (dp[i-1] * 2 + dp[i-2]) % 9901
}

console.log(dp[N])