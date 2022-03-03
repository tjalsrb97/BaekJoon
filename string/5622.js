const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let alphabet = input.split('')
let len = alphabet.length;
let answer = 0
for(let i=0;i<len;i++){
    let alpha = alphabet.shift()
    if(alpha=== 'A' || alpha==='B' || alpha==='C'){
        answer += 3
    }
    if(alpha=== 'D' || alpha==='E' || alpha==='F'){
        answer += 4
    }
    if(alpha=== 'G' || alpha==='H' || alpha==='I'){
        answer += 5
    }
    if(alpha=== 'J' || alpha==='K' || alpha==='L'){
        answer += 6
    }
    if(alpha=== 'M' || alpha==='N' || alpha==='O'){
        answer += 7
    }
    if(alpha=== 'P' || alpha==='Q' || alpha==='R' || alpha==='S'){
        answer += 8
    }
    if(alpha=== 'T' || alpha==='U' || alpha==='V'){
        answer += 9
    }
    if(alpha==='W' || alpha=== 'X' || alpha==='Y' || alpha==='Z'){
        answer += 10
    }
}
console.log(answer)