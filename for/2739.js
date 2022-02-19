const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = Number(input)
for(let i=1;i<10;i++){
    console.log(num + " * " + i + " = " + num*i)
}