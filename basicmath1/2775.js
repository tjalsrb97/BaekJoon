const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let testcase = Number(input.shift())

for(let i=0;i<testcase*2;i+=2){
    let k = Number(input[i].trim())
    let n = Number(input[i+1].trim())
    
    const house = Array.from(Array(k+1), () => Array(n).fill(0));
    for(let i=1;i<=n;i++){
        house[0][i] = i;
    }
    console.log(house)
    for(let floor=1;floor<=k;floor++){
        for(let ho=1;ho<=n;ho++){
            house[floor][ho] = house[floor-1][ho] + house[floor][ho-1]
        }
    }
    console.log(house, house[k][n])
    

}