const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let Testcase = Number(input[0])
let answer = '';

for(let i=0;i<Testcase;i++){
    let nums = input[i+1].split(' ').map(Number);
    answer += nums[0] + nums[1] + '\n';
}

console.log(answer);
