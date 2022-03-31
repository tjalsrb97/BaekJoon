const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
const A = input.shift().split(' ').map(Number)
let stack = []
// let answer = ''
// for(let i=0;i<N;i++){
//     let num = A.shift()
//     const rest_A = A.filter(el => el > num)
//     if(rest_A.length === 0){
//         answer += '-1\n'
//     }else{
//         answer += rest_A.shift() + '\n'
//     }
// }
for(let i=0;i<N;i++){
    while(stack.length!==0 && A[i]  > A[stack[stack.length-1]]){
        A[stack.pop()] = A[i];
    }
    stack.push(i);
    console.log(A, stack)
}

while(stack.length !== 0){
    A[stack.pop()] = -1;
}
console.log(A.join(' '))
// console.log(answer.join(' '))