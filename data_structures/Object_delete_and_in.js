let object = {
	a: [1, 2, 3, 4],
	b: ["to", "be", "happy"],
	c: false,
	d: 78.99,
	e: [2.3, 4.9, 8.012, 5.34],
	f: [true, false, false, true]
}

console.log(object);

console.log(object.f[3]);

delete object.b[2]; delete object.f[3]; delete object.e;

console.log(object.g);

console.log(object);

console.log("e" in object);
console.log("f" in object);
