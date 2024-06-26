/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  return grades.map((grade) => {
    if (grade >= 38 && grade % 5 >= 3) return 5 - (grade % 5) + grade;
    return grade;
  });
}
