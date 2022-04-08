const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const func_gcd = (a, b) => {
    while(a%b !== 0){
        let n = a%b
        if(n !== 0){
            a = b
            b = n
        }
    }
    return b
}
let Testcase = input.shift()
for(let i=0;i<Testcase;i++){
    const [num1, num2] = input[i].split(' ')
    const gcd = func_gcd(num1, num2)
    console.log(num1*num2/gcd)
}

