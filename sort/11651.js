const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let answer = []
for(let i=0;i<N;i++){
    let xy = input[i].trim().split(' ').map(Number)
    answer.push(xy)
}
answer.sort((a, b) => {
    if(a[1] === b[1]){
        return a[0] - b[0]
    }
    else{
        return a[1] - b[1]
    }
})

let result = ''
for(let i=0;i<answer.length;i++){
    result += answer[i][0]+' '+answer[i][1]+ '\n';
}
console.log(result)