const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testcase = input.shift();
let body_infos = input.map((e) => e.trim())

let answer = [];
for(let i=0;i<testcase;i++){
    const [weight, tall] = body_infos[i].split(' ').map(Number)
    let rank = 1
    for(let j=0;j<testcase;j++){
        const [weight_compare, tall_compare] = body_infos[j].split(' ').map(Number)
        if(weight<weight_compare && tall<tall_compare){
             rank++
        }
    }
    answer.push(rank)
}
console.log(answer.join(' '))
