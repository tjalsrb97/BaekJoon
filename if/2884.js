const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split(' ')

let hour = Number(input[0])
let minute = Number(input[1])

if(45 <= minute && minute <= 59 ){
    console.log(hour, minute-45)
}
else if(0 <= minute && minute <= 44){
    if(hour === 0){
        hour=24
    }
    
    console.log(hour-1, minute+60-45)
}
