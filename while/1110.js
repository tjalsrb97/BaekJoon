const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = Number(input)
let tempnum = num
let i=1
while(true){
    let sum = Math.floor(tempnum/10) + tempnum%10
    let newnum = Number(String(tempnum%10)+String(sum%10))

    if(newnum === num){
        console.log(i)
        break;
    }

    tempnum = newnum
    i++
}

