const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

const [N, K] = input.split(' ').map(Number)
let isVisited = new Array(100001).fill(false)
let map = [];
for(let i=0;i<100001;i++){
    map.push(i+1)
}

let queue = []
queue.push([N, 0])
while(queue.length > 0){
    const [now, time] = queue.shift()
    if(isVisited[now]) {
        // console.log('visit')
        continue;
    }
    isVisited[now] = true;
    if(now === K){
        console.log(time)
        break;
    }
    if(now*2 <= 100000){
        queue.push([now*2, time+1])
    }
    if(now+1 <= 100000){
        queue.push([now+1, time+1])
    }
    if(now-1 <= 100000){
        queue.push([now-1, time+1])
    }
    
    // console.log(queue, isVisited)
}