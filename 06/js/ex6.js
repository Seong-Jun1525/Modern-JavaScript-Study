const open = document.querySelector('#open')
const modalBox = document.querySelector('#modal-box')
const close = document.querySelector("#close")

open.addEventListener("click", () => {
    modalBox.classList.toggle("active")
})
close.addEventListener("click", () => {
    modalBox.classList.remove("active")
})

const elements = document.querySelectorAll("*")

for(let element of elements) {
    element.addEventListener("click", e => (
        console.log(
            `e.target: ${e.target.tagName}, e.currentTarget: ${e.currentTarget.tagName}`
        )
    ), true)
}