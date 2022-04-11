const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
const mod = 1000000000
let num = Number(input.shift())
// let memo = new Array(num + 1).fill(010
let memo = Array.from(Array(num + 1), ()=>Array(10).fill(0))
memo[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
memo[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1]
for(let i=3;i<=num;i++){
    for(let j=0;j<=9;j++){
        if(j === 0){
            memo[i][j] = memo[i-1][j+1] % mod
        }else if(j === 9){
            memo[i][j] = memo[i-1][j-1] % mod
        }else{
            memo[i][j] = (memo[i-1][j-1] + memo[i-1][j+1]) % mod
        }
    }
}
// console.log(memo)

let sum = 0
for(let i=0;i<memo[num].length;i++){
    sum+=memo[num][i]
}
console.log(sum % mod)