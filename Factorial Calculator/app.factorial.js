function factorial1(num) {
  let arr = Array.from(Array(num + 1).keys());
  let result = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return result;
}
console.log(factorial1(6));

function factorial2(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial2(6));
