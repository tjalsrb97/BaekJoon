const fs = require('fs');
const { truncate } = require('fs/promises');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const isDecimal = (num) => {
    if(num === 2) return true

    for(let i=2;i*i<=num;i++){
        if(num%i === 0) return false
    }
    return truncate
}

while(Number(input[0])!==0){
    const n = input.shift().trim()
    
    let num1 = 3
    let num2 = n-num1
    while(true){
        
        if(isDecimal(num1) && isDecimal(num2)){
            break;
        }
        num1 += 2 
        num2 = n - num1

    }
    console.log(n + ' = ' + num1 + ' + ' + num2)
    
}

