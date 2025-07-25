const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const score = students.map((student)=>student.score)
  const total = score.reduce((sum,num)=>sum+num,0)
  
  return total/students.length;
  
}

let average = getAverageStudentScore(students);

console.log(average);
 
// Output: 87.5

