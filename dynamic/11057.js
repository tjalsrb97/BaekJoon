const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
let dp = Array.from(Array(N+1), () => new Array(10).fill(0))
dp[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for(let i=1;i<=N;i++){
    for(let j=0;j<10;j++){
        for(let k=0;k<=j;k++){
            dp[i][j] += dp[i-1][k]
            dp[i][j] %= 10007
        }
    }
}

// console.log(dp)
console.log(dp[N][9])