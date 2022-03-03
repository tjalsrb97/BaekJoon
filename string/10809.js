// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
// let input = fs.readFileSync(filePath).toString()

// let S = input.split('')
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// let answer = []

// for(let i=0;i<alphabet.length;i++){
//     let num = -1
//     for(let j=0;j<S.length;j++){
//         if(alphabet[i] === S[j]){
//             num = j
//             break;
//         }
//     }

//     answer.push(num)
// }

// console.log(...answer)

const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));