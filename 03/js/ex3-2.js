const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let arrs2 = []
let j = 0
for(let i = 0; i < arrs.length; i++) {
    if(arrs[i] > 10) {
        arrs2[j] = arrs[i]
        j++
    }
}

for(let i = 0; i < arrs2.length; i++) {
    document.write(arrs2[i] + " ")
}