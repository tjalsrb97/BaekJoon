const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testcase = Number(input[0])
for(let i=1;i<testcase+1;i++){
    let buildinginfo = input[i].split(' ')
    let H = buildinginfo[0]
    let W = buildinginfo[1]
    let N = buildinginfo[2]
    
    let a = parseInt(N/H)
    let b = N%H
    console.log(b===0 ? H*100 + a : b*100 + (a+1))
}