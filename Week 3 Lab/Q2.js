function componentMarksToGrade(myMarks) {

  let totalInternal = myMarks.pracMark + myMarks.quizMark + myMarks.worksheetMark + myMarks.ass1Mark + myMarks.ass2Mark;
  let internalPcnt = (totalInternal/60)*100;
  let examPcnt = (myMarks.examMark/40)*100;
  let finalPcnt = totalInternal + myMarks.examMark;
  let mygrade = null;

  if (internalPcnt < 45 || examPcnt < 45) {
    mygrade = "N";
    if (finalPcnt > 45) {
      finalPcnt = 45;
    }
  }
  else if (finalPcnt < 50) {
    mygrade = "N";
  }
  else if (finalPcnt < 60){
    mygrade = "P"
  }
  else if (finalPcnt < 70) {
    mygrade = "C"
  }
  else if (finalPcnt  < 80) {
    mygrade = "D"
  }
  else {
    mygrade = "HD"
  }

  return {
    grade:mygrade,
    totalMark: finalPcnt
  }
}

let studentMarks = {
	pracMark: 6.5,
	quizMark: 8.5,
	worksheetMark: 4,
	ass1Mark: 9.25,
	ass2Mark: 24.15,
	examMark: 32.5
};

console.log("Final Result : " + componentMarksToGrade(studentMarks).totalMark + " (" + componentMarksToGrade(studentMarks).grade + ")");
