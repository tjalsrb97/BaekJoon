const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim()

const alphabet = input.split('')
// console.log(alphabet)
const info = {}

for(let i=97;i<=122;i++){
    info[String.fromCharCode(i)] = 0;
}

// console.log(info)
for(let i=0;i<alphabet.length;i++){
    let alpha = alphabet[i]
    info[alpha] += 1
}

let answer = ''
for(let alpha in info){
    answer += info[alpha] + ' '
}

console.log(answer)
