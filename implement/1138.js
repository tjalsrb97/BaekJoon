const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let nums = input[0].split(' ').map(Number)

let result = new Array(N).fill(-1)
let ki = 1
for(let i=0;i<nums.length;i++){
    let info = nums[i]
    for(let j=0;j<result.length;j++){
        if(info === 0 && result[j] === -1){
            result[j] = ki
            break
        }

        if(result[j] === -1){
            info--
        }

        
    }


    ki++
    
}
console.log(result.join(' '))
