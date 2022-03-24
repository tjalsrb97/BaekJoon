const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let str = String(input.shift().trim()).split('')
let M = Number(input.shift())
// 시간 초과
// let cursor = str.length
// let first_loc = 0
// let last_loc = str.length

// for(let i=0;i<M;i++){
//     let command = input[i].trim().split(' ')
//     let first = command[0]
//     if(first === 'L') {
//         cursor === first_loc ? cursor = first_loc : cursor -= 1
//     }
//     else if(first === 'D') {
//         cursor === last_loc ? cursor = last_loc : cursor += 1
//     }
//     else if(first === 'B') {
//         if(cursor === 0) {}
//         else{
//             str.splice(cursor-1, 1)
//             cursor -= 1
//         }
//     }
//     else if(first === 'P') {
//         let word = command[1]
//         str.splice(cursor, 0, word)
//         cursor += 1
//     }
// }
// console.log(str.join(''))

let leftStack = str
let rightStack = []
for(let i=0;i<M;i++){
    let command = input[i].trim().split(' ')
    let first = command[0]
    if(first === 'L') {
        if(leftStack.length === 0) continue;
        else{
            rightStack.push(leftStack.pop())
        }
    }
    else if(first === 'D') {
        if(rightStack.length === 0) continue;
        else{
            leftStack.push(rightStack.pop())
        }
    }
    else if(first === 'B') {
        leftStack.splice(-1, 1)
    }
    else if(first === 'P') {
        let word = command[1]
        leftStack.push(word)
    }
    // console.log(leftStack, rightStack)
}
console.log(leftStack.join('') + rightStack.reverse().join(''))