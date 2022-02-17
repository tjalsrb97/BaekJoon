const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let score = Number(input)
if(90 <= score && score <= 100){
    console.log("A")
}
else if(80 <= score && score <= 90){
    console.log("B")
}
else if(70 <= score && score <= 80){
    console.log("C")
}
else if(60 <= score && score <= 70){
    console.log("D")
}
else{
    console.log("F")
}