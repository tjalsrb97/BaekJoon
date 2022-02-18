const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let x = Number(input[0])
let y = Number(input[1])

if(x>0 && y>0){
    console.log('1')
}
else if(x<0 && y>0){
    console.log('2')
}
else if(x<0 && y<0){
    console.log('3')
}
else if(x>0 && y<0){
    console.log('4')
}