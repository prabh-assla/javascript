let object = [
	{p : "life", q : "of pie"},
	{a : "rise", b : "and shine"},
	{w : false, x : true},
	{y : 12.34, z : 89.78},
]
let a, b, z;

[x, {a, b}, ...z] = object;

// we can't use anything other than {a, b} here... like {aa, bb}

console.log(x);
console.log({a, b});
console.log(a);
console.log(...z);