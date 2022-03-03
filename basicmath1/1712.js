const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

if(C <= B) console.log(-1)
else{
    console.log(Math.floor(A /(C-B))+1)
}