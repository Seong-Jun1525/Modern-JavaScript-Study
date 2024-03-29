# Modern-JavaScript-Study
# 자바스크립트 시작하기
## 웹 개발에서 자바스크립트의 역할
부분 | 설명
-- | --
클라이언트 | 사용자 눈에 보이는 부분
서버 | 사용자 눈에 보이지 않는 부분

클라이언트 -> 관련정보 요청 -> 서버<br>
서버 -> 관련정보를 찾아서 -> 클라이언트

### 프론트앤드 개발과 자바스크립트
```
쇼핑몰에서 상품을 장바구니에 추가하고 추가된 상품을 보여주고
장바구니의 모든 상품의 총 금액을 보여주는 부분은 프론트앤드 개발입니다.
이러한 개발을 쉽게 할 수 있게 도와주는 프레임워크나 라이브러리를 사용할 수 있습니다.
```

종류 | 기능
-- | --
`React` | 페이스북에서 만든 라이브러리, 사용자 인터페이스를 만들 수 있습니다.
`Vue.js` | 사용자 인터페이스를 만들어주는 프레임워크
`Angular` | 구글에서 개발한 프레임워크로 큰 규모의 웹 사이트를 개발하는데 적합합니다.

### 백앤드 개발과 자바스크립트
```
서버 쪽 개발을 말합니다.
DB 수정, 조회, 서버에서 처리한 결과를 클라이언트로 보내는 프로그램 등을 개발하는데 좋습니다.
```
프레임워크로는 `Node.js`가 있습니다.

## 스크립트
### 인라인 스크립트
HTML 태그 안에 작성하는 스크립트를 `인라인 스크립트`라고 합니다.
```html
<button onclick="alert('안녕')">alert</button>
<button onclick="confirm('Yes or No')">confirm</button>
<button onclick="var age = 1; age = prompt('나이를 입력하세요',age) console.log(age)">prompt</button>
```

### 내부 스크립트
\<body>의 닫는 태그인 \</body> 앞에 주로 작성되는 스크립트가 `내부 스크립트` 입니다.

```html
<body>
    <p>새로고침 하세요</p>
    <script>
        function random(num) {
            return Math.floor(Math.random() * num)
        }
        function bgChange() {
            const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
            document.body.style.backgroundColor = rndCol
        }
        bgChange()
    </script>
</body>
```

#### 인라인 스크립트와 내부 스크립트의 단점
- 복잡합니다.
- 한눈에 알아보기 쉽지 않습니다.
- 수정사항이 있을 경우 하나하나 다 찾으러 다녀야 합니다.

그렇기 때문에 `외부 스크립트`를 사용합니다.

### 외부스크립트
```html
<script defer src="파일경로"></script>
```
\<head> 태그안에 삽입합니다.

- defer 속성
    - 무조건 문서를 다 가져온 후 스크립트 소스를 실행하도록 지정합니다. (생략가능)

```
useStrict 모드
엄격 모드, 스트릭트 모드라고 합니다.
최신버전에 맞는 소스를 작성할 때 사용합니다.

기본적으로 느슨한 모드(sloppy mode)로 js는 동작합니다. 근데 useStrict를 사용해서 엄격한 모드로 동작하게 하면 자바스크립트 엔진을 최적화하는 데 문제가 있는 소스를 걸러냅니다.
```

# 변수와 자료형
## 입출력 방법
### 함수 사용
함수 | 설명
-- | --
alert() | 알림창을 표시하는 함수
confirm() | 확인버튼과 취소버튼이 있는 창을 표시하는 함수
prompt() | 간단한 값을 입력받는 창을 표시하는 함수

```
alert(내용)

confirm(내용)

prompt(내용)
```

### console.log() - 콘솔창에 결과 출력
js 소스코드를 작성하면서 중간중간 제대로 동작하는지 확인용도로 자주 사용합니다.

```
console.log(내용)
console.log(변수)
```

### document.write() - 웹 브라우저에 결과 출력
```js
name = 'Jun'
document.write("My name is " + name)
```
## 변수
값을 담는 바구니

### 변수의 규칙
1. 변수 이름은 숫자로 시작할 수 없고 공백을 포함하지 않는다
2. js는 영문자의 대/소문자를 구분한다.
3. 한 단어로 이루어진 변수는 소문자로, 두 단어 이상으로 이루어진 변수는 `_` 혹은 `카멜표기법`을 사용한다
4. 예약어는 변수 이름으로 사용할 수 없다
5. 무의미한 변수명은 사용하지 않는다.

```
카멜 표기법의 예) nameList, totalScore, userName, ... 등
```

### 변수 사용법
1. var 변수보다 let, const를 사용합니다.
2. 전역변수는 최소한으로 사용합니다.
3. 객체선언은 const를 사용합니다.

### 변수 선언 및 값 할당
```js
let 변수명1
const 변수명2 // 상수. 상수: 재선언x, 재할당x

변수명1 = 값
```

예약어 | 선언하지 않고 사용할 경우 | 재선언 | 재할당
--|--|--|--
var | 오류없음(호이스팅 발생) | O | O
let | 오류발생 | X | O
const | 오류발생 | X | X

```
호이스팅
변수를 사용하기 전에라도 '이런 변수가 있다' 하고 기억해 두므로 선언한 것과 같은 효과를 뜻함
```
## 자료형
구분 | 설명
-- | --
원시 유형 자료형 | 하나의 값만 저장하는 자료형.<br>`number, string, boolean, undefined, null, symbol`
객체 | 원시 유형 이외의 모든 자료형


### typeof() 무슨 자료형인지 알아내는 함수
### 숫자형 & 논리형
```js
// typeof(값 또는 함수)
typeof(10) // number
typeof('10') // string
typeof(3.14) // number
typeof(true) // boolean
```
### 문자열
#### 특수기호
특수문자를 표시하려면 백슬래시 기호를 사용해야 합니다.
이스케이프 문자 | 설명
-- | --
\ddd | 8진수
\xddd | 16진수
\\\ | 백슬래시
\\` | 작은따옴표
\\" | 큰따옴표
\b | 백스페이스
\f | 폼 피드 문자
\n | 줄 바꿈
\r | 캐리지 리턴 문자
\t | 탭

#### 템플릿 리터럴
문자열과 변수, 식을 섞어서 하나의 문자열을 만드는 표현 형식입니다.
```js
let name = 'Jun'
let classroom = 1

console.log(`${name}님, ${classroom}반으로 오세요`)
```
![템플릿 리터럴 예시](./readmeImg/템플릿%20리터럴.PNG)

### undefined & null
```
nudefined는 값이 할당되지 않았을 때 변수의 초깃값.

null은 값이 없거나 유효하지 않은 값이라는 의미
```
```js
let userName
console.log(userName) // undefined
```

### 객체
```js
let book = {
    title: '제목', // 문자열
    bookDate: '2023-11-01', // 문자열
    pages: 500, // 숫자
    finished: false, // 논리값
}

book.title // title의 값 가져오기
book["title"] // title의 값 가져오기
```

### 배열
```js
let color = ['red', 'yellow', 'black']
let empArr = []

console.log(color[2]) // 'black'
```
### Symbol
심벌의 특징은 `유일성을 보장`합니다.
```js
let id = Symbol()
const member = {
    name: 'Jun',
    [id]: 12345 // 심벌을 키로 지정할 때 []로 묶습니다
}
```
![심벌](./readmeImg/심벌.PNG)

#### Symbol에 설명 추가하기
```js
let grade = Symbol("grade")
member[grade] = "Gold"
```

## 형변환
```js
let one = '10'
let two = 5

one + two // '105'

one - two // 5
```
```
+ 연결연산자를 사용해서 문자열 + 숫자형을 하면 문자열이 되지만
뺄셈 기호 - 연산자를 하면 숫자형이 됩니다.
```

### Number() - 숫자형으로 형변환
### 문자열로 형변환
#### toString()
```js
let num = 10
num.toString() // '10'
num.toString(2) // '1010'. 2진수 문자열
```

#### String()
```js
let isFull = false
String(isFull) // 'false'
```

### Boolean()
```js
Boolean(5*4) // true
Boolean("Hi?") // true
Boolean(undefined) // false
```

## 화씨 온도를 섭씨 온도로 변환하기
```js
// 화씨온도 -> 섭씨온도
// 공식: 섭씨온도 = (화씨온도 - 32) / 1.8
let c
let f = parseFloat(prompt("화씨온도를 입력하세요"))

// c = Math.floor(parseFloat((f - 32) / 1.8))
c = parseFloat((f - 32) / 1.8).toFixed(1)

alert(`화씨온도는 ${f}이고 섭씨온도는 ${c}입니다.`)
```

# 연산자와 제어문
## 연산자
### 산술연산자
연산자 | 기능 | 사용 예
-- | -- | --
\+ | 더하기 | c = a + b
\- | 빼기 | c = a - b
\* | 곱하기 | c = a * b
/ | 나누기 | c = a / b
% | 나머지 구하기 | c = a % b
++ | 1 증가 | a++
-- | 1 감소 | a--

### 연결 연산자 +
```js
let name = 'Jun'
console.log(name + '님 안녕하세요')
```

### 할당 연산자
연산자 | 기능 | 사용 예
-- | -- | --
= | 오른쪽을 왼쪽에 할당 | y = x
+= | y = y + x | y += x
-= | y = y - x | y -= x
*= | y = y * x | y *= x
/= | y = y / x | y /= x
%= | y = y % x | y %= x

### 비교연산자
연산자 | 기능
-- | -- 
== | 값이 같으면 true
=== | 값과 데이터 유형이 같으면 true
!= | 값이 같지 않아야 true
!== | 값과 데이터 유형이 모두 같지 않아야 true
< | 왼쪽 피연산자 값이 오른쪽 보다 작아야 true
<= | 왼쪽 피연산자 값이 오른쪽 보다 작거나 같으면 true
\> | 왼쪽 피연산자 값이 오른쪽 보다 커야 true
\>= | 왼쪽 피연산자 값이 오른쪽 보다 크거나 같으면 true

### 논리연산자
연산자 | 기능
-- | --
! (Not 연산자) | 피연산자 값과 반대의 값을 가져야 true
&& (AND 연산자) | 피연산자 값이 모두 true일 경우 true
\|\| (OR 연산자) | 피연산자 값이 하나라도 true일 경우 true

## 조건문
```js
if (조건1) {
    // 조건 1이 참일 경우 실행
} else if(조건2) {
    // else if문은 조건이 여러 개일 경우 사용
    // 조건이 하나만 있을 경우 생략 가능
    // 조건 2가 참일 경우 실행
} else {
    // 어떤 조건도 맞지 않을 경우 실행
}
```
### 조건연산자
```js
// (조건) ? true일 때 실행할 명령 : false일 때 실행할 명령

let min = (num1 < num2) ? num1 : num2
```

### 짝수와 홀수 판별 프로그램
```js
let x = prompt("숫자를 입력하세요")

if(x !== null) {
    (x % 2 === 0) ? alert("짝수") : alert("홀수")
} else {
    alert("취소")
}
```

### switch 문
```js
let subject = prompt("과목 선택: 1-HTML, 2-CSS, 3- JavaScript")
if(subject !== null) {
    switch(subject) {
        case "1": 
            document.write("HTML")
            break
        case "2": 
            document.write("CSS")
            break
        case "3": 
            document.write("JavaScript")
            break
        default:
            document.write("다시")
    }
}
```

## 반복문
### for문
```js
for(초깃값; 조건; 증가식) {...}
```
### forEach문
```js
const numbers = [1, 2, 3, 4]
numbers.forEach(function(number) {
    document.write(`${number}`)
})
```
### for...in문
반복해서 객체의 값을 가져와서 처리할 수 있게 합니다.
```js
for (key in book) {
    document.write(`${key} : ${book.key}`)
}
```
### for...of문
문자열이나 배열과 같은 반복가능 자료에서 사용되는 반복문입니다.
```js
const numbers = [1, 2, 3, 4]
// numbers.forEach(function(number) {
//     document.write(`${number}`)
// })
for(number of numbers) {
    document.write(`${number}`)
}
```

### while문 do...while문
차이는 `while문`은 조건이 참일 경우 실행되고 `do...while문`은 무조건 반복문을 한번 실행 후 조건을 체크합니다.

### break와 continue
`break`는 해당 반복문의 종료조건이 되기 전에 반복문을 빠져나올 때 사용합니다.

`continue`문은 실행 중인 반복문장을 건너뛰고 반복문의 맨 앞으로 되돌아가서 다음 반복과정으로 넘어갑니다.

### 소수인지 여부 확인하는 프로그램
```js
let n = parseInt(prompt("자연수를 입력하세요"))
let i = 2
console.log(typeof(i))
if(n !== null && n > 2) {

    while(i < n) {
        if (n % i !== 0) {
            i++
            console.log("i: " + i)
            if(i === n) {
                document.write("소수")
                break
            }
            continue
        }
        else {
            document.write("소수X")
            break
        }
    }
} else if(n === 2) {
    document.write("소수")
} else if(n === 1) {
    document.write("소수도 합성수도 아님")
} else {
    alert("취소")
}
```

# 함수
`함수`는 `동작해야 할 목적대로 여러 개의 명령을 묶는 것` 입니다.

### add 함수
```js
function addNum(n1, n2) { // 함수선언. 매개변수 n1, n2
    return n1 + n2
}

let num1 = 10
let num2 = 20
let sum = addNum(num1, num2)
// 함수실행. 매개변수 num1, num2넘기기. 반환값을 sum 변수에 저장
console.log(sum)
```
![함수예시](./readmeImg/함수예시.PNG)

### 매개변수의 기본값 지정하기
```js
function addNum(a, b = 3, c = 10) {
    return a + b + c
}
console.log(addNum(5, 10, 15))
console.log(addNum(5, 10))
console.log(addNum(5))
```
![매개변수기본값설정](./readmeImg/매개변수기본값설정.PNG)

## 스코프 - 변수의 유효범위
### 지역변수 (= 지역스코프)
특정영역 안에서만 사용가능
```js
function sum(a, b) {
    let result = a + b
    return result
}
console.log(result) // error
```

### 전역변수 (= 전역스코프)
프로그램 전체에서 사용가능
```js
var hi = 'hello'

function greeting() {
    console.log(hi)
}

greeting() // hello 출력
```
```
자바스크립트에서는 예약어 없이 변수를 선언하면 해당 변수는 전역변수가 됩니다.

let이나 const를 사용한 변수도 프로그램의 맨 앞에 선언하면 프로그램 전체에서 사용할 수 있습니다. 그런데 이때는 '전역 스코프를 가진다' 하지 않고 '스크립트 스코프를 가진다'라고 합니다.
```

### 블록 스코프
```
let나 const를 사용해 만든 변수는 기본적으로 변수가 선언된 블록 안에서만 유효합니다. 이것을 '블록 스코프를 가진다'라고 하고 '블록변수'라고 합니다.
```
## 익명함수
### 변수에 할당해서 사용하는 익명함수
```js
// 익명함수
let sum = function(a,b) {
    return a+b
}
console.log(`함수 실행 결과 : ${sum(10, 20)}`)
```
![익명함수](./readmeImg/익명함수.PNG)

### 즉시 실행 함수
한 번만 실행하는 함수일 경우 함수를 정의하면서 동시에 실행시킬 수 있습니다. 이것을 `즉시 실행 함수`라고 합니다.
```js
// 즉시 실행 함수
(function(a,b){
    let sum = a+b
    console.log(sum) 
}) (10, 20)
```

### 화살표 함수 (= 애로펑션(arrow function))
- 표현식을 사용해서 함수를 정의할 경우에만 사용합니다.
- 매개변수가 없을 경우 {}를 생략할 수 있습니다.
```js
// 화살표 함수
let hi = function() {
    console.log('안녕')
}
hi()
// 위와 같은 함수를 화살표 함수로 변형
let bye = () => console.log('잘가')
bye()
```
![화살표함수](./readmeImg/화살표%20함수.PNG)

## 콜백함수
콜백함수는 다른 함수의 인수로 사용하는 함수를 가리킵니다.
```js
// 콜백 함수
function showData(name, age) {
    alert(`${name}님의 나이는 ${age}입니다.`)
}
function getData(callback) {
    let userName = prompt("이름을 입력하세요")
    let userAge = parseInt(prompt("나이를 입력하세요"))

    callback(userName, userAge)
}
getData(showData)
```
![콜백예제1](./readmeImg/콜백1.PNG)
![콜백예제2](./readmeImg/콜백2.PNG)
![콜백예제3](./readmeImg/콜백3.PNG)

## 자바스크립트 함수는 1급 시민
- 1급 시민 조건
    1. 변수에 할당할 수 있어야 합니다.
    2. 다른 함수의 인자로 사용할 수 있어야 합니다.
    3. 다른 함수에서 반환값으로 반환할 수 있어야 합니다.
### 변수에 함수 할당
```js
// 변수에 함수 할당
let sum = (a, b) => a + b
sum(2, 10)

function add(a, b) {
    return a + b
}
let sum2 = add
console.log(sum2(2, 10))
```
![변수에 함수할당](./readmeImg/변수에함수할당.PNG)

### 함수를 다른 함수에 전달
```js
// 함수를 다른 함수로 전달
function hello() {
    return "안녕하세요"
}
function bye() {
    return "잘가세요"
}
function userCheck(name, fn) {
    console.log(`${name}님`, fn())
}
userCheck("Jun", hello)
userCheck("Kim", bye)
```
![함수전달](./readmeImg/함수를%20다른함수에%20전달.PNG)

### 함수에서 다른 함수반환
```js
// 함수에서 다른 함수로 반환
let init = () => {
    return function(a, b) {
        return a - b > 0 ? a - b : b - a
    }
}
console.log(`${init()(10, 20)}`)
```
![함수반환](./readmeImg/함수에서다른함수반환.PNG)

## 전개구문
전개구문은 배열처럼 값이 다양한 자료를 한꺼번에 인수로 넘겨주거나 배열과 배열을 합할 때 배열을 하나의 덩어리로 처리해야 할 때 아주 유용합니다.
```js
// 전개구문: '...'기호를 사용
// 나머지 매개변수
function addNum(a, b) {
    return a + b
}

addNum(10, 20)          // 30
addNum(10, 20, 30, 40)  // 30

function addNum(...numbers) { // 나머지 매개변수
    let sum = 0

    for(let number of numbers) {
        sum += number
    }

    return sum
}

console.log(addNum(10, 20))          // 30
console.log(addNum(10, 20, 30, 40)) // 100
```
![전개구문](./readmeImg/전개구문.PNG)
나머지 매개변수는 매개변수 중 마지막에 작서해야 합니다.

## 타이머 함수
실행할 함수와 시간을 지정하는 함수입니다. 타이머 함수에 실행할 함수를 인수로 받기 때문에 콜백함수를 매개변수로 사용합니다.

### 일정 시간마다 반복하기 - setInterval() <br> 반복 실행 멈추기 - clearInterval()
```js
// setInterval()와 clearInterval()함수
let counter = 0
let timer = setInterval(() => {
    document.write("안녕")
    counter++
    if (counter == 5) {
        clearInterval(timer)
        console.log("clearInterval()")
    }
}, 1000)
```
![setInterval&clearInterval()](./readmeImg/setInterval()&clearInterval().PNG)
```
setInterval(콜백함수, 시간)
이런식으로 작성합니다. 콜백함수는 ()없이 함수명만 작성합니다.
이유는 콜백함수를 직접 실행하는 것이 아니라 setInterval()함수에서 인수로 사용하기 때문입니다.
```

### 특정시간 이후에 실행하기 - setTimeout()
```js
// 특정 시간 이후 실행 setTimeout()
setTimeout(() => {
    document.write("안녕")
}, 1000)
```

# DOM의 기초
문서 객체 모델(Document Object Model)은 웹 브라우저에서 웹 문서를 분석하고 인식할 때 필요한 가장 기본적인 개념입니다.

## DOM이란?
```
웹에서 자바스크립트를 사용하는 가장 큰 이유는 어떤 조건에 맞거나 사용자 동작이 있을 때 웹 문서 전체 또는 일부분이 동적으로 반응하기 때문입니다. 이렇게 하려면 웹 문서에 담겨있는 모든 요소를 따로 제어할 수 있어야 합니다. 이때 DOM이 필요합니다.

DOM이란 자바스크립트 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹 문서를 체계적으로 정리하는 방법입니다. DOM에서는 웹 문서를 하나의 객체로 정의하고 모든 요소도 각각 객체로 정의합니다.

웹 문서 객체들도 객체이므로 프로퍼티와 메서드를 가지고 있습니다.
```
### DOM트리
- html
    - head
        - meta
        - title
    - body
        - h1
        - img
        - p
## 웹 요소에 접근하는 방법
### 하나의 요소에 접근하는 함수 querySelector()
```js
document.querySelector(선택자)
```

#### CSS 선택자의 종류
선택자 | 기능 | 사용 예
-- | -- | --
타입선택자 | 특정 태그를 사용한 모든 요소 | p {...}
class 선택자 | 클래스명을 사용하는 특정 부분 | .item {...}
id 선택자 | id명을 사용하는 특정 부분 | #container {...}
하위 선택자 | A요소의 하위에 있는 모든 B요소 | form input {...}
자식 선택자 | A요소의 하위에 있는 요소 중 자식 레벨의 B요소 | ul > li {...}

객체 포함된 함수를 `메서드`라고 합니다. `querySelector()메서드를 사용하면 지정한 선택자를 사용한 요소 중에서 첫 번째 요소에 접근할 수 있습니다.`

### 모든 요소를 가져오는 함수 quertSelectorAll()
여러 개의 요소를 가져올 때 사용합니다.
```js
document.querySelectorAll(선택자)
```
```
이렇게 가져온 요소들은 모두 NodeList 형태로 저장이 됩니다.

NodeList에 저장된 요소들은 배열처럼 인덱스를 사용해서 접근할 수 있습니다.
```
```js
document.querySelectorAll(선택자)[index]
```

### 웹 요소의 내용을 가져오고 수정하기
프로퍼티 | 설명
-- | --
웹 요소.innerText | 웹 브라우저 창에 보이는 내용만 가져옵니다.
웹 요소.innerHTML | 요소안에 잇는 태그와 내용을 함께 가져와서 보여줍니다.
웹 요소.textContent | 요소의 내용을 가져오되, 웹 브라우저 창에 보이는 대로가 아니라 소스에 있는 대로 가져옵니다.

```
웹 요소의 내용을 가져올 경우에는 innerText, textContent 프로퍼티를 사용하고 웹 브라우저 창에 표시되지 않은 내용까지 모두 가져오려면 textContent 프로퍼티를 사용해야 합니다. 그리고 요소안에 있는 태그까지 함께 가져오려면 innerHTML 프로퍼티를 사용해야 합니다. 
```

## 자바스크립트로 스타일 수정하기
### CSS 속성에 접근하고 수정하기
```js
const element = document.querSelector(".element")
element.style.속성명
```
### classList 프로퍼티
classList는 요소에 적용한 클래스 스타일을 모두 모아 놓은 프로퍼티 입니다.

### 클래스 스타일 추가, 삭제
```js
const element = document.querSelector(".element")
element.classList.add(클래스명)
element.classList.remove(클래스명)
```

### 특정 클래스 스타일이 있는 요소를 찾아 주는 함수 contains()
```js
const element = document.querSelector(".element")
element.classList.contains(클래스명)
```

### 클래스 스타일에 토글하기
```js
const bttn = document.querySelector("button")
const box = document.querySelector(".box")
bttn.onclick = function() {
    box.classList.toggle("dark")
    document.body.classList.toggle("dark")
}
```
![토글1](./readmeImg/토글1.PNG)
![토글2](./readmeImg/토글2.PNG)

## DOM에서 폼 다루기
```html
<form name="order">
    <fieldset>
        <legend>주문정보</legend>
        <ul>
            <li>
                <label for="orderName">이&nbsp;&nbsp;&nbsp;름 : </label>
                <input type="text" class="input-box" id="orderName" name="orderName">
            </li>
            <li>
                <label for="tel">연락처 : </label>
                <input type="text" class="input-box" id="tel" name="tel">
            </li>
        </ul>
    </fieldset>

    <fieldset>
        <legend>상품정보</legend>
        <ul>
            <li>
                <label for="product">이&nbsp;&nbsp;&nbsp;름 : </label>
                <input type="text" class="input-box" id="product" name="product">
            </li>
            <li>
                <label for="count">갯&nbsp;&nbsp;&nbsp;수 : </label>
                <input type="text" class="input-box" id="count" name="count">
            </li>
        </ul>
    </fieldset>
</form>
```
### id나 class 속성값을 사용해서 접근하기
```js
document.querySelector("#orderName")
```

### 텍스트 필드에 입력한 값 가져오기
```js
document.querySelector("#orderName").value
```

### name속성 값을 사용해 접근하기
이 방법을 사용하려면 form요소에 name속성이 다 있어야 합니다.
```js
document.order.product.value
```

### id, class, name 속성이 전부 없다면 폼 배열을 사용하기
```js
document.forms // 모든 form을 가져온다
document.forms[0].elements // 첫 번째 form에 있는 폼 요소를 모두 가져온다
```

## 선택 목록과 항목에 접근하기
```html
<form>
    <label for="class" class="reg">학과</label>
    <select name="major" id="major">
        <option>--- 학과 선택 ---</option>
        <option value="archi">건축공학과</option>
        <option value="mechanic">기계공학과</option>
        <option value="indust">산업공학과</option>
        <option value="elec">전지전자공학과</option>
        <option value="computer">컴퓨터공학과</option>
        <option value="chemical">화학공학과</option>
    </select>
</form>
```
### 선택목록 접근하기
```js
document.querySelector("#major").options
```
![선택목록과 항목접근](./readmeImg/선택목록과%20항목접근.PNG)

```
선택메뉴에서 몇 번째 항목을 선택했는지는 selectedIndex 값을 사용해서 알 수 있습니다.

선택한 항목의 내용을 가져올 때는 innerText프로퍼티를 사용합니다.

선택목록에 함수를 연결할 때는 onclick이 아닌 onchange()를 사용합니다.
```

### 선택한 항목 표시
```js
const selectMenu = document.querySelector("#major")

function displaySelect() {
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText
    alert(`[${selectedText}]를 선택했습니다.`)
}
selectMenu.onchange = displaySelect
```
![선택한 항목 표시](./readmeImg/선택항목표시.PNG)

## 라디오 버튼과 체크박스 접근하기
```
라디오 버튼과 체크박스의 차이점

라디오 버튼: 하나만 선택 가능
체크박스: 다수 선택 가능
```

```html
<form name="testForm">
    <fieldset>
        <legend>신청과목</legend>
        <p>과목을 선택하세요</p>
        <label>
            <input type="radio" name="subject" value="speaking">
            회화
        </label>
        <label>
            <input type="radio" name="subject" value="grammer">
            작품
        </label>
        <label>
            <input type="radio" name="subject" value="writing">
            작문
        </label>
    </fieldset>
</form>
```
![라디오버튼접근1](./readmeImg/라디오버튼%20접근.PNG)
![라디오버튼접근2](./readmeImg/라디오버튼%20접근2.PNG)

```html
<fieldset>
    <legend>관심있는 과목선택</legend>
    <p>과목을 선택하세요</p>
    <label>
        <input type="checkbox" name="interesting" value="nodejs">
        Node.js
    </label>
    <label>
        <input type="checkbox" name="interesting" value="javascript">
        JavaScript
    </label>
    <label>
        <input type="checkbox" name="interesting" value="react">
        React
    </label>
</fieldset>
```
### checked 속성을 사용해 접근하기
![querySelector사용](./readmeImg/checked속성.PNG)
```js
document.querySelector("input[name='interesting']:checked")
```
![querySelector사용](./readmeImg/checked속성1.PNG)

checkbox는 여러개를 선택할 수 있기 때문에 아래처럼 해야지
제대로 나옵니다.

```js
document.querySelectorAll("input[name='interesting']:checked")
```
![querySelectorAll사용](./readmeImg/checked속성2.PNG)

# 이벤트와 이벤트 처리기
## 이벤트란?
```
웹 브라우저나 사용자가 실행하는 어떤 동작을 의미합니다.
이벤트는 웹 페이지를 읽어 오거나 링크를 클릭하는 것처럼
웹 문서 영역에서 이루어지는 동작만을 말합니다.
```
### 문서로딩이벤트
이벤트 | 발생하는 순간
-- | --
abort | 웹 문서가 완전히 로딩되기 전에 불러오기를 멈추었을 때
error | 문서가 정학히 로딩되지 않았을 때
load | 문서로딩이 끝났을 때
resize | 문서화면의 크기가 바뀌었을때
scroll | 문서화면이 스크롤되었을 때
unload | 문서를 벗어날 때

```js
window.onload = alert("안녕?")
```
![이벤트1](./readmeImg/이벤트1.PNG)

### 마우스이벤트
이벤트 | 발생하는 순간
-- | --
click | HTML요소를 클릭했을 때
dbclick | HTML요소를 더블클릭했을 때
mousedown | 요소에서 마우스 버튼을 눌렀을 때
mousemove | 요소에서 마우스 포인터를 움직였을 때
mouseover | 마우스 포인터를 요소 위로 옮길 때
mouseout | 마우스 포인터가 요소를 벗어날 때
mouseup | 요소 위에 올려놓은 마우스 버튼에서 손을 뗄 때

```js
const button = document.querySelector("button")

button.onclick = function() {
    document.body.style.backgroundColor = "red"
}
```

### 키보드 이벤트
이벤트 | 발생하는 순간
-- | --
keydown | 키를 누르는 동안
keypress | 키를 눌렀을 때
keyup | 키에서 손을 뗄 때

```js
const body = document.body
const result = docuement.querySelector("#result")

body.addEventListener("keydown", (e) => {
    result.innerText = `
        code: ${e.code},
        key: ${e.key}
    `
})
```

### 폼 이벤트
이벤트 | 발생하는 순간
-- | --
blur | 폼 요소에 포커스를 잃었을 때
change | 목록이나 체크 상태 등이 변경되었을 때
focus | 폼 요소에 포커스를 놓았을 때
reset | 폼이 리셋되었을 때
submit | [submit]버튼을 클릭했을 때

## 이벤트 처리기 (= 이벤트 헨들러)
### HTML 태그에 함수 연결하기
```html
<!-- 예시 -->
<button onclick="fn()">
```
### 웹 요소에 함수 연결하기
```js
element.onclick = fn()
```

### 이벤트 리스너로 이벤트 처리하기
```js
// 요소.addEventListener(이벤트, 함수, 캡처여부)
// 캡처여부
// true: 캡처링
// false: 버블링
// 캡처여부의 기본값은 false

// 이미 만들어 놓은 함수 연결
const button = document.querySelector("button")
function changeBackground() {
    document.body.style.backgroundColor = "yellow"
}
button.addEventListener("click", changeBackground)

// 익명함수 사용
button.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow"
})

// 화살표 함수 사용
button.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow"
})
```

### 모달박스 만들기
```js
const open = document.querySelector('#open')
const modalBox = document.querySelector('#modal-box')
const close = document.querySelector("#close")

open.addEventListener("click", () => {
    modalBox.classList.toggle("active")
})
close.addEventListener("click", () => {
    modalBox.classList.remove("active")
})
```

## event 객체
이벤트 객체에서 사용할 수 있는 메서드는 기본동작을 취소하는 `preventDefault()`뿐 입니다.

### 프로퍼티
프로퍼티 | 기능
-- | --
altKey | 이벤트가 발생했을 때 alt를 누르고 있었는지 여부를 확인 후 boolean 값을 반환
shiftKey | 이벤트가 발생했을 때 shift를 누르고 있었는지 여부를 확인 후 boolean 값을 반환
ctrlKey | 이벤트가 발생했을 때 ctrl을 누르고 있었는지 여부를 확인 후 boolean 값을 반환
charCode | keypress 이벤트가 발생했을 때 어떤 키가 눌렀는지 유니코드 값으로 반환
which | 키보드와 관련된 이벤트가 발생했을 때 키의 유니코드 값을 반환
clientX | 이벤트가 발생한 가로 위치를 반환
clientY | 이벤트가 발생한 세로 위치를 반환
pageX | 현재문서를 기준으로 이벤트가 발생한 가로 위치를 반환
pageY | 현재문서를 기준으로 이벤트가 발생한 가로 위치를 반환
screenX | 현재화면을 기준으로 이벤트가 발생한 가로 위치를 반환
screenY | 현재화면을 기준으로 이벤트가 발생한 가로 위치를 반환
target | 이벤트가 발생한 대상을 반환
timeStamp | 이벤트가 발생한 시간을 밀리초 단위로 반환
type | 발생한 이벤트 이름을 반환
button | 마우스 키 값을 반환

### 이벤트에서 키 값 알아내기
```
e.code
e.key
```

## 자바스크립트로 캐러셀 만들기
```js
const carousel = document.querySelector(".carousel")

// 이미지 배열
const pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"]

// 첫 번째 이미지를 기본으로 표시
carousel.style.backgroundImage = `url(./img/${pics[0]})`

const arrows = document.querySelectorAll(".arrow")
let i = 0 // 배열 인덱스
arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left") {
            i-- // 이전 이미지로 이동
            if(i < 0) { // 첫번째 이미지인 경우
                i = pics.length - 1 // 마지막 이미지로 이동
            }
        }
        else if(e.target.id === "right") {
            i++
            if(i >= pics.length) {
                i = 0
            }
        }
        carousel.style.backgroundImage = `url(./img/${pics[i]})`
    })
})
```
![캐러셀](./readmeImg/캐러셀1.PNG)
![캐러셀](./readmeImg/캐러셀2.PNG)

## 이벤트 전파
이벤트 전파란 해당 요소를 감싸고 있는 부모요소, 그리고 그 요소의 부모요소에서도 똑같이 이벤트가 처리되는 것 입니다.
### 이벤트 버블링
특정 요소에서 이벤트가 발생했을 때 그 이벤트가 해당 요소뿐만 아니라 그 요소의 부모요소, 부모요소의 부모요소에서도 똑같이 발생한 것으로 간주하는 것 입니다.

```html
<div class="a" onclick="console.log('div')">
    div
    <section class="b" onclick="console.log('section')">
        section
        <p class="c" onclick="console.log('p')">p</p>
    </section>
</div>
```
![버블링](./readmeImg/이벤트버블링.PNG)
```html
<div class="a">
    div
    <section class="b">
        section
        <p class="c">p</p>
    </section>
</div>
```
```js
const elements = document.querySelectorAll("*")

for(let element of elements) {
    element.addEventListener("click", e => (
        console.log(
            `e.target: ${e.target.tagName}, e.currentTarget: ${e.currentTarget.tagName}`
        )
    ))
}
```
![버블링2](./readmeImg/이벤트버블링2.PNG)

### 이벤트 캡처링
이벤트 캡처링은 웹 요소에서 이벤트가 발생하면 일단 최상위 요소에서 시작해서 이벤트가 발생한 요소까지 차례대로 이벤트가 전파되는 방식입니다.

```js
const elements = document.querySelectorAll("*")

for(let element of elements) {
    element.addEventListener("click", e => (
        console.log(
            `e.target: ${e.target.tagName}, e.currentTarget: ${e.currentTarget.tagName}`
        )
    ), true)
}
```
![캡처링](./readmeImg/이벤트캡처링.PNG)