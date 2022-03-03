// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
// let input = fs.readFileSync(filePath).toString()

// input = input.toUpperCase();
// let info = {}
// for(let i=0;i<input.length;i++){
//     if(!(input[i] in info)){
//         info[input[i]] = 1;
//     }
//     else{
//         info[input[i]] += 1;
//     }
// }

// let max = Math.max(...Object.values(info))
// let answer = []
// let counter = 0
// for(let alphabet in info){
//     if(Number(info[alphabet]) === max){
//         answer.push(alphabet)
//         counter += 1
//     }
//     if (counter > 1){
//         console.log('?')
//         return;
//     }
// }

// console.log(...answer)



//입력 문자 대문자로 받아옴
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().toUpperCase();
// 배열을 순회하면서 알파벳인 경우에만 추출
let arr = input.split('').map(v => {
    let tmp = v.charCodeAt(0);
    if(tmp >= 65 && tmp <= 91) return String.fromCharCode(tmp);
});

// console.log(arr)

//중복값 제거
let set_arr = new Set(arr);
arr = [...set_arr];

// console.log(arr)
//출력해줄 알파벳 담을 변수
let max_count_alphabet = '';
let max_alphabet_count = arr.reduce((acc, curr) => {
    //중복 제거하기 전 상태의 입력 문자열을 중복제거한 배열의 알파벳마다 split 하여 비교
    let temp_arr = input.split(curr).map(value => value + '');
    
    console.log(acc, curr)

    if(temp_arr.length > acc){
        acc = temp_arr.length;
        max_count_alphabet = curr;
    } else if(temp_arr.length == acc) {
        max_count_alphabet = '?';
    }
    
    return acc;
}, -1);

console.log(max_count_alphabet);
