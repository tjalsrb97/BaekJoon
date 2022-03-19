const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let info = []
for(let i=0;i<N;i++){
    let age_name = input[i].split(' ')
    info.push(age_name)
}


info.sort((a, b) => {
    return a[0] - b[0]
})

let answer = ''
for(let i=0;i<info.length;i++){
    answer += info[i][0] + ' ' + info[i][1] + '\n'
}

console.log(answer)