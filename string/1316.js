const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

function isGroupWord(word){
    let alphabet = word.trim().split('')
    let len = alphabet.length;
    let first = alphabet.shift()
    let checkarr = []
    checkarr.push(first)
    for(let i=1;i<len+1;i++){
        let one = alphabet.shift();
        if(!(checkarr.includes(one)) || checkarr[checkarr.length-1]===one){
            checkarr.push(one)
        }
        else{
            return false
        }
    }
    return true
}

let testcase = Number(input[0])
let count = 0
for(let i=1;i<testcase+1;i++){
    let word = input[i]

    if(isGroupWord(word)){
        count+=1
    }
}

console.log(count)