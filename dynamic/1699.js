const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let dp = new Array(N+1).fill(0)

for(let i=0;i<dp.length;i++){
    dp[i] = i
}

for(let i=1;i<=N;i++){
    for(let j=1;j**2<=i;j++){
        console.log(i,j)
        dp[i] = Math.min(dp[i], dp[i-j**2]+1);
        // console.log(dp)
    }
}

console.log(dp[N])
// console.log('answer:', dp[N])