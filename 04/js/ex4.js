// 익명함수
// let sum = function(a,b) {
//     return a+b
// }
// console.log(`함수 실행 결과 : ${sum(10, 20)}`)

// // 즉시 실행 함수
// (function(a,b){
//     let sum = a+b
//     console.log(sum) 
// }) (10, 20)

// // 화살표 함수
// let hi = function() {
//     console.log('안녕')
// }
// hi()
// // 위와 같은 함수를 화살표 함수로 변형
// let bye = () => console.log('잘가')
// bye()


// 콜백 함수
// function showData(name, age) {
//     alert(`${name}님의 나이는 ${age}입니다.`)
// }
// function getData(callback) {
//     let userName = prompt("이름을 입력하세요")
//     let userAge = parseInt(prompt("나이를 입력하세요"))

//     callback(userName, userAge)
// }
// getData(showData)

// 변수에 함수 할당
// let sum = (a, b) => a + b
// sum(2, 10)

// function add(a, b) {
//     return a + b
// }
// let sum2 = add
// console.log(sum2(2, 10))

// // 함수를 다른 함수로 전달
// function hello() {
//     return "안녕하세요"
// }
// function bye() {
//     return "잘가세요"
// }
// function userCheck(name, fn) {
//     console.log(`${name}님`, fn())
// }
// userCheck("Jun", hello)
// userCheck("Kim", bye)

// // 함수에서 다른 함수로 반환
// let init = () => {
//     return function(a, b) {
//         return a - b > 0 ? a - b : b - a
//     }
// }
// console.log(`${init()(10, 20)}`)

// 전개구문: '...'기호를 사용
// 나머지 매개변수
// function addNum(a, b) {
//     return a + b
// }

// addNum(10, 20)          // 30
// addNum(10, 20, 30, 40)  // 30

// function addNum(...numbers) {
//     let sum = 0

//     for(let number of numbers) {
//         sum += number
//     }

//     return sum
// }

// console.log(addNum(10, 20))          // 30
// console.log(addNum(10, 20, 30, 40)) // 100

// setInterval()와 clearInterval()함수
// let counter = 0
// let timer = setInterval(() => {
//     document.write("안녕")
//     counter++
//     if (counter == 5) {
//         clearInterval(timer)
//         console.log("clearInterval()")
//     }
// }, 1000)

// 특정 시간 이후 실행 setTimeout()
setTimeout(() => {
    document.write("안녕")
}, 1000)