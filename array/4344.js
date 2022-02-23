const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testCase = Number(input[0])

for(let i=1;i<testCase+1;i++){
    let info = input[i].split(' ').map(Number)
    let numOfStu = info[0]
    info.shift()
    const scores = [...info]

    // calculate mean
    let sum = 0;
    let mean = 0;
    for(let i=0;i<numOfStu;i++){
        sum+=scores[i]
    }
    mean = sum/numOfStu
    
    // compare score and calculate exceed student
    let numOfExceedStu = 0;
    for(let i=0;i<numOfStu;i++){
        if(scores[i] > mean){
            numOfExceedStu++;
        }
    }

    console.log((numOfExceedStu*100/numOfStu).toFixed(3) + "%")

}