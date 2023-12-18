// 새로고침 할 때 마다 배경 색상이 변함
function random(number) {
    return Math.floor(Math.random() * number); // floor 인수보다 작거나 같은 수 중에서 가장 큰 수를 반환.(소수점 자리 수 버림)
}

function bgChange() {
    const randomColor = 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')'
    document.body.style.backgroundColor = randomColor;
}
bgChange();