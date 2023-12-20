// const bttn1 = document.querySelector(".detail-btn")
// const detailContent = document.querySelector(".detail-content")
// bttn1.onclick = function() {
//     detailContent.classList.toggle("show")
// }

const n1 = document.querySelector("#num1")
const n2 = document.querySelector("#num2")
const bttn2 = document.querySelector("#calc")
let result = document.querySelector("#result")
bttn2.onclick = function() {
    result.innerText = getGCD(n1.value, n2.value)
}
function getGCD(n, m) {
    let max = n > m ? n : m;
    let GCD = 0;
    for (let i = 1; i <= max; i++) {
        if (n % i === 0 && m % i === 0) {
        GCD = i;   
        }
    }
    return GCD;
}