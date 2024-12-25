console.log("hello world!");
let name = undefined;
let name1 = "";
let person = { fName: "negin", age: 25 };
person.fName = "nastaran";
person["age"] = 26;
console.log(person);
let selectColor = ["red", "blue"];
selectColor[2] = 5;
console.log(selectColor.length);
let option = 20;
let type = option > 100 ? "gold" : "silver";
console.log(type);
let readPermission = 4;
let writePermission = 2;
let executionPermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
myPermission = myPermission & readPermission ? "reader" : "notreader";
console.log(myPermission);
let a = "red";
let b = "blue";
let tmp;
tmp = a;
a = b;
b = tmp;
console.log("a = " + a);
console.log("b = " + b);
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good night");
}
let role;
if (role == "guste") {
  console.log("guste user");
} else if (role == "moderator") {
  console.log("moderator user");
} else {
  console.log("unknow user");
}
switch (role) {
  case "guste":
    console.log("guste user");
    break;
  case "modarator":
    console.log("moderator user");
    break;
  default:
    console.log("unknow user");
}
for (let i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    console.log("hello world", i);
  }
}
for (let i = 6; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log("hello world", i);
  }
}
let i = 0;
while (i <= 6) {
  if (i % 2 !== 0) {
    console.log("hello world", i);
  }
  i++;
}
i = 9;
do {
  if (i % 2 !== 0) console.log("hello world", i);
} while (i <= 6);

for (let key in person) {
  console.log(key, person[key]);
}
let color = ["red", "blue", "green"];
for (let col in color) {
  console.log(col, color[col]);
}
for (col of color) {
  console.log(col);
}
i = 0;
while (i <= 10) {
  if (i == 5) break;
  console.log(i);
  i++;
}
i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
function cMax(num1, num2) {
  let num3;
  if (num1 > num2) {
    num3 = num1;
  } else {
    num3 = num2;
  }
  console.log(num3);
}
cMax(20, 15);
