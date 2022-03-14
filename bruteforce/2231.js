const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = +input
let answer = []
const sum = (acc, curr) => acc + curr;
for(let i=1;i<=1000000;i++){
    let construct = i
    let const_fac = []
    while(construct !== 0){
        const_fac.push(construct%10);
        construct = parseInt(construct/10) 
    }
    
    if(i + const_fac.reduce(sum) === num){
        answer.push(i)
        break;
    }
}

if(answer.length === 0){
    console.log(0)
}
else{
    console.log(...answer)
}