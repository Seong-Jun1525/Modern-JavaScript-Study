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