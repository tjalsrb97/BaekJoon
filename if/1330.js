const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
console.log(">");
} else if (a < b) {
console.log("<");
} else {
console.log("==");
}
