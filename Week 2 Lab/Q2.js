let pracMarkTotal = 6; // 6/8 marks
let worksheetTotal = 3.5; // 3.5/4 marks
let quizMarkTotal = 8.75; // 8.75/12 marks
let ass1MarkTotal = 9.25; // 9.25/10 marks
let ass2MarkTotal = 17.15; // 17.15/26 marks
let examMarkTotal = 16.5; // 16.5/40 marks
let inSemMarkTotal = pracMarkTotal + worksheetTotal + ass1MarkTotal+ ass2MarkTotal;

let totalFinalPcnt =  examMarkTotal + inSemMarkTotal;
let grade = null;

let inSemMarkPcnt = (inSemMarkTotal/60)*100;
let examMarkPcnt = (examMarkTotal/40)*100;

if (inSemMarkPcnt < 45 || examMarkPcnt < 45){
    grade = "N";
    if (totalFinalPcnt > 45){
      totalFinalPcnt = 45
    }
}
else if (totalFinalPcnt < 50){
    grade = "N"
}
else if (totalFinalPcnt < 60){
    grade = "P";
}
else if (totalFinalPcnt < 70) {
    grade = "C";
}
else if (totalFinalPcnt < 80) {
    grade = "D";
}
else {
    grade = "HD";
}

console.log("Your final mark is " + totalFinalPcnt + ". Your grade is " + grade);
