const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, K] = input[0].split(' ')
let k = Number(K)
const queue = []
for(let i=0;i<N;i++){
    queue.push(i+1)
}

let answer = []
while(queue.length !== 0){
    for(let i=0;i<K-1;i++){
        queue.push(queue.shift())
    }
    answer.push(queue.shift())
}
console.log('<' + answer.join(', ') + '>')
