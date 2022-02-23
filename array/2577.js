const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n').map(Number)

let mul = input[0] * input[1] * input[2]
let arr = String(mul).split('').map(Number)

let answer = ''
let numOfZero = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i] === 0){
        numOfZero++;
    }
}
answer+=numOfZero + '\n'

let numbers = []
for(let i=1;i<10;i++){
    numbers[i] = 0
}

for(let i=0;i<arr.length;i++){
    numbers[arr[i]]++
}
for(let i=1;i<10;i++){
    answer+=numbers[i] + '\n'
}
console.log(answer)