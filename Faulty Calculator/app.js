let random = Math.random();
let a = prompt("Enter your fast number");
let b = prompt("Enter your operator");
let c = prompt("Enter your second number");

const obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
} else {
  b = obj[b];
}

