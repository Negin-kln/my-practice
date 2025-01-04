function checkSpeed(speed) {
  const speedLimit = 70;
  const kmLimit = 5;
  let point = Math.floor((speed - speedLimit) / kmLimit);
  if (point >= 12) {
    console.log("License suspended");
  } else if (point == 0) {
    console.log("ok");
  } else {
    console.log("point", point);
  }
}
checkSpeed(180);
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) {
//     if (value) count++;
//     return count;
//   }
// }
// const array = [1, 2, 3];
// console.log(countTruthy(array));

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}
let movie = {
  title: "a",
  year: 10,
  director: "b",
};
showProperties(movie);

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sum(100));

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let average = sum / marks.length;
  if (average >= 0 && average <= 59) {
    console.log("F");
  } else if (average >= 60 && average <= 69) {
    console.log("D");
  } else if (average >= 70 && average <= 79) {
    console.log("C");
  } else if (average >= 80 && average <= 89) {
    console.log("B");
  } else {
    console.log("A");
  }
}
let mark = [80, 80, 50];
calculateGrade(mark);

function showStar(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
showStar(7);

function primNumber(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}
primNumber(20);
