const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let num = Number(input)

let sum = 1
let i = 0;
while(num>=sum){
    sum+=i
    i++
}

let arr = []
for(let a=1;a<i;a++){
    let bunsu = a + '/' + (i-a)
    arr.push(bunsu)
}

if(i%2===0){
    arr=arr.reverse()
}
console.log(arr[num-sum+i-1])