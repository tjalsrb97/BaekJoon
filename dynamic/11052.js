const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = +input.shift().trim()
let P = (input[0]).split(' ').map(Number)
let memo = new Array(N+1).fill(0)

// for(let i=1;i<)
// console.log(N, P, memo)

for(let i=1;i<=N;i++){
    for(let j=1;j<=i;j++){
        // console.log(i, j)
        memo[i] = Math.max(memo[i], memo[i-j] + P[j-1]);
    }
    // console.log(memo)
}

console.log(memo[N])
