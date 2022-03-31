const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim()

const str = input.split('')
let isTag = false
let stack = []
let answer = ''
let queue = []

while(str.length !== 0){
    if(str[0] === '<'){
        isTag = true
        if(stack.length > 0){
            answer += stack.reverse().join('')
            stack = []
        }
    }
    else if(str[0] === '>'){
        isTag = false
        queue.push(str.shift())
        answer += queue.join('')
        queue = [];
    }
    else if(str[0] === ' ' && !isTag){
        answer += stack.reverse().join('') + ' '
        str.shift()
        stack = [];
    }

    if(str[0] === '<') isTag = true
    if(isTag){
        queue.push(str.shift())
    }else{
        stack.push(str.shift())
    }
    console.log(stack, queue, answer)
}
console.log(answer + (stack.length !== 0 ? stack.reverse().join('') : ''))

