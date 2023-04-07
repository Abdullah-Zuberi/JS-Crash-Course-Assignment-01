//JS Crash Course Assignment 01

// //QUESTION 01

// // Prompt for first number
// const number1 = prompt("Enter the first number:");

// // Prompt for second number
// const number2 = prompt("Enter the second number:");

// // Convert input to numbers
// const num1 = Number(number1);
// const num2 = Number(number2);

// // Check if both inputs are valid numbers
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Invalid input. Please enter valid numbers.");
// } else {
//   // Compare the two numbers and display the larger one
//   if (num1 > num2) {
//     console.log(`The larger number is: ${num1}`);
//   } else if (num1 < num2) {
//     console.log(`The larger number is: ${num2}`);
//   } else {
//     console.log("Both numbers are equal.");
//   }
// }



 //QUESTION 02

//  // Input number
// var number = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (number > 0) {
//   alert("The sign is +");
// } else if (number < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is 0");
// }


// //QUESTION 03

// // Accept five numbers from the user
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));
// let num4 = Number(prompt("Enter the fourth number:"));
// let num5 = Number(prompt("Enter the fifth number:"));

// // Find the largest number among the entered numbers
// let largestNumber = num1; // Assume the first number is the largest

// // Check if the second number is larger
// if (num2 > largestNumber) {
//   largestNumber = num2;
// }

// // Check if the third number is larger
// if (num3 > largestNumber) {
//   largestNumber = num3;
// }

// // Check if the fourth number is larger
// if (num4 > largestNumber) {
//   largestNumber = num4;
// }

// // Check if the fifth number is larger
// if (num5 > largestNumber) {
//   largestNumber = num5;
// }

// // Display the largest number in the console
// console.log("The largest number is: " + largestNumber);


//QUESTION 04


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
  

// QUESTION 05

// // Input data - array of student objects
// var students = [
//     { name: 'John', marks: [78, 89, 92, 88] },
//     { name: 'Alice', marks: [90, 82, 78, 95] },
//     { name: 'Bob', marks: [68, 79, 85, 72] },
//     // Add more student objects here with their names and marks
//   ];
  
//   // Function to calculate average marks
//   function calculateAverage(marks) {
//     var total = 0;
//     for (var i = 0; i < marks.length; i++) {
//       total += marks[i];
//     }
//     return total / marks.length;
//   }
  
//   // Function to determine corresponding grade
//   function determineGrade(average) {
//     if (average >= 90) {
//       return 'A+';
//     } else if (average >= 80) {
//       return 'A';
//     } else if (average >= 70) {
//       return 'B';
//     } else if (average >= 60) {
//       return 'C';
//     } else {
//       return 'F';
//     }
//   }
  
//   // Loop through each student
//   for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     var average = calculateAverage(student.marks);
//     var grade = determineGrade(average);
    
//     // Output student name, marks, average, and grade
//     console.log('Name: ' + student.name);
//     console.log('Marks: ' + student.marks.join(', '));
//     console.log('Average: ' + average.toFixed(2));
//     console.log('Grade: ' + grade);
//     console.log('--------------------------');
//   }
  


//QUESTION 06


// for (let i = 1; i <= 100; i++) {
//     let output = "";
//     if (i % 3 === 0) {
//       output += "Fizz";
//     }
//     if (i % 5 === 0) {
//       output += "Buzz";
//     }
//     if (output === "") {
//       output = i;
//     }
//     console.log(output);
//   }
  


//QUESTION 07

// // Define the number of rows for the pattern
// const numRows = 5;

// // Outer loop for rows
// for (let i = 1; i <= numRows; i++) {
//   let row = '';

//   // Inner loop for columns
//   for (let j = 1; j <= i; j++) {
//     row += '* ';
//   }

//   // Print the row
//   console.log(row);
// }



