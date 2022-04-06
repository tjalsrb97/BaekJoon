const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
// var result = ''; 
// for(var i in input){
//     console.log(i)
//     if(input[i] === '') continue;
//     var answer = [0, 0, 0, 0];
//     var splited = input[i].split('');
//     console.log(splited)
//     for(var j in splited){
//         if( splited[j] >='a' && splited[j]<='z' ){
//             answer[0]++;
//         }else if( splited[j] >='A' && splited[j] <='Z' ){
//             answer[1]++;
//         }else if(splited[j]>='0' && splited[j]<='9' ){
//             answer[2]++;
//         }else if( splited[j] === ' '){
//             answer[3]++;
//         }
//     }
//     result += answer.join(' ') + '\n';
// }
// console.log(result.trim());


let answer = ''
for(let i in input){
    if(input[i] === '') continue;
    let sentence = input[i].split('')
    let result = [0, 0, 0, 0]
    for(let index in sentence){
        // let value = sentence[index]
        if('a' <= sentence[index] && sentence[index] <= 'z'){
            result[0] += 1
        }else if('A' <= sentence[index] && sentence[index] <= 'Z'){
            result[1] += 1
        }else if('0' <= sentence[index] && sentence[index] <= '9'){
            result[2] += 1
        }else if(sentence[index] === ' '){
            result[3] += 1
        }
    }
    answer += result.join(' ') + '\n'
}
console.log(answer.trim())