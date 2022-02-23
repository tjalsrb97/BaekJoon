const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input[0]);
let nums = input[1].split(' ').map(Number)
let max = Math.max(...nums)
const newscores = []
for(let i=0;i<nums.length;i++){
    newscores.push((nums[i]*100)/max)
}



let sum = 0
let mean = 0
for(let i=0;i<N;i++){
    sum += newscores[i]
}
mean = sum/N
console.log(mean)