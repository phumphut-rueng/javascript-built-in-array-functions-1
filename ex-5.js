const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const totalScore = students.reduce((acc,current) => acc +current.score,0) 
  const average = totalScore/students.length
  return average
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));

