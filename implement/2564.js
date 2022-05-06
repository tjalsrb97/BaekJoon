const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

// console.log(input)
const [row, col]= input.shift().trim().split(' ').map(Number)
const store_cnt = Number(input.shift())
const [dongguen_pos, dongguen_dist] = input.pop().trim().split(' ').map(Number)
const all_distance = row+col+row+col
let dist = []
// console.log(input)
for(let i=0;i<input.length;i++){
    const [store_pos, store_dist] = input[i].trim().split(' ').map(Number)
    // console.log(store_pos, store_dist)
    // let dist = []
    if(store_pos === 1){
        if(dongguen_pos === 1){
            let temp_dist = dongguen_dist > store_dist ? dongguen_dist-store_dist : store_pos-dongguen_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 2){
            let temp_dist = dongguen_dist + store_dist + col
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 3){
            let temp_dist = dongguen_dist + store_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 4){
            let temp_dist = dongguen_dist + (row - store_dist)
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }
    }else if(store_pos === 2){
        if(dongguen_pos === 1){
            let temp_dist = dongguen_dist + store_dist + col
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 2){
            let temp_dist = dongguen_dist > store_dist ? dongguen_dist-store_dist : store_dist-dongguen_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 3){
            let temp_dist = store_dist + (col - dongguen_dist)
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 4){
            let temp_dist = dongguen_dist + store_dist + col + row
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }
    }else if(store_pos === 3){
        if(dongguen_pos === 1){
            let temp_dist = dongguen_dist + store_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 2){
            let temp_dist = dongguen_dist + (col - store_dist)
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 3){
            let temp_dist = dongguen_dist > store_dist ? dongguen_dist-store_dist : store_pos-dongguen_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 4){
            let temp_dist = dongguen_dist + store_dist + row
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }
    }else if(store_pos === 4){
        if(dongguen_pos === 1){
            let temp_dist = store_dist + (row - dongguen_dist)
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 2){
            let temp_dist = dongguen_dist + store_dist + row + col
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 3){
            let temp_dist = dongguen_dist + store_dist + row
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }else if(dongguen_pos === 4){
            let temp_dist = dongguen_dist > store_dist ? dongguen_dist-store_dist : store_pos-dongguen_dist
            dist.push(Math.min(temp_dist, all_distance-temp_dist))
        }
    }
    // console.log(dist)
}

console.log(dist.reduce((acc, cur) => acc + cur))