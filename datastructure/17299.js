const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let number = input[0].split(' ').map(Number)
const F = {}
for(let i=0;i<N;i++){
    if(number[i] in F){
        F[number[i]]++;
    }else{
        F[number[i]] = 1
    }
}

// console.log(F)
let stack = []
let result = []
for(let i=0;i<N;i++){
    result.push(-1)
}
for(let i=0;i<N;i++){
    while(stack.length!==0 && F[number[i]] > F[number[stack[stack.length-1]]]){
        result[stack.pop()] = number[i]
    }
    stack.push(i)
    // console.log(result, stack)
}

console.log(result.join(' '))