const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
function isHansu(n){
    const number = String(n).split('').map(Number)
    if(number.length<=2){
        return true
    }else{
        let diff = number[1]-number[0]
        let first = number[0]

        const sequence = []
        sequence.push(first)
        for(let i=0;i<number.length-1;i++){            
            sequence.push(sequence[i]+diff)
        }
        if(JSON.stringify(number) === JSON.stringify(sequence)){
            return true
        }else{
            return false
        }
    }
}


let answer = 0;
for(let i=1;i<=N;i++){
    if(isHansu(i)){
        answer+=1
    }
}

console.log(answer)