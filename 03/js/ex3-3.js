let n = parseInt(prompt("1보다 큰 수를 입력하세요"))
let i = 0
let j = 0
if(n !== null && n > 1) {
    while(i <= n) {
        if(i % 2 === 0) {
            j += i
            document.write(`${i} --- ${j}\n\n`)
        }
        i++
    }
} else {
    alert("잘못입력")
}