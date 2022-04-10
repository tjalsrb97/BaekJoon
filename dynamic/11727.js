const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let n = Number(input)
let memo = new Array(n+1).fill(0)
memo[1] = 1
memo[2] = 3

for(let i=3;i<=n;i++){
    memo[i] = (memo[i-1] + 2 * memo[i-2]) % 10007;
}
console.log(memo[n])

