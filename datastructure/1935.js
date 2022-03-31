const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = Number(input.shift())
let sentence = input.shift().trim().split('')
let info_dict = {}
let temp = 0
input.map((el) => {
    info_dict[String.fromCharCode(temp + 65)]= Number(el.trim())
    temp++;
})
// console.log(info_dict)

const stack = [];
while(sentence.length !== 0){
    let word = sentence.shift()
    if(word in info_dict){
        stack.push(info_dict[word])
    }else{
        let one = Number(stack.pop())
        let two = Number(stack.pop())
        if(word === '+'){
            stack.push(one + two)
        }else if(word === '-'){
            stack.push(two - one)
        }else if(word === '*'){
            stack.push(one * two)
        }else if(word === '/'){
            stack.push((two / one).toFixed(2))
        }
    }
    // console.log(stack)
}


let answer = (stack[0]).toFixed(2);
console.log(answer)

