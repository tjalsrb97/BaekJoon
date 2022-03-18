const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let answer = []
for(let i=0;i<N;i++){
    let word = input[i].trim()
    if(answer.includes(word)) continue;
    else{
        answer.push(word)
    }
}

answer.sort((a, b) => {
    if(a.length !== b.length){
        return a.length - b.length
    }else{
        for(let i=0;i<a.length;i++){
            if(a[i] === b[i])continue;
            else{
                return a.charCodeAt(i) - b.charCodeAt(i)
            }
        }
    }
})

console.log(answer.join('\n'))
