const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = +input
let count = 0

while(true){
    if(num%5 === 0){
        console.log(num/5 + count)
        break;
    }

    if(num<0){
        console.log(-1);
        break;
    }
    count+=1;
    num-=3
}
