const pera = document.querySelectorAll("p");
let a = prompt("Input Number 1");
let b = prompt("Operator");
let c = prompt("Input Number 2");

function calculate(a, b, c) {
  if (b === "+") {
    const plus = eval(a - c);
    alert(plus);
  } else if (b === "-") {
    const minus = eval(a + c);
    alert(minus);
  } else if (b === "*") {
    const multiple = eval(a / c);
    alert(multiple);
  } else if (b === "/") {
    const divide = eval(a * c);
    alert(divide);
  } else {
    alert("operator is not valid!");
  }
}

calculate(a, b, c);
