const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let answer = ''
let i=0;

while(input.length!==i+1){
    let nums = input[i].split(' ')
    let a = Number(nums[0])
    let b = Number(nums[1])

    answer += (a+b) + '\n'
    i++;
}
console.log(answer)