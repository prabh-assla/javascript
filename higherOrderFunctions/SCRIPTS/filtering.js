let SCRIPTS = [{
	name: "Coptic",
	ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
	direction: "ltr",
	year: -200,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},{
	name: "Japenese",
	ranges: [[914, 1008], [1392, 1508], [11513, 11520]],
	direction: "ltr",
	year: -800,
	living: true,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},{
	name: "Briuty",
	ranges: [[9974, 11008], [12, 118], [11513, 11520]],
	direction: "rtl",
	year: -12000,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},{
	name: "trithy",
	ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
	direction: "rtl",
	year: 200,
	living: true,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}]

function filter(array, test){
	let passed = [];

	for(let i of array){
		if(test(i)){
			passed.push(i);
		}
	}

	return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// console.log(SCRIPTS.filter(s => s.living));
// --------------------------------------------------------------------------------> other way!
