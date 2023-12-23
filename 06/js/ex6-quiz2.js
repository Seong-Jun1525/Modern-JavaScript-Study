const btn = document.querySelector(".btn")
const bar = document.querySelector("nav")

btn.addEventListener("click", (e) => {
    bar.classList.toggle("active")
})