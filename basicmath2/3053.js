const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()
input = Number(input)
function Euclid(radius) {
    return Math.pow(radius, 2) * Math.PI;
}
     
function taxi(radius) {
    return Math.pow(radius, 2) * 2;
}
     
console.log(Euclid(input).toFixed(6));
console.log(taxi(input).toFixed(6));