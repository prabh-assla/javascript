let a = ["one", true, "life", false];

a.concat([4, 8]);

console.log(a.concat([4, 8]));

console.log(a); // not working at all! the original array still stays the exact...

a = a.concat([4, 8]); // this one works!

console.log(a);