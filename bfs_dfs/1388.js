const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const [row, col] = input.shift().split(' ').map(Number)
// console.log(row, col, input)

let isVisited = Array.from(Array(row), ()=>new Array(col).fill(false))
let floor = input.map((el)=>el.trim().split(''))
let stack = []
let answer = 0;
// console.log(isVisited)
for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(isVisited[i][j] === true) continue;

        if(floor[i][j] === '-' && isVisited[i][j] === false){
            let col_temp = j
            while(true){
                if(col_temp===col || floor[i][col_temp] === '|' ) break;
                else{
                    stack.push([i, col_temp])
                    isVisited[i][col_temp] = true
                }
                col_temp+=1
            }
            
        }
        
        else if(floor[i][j] === '|' && isVisited[i][j] === false){
            let row_temp = i
            while(true){
                if(row_temp===row || floor[row_temp][j] === '-' ) break;
                else{
                    stack.push([row_temp, j])
                    isVisited[row_temp][j] = true
                }
                row_temp+=1
            }
        }
        // console.log(stack)
        stack = []
        answer+=1     
    }
}
// console.log(isVisited)
console.log(answer)
