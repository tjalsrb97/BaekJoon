const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let houses = input.map((value) => {
    // console.log(value)
    return value.trim().split(' ').map(Number)
})

// console.log(houses)
for(let i=1;i<N;i++){
    houses[i][0] = Math.min(houses[i-1][1], houses[i-1][2]) + houses[i][0]
    houses[i][1] = Math.min(houses[i-1][0], houses[i-1][2]) + houses[i][1]
    houses[i][2] = Math.min(houses[i-1][0], houses[i-1][1]) + houses[i][2]
}
console.log(Math.min(...houses[N-1]))