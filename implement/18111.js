const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

// const [ N, M, B ] = input.shift().trim().split(' ').map(Number)
// let yard = []
// for(let i=0;i<input.length;i++){
//     let info = input[i].trim().split(' ').map(Number)
//     for(let j=0;j<info.length;j++){
//         yard.push(info[j])
//     }
// }

// let answer = new Array(257).fill(0)
// let height = 0
// while(height !== 257){
//     let time = 0
//     let add = 0
//     let remove = 0
//     let blocks = B
//     for(let i=0;i<yard.length;i++){
//         if(yard[i] > height){
//             remove += yard[i] - height
//             blocks += yard[i] - height
//         }
//         else if(yard[i] < height){
//             add += height - yard[i]
//             blocks -= height - yard[i]
//         }
//         time = remove * 2 + add
//     }

//     // console.log(blocks)
//     if(blocks < 0) {
//         answer[height] = Number.MAX_SAFE_INTEGER
//     }
//     else answer[height] = time
//     height+=1
// }
// let min_time = Math.min(...answer)
// // console.log(answer)
// console.log(min_time, answer.indexOf(min_time))

const [N, M, blocks] = input.shift().split(' ').map(Number)
const map = input.map((row) => row.split(' ').map(Number))

function getTime(height){
    let blockNum = blocks;
    let remove = 0;
    let add = 0;
    let time = 0;
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(map[i][j] > height){
                remove += map[i][j] - height;
                blockNum += map[i][j] - height;
            }
            else if(map[i][j] < height){
                add += height - map[i][j];
                blockNum -= height - map[i][j]
            }

            time = remove * 2 + add;
        }
    }
    if(blockNum < 0) return [Number.MAX_SAFE_INTEGER, height]
    return [time, height]
}

const answer = [];
for(let i=0;i<=256;i++){
    answer.push(getTime(i))
}
console.log(answer)
answer.sort((a, b)=>{
    if(a[0] === b[0]) return b[1]-a[1]
    else return a[0] - b[0]
})
console.log(answer)
console.log(answer[0].join(' '))
