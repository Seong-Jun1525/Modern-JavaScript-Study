// // 04 마무리 문제1
function check(num) {
    if(num > 0) alert(`${num} 양수`)
    else if(num < 0) alert(`${num} 음수`)
    else alert(`${num} 0`)
}
let num = parseInt(prompt("숫자를 입력하세요"))
// console.log(typeof(num))
if(num > 0 || num < 0 || num === 0) {
    check(num)
}

// 04 마무리 문제2
// function bigNum(a,b) {
//     return a > b ? a : b
// }

// let num1 = parseInt(prompt('숫자를 입력하세요'))
// let num2 = parseInt(prompt('숫자를 입력하세요'))
// let bn = bigNum(num1, num2)
// let count = 0
// for (let i = 1; i <= bn; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//         count = i
//     }
// }
// console.log(`${num1}과 ${num2}의 최대공약수 : ${count}이다`)