function getGrade(sub1, sub2, sub3) {
  let score = (sub1 + sub2 + sub3) / 3

  switch(true) {
    case (score >= 90):
      return 'A';
    case (score >= 80):
      return 'B';
    case (score >= 70):
      return 'C';
    case (score >= 60):
      return 'D';
    default:
    return 'F'
  }
}







console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"