const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testcase = Number(input[0])
let answer = ''
for(let i=1;i<testcase+1;i++){
    let info = input[i].split(' ')
    let loop = Number(info[0]);
    let alphabet = info[1].split('')
    for(let j=0;j<alphabet.length;j++){
        for(let k=0;k<loop;k++){
            if(alphabet[j] === '\r') break;
            else{
                answer += alphabet[j]
            }
        }
    }
    answer += '\n'
}
console.log(answer)

