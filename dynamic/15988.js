const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let maxnum = 1000000009
let testcase = Number(input.shift())
let nums = input.map(Number)

let dp = new Array(Math.max(...nums)+1).fill(0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for(let i=4;i<dp.length;i++){
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % maxnum
}
// console.log(dp)

let answer = []
for(let i=0;i<testcase;i++){
    answer.push(dp[nums[i]])
}
console.log(answer.join('\n'))