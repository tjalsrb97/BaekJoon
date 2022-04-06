const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

// console.log(input[0].length)
let sentence = input[0]
let answer = ''
for(let i=0;i<sentence.length;i++){
    let alphabet = sentence[i]
    if(!isNaN(Number(alphabet)) || alphabet === ' '){
        answer += alphabet
    }else if('a' <= alphabet && alphabet <= 'z'){
        let number = alphabet[0].charCodeAt(0) + 13
        if(number > 122) number -= 26
        answer += String.fromCharCode(number)
    }else if('A' <= alphabet && alphabet <= 'Z'){
        let number = alphabet[0].charCodeAt(0) + 13
        if(number > 90) number -= 26
        answer += String.fromCharCode(number)
    }
    
}
console.log(answer)