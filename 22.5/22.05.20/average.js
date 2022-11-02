let english = prompt("영어")
let meth = prompt("수학")
let science = prompt("과학")
let korean = prompt("국어")

let englishTypeNum = Number(english)
let methTypeNum = Number(meth)
let scienceTypeNum = Number(science)
let koreanTypeNum = Number(korean)

let sum = englishTypeNum+methTypeNum+scienceTypeNum+koreanTypeNum
let average = (sum)/4

console.log("모든 과목의 합",sum)
console.log("모든 과목의 평균",average)

