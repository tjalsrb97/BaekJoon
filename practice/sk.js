let n = 10
let clockwise = true
let answer = new Array(n)
for(let i=0;i<n;i++){
    answer[i] = new Array(n).fill(0)
}

let dest = 0
if(n%2===0){
    dest = parseInt((n*n)/4)
}else{
    dest = parseInt(n*n/4) + 1
}

func(answer, 1, 0, 0, 'right')
func(answer, 1, n-1, 0, 'up')
func(answer, 1, 0, n-1, 'down')
func(answer, 1, n-1, n-1, 'left')

answer.map((e) => {
    for(let i=0;i<e.length;i++){
        if(e[i] === 0) e[i] = dest
    }
})


if(clockwise === true) {

}
else{
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            [answer[i][j], answer[j][i]] = [answer[j][i], answer[i][j]]
        }
    }
}
console.log(answer)
  
function func(answer, walker, i, j, direction){
    let flag = n-1;
    let present = 1;
    while(dest !== walker){
        console.log(walker, direction, flag, present);
        answer[i][j] = walker
        walker++;
        
        if(direction === 'right'){
            j++;
            present++;
            if(present === flag){
                direction = 'down'
                flag--;
                present = 1;
            }
        }
        else if(direction === 'down'){
            i++;
            present++;
            if(present === flag){
                direction = 'left'
                flag--;
                present = 1;
            }
        }
        else if(direction === 'left'){
            j--;
            present++;
            if(present === flag){
                direction = 'up'
                flag--;
                present = 1;
            }
        }
        else if(direction === 'up'){
            i--;
            present++;
            if(present === flag){
                direction = 'right'
                flag--;
                present = 1;
            }
        }
    }
}