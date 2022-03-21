const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input.shift());
let stack = []
let answer = ''
for(let i=0;i<n;i++){
    let command_info = input.shift().split(' ')
    let command = command_info[0].trim()
    let X = Number(command_info[1])
    if(command === 'push'){
        let X = command_info[1]
        stack.push(X)
    }

    if(command === 'pop'){
        if(stack.length === 0){
            answer += '-1' + '\n'
        }else{
            answer += stack.pop() + '\n'
        }
    }
    if(command === 'size') {
        answer += stack.length + '\n'
    }

    if(command === 'top') {
        if(stack.length === 0){
            answer += '-1' + '\n'
        }else{
            answer += stack[stack.length-1] + '\n'
        }
        
    }

    if(command === 'empty'){
        if(stack.length === 0){
            answer += '1' + '\n'
        }else{
            answer += '0' + '\n'
        }
    }
}
console.log(answer)