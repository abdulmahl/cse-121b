

// const steps = ["one", "two", "three"]

// const stepsHtml = steps.map(function (step) {
//     return `<li>${steps}</li>`
// })
// document.getElementById("myList").innerHTML = stepsHtml.join();

console.log(convertGradeToPoints());

const grades = ["A", "B", "A"]
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints)
const pointsTotal = gpaPoints.reduce( function (total, item) {
    return total + item;
})



const words = ["Watermelon", "peach", "apple", "tomato", "grape"]

const shortWords = words.filter(function (word) {
    word.length < 6;
})