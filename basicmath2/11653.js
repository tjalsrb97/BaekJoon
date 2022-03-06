const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let num = +input
let divide = 2
while(num!==1){
    if(num%divide === 0){
        console.log(divide)
        num = parseInt(num/divide)
    }else{
        divide+=1;
    }
}
