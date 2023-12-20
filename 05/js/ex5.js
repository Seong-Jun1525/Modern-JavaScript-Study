const bttn = document.querySelector("button")
const box = document.querySelector(".box")
bttn.onclick = function() {
    box.classList.toggle("dark")
    document.body.classList.toggle("dark")
}