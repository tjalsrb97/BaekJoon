const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

const five = parseInt(input / 5)
const twentyfive = parseInt(input / 25)
const fiveHundred = parseInt(input / 125)
console.log(five + twentyfive + fiveHundred)