const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const [meeting_start_time, meeting_end_time, stream_end_time] = input.shift().split(' ')
const chat_infos = input
let meeting_start_time_cvt = convertMinute(meeting_start_time)
let meeting_end_time_cvt = convertMinute(meeting_end_time)
let stream_end_time_cvt = convertMinute(stream_end_time)


// console.log(meeting_start_time_cvt, meeting_end_time_cvt, stream_end_time_cvt)
const info = {}
for(let i=0;i<chat_infos.length;i++){
    let chat_info = chat_infos[i].trim().split(' ')
    // console.log(chat_info, info)
    let chat_time = chat_info[0]
    let chat_name = chat_info[1]
    let chat_time_cvt = convertMinute(chat_time)

    if(!(chat_name in info)){
        info[chat_name] = {}
        info[chat_name]['in'] = false
        info[chat_name]['out'] = false
    }

    if(0 <= chat_time_cvt && chat_time_cvt <= meeting_start_time_cvt){
        info[chat_name]['in'] = true 
    }
    if(meeting_end_time_cvt <= chat_time_cvt && chat_time_cvt <= stream_end_time_cvt){
        info[chat_name]['out'] = true 
    }

}

let answer = 0
for(key in info){
    if(info[key]['in'] === true && info[key]['out'] === true){
        answer += 1
    }
}
console.log(answer)

function convertMinute(str){
    const [hour, minute] = str.split(':').map(Number)
    return hour*60 + minute
}