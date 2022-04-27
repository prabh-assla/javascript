let object = [
	{
		events : ["eating", "dining", "playing", "digesting", "caring"],
		frequency : [3, 1, 0, 6, Infinity]
	},
	{
		keywords : ["e", "d", "p", "d", "c"],
		attachment : [true, false, false, true, false]
	}
]

let x = JSON.stringify(object);

console.log(x);

console.log(JSON.parse(x));

console.log(JSON.parse(x)[1].attachment);