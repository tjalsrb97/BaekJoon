const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let nums = input[0].split(' ').map(Number)


// let answer = []
// for(let i=0;i<N;i++){
//     let arr = []
//     let index = 0
//     for(let j=0;j<N-i;j++){
//         let num = 0
//         let flag = i+1
//         while(flag!==0){
//             num+=nums[index]
//             index+=1;
//             flag-=1
//         }
//         arr.push(num)
//         index-=i;
//     }
//     // console.log(arr)
//     answer.push(Math.max(...arr))
// }

// console.log(Math.max(...answer))

let dp = [nums[0]]
for(let i=1;i<N;i++){
    dp[i] = nums[i] > nums[i] + dp[i-1] ? nums[i] : nums[i] + dp[i-1]
    // console.log(nums, dp)
}

console.log(dp)