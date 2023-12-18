// 직접 숫자형으로 변환
// Number()
// parseInt() & parseFloat()

// 문자열로 변환
// toString(): null과 undefined 자료형을 제외한 나머지 자료형을 문자열 데이터로 변환
// String(): null과 undefined 자료형도 같이 변환 (null -> 'null', undefined -> 'undefined')

// 문자열 값 앞에 + 기호를 붙이면 문자열이 숫자로 변환
// let userInput = "20" // 문자열 "20"
// userInput = +userInput // 숫자 20

// 화씨온도 -> 섭씨온도
// let c
// let f = parseFloat(prompt("화씨온도를 입력하세요"))

// // c = Math.floor(parseFloat((f - 32) / 1.8))
// c = parseFloat((f - 32) / 1.8).toFixed(1)

// alert(`화씨온도는 ${f}이고 섭씨온도는 ${c}입니다.`)

// 인치 -> 센티미터
let inch = parseInt(prompt("인치를 입력하세요"))
let cm

// c = Math.floor(parseFloat((f - 32) / 1.8))
cm = parseFloat(inch * 2.54)

alert(`${inch}인치는 ${cm}cm입니다.`)