const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const cards = input[1].split(' ').map(Number)


let answer = 0;
for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
        for(let k=j+1;k<N;k++){
            let temp = cards[i] + cards[j] + cards[k]
            if(answer < temp && temp <= M){
                answer = temp
            }
        }
    }
}

console.log(answer)