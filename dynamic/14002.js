const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let inputs = input[0].split(' ').map(Number)
let memo = new Array(N).fill(0)
let arr = []
for(let i=0;i<N;i++){
    let max = 0
    let maxIndex = -1;
    for(let j=0;j<i;j++){
        if(inputs[i] > inputs[j] && memo[j] > max){
            max = memo[j]
            maxIndex = j;
        }
    }
    memo[i] = max + 1;
    arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(inputs[i]) : [inputs[i]];
}
// console.log(memo, arr)
console.log(Math.max(...memo))
console.log(arr[memo.indexOf(Math.max(...memo))].join(' '))