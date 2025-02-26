var a = 5; // var is old version.
let b = 6; // let use good practice.
// console.log(a + b);
// console.log(typeof a, typeof b);

/* const c = 10;
 c = 11;
 console.log(c) */
// show error because "c" is const!

{
  let b = 66;
  // console.log(b)
}
// console.log(b)
// let is block scope.

const obj = {
  name: "raisa",
  age: 16,
}; // this is object!
// console.log(o);

// if else
const age = 16;
if (age < 18) {
  //   console.log("age is gater than 18");
} else {
  //   console.log("age is less than 18");
}

// ternary operator!
// age < 18 ? console.log("age is gater than 18") : console.log("age is less than 18");

// for loop!
for (let i = 0; i < 100; i++) {
  // console.log(i)
}

// for in loop!
for (const key in obj) {
  const elm = obj[key];
  // console.log(elm)
}

// for of loop!
for (const elm of obj.name) {
  console.log(elm);
}

// while loop!
let i = 0;
while (i < 6) {
  // console.log(i)
  i++;
}

// normal function!
function func(name) {
  // console.log("Hii,", name)
}
func("raisa");

function sum(a, b) {
  return a + b;
}
const result9 = sum(5, 2);
// console.log(result1);

// arrow function!
const func1 = (name) => {
  return name;
};
const result1 = func1("abdurrahman")
const result2 = func1("raisa")
console.log(`i'm ${result1} and my girlfriend is ${result2}`)


