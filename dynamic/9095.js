const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testCase = input.shift()
let maxlen = Number(Math.max(...input.map(Number)))
let memo = new Array(maxlen).fill(0)

memo[1] = 1
memo[2] = 2
memo[3] = 4
for(i=4;i<=maxlen;i++){
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3]
}

// console.log(memo)
for(let i=0;i<testCase;i++){
    let num = Number(input[i].trim())
    console.log(memo[num])
}

