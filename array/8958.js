const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input[0])
let answer = ''
for(let i=1;i<N+1;i++){
    let test = input[i].split('')
    // console.log(test)
    let score = 0;
    let accumulate = 1;

    for(let i=0;i<test.length;i++){
        if(test[i] === "O"){
            score += accumulate
            accumulate++
        }
        else{
            accumulate = 1;
        }
    }
    // console.log(score)
    answer += score +'\n'
}
console.log(answer)