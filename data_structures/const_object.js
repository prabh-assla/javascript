const x = 3;

// x = 3; --- wrong



const y = "lime";

// y = "right"; --- wrong

console.log(y);

y[1] = 'p'; // alright!

console.log(y);



const obj = {a: [1, 2], b: ["air", "water"]};

obj.a = ["trust", "the", "process"]; // alright

console.log(obj);

// obj = {a: [7, 9]}; --- wrong