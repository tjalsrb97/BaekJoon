const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let T = +input[0]
for(let i=1;i<T+1;i++){
    let num = +input[i]
    let minPrime = 0
    let maxPrime = 0
    for(let max=num/2;max<num;max++){
        if(isPrimeNum(max)){
            maxPrime = max
            if(isPrimeNum(num-maxPrime)){
                minPrime = num-maxPrime
                break;
            }
            else continue;
        }else continue;
    }
    
    console.log(minPrime, maxPrime)
}

function isPrimeNum(n){
    if(n===1) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false
    }  
    return true;
}