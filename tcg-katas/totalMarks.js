var memo=["A","B","C"]
var answers=["A","B","C"]

function calculateMarks(answers,memo){
    var totalMarks=0
    for(var i in answers){
        if(answers[i]===memo[i]){
            totalMarks++
        }
    }
    return totalMarks
}
console.log(calculateMarks(answers,memo))