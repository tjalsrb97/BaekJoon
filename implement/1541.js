const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()


// console.log(input.split('-'))

let tmp = input.split('-').map((el) => {
    let num = el.split('+').map(Number).reduce((acc, cur) => acc + cur)
    return num
})

let answer = Number(tmp[0])
for(let i=1;i<tmp.length;i++){
    let num = tmp[i]
    answer -= num
}
console.log(answer)