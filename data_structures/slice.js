let a = [1, 3, 5, 7, 9, 11, 13, 15];

let b = a.slice(3, 6);

console.log(b);

b = a.slice(0, a.length-1);

console.log(b);

b = a.slice(0, a.length); // gives full array as output!

console.log(b);