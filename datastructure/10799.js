const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim()

let info = input.split('')
let stack = []
let answer = 0;

let lazer_info = []
for(let i=0;i<info.length;i++){
    if(info[i]==='(' && info[i+1]===')'){
        lazer_info.push(i+1)
    }
}
// console.log(lazer_info)

for(let i=0;i<info.length;i++){
    let gwalho = info[i]
    stack.push(gwalho)
    if(stack[stack.length-2] === '(' && stack[stack.length-1] === ')'){
        stack.pop()
        stack.pop()
        if(lazer_info.includes(i)){
            answer += stack.length
        }else{
            answer += 1
        }
    }
    
}
console.log(answer)