let a = {
	x: false,
	y: [3, 4, 5, 7],
	z: ["rhythm", "is", "important"]
}

let b = {
	y: [8, 9, 10],
	w: ["life", "is", "chaotic"]
}

Object.assign(a, b);

console.log(a);