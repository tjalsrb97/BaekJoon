const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

if(a === b && b === c){
    console.log(10000+a*1000)
}
else if(a === b || b === c){
    console.log(1000+b*100)
}
else if(a === c){
    console.log(1000+a*100)
}
else{
    console.log(Math.max(a, b, c)*100)
}