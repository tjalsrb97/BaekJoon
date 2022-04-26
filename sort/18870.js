const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let nums = input[0].split(' ')
let compare_nums = input[0].split(' ')
nums.sort((a, b) => a-b)
nums.map(Number)

let answer = {}
let memory = Number.MAX_SAFE_INTEGER
let rank = -1
for(let i=0;i<N;i++){
    if(memory !== nums[i]){
        rank++;
    }
    answer[nums[i]] = rank
    memory = nums[i]
}
console.log(answer)
let result = []
for(let i=0;i<compare_nums.length;i++){
    result.push(answer[compare_nums[i]])
}
console.log(result.join(' '))
