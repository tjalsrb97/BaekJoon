const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

// console.log(input)
const [n, m] = input.map(Number)
const getTwoFive = (num) => {
    let two = 0;
    let five = 0;

    for(let i=5;i<=num;i*=5){
        five += parseInt(num/i)
    }
    for(let i=2;i<=num;i*=2){
        two += parseInt(num/i)
    }
    return [two, five]
}

const nf = getTwoFive(n)
const mf = getTwoFive(m)
const nmf = getTwoFive(n-m)
// console.log(nf, mf, nmf)
const two_answer = nf[0] - mf[0] - nmf[0]
const five_answer = nf[1] - mf[1] - nmf[1]
console.log(Math.min(two_answer, five_answer))