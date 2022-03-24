const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let cases = Number(input.shift())
let dqueue = []
let answer = ''
for(let i=0;i<cases;i++){
    let info = input[i].split(' ')
    let command = info[0].trim()
    let num = Number(info[1])
    if(command === 'push_front'){
        dqueue.unshift(Number(num))
    }
    else if(command === 'push_back'){
        dqueue.push(Number(num))
    }
    else if(command === 'pop_front'){
        dqueue.length !== 0 ? answer += dqueue.shift() +'\n' : answer += '-1\n'
    }
    else if(command === 'pop_back'){
        dqueue.length !== 0 ? answer += dqueue.pop() + '\n' : answer += '-1\n'        
    }
    else if(command === 'size'){
        answer += dqueue.length + '\n'
    }
    else if(command === 'empty'){
        dqueue.length !== 0 ? answer += '0\n' : answer += '1\n' 
    }
    else if(command === 'front'){
        dqueue.length !== 0 ? answer += dqueue[0] + '\n' : answer += '-1\n' 
    }
    else if(command === 'back'){
        dqueue.length !== 0 ? answer += dqueue[dqueue.length-1] + '\n' : answer += '-1\n' 
    }
}
console.log(answer)