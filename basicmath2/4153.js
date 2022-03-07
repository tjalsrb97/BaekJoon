const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

for(let i=0;i<input.length;i++){
    let info = input[i].split(' ').map(Number);
    let max = Math.max(...info)
    let mins = info.filter((e) => e !== max)
    if(max === 0) break;
    if(max**2 === mins[0]**2 + mins[1]**2){
        console.log('right')
    }else{
        console.log('wrong')
    }
}