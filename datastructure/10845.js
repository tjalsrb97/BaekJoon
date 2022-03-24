const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let cases = Number(input.shift())
let queue = []
answer = ''
for(let i=0;i<cases;i++){
    const [command, num] = input[i].trim().split(' ')
    if(command === 'push') {
        queue.push(num)
    }
    else if(command === 'front'){
        queue.length !== 0 ? answer += queue[0]+'\n' : answer += '-1\n'
    }
    else if(command === 'size'){
        answer += queue.length + '\n'
    }
    else if(command === 'pop'){
        queue.length !== 0 ? answer += queue.shift()+'\n' : answer += '-1\n'
    }
    else if(command === 'empty'){
        queue.length !== 0 ? answer += '0\n' : answer += '1\n'
    }
    else if(command === 'back') {
        queue.length !== 0 ? answer += queue[queue.length-1]+'\n' : answer += '-1\n'
    }
    // console.log(queue, answer)
}
console.log(answer)