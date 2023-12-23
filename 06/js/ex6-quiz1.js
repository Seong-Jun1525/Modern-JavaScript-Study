const img = document.querySelector("img")

const pics = ["pic1.jpg", "pic2.jpg"]

img.addEventListener("mouseover", (e) => {
    img.src = `./img/${pics[1]}`
})
img.addEventListener("mouseout", (e) => {
    img.src = `./img/${pics[0]}`
})