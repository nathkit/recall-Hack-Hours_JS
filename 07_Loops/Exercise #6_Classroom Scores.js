// Exercise #6: Classroom Scores
// Start coding here
let studentsScore = {
    "James": 40,
    "Ann": 80,
    "Joe": 52,
    "Ball": 67,
    "Mick": 89,
    "Ole": 10
}

//average score
const findAverage = (objScore) => {
    let totalScore = 0;
    let avgScore = 0;
    let countStudent = 1;
    for (let obj in objScore) {
        totalScore += objScore[obj];
        avgScore = totalScore / (countStudent)
        countStudent++
    }
    return avgScore;
}

console.log(findAverage(studentsScore))

const findHighScore = (objScore) => {
    let highScore;
    let studentName = "";
    for (let obj in objScore) {
        if (!highScore || highScore < objScore[obj]) {
            studentName = obj;
            highScore = objScore[obj];
        }
    }
    return `${studentName} has the highest score, which is ${highScore} points.`
}

console.log(findHighScore(studentsScore));

const findLowestScore = (objScore) => {
    let lowestScore;
    let studentName = "";
    for (let obj in objScore) {
        if (!lowestScore || lowestScore > objScore[obj]) {
            studentName = obj;
            lowestScore = objScore[obj];
        }
    }
    return `${studentName} has lowest score, which is ${lowestScore} points.`
}

console.log(findLowestScore(studentsScore))