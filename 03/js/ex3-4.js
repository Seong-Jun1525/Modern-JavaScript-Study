let subject = prompt("과목 선택: 1-HTML, 2-CSS, 3- JavaScript")
if(subject !== null) {
    switch(subject) {
        case "1": 
            document.write("HTML")
            break
        case "2": 
            document.write("CSS")
            break
        case "3": 
            document.write("JavaScript")
            break
        default:
            document.write("다시")
    }
}