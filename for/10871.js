const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let array = input[0].split(' ')
let N = Number(array[0])
let compare = Number(array[1])
let nums = input[1].split(' ').map(Number)
let answer = ''
for(let i=0;i<N;i++){
    if(nums[i] < compare){
        answer += nums[i] + " "
    }
}
console.log(answer.slice(0, -1))