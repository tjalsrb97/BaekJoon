const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let N = Number(input.shift())
let map = input.map(v => v.trim().split(' ').map(Number))
let isVisited = Array.from(Array(N), ()=> new Array(N).fill(false))
// console.log(map)


let q = []
q.push([0, 0])
isVisited[0][0] = true;
let answer = false;

while(q.length > 0){
    let [y, x] = q.shift();
    let v = map[y][x]
    if(v === -1){
        answer = true;
        break;
    }else{
        if(y+v < N && !isVisited[y+v][x]){
            q.push([y+v, x])
            isVisited[y+v][x] = true;
        }

        if(x+v < N && !isVisited[y][x+v]){
            q.push([y, x+v])
            isVisited[y][x+v] = true;
        }
    }
    // console.log(q, isVisited)
}
console.log(answer ? 'HaruHaru' : 'Hing')