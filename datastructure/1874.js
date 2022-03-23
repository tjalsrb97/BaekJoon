const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let stack = []
let number = []
let answer = ''
for(let i=0;i<N;i++){
    number.push(i+1)
}

for(let i=0;i<N;i++){
    let count = 1;
    console.log(input[i])
    while(count <= N && stack[stack.length-1] !== Number(input[i])){
        // console.log(count)
        stack.push(number.shift())
        console.log(stack, number)
        answer += '+\n';
        count++;
    }
    if(stack[stack.length-1] === Number(input[i])){
        stack.pop();
        answer += '-\n'
    }
    else{
        answer = 'NO';
        break;
    }
}
console.log(answer)
