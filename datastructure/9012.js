const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let answer = ''
for(let i=0;i<N;i++){
    let VPS = input[i].trim().split('')
    let stack = []
    for(let index=0;index<VPS.length;index++){
        
        stack.push(VPS[index])
        if(stack[stack.length-1] === ')' && stack[stack.length-2] === '('){
            stack.pop()
            stack.pop()
        }
        
    }
    // console.log(stack)
    if(stack.length === 0){
        answer += 'YES' + '\n'
    }else{
        answer += 'NO' + '\n'
    }
}
console.log(answer)