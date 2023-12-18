let userName;
let classRoom = 201;

userName = prompt("이름을 입력하세요", userName)

console.log(userName + "님, " + classRoom + "호 강의실로 입장하세요")
console.log(`${userName}님 ${classRoom}호 강의실로 입장하세요`)

let gitBook = {
    title: "asd",
    pubDate: Date(),
    page: 252,
    finished: true
}

console.log(gitBook.title)
console.log(gitBook.pubDate)
console.log(gitBook.page)
console.log(gitBook.finished)

// Symbol(): 유일성을 보장함. 객체 프로퍼티의 key로 사용할 수 있음 

let id = Symbol()
const member = {
    name: "Kim",
    [id]: 123
}

console.log(member)
console.log(member[id])

let grade = Symbol("grade")
member[grade] = "Gold"

console.log(member)