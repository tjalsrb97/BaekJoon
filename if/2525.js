const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let time = input[0].split(' ')
let hour = Number(time[0])
let minute = Number(time[1])
let cooktime = Number(input[1])

if(minute + cooktime <= 59){
    console.log(hour, minute+cooktime)
}
else if(minute + cooktime >= 60){
    let newhour = parseInt((minute + cooktime) / 60)
    let newminute = (minute + cooktime) % 60

    if(hour+newhour>=24){
        hour=hour+newhour-24
    }
    else{
        hour = hour+newhour
    }
    console.log(hour, newminute)
}