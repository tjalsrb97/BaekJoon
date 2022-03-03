const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()


// trim은 문자열 좌우에서 공백을 제거하는 함수이다.
let sentence = input.trim().split(' ');
console.log(sentence[0] === "" ? 0 : sentence.length)