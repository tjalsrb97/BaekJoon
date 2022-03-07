const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
let answer = []
for(let i=0;i<input.length;i++){
    let num = +input[i]
    if(num === 1) {
        answer.push(1)
    }
    else if(num === 0) break;
    else{
        let count = 0
        for(let j=num+1;j<2*num;j++){
            if(isPrimeNum(j)){
                count++;
            }
        }
        answer.push(count)
    }
}

console.log(answer.join('\n'))

function isPrimeNum(num) {
    if(num === 1) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0) return false
    }
    return true
}