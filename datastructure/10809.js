const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim()

const alphabet = input.split('')
const info = {}

for(let i=97;i<=122;i++){
    info[String.fromCharCode(i)] = {}
    info[String.fromCharCode(i)]['value'] = -1;
    info[String.fromCharCode(i)]['flag'] = -1;
}
// console.log(info)
for(let i=0;i<alphabet.length;i++){
    let alpha = alphabet[i]
    if(info[alpha]['flag'] === -1){
        info[alpha]['value'] = i
        info[alpha]['flag'] = 0
    }
    
}

// console.log(info)
let answer = ''
for(let alpha in info){
    answer += info[alpha]['value'] + ' '
}

console.log(answer)
