const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let answer = ''
for(let i=0;i<N;i++){
    let sentence = input[i].split(' ')
    const reverse_word = sentence.map((word) => {
        if(word.includes('\r')){
            word.trim()
        }
        let alphabets = word.split('')
        return alphabets.reverse().join('')
    })
    answer += reverse_word.join(' ') + '\n'
}
console.log(answer)