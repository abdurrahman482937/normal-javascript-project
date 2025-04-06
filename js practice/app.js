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
const result1 = func1("abdurrahman");
const result2 = func1("raisa");
console.log(`i'm ${result1} and my girlfriend is ${result2}`);

// array!
let arr = [1, 2, 3, 4, 5];
// console.log(arr.length)
// console.log(arr.toString())
// console.log(arr.indexOf(4))
// console.log(arr)
// console.log(arr.unshift())
// console.log(arr.reverse().concat(arr))

// for of loop with array!
for (const element of arr) {
  // console.log(element)
}

// map!
const arrMap = arr.map((e) => {
  return e ** 2;
});
// console.log(arrMap);

// filter!
const filterArr = arrMap.filter((e) => e > 10);
// console.log(filterArr);

// just try! filter
/****
let people = [
  { name: "raisa", age: 16 },
  { name: "abdurrahman", age: 18 },
  { name: "soliman", age: 19 },
  { name: "shoaib", age: 22 },
];

const myfilter = people.filter((e) => e.age >= 18);
console.log(myfilter);

let word = ["apple", "banana", "mango", "orange"];
console.log(word.filter((e) => e.startsWith('a' || 'b' || 'c')))
****/

// 5 task with filter!
let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let uniqueNumbers = numbers.filter((e, i, a) => {
  return a.indexOf(e) === a.lastIndexOf(e);
});
// let uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers);

let emails = [
  "john@gmail.com",
  "hello@",
  "admin@server",
  "user@yahoo.com",
  "noemail.com",
];
let validEmails = emails.filter((e) => e === "@");
console.log(validEmails);

// array reduce!
const reduceFunc = (a, b) => {
  return a + b;
};
console.log(arr.reduce(reduceFunc));

// fetch api with async && await!
async function fetchFunc() {
  let a = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await a.json();
  console.log(data);
}
fetchFunc();

// system hacking... 😁
async function hacking() {
  let a = setTimeout(() => {
    console.log("Initializing Hacking", dot());
  }, 1000);

  let b = setTimeout(() => {
    console.log("Reading Your Files...");
  }, 2000);

  let c = setTimeout(() => {
    console.log("Password File Detected...!");
  }, 3000);

  let d = setTimeout(() => {
    console.log("Sending All Password and Personal file to Server...");
  }, 3000);

  let e = setTimeout(() => {
    console.log("Cleaning up...");
  }, 4000);
}
hacking();


