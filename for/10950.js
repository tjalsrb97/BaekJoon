const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let Testcase = Number(input[0])

for(let i=0;i<Testcase;i++){
    let nums = input[i+1].split(' ').map(Number);
    console.log(nums[0]+nums[1])
}
