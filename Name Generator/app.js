let random = Math.random();
let a, b, c;

random = Math.random();
if (random < 0.33) {
  a = "crazy";
} else if (random < 0.66 && random >= 0.33) {
  a = "amazing";
} else {
  a = "fire";
}

random = Math.random();
if (random < 0.33) {
  b = "engine";
} else if (random < 0.66 && random >= 0.33) {
  b = "food";
} else {
  b = "garments";
}

random = Math.random();
if (random < 0.33) {
  c = "bros";
} else if (random < 0.66 && random >= 0.33) {
  c = "limited";
} else {
  c = "hub";
}

console.log(a + " " + b + " " + c);
