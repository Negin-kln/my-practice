function isLandscape(width, height) {
  if (width > height) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isLandscape(5, 8);
const output = fizzBuzz(8);
function fizzBuzz(input) {
  if (input % 3 == 0 && input % 5 == 0) {
    console.log("fizzBuzz");
  } else if (input % 3 == 0) {
    console.log("fizz");
  } else if (input % 5 == 0) {
    console.log("Buzz");
  } else if (typeof input != "number") {
    console.log(NaN);
  } else {
    console.log(input);
  }
}
checkSpeed(75);
function checkSpeed(speed) {
  const limitSpeed = 70;
  const kmPerPoint = 5;
  if (speed < limitSpeed + kmPerPoint) {
    console.log("ok");
  } else {
    let point = Math.floor((speed - limitSpeed) / kmPerPoint);
    if (point >= 12) {
      console.log("License suspended");
    } else {
      console.log("point", point);
    }
  }
}
showNumber(6);
function showNumber(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i, "even");
    } else {
      console.log(i, "odd");
    }
  }
}
