const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let star ='';

for(let i=0;i<input;i++){
    for(let j=0;j<input;j++){
        if(i+j >= input-1){
            star += "*"
        }
        else{
            star += " "
        }
    }
    star += '\n'
}
console.log(star)
