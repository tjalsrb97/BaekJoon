const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let numbers = input.map(Number)
// 1
// let sum=0
// for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i]
// }
let sum = numbers.reduce((a,b) => {return a+b;});
let mean = Math.round(sum/N)
console.log(mean)
// 2
const numbersForSort = numbers.sort((a, b) => b - a)
console.log(numbersForSort[Math.floor(N/2)])
// 3
const numbersDict = {}
for(let i=0;i<numbers.length;i++){
    if(!(numbers[i] in numbersDict)){
        numbersDict[numbers[i]] = 1    
    }
    else{
        numbersDict[numbers[i]] += 1
    }
}
let arr = Object.values(numbersDict)
let max = Math.max(...arr)
let answer = []
for(key in numbersDict){
    if(numbersDict[key] === max){
        answer.push(key)
    }
}
answer = answer.sort((a, b) => a - b)
if(answer.length === 1){
    console.log(...answer)
}else{
    console.log(answer[1])
}
// 4
console.log(numbersForSort[numbersForSort.length-1] - numbersForSort[0])

