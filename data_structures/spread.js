let a = [1, 4, 5];

let b = ["three", a, "four"];

console.log(b);

b = ["three", ...a, "four"];

console.log(b);