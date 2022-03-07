const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let xs = {}
let ys = {}
for(let i=0;i<3;i++){
    const info = input[i].split(' ');
    let x = info[0].trim()
    let y = info[1].trim();
    if(x in xs){
        xs[x]++;
    }else{
        xs[x]=1
    }

    if(y in ys){
        ys[y]++;
    }else{
        ys[y]=1;
    }
}
console.log(getKeyByValue(xs, 1), getKeyByValue(ys, 1))

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key]===value);
}