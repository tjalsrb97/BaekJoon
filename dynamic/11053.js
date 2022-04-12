const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let arr = input[0].split(' ').map(Number)
// console.log(N, arr)
let memo = new Array(N).fill(1)

for(let i=1;i<N;i++){
    const values = [1]
    for(let j=0;j<i;j++){
        if(arr[j] < arr[i]){
            values.push(memo[j]+1)
        }

    }
    // console.log(memo, values)
    memo[i] = Math.max(...values)
}
console.log(Math.max(...memo))
