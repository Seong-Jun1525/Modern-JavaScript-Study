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