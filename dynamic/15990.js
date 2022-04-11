const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
const mod = 1000000009;
let testcase = Number(input.shift())
let maxnum = Math.max(...input.map(Number))
let memo = Array.from(Array(maxnum + 1), ()=>Array(4).fill(0))

memo[1][1] = memo[2][2] = memo[3][1] = memo[3][2] = memo[3][3] = 1
// console.log(memo)

for(let i=4;i<=maxnum;i++){
    memo[i][1] = (memo[i-1][2] + memo[i-1][3]) % mod
    memo[i][2] = (memo[i-2][1] + memo[i-2][3]) % mod
    memo[i][3] = (memo[i-3][1] + memo[i-3][2]) % mod
}

// console.log(memo)
for(let i=0;i<testcase;i++){
    let num = input[i].trim()
    console.log((memo[num][1] + memo[num][2] + memo[num][3] )% mod)
}